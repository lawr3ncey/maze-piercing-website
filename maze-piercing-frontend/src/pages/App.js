import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminDashboard from './AdminDashboard'; // ✅ Assuming AdminDashboard is also in /pages
import AdminLayout from '../layouts/AdminLayout'; // ⬅️ Go up one level
import BookingForm from '../components/BookingForm'; // ⬅️ Go up one level
import '../styles/App.css'; // ⬅️ Go up one level
import Gallery from '../components/Gallery'; // ⬅️ Go up one level

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

        {/* Homepage */}
        <Route
          path="/"
          element={
            <div className="portfolio-homepage">
              {/* HERO SECTION */}
              <section className="hero">
                <div className="logo">Maze Piercing Studio</div>
                <p className="tagline">Stylish. Safe. Professional.</p>
                <nav></nav>
              </section>

              {/* CTA SECTION */}
              <section className="cta-section">
                <h2>Ready for your next piercing?</h2>
                <a href="/booking" className="cta-btn">Book Now</a>
              </section>

              <Gallery />


              {/* ABOUT ME */}
              <section className="about-me">
                <h2>About Me</h2>
                <p>
                  I’m a passionate professional dedicated to helping clients express
                  themselves through safe, stylish, and expertly done piercings.
                </p>
              </section>

              {/* FOOTER */}
              <footer className="footer">
                <p>© Maze Piercing</p>
                <div className="social-links">
                  <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a> |{" "}
                  <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a> |{" "}
                  <a href="mailto:contact@mazepiercing.com">Contact</a>
                </div>
              </footer>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
