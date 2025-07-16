const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Admin = require('./models/Admin');
require('dotenv').config(); // ✅ Load env vars

const app = express();  
const PORT = 5000;

// ✅ Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// ✅ Middleware
app.use(cors());
app.use(express.json());

// ✅ Models
const Booking = mongoose.model('Booking', new mongoose.Schema({
  name: String,
  email: String,
  piercingType: String,
  preferredDate: String,
  message: String,
}));

// ✅ Routes
app.get('/', (req, res) => {
  res.send('Piercing Booking API is running!');
});

// POST /appointments (create booking)
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

// GET /appointments (admin view)
app.get('/appointments', async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.status(200).json(bookings);
  } catch (error) {
    console.error('Error fetching bookings:', error);
    res.status(500).json({ message: 'Failed to fetch bookings' });
  }
});


// Admin Login Route
app.post('/admin/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const admin = await Admin.findOne({ email });
    if (!admin) return res.status(401).json({ message: 'Invalid credentials' });

    const isMatch = await admin.comparePassword(password);
    if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

    // Sign a simple JWT token (optional, for secure sessions)
    const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET || 'secretkey', {
      expiresIn: '1d',
    });

    res.json({ message: 'Login successful', token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});


// ✅ Mount admin login route
app.use('/api/admin', require('./routes/adminAuth'));

// ✅ Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
