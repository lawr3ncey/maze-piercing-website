import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminDashboard from './pages/Admin/Dashboard'; // ✅ Assuming AdminDashboard is also in /pages
import AdminLayout from './layouts/Admin/AdminLayout'; // ⬅️ Go up one level
import BookingForm from './components/User/BookingForm'; // ⬅️ Go up one 

import UserLayout from './layouts/User/UserLayout';


import Porfolio from './pages/User/Portfolio';
import Home from './pages/User/Home';
import Blogs from './pages/User/Blogs';
import Aftercare from './pages/User/Aftercare';
import Connect from './pages/User/Connect';
import Shop from './pages/User/Shop';




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
