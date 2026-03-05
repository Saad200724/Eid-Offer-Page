import { db } from "./db";
import {
  orders,
  type CreateOrderRequest,
  type OrderResponse
} from "@shared/schema";

export interface IStorage {
  createOrder(order: CreateOrderRequest): Promise<OrderResponse>;
}

export class DatabaseStorage implements IStorage {
  async createOrder(order: CreateOrderRequest): Promise<OrderResponse> {
    const [created] = await db.insert(orders)
      .values(order)
      .returning();
    return created;
  }
}

export const storage = new DatabaseStorage();
