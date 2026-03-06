import { db } from "./db";
import { desc, eq, sql } from "drizzle-orm";
import {
  orders,
  type CreateOrderRequest,
  type OrderResponse,
  type Order
} from "@shared/schema";

export interface IStorage {
  createOrder(order: CreateOrderRequest): Promise<OrderResponse>;
  getOrders(): Promise<Order[]>;
  deleteOrder(id: number): Promise<boolean>;
}

export class DatabaseStorage implements IStorage {
  async createOrder(order: CreateOrderRequest): Promise<OrderResponse> {
    const [created] = await db.insert(orders)
      .values({
        fullName: order.fullName,
        phoneNumber: order.phoneNumber,
        address: order.address,
        size: order.size,
        totalAmount: order.totalAmount,
        productId: order.productId,
        deliveryLocation: order.deliveryLocation || "dhaka",
        status: order.status || "pending",
        createdAt: new Date(),
      })
      .returning();
    
    if (!created) {
      throw new Error("Failed to create order in database");
    }
    
    console.log("Order created successfully:", created.id);
    return created;
  }

  async getOrders(): Promise<Order[]> {
    return await db.select().from(orders).orderBy(desc(orders.id));
  }

  async updateOrderStatus(id: number, status: string): Promise<Order | undefined> {
    const [updated] = await db.update(orders)
      .set({ status })
      .where(eq(orders.id, id))
      .returning();
    return updated;
  }

  async deleteOrder(id: number): Promise<boolean> {
    const result = await db.delete(orders).where(eq(orders.id, id));
    return true;
  }
}

export const storage = new DatabaseStorage();
