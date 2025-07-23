import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import adminAuthRoutes from './routes/adminAuth.js';
import bookingsRoutes from './routes/bookings.js';
import Booking from './models/Booking.js';
import Admin from './models/Admin.js';


dotenv.config(); // ✅ Load environment variables

const app = express();
const PORT = 5000;

// ✅ Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// ✅ Middleware
app.use(cors());
app.use(express.json());

// ✅ Routes
app.get('/', (req, res) => {
  res.send('Piercing Booking API is running!');
});

// POST /appointments (create booking)
app.post('/appointments', async (req, res) => {
  try {
    const booking = new Booking(req.body); // ✅ Use capitalized model
    await booking.save();
    console.log('Saved booking:', booking);
    res.status(201).json({ message: 'Booking saved to MongoDB!', booking });
  } catch (error) {
    console.error('Error saving booking:', error);
    res.status(500).json({ message: 'Failed to save booking.' });
  }
});

// Admin Login Route
app.post('/admin/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(401).json({ message: 'Invalid email' });
    }

    const isMatch = await admin.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    res.status(200).json({ message: 'Login successful' });

  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// ✅ Mount routes
app.use('/api/admin', adminAuthRoutes);
app.use('/api/admin', bookingsRoutes);


// ✅ Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
