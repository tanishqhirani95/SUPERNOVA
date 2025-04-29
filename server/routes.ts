import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";
import express from "express";

// Contact form submission interface
interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  artist: string;
  date: string;
  message: string;
}

export async function registerRoutes(app: Express): Promise<Server> {
  // Serve static files from the public directory
  app.use(express.static(path.resolve(process.cwd(), "public")));
  
  // Serve the logo image specifically
  app.use("/images", express.static(path.resolve(process.cwd(), "public", "images")));
  
  // Contact form submission endpoint
  app.post('/api/contact', async (req, res) => {
    try {
      const { name, email, phone, artist, date, message } = req.body as ContactFormData;
      
      // Validate required fields
      if (!name || !email || !phone || !date) {
        return res.status(400).json({ message: 'Missing required fields' });
      }
      
      // Validate email format
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        return res.status(400).json({ message: 'Invalid email format' });
      }
      
      // Validate phone format
      const phonePattern = /^[0-9\s\-\+\(\)]{10,15}$/;
      if (!phonePattern.test(phone)) {
        return res.status(400).json({ message: 'Invalid phone number format' });
      }
      
      // In a real implementation, this would save to a database
      // and potentially send an email notification
      
      // For now, just return success
      return res.status(200).json({ message: 'Inquiry received successfully' });
    } catch (error) {
      console.error('Error processing contact form:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
