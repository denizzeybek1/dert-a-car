import { NextResponse } from 'next/server';

export async function POST() {
  const response = NextResponse.json({ success: true, message: 'Çıkış yapıldı' });
  
  // Çerezi silmek için süresini geçmiş bir tarih (expires) veriyoruz
  response.cookies.set({
    name: 'auth_token',
    value: '',
    httpOnly: true,
    expires: new Date(0), 
    path: '/',
  });

  return response;
}