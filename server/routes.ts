import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { 
  insertAppointmentSchema, 
  insertContactMessageSchema,
  insertTestResultSchema
} from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Create HTTP server
  const httpServer = createServer(app);

  // API routes - prefix with /api
  
  // Appointment routes
  app.post("/api/appointments", async (req, res) => {
    try {
      const appointmentData = insertAppointmentSchema.parse(req.body);
      const appointment = await storage.createAppointment(appointmentData);
      return res.status(201).json(appointment);
    } catch (error) {
      return res.status(400).json({ error: `Invalid appointment data: ${error}` });
    }
  });

  app.get("/api/appointments", async (req, res) => {
    try {
      const appointments = await storage.getAppointments();
      return res.status(200).json(appointments);
    } catch (error) {
      return res.status(500).json({ error: `Failed to get appointments: ${error}` });
    }
  });

  app.get("/api/appointments/date/:date", async (req, res) => {
    try {
      const { date } = req.params;
      const appointments = await storage.getAppointmentsByDate(date);
      return res.status(200).json(appointments);
    } catch (error) {
      return res.status(500).json({ error: `Failed to get appointments by date: ${error}` });
    }
  });

  // Contact message routes
  app.post("/api/contact", async (req, res) => {
    try {
      const messageData = insertContactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage(messageData);
      return res.status(201).json(message);
    } catch (error) {
      return res.status(400).json({ error: `Invalid contact message data: ${error}` });
    }
  });

  app.get("/api/contact", async (req, res) => {
    try {
      const messages = await storage.getContactMessages();
      return res.status(200).json(messages);
    } catch (error) {
      return res.status(500).json({ error: `Failed to get contact messages: ${error}` });
    }
  });

  // Test results routes
  app.post("/api/test-results", async (req, res) => {
    try {
      const resultData = insertTestResultSchema.parse(req.body);
      const result = await storage.createTestResult(resultData);
      return res.status(201).json(result);
    } catch (error) {
      return res.status(400).json({ error: `Invalid test result data: ${error}` });
    }
  });

  app.get("/api/test-results", async (req, res) => {
    try {
      const { email } = req.query;
      if (typeof email !== 'string') {
        return res.status(400).json({ error: 'Email query parameter is required' });
      }
      const results = await storage.getTestResultsByEmail(email);
      return res.status(200).json(results);
    } catch (error) {
      return res.status(500).json({ error: `Failed to get test results: ${error}` });
    }
  });

  return httpServer;
}
