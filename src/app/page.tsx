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

          {/* Hızlı Arama/Filtreleme Çubuğu */}
          <div className="bg-white p-2 rounded-xl shadow-lg flex flex-col md:flex-row gap-2">
            <input 
              type="text" 
              placeholder="Marka veya Model ara..." 
              className="flex-grow px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <select className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-600">
              <option value="">Vites Türü</option>
              <option value="otomatik">Otomatik</option>
              <option value="manuel">Manuel</option>
            </select>
            <button className="bg-blue-600 text-white font-bold px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Araç Bul
            </button>
          </div>
        </div>
      </section>

      {/* Öne Çıkan Araçlar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Öne Çıkan Araçlar</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Araç Kartı 1 */}
          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group">
            <div className="h-48 bg-gray-200 relative overflow-hidden">
              <img src="https://x0.at/lULB.jpg" alt="Opel Corsa" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full text-xs font-bold text-gray-900 shadow-sm">
                Yeni Kasa
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Opel Corsa GS</h3>
                  <p className="text-sm text-gray-500">1.2 Hybrid (Grafik Gri)</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-md font-medium">Otomatik</span>
                <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-md font-medium">145 HP</span>
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
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNsY4DD-MSgnmxj4UrUm_221BzIXrXRhEzbpcpZ4Hq2HISfwzMjCcftNc&s=10" alt="Hyundai i20" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Hyundai i20 Elite</h3>
                  <p className="text-sm text-gray-500">1.4 MPI (Kırmızı)</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-md font-medium">Otomatik</span>
                <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-md font-medium">Benzin</span>
                <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-md font-medium">Sunroof</span>
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
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Peugeot 3008</h3>
                  <p className="text-sm text-gray-500">1.2 GT Blackpack</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-md font-medium">Otomatik</span>
                <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-md font-medium">Hybrid</span>
                <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-md font-medium">SUV</span>
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