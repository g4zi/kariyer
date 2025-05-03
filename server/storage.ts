import { 
  users, type User, type InsertUser,
  appointments, type Appointment, type InsertAppointment,
  contactMessages, type ContactMessage, type InsertContactMessage,
  testResults, type TestResult, type InsertTestResult
} from "@shared/schema";

// Interface for all storage operations
export interface IStorage {
  // User methods (retained from original)
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Appointment methods
  createAppointment(appointment: InsertAppointment): Promise<Appointment>;
  getAppointments(): Promise<Appointment[]>;
  getAppointmentById(id: number): Promise<Appointment | undefined>;
  getAppointmentsByDate(date: string): Promise<Appointment[]>;
  
  // Contact message methods
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  getContactMessages(): Promise<ContactMessage[]>;
  
  // Test result methods
  createTestResult(result: InsertTestResult): Promise<TestResult>;
  getTestResultsByEmail(email: string): Promise<TestResult[]>;
}

// In-memory implementation of the storage interface
export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private appointments: Map<number, Appointment>;
  private messages: Map<number, ContactMessage>;
  private results: Map<number, TestResult>;
  private userIdCounter: number;
  private appointmentIdCounter: number;
  private messageIdCounter: number;
  private resultIdCounter: number;

  constructor() {
    this.users = new Map();
    this.appointments = new Map();
    this.messages = new Map();
    this.results = new Map();
    this.userIdCounter = 1;
    this.appointmentIdCounter = 1;
    this.messageIdCounter = 1;
    this.resultIdCounter = 1;
  }

  // User methods (retained from original)
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userIdCounter++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  // Appointment methods
  async createAppointment(appointment: InsertAppointment): Promise<Appointment> {
    const id = this.appointmentIdCounter++;
    const now = new Date();
    const newAppointment: Appointment = { 
      ...appointment, 
      id, 
      createdAt: now 
    };
    this.appointments.set(id, newAppointment);
    return newAppointment;
  }
  
  async getAppointments(): Promise<Appointment[]> {
    return Array.from(this.appointments.values());
  }
  
  async getAppointmentById(id: number): Promise<Appointment | undefined> {
    return this.appointments.get(id);
  }
  
  async getAppointmentsByDate(date: string): Promise<Appointment[]> {
    return Array.from(this.appointments.values()).filter(
      (appointment) => appointment.date === date
    );
  }
  
  // Contact message methods
  async createContactMessage(message: InsertContactMessage): Promise<ContactMessage> {
    const id = this.messageIdCounter++;
    const now = new Date();
    const newMessage: ContactMessage = {
      ...message,
      id,
      createdAt: now
    };
    this.messages.set(id, newMessage);
    return newMessage;
  }
  
  async getContactMessages(): Promise<ContactMessage[]> {
    return Array.from(this.messages.values());
  }
  
  // Test result methods
  async createTestResult(result: InsertTestResult): Promise<TestResult> {
    const id = this.resultIdCounter++;
    const now = new Date();
    const newResult: TestResult = {
      ...result,
      id,
      createdAt: now
    };
    this.results.set(id, newResult);
    return newResult;
  }
  
  async getTestResultsByEmail(email: string): Promise<TestResult[]> {
    return Array.from(this.results.values()).filter(
      (result) => result.email === email
    );
  }
}

// Create and export the storage instance
export const storage = new MemStorage();
