import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Link from "next/link";
import { jwtVerify } from "jose";

const COOKIE_NAME = "auth_token";
const SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || "dertacar-gizli-sifre-123"
);

export default async function AccountPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;

  if (!token) {
    redirect("/login?callbackUrl=/hesabim");
  }

  let payload: {
    id?: number | string;
    name?: string;
    email?: string;
    role?: string;
  };

  try {
    const verified = await jwtVerify(token, SECRET);
    payload = verified.payload as typeof payload;
  } catch {
    redirect("/login?callbackUrl=/hesabim");
  }

  const displayName = payload.name || "Kullanıcı";
  const displayEmail = payload.email || "Bilgi bulunamadı";
  const displayRole = payload.role === "admin" ? "Yönetici (Admin)" : "Kullanıcı";

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4">
      <div className="max-w-3xl mx-auto space-y-6">
        {/* ÜST PROFİL KARTI */}
        <div className="bg-white border border-blue-100 rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold shrink-0">
              {displayName.charAt(0).toUpperCase()}
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full">
                Hesabım
              </span>
              <h1 className="text-2xl font-bold text-slate-900 mt-1">
                {displayName}
              </h1>
              <p className="text-sm text-slate-500">{displayEmail}</p>
            </div>
          </div>

          <span className="self-start sm:self-center text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-200 px-3 py-1.5 rounded-full">
            {displayRole}
          </span>
        </div>

        {/* HESAP DETAYLARI */}
        <div className="bg-white border border-blue-100 rounded-2xl p-6 shadow-sm space-y-4">
          <h2 className="text-lg font-semibold text-blue-950 border-b border-blue-50 pb-3">
            Profil Bilgileri
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div className="bg-slate-50 border border-slate-100 rounded-xl p-4">
              <span className="text-xs text-slate-500 block">Ad Soyad</span>
              <span className="font-semibold text-slate-900 mt-1 block">
                {displayName}
              </span>
            </div>

            <div className="bg-slate-50 border border-slate-100 rounded-xl p-4">
              <span className="text-xs text-slate-500 block">E-posta Adresi</span>
              <span className="font-semibold text-slate-900 mt-1 block">
                {displayEmail}
              </span>
            </div>
          </div>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <Link
              href="/araclar"
              className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition"
            >
              Araçları İncele
            </Link>

            {payload.role === "admin" && (
              <Link
                href="/admin"
                className="bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 text-sm font-medium px-5 py-2.5 rounded-lg transition"
              >
                Admin Paneli
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}