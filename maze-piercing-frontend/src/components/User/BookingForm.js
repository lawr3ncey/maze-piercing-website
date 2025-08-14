import React, { useState } from 'react';
import { bookAppointment } from '../../api';
import '../../styles/User/BookingForm.css';

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
      await bookAppointment(formData);
      alert('Appointment booked successfully!');
      setFormData({
        name: '',
        email: '',
        piercingType: '',
        preferredDate: '',
        message: '',
      });
    } catch (error) {
      alert('Booking failed.');
      console.error(error);
    }
  };

  return (
    <div className="booking-container">
      <form className="booking-form" onSubmit={handleSubmit}>
        <h2>Book Your Piercing Appointment</h2>
        <input
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          name="piercingType"
          placeholder="Type of Piercing"
          value={formData.piercingType}
          onChange={handleChange}
          required
        />
        <input
          name="preferredDate"
          type="date"
          value={formData.preferredDate}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Message (optional)"
          value={formData.message}
          onChange={handleChange}
        />
        <button type="submit">Book Appointment</button>
      </form>
    </div>
  );
}

export default BookingForm;
