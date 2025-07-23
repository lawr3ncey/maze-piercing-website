import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
  name: String,
  email: String,
  piercingType: String,
  preferredDate: String,
  message: String,
});

const Booking = mongoose.model('Booking', bookingSchema);
export default Booking;
       