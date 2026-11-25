"use client";

import { useState, useEffect } from "react";

interface Car {
  id: number;
  brand: string;
  model: string;
  year: number;
  dailyPrice: number;
  isAvailable: boolean | null;
}

export default function CarsCatalogPage() {
  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(true);
  const [onlyAvailable, setOnlyAvailable] = useState(false);

  useEffect(() => {
    const loadCars = async () => {
      try {
        const res = await fetch("/api/cars", { cache: "no-store" });
        if (res.ok) {
          const data = await res.json();
          setCars(Array.isArray(data) ? data : data.cars ?? []);
        }
      } finally {
        setLoading(false);
      }
    };

    loadCars();
  }, []);

  const displayedCars = onlyAvailable
    ? cars.filter((car) => Boolean(car.isAvailable))
    : cars;

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* ÜST BAŞLIK VE FİLTRE */}
        <div className="bg-white border border-blue-100 rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
              Dert-a-Car Filosu
            </span>
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2">
              Kiralık Araçlar
            </h1>
            <p className="text-sm text-slate-500 mt-1">
              Mevcut filodaki araçları inceleyin ve günlük kiralama ücretlerini karşılaştırın.
            </p>
          </div>

          <label className="inline-flex items-center gap-2.5 text-sm font-medium text-blue-950 bg-blue-50/70 border border-blue-100 px-4 py-2.5 rounded-xl cursor-pointer select-none">
            <input
              type="checkbox"
              checked={onlyAvailable}
              onChange={(e) => setOnlyAvailable(e.target.checked)}
              className="w-4 h-4 accent-blue-600 rounded"
            />
            Sadece Müsait Araçlar
          </label>
        </div>

        {/* ARAÇ GRİDİ */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((n) => (
              <div
                key={n}
                className="bg-white border border-blue-100 rounded-2xl p-6 h-48 animate-pulse"
              />
            ))}
          </div>
        ) : displayedCars.length === 0 ? (
          <div className="bg-white border border-blue-100 rounded-2xl p-10 text-center text-slate-500">
            Gösterilecek araç bulunamadı.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedCars.map((car) => (
              <div
                key={car.id}
                className="bg-white border border-blue-100 hover:border-blue-300 rounded-2xl p-6 shadow-sm hover:shadow-md transition flex flex-col justify-between gap-5"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-full">
                      {car.year} Model
                    </span>

                    {car.isAvailable ? (
                      <span className="text-xs font-medium text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-1 rounded-full">
                        Müsait
                      </span>
                    ) : (
                      <span className="text-xs font-medium text-slate-600 bg-slate-100 border border-slate-200 px-2.5 py-1 rounded-full">
                        Kirada / Pasif
                      </span>
                    )}
                  </div>

                  <div>
                    <h2 className="text-xl font-bold text-slate-900">
                      {car.brand} {car.model}
                    </h2>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Araç Kodu: #{car.id}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-baseline justify-between">
                  <span className="text-xs font-medium text-slate-500">
                    Günlük Ücret
                  </span>
                  <span className="text-xl font-bold text-blue-600">
                    {car.dailyPrice.toLocaleString("tr-TR")} ₺
                    <span className="text-xs font-normal text-slate-400">
                      {" "}
                      / gün
                    </span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}