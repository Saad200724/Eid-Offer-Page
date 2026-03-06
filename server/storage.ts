import { db } from "./db";
import {
  orders,
  type CreateOrderRequest,
  type OrderResponse,
  type Order
} from "@shared/schema";

export interface IStorage {
  createOrder(order: CreateOrderRequest): Promise<OrderResponse>;
  getOrders(): Promise<Order[]>;
}

export class DatabaseStorage implements IStorage {
  async createOrder(order: CreateOrderRequest): Promise<OrderResponse> {
    const [created] = await db.insert(orders)
      .values(order)
      .returning();
    return created;
  }

  async getOrders(): Promise<Order[]> {
    return await db.select().from(orders).orderBy(desc(orders.id));
  }
}

export const storage = new DatabaseStorage();
