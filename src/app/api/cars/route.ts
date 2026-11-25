import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { jwtVerify } from "jose";
import { db } from "@/db";
import { cars } from "@/db/schema";
import { eq } from "drizzle-orm";

const SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || "dertacar-gizli-sifre-123"
);

async function isAdminRequest() {
  const cookieStore = await cookies();
  const token = cookieStore.get("auth_token")?.value;
  if (!token) return false;

  try {
    const { payload } = await jwtVerify(token, SECRET);
    return payload.role === "admin";
  } catch {
    return false;
  }
}

// ARAÇLARI LİSTELEME (GET /api/admin/cars)
export async function GET() {
  try {
    const allCars = await db.select().from(cars);
    return NextResponse.json(allCars, { status: 200 });
  } catch (error) {
    console.error("GET /api/admin/cars hatası:", error);
    return NextResponse.json(
      { error: "Araçlar listelenirken sunucu hatası oluştu." },
      { status: 500 }
    );
  }
}

// YENİ ARAÇ EKLEME (POST /api/admin/cars)
export async function POST(req: Request) {
  try {
    if (!(await isAdminRequest())) {
      return NextResponse.json({ error: "Yetkisiz işlem." }, { status: 403 });
    }

    const body = await req.json();
    const { brand, model, year, dailyPrice, isAvailable } = body;

    if (!brand || !model || !year || !dailyPrice) {
      return NextResponse.json(
        { error: "Marka, model, yıl ve günlük ücret zorunludur." },
        { status: 400 }
      );
    }

    const [createdCar] = await db
      .insert(cars)
      .values({
        brand: String(brand).trim(),
        model: String(model).trim(),
        year: Number(year),
        dailyPrice: Number(dailyPrice),
        isAvailable: isAvailable !== undefined ? Boolean(isAvailable) : true,
      })
      .returning();

    return NextResponse.json(
      { message: "Araç başarıyla eklendi.", car: createdCar },
      { status: 201 }
    );
  } catch (error) {
    console.error("POST /api/admin/cars hatası:", error);
    return NextResponse.json(
      { error: "Araç eklenirken sunucu hatası oluştu." },
      { status: 500 }
    );
  }
}

// ARAÇ SİLME (DELETE /api/admin/cars?id=...)
export async function DELETE(req: Request) {
  try {
    if (!(await isAdminRequest())) {
      return NextResponse.json({ error: "Yetkisiz işlem." }, { status: 403 });
    }

    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id || Number.isNaN(Number(id))) {
      return NextResponse.json(
        { error: "Geçerli bir araç ID gerekli." },
        { status: 400 }
      );
    }

    await db.delete(cars).where(eq(cars.id, Number(id)));

    return NextResponse.json({ message: "Araç silindi." }, { status: 200 });
  } catch (error) {
    console.error("DELETE /api/admin/cars hatası:", error);
    return NextResponse.json(
      { error: "Silme işlemi başarısız." },
      { status: 500 }
    );
  }
}