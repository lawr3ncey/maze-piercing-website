import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Admin/Dashboard';
import Bookings from './pages/Admin/Bookings';
import AdminLayout from './layouts/Admin/AdminLayout';
import AdminLogin from './pages/Admin/AdminLogin';
import RequireAuth from './components/Admin/RequireAuth'; // ✅ Add this

import BookingForm from './components/User/BookingForm';
import UserLayout from './layouts/User/UserLayout';
import Porfolio from './pages/User/Portfolio';
import Home from './pages/User/Home';
import Blogs from './pages/User/Blogs';
import Aftercare from './pages/User/Aftercare';
import Connect from './pages/User/Connect';
import Shop from './pages/User/Shop';

function App() {
  return (
    <Router>
      <Routes>
        {/* ✅ Protected Admin Panel */}
        <Route path="/admin" element={
          <RequireAuth>
            <AdminLayout />
          </RequireAuth>
        }>
          <Route index element={<Dashboard />} />
          <Route path="bookings" element={<Bookings />} />
        </Route>

        <Route path="/admin/login" element={<AdminLogin />} />

        {/* Booking Form */}
        <Route path="/booking" element={<BookingForm />} />

        {/* Public Site */}
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path="portfolio" element={<Porfolio />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="aftercare" element={<Aftercare />} />
          <Route path="connect" element={<Connect />} />
          <Route path="shop" element={<Shop />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
