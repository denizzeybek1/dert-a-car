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

export default function AdminDashboard() {
  const [cars, setCars] = useState<Car[]>([]);
  const [formData, setFormData] = useState({
    brand: "",
    model: "",
    year: "",
    dailyPrice: "",
    isAvailable: true,
  });

  const fetchCars = async () => {
    const res = await fetch("/api/cars", { cache: "no-store" });
    if (res.ok) {
      const data = await res.json();
      setCars(Array.isArray(data) ? data : data.cars ?? []);
    }
  };

  useEffect(() => {
    fetchCars();
  }, []);

  const handleAddCar = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/cars", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        brand: formData.brand,
        model: formData.model,
        year: Number(formData.year),
        dailyPrice: Number(formData.dailyPrice),
        isAvailable: formData.isAvailable,
      }),
    });

    if (res.ok) {
      setFormData({
        brand: "",
        model: "",
        year: "",
        dailyPrice: "",
        isAvailable: true,
      });
      await fetchCars();
    } else {
      const data = await res.json().catch(() => ({}));
      const message = data.error || "Araç eklenirken bir hata oluştu!";
      console.error(message);
      alert(message);
    }
  };

  const handleDeleteCar = async (id: number) => {
    if (!confirm("Bu aracı silmek istediğinize emin misiniz?")) return;

    const res = await fetch(`/api/cars?id=${id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      await fetchCars();
    } else {
      const data = await res.json().catch(() => ({}));
      alert(data.error || "Silme işlemi başarısız!");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* BAŞLIK KARTI */}
        <div className="bg-white border border-blue-100 rounded-xl p-6 shadow-sm flex items-center justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full">
              Admin Paneli
            </span>
            <h1 className="text-2xl font-bold text-slate-900 mt-2">
              Dert-a-Car Araç Yönetimi
            </h1>
          </div>
          <div className="text-right">
            <span className="text-xs text-slate-500 block">Toplam Araç</span>
            <span className="text-2xl font-bold text-blue-700">
              {cars.length}
            </span>
          </div>
        </div>

        {/* YENİ ARAÇ EKLEME FORMU */}
        <form
          onSubmit={handleAddCar}
          className="bg-white border border-blue-100 rounded-xl p-6 shadow-sm space-y-4"
        >
          <h2 className="text-lg font-semibold text-blue-950 border-b border-blue-50 pb-3">
            Yeni Araç Ekle
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Marka (Örn: Opel)"
              value={formData.brand}
              onChange={(e) =>
                setFormData({ ...formData, brand: e.target.value })
              }
              className="border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 p-2.5 rounded-lg text-slate-900 outline-none transition"
              required
            />
            <input
              type="text"
              placeholder="Model (Örn: Corsa)"
              value={formData.model}
              onChange={(e) =>
                setFormData({ ...formData, model: e.target.value })
              }
              className="border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 p-2.5 rounded-lg text-slate-900 outline-none transition"
              required
            />
            <input
              type="number"
              placeholder="Yıl (Örn: 2026)"
              value={formData.year}
              onChange={(e) =>
                setFormData({ ...formData, year: e.target.value })
              }
              className="border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 p-2.5 rounded-lg text-slate-900 outline-none transition"
              required
            />
            <input
              type="number"
              placeholder="Günlük Ücret (₺)"
              value={formData.dailyPrice}
              onChange={(e) =>
                setFormData({ ...formData, dailyPrice: e.target.value })
              }
              className="border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 p-2.5 rounded-lg text-slate-900 outline-none transition"
              required
            />
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-1">
            <label className="flex items-center gap-2 text-sm font-medium text-slate-700 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.isAvailable}
                onChange={(e) =>
                  setFormData({ ...formData, isAvailable: e.target.checked })
                }
                className="w-4 h-4 accent-blue-600 rounded"
              />
              Araç kiralama için müsait
            </label>

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-medium text-sm shadow-sm transition cursor-pointer"
            >
              Aracı Ekle
            </button>
          </div>
        </form>

        {/* MEVCUT ARAÇLAR LİSTESİ */}
        <div className="bg-white border border-blue-100 rounded-xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-blue-950 mb-4">
            Kayıtlı Araçlar ({cars.length})
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-blue-100 bg-blue-50/70 text-blue-950 text-sm">
                  <th className="p-3 rounded-tl-lg">ID</th>
                  <th className="p-3">Marka & Model</th>
                  <th className="p-3">Yıl</th>
                  <th className="p-3">Günlük Ücret</th>
                  <th className="p-3">Durum</th>
                  <th className="p-3 text-right rounded-tr-lg">İşlem</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                {cars.map((car) => (
                  <tr
                    key={car.id}
                    className="hover:bg-blue-50/40 transition-colors"
                  >
                    <td className="p-3 text-slate-500">#{car.id}</td>
                    <td className="p-3 font-semibold text-slate-900">
                      {car.brand} {car.model}
                    </td>
                    <td className="p-3 text-slate-700">{car.year}</td>
                    <td className="p-3 font-medium text-blue-700">
                      {car.dailyPrice} ₺
                    </td>
                    <td className="p-3">
                      {car.isAvailable ? (
                        <span className="text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-1 rounded-full text-xs font-medium">
                          Müsait
                        </span>
                      ) : (
                        <span className="text-slate-600 bg-slate-100 border border-slate-200 px-2.5 py-1 rounded-full text-xs font-medium">
                          Kirada / Pasif
                        </span>
                      )}
                    </td>
                    <td className="p-3 text-right">
                      <button
                        onClick={() => handleDeleteCar(car.id)}
                        className="bg-white hover:bg-red-600 text-red-600 hover:text-white border border-red-200 px-3 py-1 rounded-lg text-xs font-medium transition cursor-pointer"
                      >
                        Sil
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}