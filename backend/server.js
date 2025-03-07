// server.js

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

// Initialize environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Parse incoming JSON requests

// Serve the frontend build (for production)
app.use(express.static(path.join(__dirname, 'frontend', 'build')));

// Basic route to check server status
app.get('/', (req, res) => {
  res.send('Smart Home Monitor API is running...');
});

// Example routes for energy data
app.get('/api/energy', (req, res) => {
  // Example energy data
  const energyData = {
    appliances: [
      { id: 1, name: 'Fridge', powerConsumed: 150 },
      { id: 2, name: 'Air Conditioner', powerConsumed: 2000 },
      { id: 3, name: 'Washing Machine', powerConsumed: 500 },
    ],
    totalPowerConsumed: 2650,
  };

  res.json(energyData);
});

// Route for adding energy consumption data (this would be connected to a database in a real app)
app.post('/api/energy', (req, res) => {
  const { name, powerConsumed } = req.body;

  // Validate incoming data
  if (!name || !powerConsumed) {
    return res.status(400).json({ message: 'Please provide all required fields' });
  }

  // In a real app, you'd store this data in a database
  res.status(201).json({
    message: 'Energy data added successfully',
    newAppliance: { name, powerConsumed },
  });
});

// Example route for user login (you'd implement user authentication here)
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  if (username === 'admin' && password === 'password123') {
    res.json({ message: 'Login successful', token: 'sample-jwt-token' });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

// Port from environment variables or default to 5000
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
