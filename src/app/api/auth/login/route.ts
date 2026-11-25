import { NextResponse } from 'next/server';
import { db } from '@/db';
import { users } from '@/db/schema';
import { eq } from 'drizzle-orm';
import bcrypt from 'bcryptjs';
import { SignJWT } from 'jose';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    const [user] = await db.select().from(users).where(eq(users.email, email));

    if (!user) {
      return NextResponse.json(
        { error: 'Bu e-posta adresi ile kayıtlı kullanıcı bulunamadı.' },
        { status: 401 }
      );
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return NextResponse.json(
        { error: 'Girdiğiniz şifre hatalı.' },
        { status: 401 }
      );
    }

    const secretKey = new TextEncoder().encode(
      process.env.JWT_SECRET || 'dertacar-gizli-sifre-123'
    );

    const token = await new SignJWT({
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role, // Admin kontrolü için role eklendi
    })
      .setProtectedHeader({ alg: 'HS256' })
      .setExpirationTime('24h')
      .sign(secretKey);

    const response = NextResponse.json({ success: true });

    response.cookies.set({
      name: 'auth_token',
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
    });

    return response;
  } catch (error) {
    console.error('Giriş hatası:', error);
    return NextResponse.json(
      { error: 'Sistemsel bir hata oluştu, lütfen tekrar deneyin.' },
      { status: 500 }
    );
  }
}