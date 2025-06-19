const express = require('express');
const app = express();
const PORT = 5000;

// Middleware to parse JSON
app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.send('Piercing Booking API is running!');
});

// Store bookings in memory (temporary)
let bookings = [];

// POST endpoint to receive bookings
app.post('/appointments', (req, res) => {
  const booking = req.body;
  console.log('Received booking:', booking);
  bookings.push(booking);
  res.status(201).json({ message: 'Booking received!', booking });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
