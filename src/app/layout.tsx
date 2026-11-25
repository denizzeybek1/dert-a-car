import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

// 1. Yeni eklenen importlar
import { cookies } from "next/headers";
import LogoutButton from "@/components/LogoutButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dert-a-Car",
  description: "Yeni Nesil Araç Kiralama",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies();
  const token = cookieStore.get("auth_token")?.value;
  const isLoggedIn = !!token;

  return (
    <html
      lang="tr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* Üst Menü (Navbar) */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">

              <div className="flex-shrink-0 flex items-center">
                <Link
                  href="/"
                  className="group flex items-center gap-2 text-2xl font-extrabold tracking-tight text-gray-900 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(37,99,235,0.5)]"
                >
                  <div className="w-1.5 h-6 bg-gradient-to-b from-blue-600 to-cyan-400 rounded-full group-hover:h-8 transition-all duration-300"></div>
                  <span>
                    Dert<span className="text-blue-600">-a-</span>Car
                  </span>
                </Link>
              </div>

              <nav className="hidden md:flex space-x-8">
                <Link href="/araclar" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">Araçlar</Link>
                <Link href="/kampanyalar" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">Kampanyalar</Link>
                <Link href="/hakkimizda" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">Hakkımızda</Link>
              </nav>

              {/* 4. DİNAMİK BUTON ALANI */}
              <div className="flex items-center space-x-4">
                {isLoggedIn ? (
                  <>
                    <Link href="/hesabim" className="text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors">
                      Hesabım
                    </Link>
                    <LogoutButton />
                  </>
                ) : (
                  <>
                    <Link href="/login" className="text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors">
                      Giriş Yap
                    </Link>
                    <Link href="/register" className="text-sm font-bold bg-blue-600 text-white px-4 py-2 rounded-lg shadow-sm hover:bg-blue-700 transition-colors">
                      Kayıt Ol
                    </Link>
                  </>
                )}
              </div>

            </div>
          </div>
        </header>

        <div className="flex-1">{children}</div>

        {/* Alt Bilgi (Footer) */}
        <footer className="bg-blue-600 text-white border-t border-blue-500">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="text-center sm:text-left">
                <Link href="/" className="text-xl font-extrabold tracking-tight">
                  Dert<span className="text-blue-200">-a-</span>Car
                </Link>
                <p className="text-xs text-blue-100 mt-1">
                  Yeni Nesil Araç Kiralama • Deniz Zeybek
                </p>
              </div>

              <nav className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-blue-100">
                <Link href="/" className="hover:text-white transition-colors">
                  Anasayfa
                </Link>
                <Link href="/araclar" className="hover:text-white transition-colors">
                  Araçlar
                </Link>
                <Link href="/kampanyalar" className="hover:text-white transition-colors">
                  Kampanyalar
                </Link>
                <Link href="/hakkimizda" className="hover:text-white transition-colors">
                  Hakkımızda
                </Link>
                <Link href="/hesabim" className="hover:text-white transition-colors">
                  Hesabım
                </Link>
              </nav>
            </div>

            <div className="mt-6 pt-6 border-t border-blue-500/70 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-blue-100">
              <p>© {new Date().getFullYear()} •  Tüm hakları saklıdır.</p>
              <p>Dijital Araç Kiralama Platformu</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}