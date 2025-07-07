import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminDashboard from './Admin/AdminDashboard'; // ✅ Assuming AdminDashboard is also in /pages
import AdminLayout from '../layouts/AdminLayout'; // ⬅️ Go up one level
import BookingForm from '../components/User/BookingForm'; // ⬅️ Go up one 

import UserLayout from '../layouts/UserLayout';
import TemporarilyUnavailable from '../layouts/TemporarilyUnavailable';

import Porfolio from './User/Portfolio';
import Home from './User/Home';
import Blogs from './User/Blogs';
import Aftercare from './User/Aftercare';
import Connect from './User/Connect';
import Shop from './User/Shop';




function App() {
  return (
    <>
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
        <Route path="Blogs" element={<Blogs />} />
        <Route path="Aftercare" element={<Aftercare />} />
        <Route path="Connect" element={<Connect />} />
        <Route path="Shop" element={<Shop />} />
        </Route>  
      </Routes>
    </Router>
    </>
  );
}

export default App;
