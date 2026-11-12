import { NextResponse } from 'next/server';
import { db } from '@/db'; 
import { users } from '@/db/schema';
import { eq } from 'drizzle-orm';
import bcrypt from 'bcryptjs';

export async function POST(request: Request) {
  try {
    const { name, phone, email, password } = await request.json();

    // 1. E-posta zaten kayıtlı mı kontrol et
    const [existingUser] = await db.select().from(users).where(eq(users.email, email));
    if (existingUser) {
      return NextResponse.json({ error: 'Bu e-posta adresi zaten kullanılıyor.' }, { status: 400 });
    }

    // 2. Şifreyi şifrele (hash)
    const hashedPassword = await bcrypt.hash(password, 10);

    // 3. Kullanıcıyı veritabanına ekle
    await db.insert(users).values({
      name,
      phone,
      email,
      password: hashedPassword,
    });

    return NextResponse.json({ success: true, message: 'Kayıt başarılı!' }, { status: 201 });
  } catch (error) {
    console.error("Kayıt hatası:", error);
    return NextResponse.json({ error: 'Sunucu hatası oluştu, lütfen tekrar deneyin.' }, { status: 500 });
  }
}