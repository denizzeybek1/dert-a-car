import { db } from '.';
import { users, cars } from './schema';

async function seed() {
  // 5 Adet Kullanıcı
  await db.insert(users).values([
    { name: 'Metin Dinmez', email: 'metin@example.com' },
    { name: 'Furkan Tırpan', email: 'furkan@example.com' },
    { name: 'Çağlar Gündoğ', email: 'caglar@example.com' },
    { name: 'Deniz Zeybek', email: 'deniz@example.com' },
    { name: 'Nebi Gökçen', email: 'nebi@example.com' },
  ]);
  
  console.log('Kullanıcılar eklendi.');

  // 10 Adet Araç
  await db.insert(cars).values([
    { brand: 'Renault', model: 'Clio', year: 2022, pricePerDay: 1000, isAvailable: true },
    { brand: 'Fiat', model: 'Egea', year: 2023, pricePerDay: 900, isAvailable: true },
    { brand: 'Ford', model: 'Focus', year: 2021, pricePerDay: 1200, isAvailable: false },
    { brand: 'Toyota', model: 'Corolla', year: 2023, pricePerDay: 1300, isAvailable: true },
    { brand: 'Hyundai', model: 'i20', year: 2022, pricePerDay: 950, isAvailable: true },
    { brand: 'Honda', model: 'Civic', year: 2022, pricePerDay: 1400, isAvailable: true },
    { brand: 'Volkswagen', model: 'Golf', year: 2021, pricePerDay: 1500, isAvailable: false },
    { brand: 'Peugeot', model: '3008', year: 2025, pricePerDay: 1100, isAvailable: true },
    { brand: 'Opel', model: 'Corsa', year: 2026, pricePerDay: 1250, isAvailable: true },
    { brand: 'Nissan', model: 'Qashqai', year: 2021, pricePerDay: 1600, isAvailable: true },
  ]);

  console.log('Arabalar eklendi.');
  console.log('Seeder işlemi tamamlandı!');
}

seed().catch(err => {
  console.error('Seeder hatası:', err);
});