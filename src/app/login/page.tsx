"use client";

import Link from "next/link";

export default function LoginPage() {

  return (
    <div className="min-h-screen flex">
      {/* SOL TARAF: Form Alanı */}
      <div className="flex w-full lg:w-1/2 justify-center items-center bg-white px-8 lg:px-12">
        <div className="w-full max-w-md">
          {/* Logo / Başlık */}
          <div className="mb-10 text-center lg:text-left">
            <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">Dert-a-Car</h1>
            <p className="mt-2 text-sm text-gray-500 font-medium">
              Türkiye'nin Yeni Nesil Araç Kiralama Platformuna Hoş Geldiniz
            </p>
          </div>

          <form className="space-y-6">
            {/* E-posta */}
            <div>
              <label className="block text-sm font-semibold text-gray-700">E-posta Adresi</label>
              <input
                type="email"
                required
                className="mt-2 block w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-900 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                placeholder="ornek@dertacar.com"
              />
            </div>

            {/* Şifre */}
            <div>
              <div className="flex justify-between items-center">
                <label className="block text-sm font-semibold text-gray-700">Şifre</label>
                <Link href="/forgot-password" className="text-sm font-medium text-blue-600 hover:text-blue-500 transition-colors">
                  Şifremi unuttum
                </Link>
              </div>
              <input
                type="password"
                required
                className="mt-2 block w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-900 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                placeholder="••••••••"
              />
            </div>

            {/* Buton */}
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 transition-colors"
            >
              Giriş Yap
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-gray-600">
            Hesabınız yok mu?{' '}
            <Link href="/register" className="font-semibold text-blue-600 hover:text-blue-500 transition-colors">
              Kayıt Olun
            </Link>
          </p>
        </div>
      </div>

      {/* SAĞ TARAF: Otomotiv Görseli (Mobilde gizlenir) */}
      <div className="hidden lg:flex w-1/2 bg-gray-900 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1000&auto=format&fit=crop')" }}
        >
          {/* Karanlık Overlay */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        {/* Görsel Üzerindeki Yazı */}
        <div className="relative z-10 flex flex-col justify-end p-16 text-white h-full">
          <h2 className="text-4xl font-bold mb-4">Tüm araç ihtiyaçlarınız için tek platform.</h2>
          <p className="text-lg text-gray-300">
            Teknik özellikler ve en güncel araç kampanyaları tek bir ekranda.
          </p>
        </div>
      </div>
    </div>
  );
}