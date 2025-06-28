import { users, type User, type InsertUser, type MenuItem, type InsertMenuItem, type Order, type InsertOrder } from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  getAllMenuItems(): Promise<MenuItem[]>;
  getMenuItemsByCategory(category: string): Promise<MenuItem[]>;
  createOrder(order: InsertOrder): Promise<Order>;
  getOrder(id: number): Promise<Order | undefined>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private menuItems: Map<number, MenuItem>;
  private orders: Map<number, Order>;
  private currentUserId: number;
  private currentMenuItemId: number;
  private currentOrderId: number;

  constructor() {
    this.users = new Map();
    this.menuItems = new Map();
    this.orders = new Map();
    this.currentUserId = 1;
    this.currentMenuItemId = 1;
    this.currentOrderId = 1;
    
    // Initialize with some sample menu items
    this.initializeMenuItems();
  }

  private initializeMenuItems() {
    const sampleMenuItems: MenuItem[] = [
      {
        id: 1,
        name: "Classic Margherita",
        description: "San Marzano tomatoes, fresh mozzarella, basil, extra virgin olive oil",
        price: "18.00",
        category: "pizza",
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002",
        available: true
      },
      {
        id: 2,
        name: "NYC Pepperoni",
        description: "Premium pepperoni, mozzarella, signature tomato sauce",
        price: "22.00",
        category: "pizza",
        image: "https://images.unsplash.com/photo-1628840042765-356cda07504e",
        available: true
      },
      {
        id: 3,
        name: "Garden Fresh",
        description: "Roasted vegetables, goat cheese, arugula, balsamic drizzle",
        price: "24.00",
        category: "pizza",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b",
        available: true
      }
    ];

    sampleMenuItems.forEach(item => {
      this.menuItems.set(item.id, item);
    });
    this.currentMenuItemId = 4;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getAllMenuItems(): Promise<MenuItem[]> {
    return Array.from(this.menuItems.values());
  }

  async getMenuItemsByCategory(category: string): Promise<MenuItem[]> {
    return Array.from(this.menuItems.values()).filter(
      (item) => item.category === category
    );
  }

  async createOrder(insertOrder: InsertOrder): Promise<Order> {
    const id = this.currentOrderId++;
    const order: Order = { 
      ...insertOrder, 
      id,
      createdAt: new Date().toISOString()
    };
    this.orders.set(id, order);
    return order;
  }

  async getOrder(id: number): Promise<Order | undefined> {
    return this.orders.get(id);
  }
}

export const storage = new MemStorage();
