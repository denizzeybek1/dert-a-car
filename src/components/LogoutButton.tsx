"use client";

import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    // Çıkış API'sine istek at
    await fetch("/api/auth/logout", { method: "POST" });
    
    // İşlem bitince anasayfaya yönlendir ve sayfayı yenile
    router.push("/");
    router.refresh(); 
  };

  return (
    <button
      onClick={handleLogout}
      className="px-4 py-2 text-sm font-semibold text-red-600 bg-red-50 hover:bg-red-100 rounded-lg transition-colors"
    >
      Çıkış Yap
    </button>
  );
}