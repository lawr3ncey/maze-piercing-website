const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const PORT = 5000;

// Connect to MongoDB Atlas
mongoose.connect('mongodb+srv://mazepiercing:mazepiercing@mazepiercingbooking.945sb8n.mongodb.net/?retryWrites=true&w=majority&appName=mazepiercingbooking', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('Connected to MongoDB Atlas'))
  .catch((err) => console.error('MongoDB connection error:', err));

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

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
