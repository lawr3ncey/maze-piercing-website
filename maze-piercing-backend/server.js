const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const PORT = 5000;
require('dotenv').config(); // at the top

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


// Middleware
app.use(cors());
app.use(express.json());

// Mongoose Booking Model
const Booking = mongoose.model('Booking', new mongoose.Schema({
  name: String,
  email: String,
  piercingType: String,
  preferredDate: String,
  message: String,
}));

// Routes
app.get('/', (req, res) => {
  res.send('Piercing Booking API is running!');
});

app.post('/appointments', async (req, res) => {
  try {
    const booking = new Booking(req.body);
    await booking.save();
    console.log('Saved booking:', booking);
    res.status(201).json({ message: 'Booking saved to MongoDB!', booking });
  } catch (error) {
    console.error('Error saving booking:', error);
    res.status(500).json({ message: 'Failed to save booking.' });
  }
});

// GET all bookings (Admin View)
app.get('/appointments', async (req, res) => {
  try {
    const bookings = await Booking.find(); // Fetch all bookings from MongoDB
    res.status(200).json(bookings);
  } catch (error) {
    console.error('Error fetching bookings:', error);
    res.status(500).json({ message: 'Failed to fetch bookings' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
