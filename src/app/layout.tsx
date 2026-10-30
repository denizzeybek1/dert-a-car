import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

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

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* Üst Menü (Navbar) */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-2xl font-extrabold text-blue-600 tracking-tight">
                Dert-a-Car
              </Link>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/araclar" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">Araçlar</Link>
              <Link href="/kampanyalar" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">Kampanyalar</Link>
              <Link href="/hakkimizda" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">Hakkımızda</Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Link href="/login" className="text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors">
                Giriş Yap
              </Link>
              <Link href="/register" className="text-sm font-bold bg-blue-600 text-white px-4 py-2 rounded-lg shadow-sm hover:bg-blue-700 transition-colors">
                Kayıt Ol
              </Link>
            </div>
          </div>
        </div>
      </header>

        
        {children}
        
        </body>
    </html>
  );
}
