import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

// Kullanıcılar Tablosu
export const users = sqliteTable('users', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
});

// Araçlar Tablosu
export const cars = sqliteTable('cars', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  brand: text('brand').notNull(), // Örn: Renault, Fiat
  model: text('model').notNull(), // Örn: Clio, Egea
  year: integer('year').notNull(), // Örn: 2023
  pricePerDay: integer('price_per_day').notNull(), // Günlük kiralama ücreti
  isAvailable: integer('is_available', { mode: 'boolean' }).default(true), // Araç müsait mi?
});