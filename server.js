import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Serve static files from the current directory
app.use(express.static('./'));

// Handle form submissions (in a real app, this would store data or send emails)
app.use(express.json());

app.post('/api/contact', (req, res) => {
  const { name, email, phone, artist, date, message } = req.body;
  
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
  console.log('Form submission received:', req.body);
  
  // Send success response
  return res.status(200).json({ message: 'Inquiry received successfully' });
});

// Catch-all route to serve the main index.html for any other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Supernova Artist Management website running on port ${PORT}`);
});