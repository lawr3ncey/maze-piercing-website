import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';

import '../styles/User/UserLayout.css';


function UserLayout() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    <div className='UserLayout'>
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="logo">{'<Blood and Ťhorn of mazƎ>'}</h1>
          <p className="tagline">Stylish. Safe. Professional.</p>
        </div>

        <nav className="hero-nav">
          <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
            ☰
          </div>
          <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/connect">Connect</Link></li>
            <li><Link to="/blogs">Blogs</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/aftercare">Aftercare</Link></li>
          </ul>
        </nav>
      </section>



        


      {/* PAGE CONTENT */}
      <main>
        <Outlet />
      </main>

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
    </>
  );
}

export default UserLayout;
