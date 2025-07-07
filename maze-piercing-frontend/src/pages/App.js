import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminDashboard from './Admin/AdminDashboard'; // ✅ Assuming AdminDashboard is also in /pages
import AdminLayout from '../layouts/AdminLayout'; // ⬅️ Go up one level
import BookingForm from '../components/BookingForm'; // ⬅️ Go up one 

import UserLayout from '../layouts/UserLayout';
import TemporarilyUnavailable from '../layouts/TemporarilyUnavailable';

import Porfolio from './User/Portfolio';
import Home from './User/Home';





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
        <Route index element={<Home />} />
        <Route path="Portfolio" element={<Porfolio />} />
        <Route path="Home" element={<Home />} />
        <Route path="aftercare" element={<TemporarilyUnavailable />} />
        </Route>  
      </Routes>
    </Router>
  );
}

export default App;
