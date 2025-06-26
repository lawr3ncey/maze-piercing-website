import React, { useState } from 'react';
import { bookAppointment } from '../api';

function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    piercingType: '',
    preferredDate: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await bookAppointment(formData);
      alert('Appointment booked successfully!');
      console.log(res.data);
    } catch (error) {
      alert('Booking failed.');
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Book Your Piercing Appointment</h2>
      <input name="name" placeholder="Name" onChange={handleChange} required />
      <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
      <input name="piercingType" placeholder="Type of Piercing" onChange={handleChange} required />
      <input name="preferredDate" type="date" onChange={handleChange} required />
      <textarea name="message" placeholder="Message (optional)" onChange={handleChange} />
      <button type="submit">Book Appointment</button>
    </form>
  );
}

export default BookingForm;
