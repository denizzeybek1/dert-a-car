"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterPage() {
  const router = useRouter();

  // Form state'leri
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  // Durum state'leri
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        setSuccess("Kayıt başarılı! Giriş sayfasına yönlendiriliyorsunuz...");
        // 2 saniye sonra login sayfasına yönlendir
        setTimeout(() => {
          router.push("/login");
        }, 2000);
      } else {
        setError(data.error || "Kayıt olurken bir hata oluştu.");
      }
    } catch (err) {
      setError("Sunucuya bağlanılamadı.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* SOL TARAF: Form Alanı */}
      <div className="flex w-full lg:w-1/2 justify-center items-center bg-white px-8 lg:px-12 py-12">
        <div className="w-full max-w-md">
          {/* Logo / Başlık */}
          <div className="mb-10 text-center lg:text-left">
            <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">Dert-a-Car</h1>
            <p className="mt-2 text-sm text-gray-500 font-medium">
              Yeni bir hesap oluşturun ve yola çıkmaya hazırlanın.
            </p>
          </div>

          {/* Hata ve Başarı Mesajları */}
          {error && <div className="mb-4 p-3 rounded-lg bg-red-50 text-red-600 text-sm font-medium border border-red-100">{error}</div>}
          {success && <div className="mb-4 p-3 rounded-lg bg-green-50 text-green-600 text-sm font-medium border border-green-100">{success}</div>}

          <form onSubmit={handleRegister} className="space-y-5">
            {/* Ad Soyad */}
            <div>
              <label className="block text-sm font-semibold text-gray-700">Ad Soyad</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-2 block w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-900 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                placeholder="Adınız ve Soyadınız"
              />
            </div>

            {/* Telefon Numarası */}
            <div>
              <label className="block text-sm font-semibold text-gray-700">Telefon Numarası</label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="mt-2 block w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-900 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                placeholder="0 (5XX) XXX XX XX"
              />
            </div>

            {/* E-posta */}
            <div>
              <label className="block text-sm font-semibold text-gray-700">E-posta Adresi</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-2 block w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-900 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                placeholder="ornek@dertacar.com"
              />
            </div>

            {/* Şifre */}
            <div>
              <label className="block text-sm font-semibold text-gray-700">Şifre</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-2 block w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-900 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                placeholder="••••••••"
              />
            </div>

            {/* Buton */}
            <button
              type="submit"
              disabled={loading}
              className="w-full flex justify-center mt-6 py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 transition-colors disabled:opacity-70"
            >
              {loading ? "Kaydediliyor..." : "Kayıt Ol"}
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-gray-600">
            Zaten hesabınız var mı?{' '}
            <Link href="/login" className="font-semibold text-blue-600 hover:text-blue-500 transition-colors">
              Giriş Yapın
            </Link>
          </p>
        </div>
      </div>

      {/* SAĞ TARAF: Otomotiv Görseli (Mobilde gizlenir) */}
      <div className="hidden lg:flex w-1/2 bg-gray-900 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=1000&auto=format&fit=crop')" }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 flex flex-col justify-end p-16 text-white h-full">
          <h2 className="text-4xl font-bold mb-4">Filomuzu Keşfetmeye Başlayın.</h2>
          <p className="text-lg text-gray-300">
            Dakikalar içinde üye olun, size en uygun aracı hemen kiralayın ve yola çıkın.
          </p>
        </div>
      </div>
    </div>
  );
}