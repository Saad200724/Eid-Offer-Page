import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";
import { sql } from "drizzle-orm";

export const orders = sqliteTable("orders", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  fullName: text("full_name").notNull(),
  phoneNumber: text("phone_number").notNull(),
  address: text("address").notNull(),
  size: text("size").notNull(),
  totalAmount: integer("total_amount").notNull(),
  productId: text("product_id").notNull(),
  status: text("status").default("pending"),
  deliveryLocation: text("delivery_location").notNull().default("dhaka"),
  createdAt: integer("created_at", { mode: "timestamp" }).default(sql`(strftime('%s', 'now') * 1000)`),
});

export const insertOrderSchema = createInsertSchema(orders).extend({
  status: z.string().optional(),
}).omit({ 
  id: true, 
  createdAt: true,
});

export type Order = typeof orders.$inferSelect;
export type InsertOrder = z.infer<typeof insertOrderSchema>;
export type CreateOrderRequest = InsertOrder;
export type OrderResponse = Order;
