import React, { useState } from 'react';
import '../styles/HeroSection.css'; // Ensure this path is correct

export default function HeroSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="hero">
      {/* Hero Content */}
      <div className="hero-content">
        <h1 className="logo">Blood and Thorn of Maze</h1>
        <p className="tagline">Stylish. Safe. Professional.</p>
      </div>

      {/* Navigation Bar */}
      <nav className="hero-nav">
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </div>
        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          <li><a href="/">Home</a></li>
          <li><a href="/portfolio">Portfolio</a></li>
          <li><a href="/connect">Connect</a></li>
          <li><a href="/blogs">Blogs</a></li>
          <li><a href="/shop">Shop</a></li>
          <li><a href="/aftercare">Aftercare</a></li>
        </ul>
      </nav>
    </section>
  );
}
