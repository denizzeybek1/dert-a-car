import Link from "next/link";

const highlights = [
  {
    title: "Şeffaf Günlük Fiyatlandırma",
    description:
      "Gizli ek ücretler olmadan her aracın günlük kiralama bedelini ve müsaitlik durumunu net şekilde sunuyoruz.",
  },
  {
    title: "Geniş ve Bakımlı Filo",
    description:
      "Şehir içi pratik hatchback modellerden aile boyu SUV'lara kadar düzenli bakımı yapılan 10 farklı araçla hizmet veriyoruz.",
  },
  {
    title: "Hızlı ve Sade Rezervasyon",
    description:
      "Karmaşık adımlar olmadan hesabına giriş yap, filodaki araçları incele ve ihtiyacına uygun aracı saniyeler içinde seç.",
  },
];

const stats = [
  { label: "Aktif Araç Filosu", value: "10+" },
  { label: "Şeffaf Ücretlendirme", value: "%100" },
  { label: "Dijital Erişim", value: "7/24" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* HERO / TANITIM KARTI */}
        <section className="bg-white border border-blue-100 rounded-2xl p-6 sm:p-10 shadow-sm">
          <div className="max-w-3xl space-y-4">
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
              Hakkımızda
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              Araç kiralamanın derdini bitiren modern platform:{" "}
              <span className="text-blue-600">Dert-a-Car</span>
            </h1>
            <p className="text-slate-600 text-base leading-relaxed">
              Dert-a-Car, günlük şehir içi ulaşımdan uzun yolculuklara kadar her
              ihtiyaca uygun araçları hızlı, anlaşılır ve güvenilir biçimde
              listelemek için geliştirilmiş dijital araç kiralama platformudur.
              Kullanıcıların araçları zahmetsizce karşılaştırabilmesini,
              yöneticilerin ise filoyu tek panelden anlık yönetebilmesini
              hedefler.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Link
                href="/araclar"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl text-sm shadow-sm transition"
              >
                <span>Araçlara Gözat</span>
                <span aria-hidden="true">→</span>
              </Link>
              <Link
                href="/hesabim"
                className="inline-flex items-center justify-center bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 font-semibold px-6 py-3 rounded-xl text-sm transition"
              >
                Hesabım
              </Link>
            </div>
          </div>
        </section>

        {/* ÖNE ÇIKAN RAKAMLAR */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {stats.map((item) => (
            <div
              key={item.label}
              className="bg-white border border-blue-100 rounded-2xl p-6 shadow-sm text-center"
            >
              <p className="text-3xl font-bold text-blue-600">{item.value}</p>
              <p className="text-sm font-medium text-slate-600 mt-1">
                {item.label}
              </p>
            </div>
          ))}
        </section>

        {/* DEĞERLERİMİZ / ÖZELLİKLER */}
        <section className="bg-white border border-blue-100 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
          <div className="border-b border-blue-50 pb-4">
            <h2 className="text-xl font-bold text-blue-950">
              Neden Dert-a-Car?
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Hem sürücüler hem de filo yönetimi için pratik ve güvenilir bir
              deneyim sunuyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {highlights.map((feature, index) => (
              <div
                key={feature.title}
                className="bg-slate-50/80 border border-blue-100/80 rounded-xl p-5 space-y-2.5"
              >
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-blue-600 text-white text-xs font-bold">
                  0{index + 1}
                </span>
                <h3 className="text-base font-semibold text-slate-900">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ALT BİLGİ / VİZYON NOTU */}
        <section className="bg-blue-600 text-white rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="space-y-1">
            <h2 className="text-lg font-bold">Yola çıkmaya hazır mısın?</h2>
            <p className="text-sm text-blue-100">
              Müsait araçları incele, günlük ücretleri gör ve sana en uygun
              seçeneği hemen bul.
            </p>
          </div>
          <Link
            href="/araclar"
            className="shrink-0 bg-white hover:bg-blue-50 text-blue-700 font-semibold px-5 py-2.5 rounded-xl text-sm transition text-center"
          >
            Filoyu Görüntüle
          </Link>
        </section>
      </div>
    </div>
  );
}