import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminDashboard from './AdminDashboard';
import AdminLayout from './AdminLayout';
import BookingForm from './BookingForm';

function App() {
  return (
    <Router>
      <Routes>
        {/* Admin Layout wrapper */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          {/* You can add more admin sub-routes here */}
        </Route>

        {/* Public landing page */}
        <Route path="/" element={
          <div>
            <h1>Maze Piercing</h1>
            <p>Welcome to Maze Piercing!</p>
            <BookingForm /> {/* Here’s where your form goes */}
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;
