import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminDashboard from './Admin/AdminDashboard'; // ✅ Assuming AdminDashboard is also in /pages
import AdminLayout from '../layouts/AdminLayout'; // ⬅️ Go up one level
import BookingForm from '../components/BookingForm'; // ⬅️ Go up one 

import UserLayout from '../layouts/UserLayout';
import TemporarilyUnavailable from '../layouts/TemporarilyUnavailable';

import '../styles/App.css'; // ⬅️ Go up one level
import '../styles/HeroSection.css'; // ⬅️ Go up one level

import '../styles/TemporarilyUnavailable.css';



function App() {
  return (
    <Router>
      <Routes>
        {/* Admin Panel */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
        </Route>

        {/* Booking Form page */}
        <Route path="/booking" element={<BookingForm />} />

      
        
      </Routes>

      <Routes>
        {/* Public/User-facing layout */}
        <Route path="/" element={<UserLayout />}>
        <Route index element={<TemporarilyUnavailable />} />
        <Route path="blogs" element={<TemporarilyUnavailable />} />
        <Route path="shop" element={<TemporarilyUnavailable />} />
        <Route path="aftercare" element={<TemporarilyUnavailable />} />
                </Route>  
      </Routes>
    </Router>
  );
}

export default App;
