import { NextResponse } from 'next/server';
import { db } from '@/db'; // Drizzle config dosyanın yolu
import { users } from '@/db/schema'; // Tablolarının olduğu dosya
import { eq } from 'drizzle-orm';
import bcrypt from 'bcryptjs';
import { SignJWT } from 'jose';

export async function POST(request: Request) {
  try {
    // 1. Frontend'den gelen e-posta ve şifreyi al
    const body = await request.json();
    const { email, password } = body;

    // 2. Drizzle ORM ile SQLite veritabanından kullanıcıyı bul
    const [user] = await db.select().from(users).where(eq(users.email, email));

    // Kullanıcı yoksa hata dön
    if (!user) {
      return NextResponse.json({ error: 'Bu e-posta adresi ile kayıtlı kullanıcı bulunamadı.' }, { status: 401 });
    }

    // 3. bcrypt ile kullanıcının girdiği şifre ile veritabanındaki hashli şifreyi karşılaştır
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    
    if (!isPasswordCorrect) {
      return NextResponse.json({ error: 'Girdiğiniz şifre hatalı.' }, { status: 401 });
    }

    // 4. Şifre doğruysa JWT Token oluştur (Kullanıcı kimliği)
    const secretKey = new TextEncoder().encode(process.env.JWT_SECRET || 'dertacar-gizli-sifre-123');
    
    const token = await new SignJWT({ 
      id: user.id, 
      email: user.email, 
      name: user.name 
    })
      .setProtectedHeader({ alg: 'HS256' })
      .setExpirationTime('24h') // Token 1 gün geçerli
      .sign(secretKey);

    // 5. Başarılı yanıt oluştur ve Token'ı tarayıcıya güvenli Cookie olarak ekle
    const response = NextResponse.json({ success: true });
    
    response.cookies.set({
      name: 'auth_token',
      value: token,
      httpOnly: true, // Javascript ile okunamamasını sağlar (güvenlik için)
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
    });

    return response;

  } catch (error) {
    console.error("Giriş hatası:", error);
    return NextResponse.json({ error: 'Sistemsel bir hata oluştu, lütfen tekrar deneyin.' }, { status: 500 });
  }
}