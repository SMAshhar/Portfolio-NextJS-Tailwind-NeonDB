import { pgTable, serial, date, varchar } from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm/vercel-postgres";
import { InferSelectModel, InferInsertModel } from "drizzle-orm";
import { sql } from "@vercel/postgres";

// Every connection to dataBase on the website is made through drizzleORM. 

// // SUBSCRIBE FORM
// export const subscribeTable = pgTable("subscribed", {
//   id: serial("id").notNull().primaryKey(),
//   email: varchar("email", { length: 255 }).notNull().unique(),
//   joined_at: date("joined_at").notNull(),
// });

// // Always use small letter in string in the above.

// export type subscribe = InferModel<typeof subscribeTable>;
// export type newSubscribe = InferModel<typeof subscribeTable, "insert">;


// CONTACT-US FORM
export const contactTable = pgTable("contact", {
  id: serial("id").notNull().primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  subject: varchar("subject", { length: 255 }).notNull(),
  date: date("date").notNull(),
  description: varchar("description", { length: 1000 }).notNull(),
});

export type contact = InferSelectModel <typeof contactTable>;
export type newContact = InferInsertModel<typeof contactTable>;


// // ADMINISTRATION FORM
// export const administrationauthoritytable = pgTable(
//   "administrationauthoritytable",
//   {
//     id: serial("id").notNull().primaryKey(),
//     email: varchar("email", { length: 255 }).notNull().unique(),
//     password: varchar("password", { length: 255 }).notNull(),
//     secrettext: varchar("secrettext", { length: 255 }),
//   }
// );

// // Always use small letter in string in the above.

// export type admin = InferSelectModel <typeof administrationauthoritytable>;
// export type newAdmin = InferInsertModel<
//   typeof administrationauthoritytable
// >;

export const db = drizzle(sql);
// above line will pick all the envs it self. No need to define each of them here as was with previous package.