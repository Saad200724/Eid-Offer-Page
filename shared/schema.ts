import { pgTable, text, serial, integer, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const orders = pgTable("orders", {
  id: serial("id").primaryKey(),
  fullName: text("full_name").notNull(),
  phoneNumber: text("phone_number").notNull(),
  address: text("address").notNull(),
  size: text("size").notNull(),
  totalAmount: integer("total_amount").notNull(),
  productId: text("product_id").notNull(),
  status: text("status").default("pending"),
  deliveryLocation: text("delivery_location").notNull().default("dhaka"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertOrderSchema = createInsertSchema(orders).omit({ 
  id: true, 
  createdAt: true,
  status: true 
});

export type Order = typeof orders.$inferSelect;
export type InsertOrder = z.infer<typeof insertOrderSchema>;
export type CreateOrderRequest = InsertOrder;
export type OrderResponse = Order;
