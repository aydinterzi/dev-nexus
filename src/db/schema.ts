import {
  pgTable,
  uuid,
  varchar,
  text,
  jsonb,
  integer,
  timestamp,
} from "drizzle-orm/pg-core";

// Users tablosu
export const users = pgTable("users", {
  id: uuid("id").primaryKey().notNull(), // Benzersiz kullanıcı kimliği (Primary Key)
  username: varchar("username", { length: 255 }), // Kullanıcı adı
  email: varchar("email", { length: 255 }), // E-posta adresi
  profilePictureUrl: varchar("profile_picture_url", { length: 255 }), // Profil resmi URL'si
  bio: text("bio"), // Kullanıcının kısa açıklaması (opsiyonel)
  skills: jsonb("skills"), // JSONB olarak saklanan teknoloji becerileri
  experienceYears: integer("experience_years"), // Deneyim yılı
  availability: varchar("availability", { length: 50 }), // Kullanıcının uygunluk durumu
  createdAt: timestamp("created_at").defaultNow(), // Kayıt tarihi
  updatedAt: timestamp("updated_at").defaultNow(), // Güncellenme tarihi
});

// Projects tablosu
export const projects = pgTable("projects", {
  id: uuid("id").primaryKey(), // Benzersiz proje kimliği (Primary Key)
  userId: uuid("user_id").references(() => users.id), // Proje sahibinin kullanıcı kimliği (Foreign Key)
  title: varchar("title", { length: 255 }), // Proje başlığı
  description: text("description"), // Proje açıklaması
  requiredSkills: jsonb("required_skills"), // JSONB formatında gerekli beceriler
  type: varchar("type", { length: 50 }), // Proje türü (kısa vadeli, uzun vadeli, freelance, vb.)
  location: varchar("location", { length: 255 }), // Proje konumu (opsiyonel)
  createdAt: timestamp("created_at").defaultNow(), // Projenin oluşturulma tarihi
  updatedAt: timestamp("updated_at").defaultNow(), // Projenin güncellenme tarihi
});

// Applications tablosu
export const applications = pgTable("applications", {
  id: uuid("id").primaryKey(), // Benzersiz başvuru kimliği (Primary Key)
  projectId: uuid("project_id").references(() => projects.id), // Başvuru yapılan proje (Foreign Key)
  userId: uuid("user_id").references(() => users.id), // Başvuru yapan kullanıcı (Foreign Key)
  status: varchar("status", { length: 50 }).default("pending"), // Başvuru durumu (beklemede, kabul edildi, reddedildi)
  appliedAt: timestamp("applied_at").defaultNow(), // Başvuru tarihi
});

// Messages tablosu
export const messages = pgTable("messages", {
  id: uuid("id").primaryKey(), // Benzersiz mesaj kimliği (Primary Key)
  senderId: uuid("sender_id").references(() => users.id), // Mesaj gönderen kullanıcı kimliği (Foreign Key)
  receiverId: uuid("receiver_id").references(() => users.id), // Mesaj alan kullanıcı kimliği (Foreign Key)
  content: text("content"), // Mesaj içeriği
  sentAt: timestamp("sent_at").defaultNow(), // Mesajın gönderildiği tarih
});
