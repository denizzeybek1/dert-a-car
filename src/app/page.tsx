import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      
      {/* Hero (Karşılama) Alanı */}
      <section className="relative bg-gray-900 h-[500px] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1744&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D')" }}
        ></div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 w-full max-w-4xl">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
            Yeni Nesil Sürüş Deneyimine Hazır Mısınız?
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 mb-10 font-medium">
            Aradığınız aracı saniyeler içinde bulun, özellikleri karşılaştırın ve yola çıkın.
          </p>

          {/* Araçlara Gözat Butonu */}
<Link
  href="/araclar"
  className="inline-flex items-center gap-2.5 bg-blue-600 hover:bg-blue-700 active:scale-[0.99] text-white font-bold px-8 py-3.5 rounded-xl shadow-lg shadow-blue-950/35 ring-1 ring-white/20 transition-all duration-200 group"
>
  <span>Araçlara Gözat</span>
  <svg
    className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.4}
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
  </svg>
</Link>
        </div>
      </section>

      {/* Öne Çıkan Araçlar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Öne Çıkan Araçlar</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Araç Kartı 1 */}
          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group">
            <div className="h-48 bg-gray-200 relative overflow-hidden">
              <img src="https://x0.at/fku7.jpg" alt="Opel Corsa" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full text-xs font-bold text-gray-900 shadow-sm">
                2026
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Opel Corsa GS</h3>
                  <p className="text-sm text-gray-500">1.2 Turbo (Grafit Gri)</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-md font-medium">Otomatik</span>
                <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-md font-medium">Hatchback</span>
                <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-md font-medium">Hybrid</span>
              </div>
              <button className="w-full py-2.5 border border-blue-600 text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors">
                Detayları İncele
              </button>
            </div>
          </div>

          {/* Araç Kartı 2 */}
          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group">
            <div className="h-48 bg-gray-200 relative overflow-hidden">
              <img src="https://x0.at/Lv5w.jpg" alt="Honda Civic" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full text-xs font-bold text-gray-900 shadow-sm">
                2014
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Honda Civic</h3>
                  <p className="text-sm text-gray-500">1.6 VTEC (Beyaz)</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-md font-medium">Otomatik</span>
                <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-md font-medium">Sedan</span>
                <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-md font-medium">Benzin/LPG</span>
              </div>
              <button className="w-full py-2.5 border border-blue-600 text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors">
                Detayları İncele
              </button>
            </div>
          </div>

          {/* Araç Kartı 3 */}
          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group">
            <div className="h-48 bg-gray-200 relative overflow-hidden">
              <img src="https://x0.at/S0mb.jpg" alt="Peugeot 3008" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full text-xs font-bold text-gray-900 shadow-sm">
                2024
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Peugeot 3008 GT</h3>
                  <p className="text-sm text-gray-500">1.2 Turbo (Sedefli Beyaz)</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-md font-medium">Otomatik</span>
                <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-md font-medium">SUV</span>
                <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-md font-medium">Hybrid</span>
              </div>
              <button className="w-full py-2.5 border border-blue-600 text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors">
                Detayları İncele
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}