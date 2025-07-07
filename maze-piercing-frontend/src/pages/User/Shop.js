import '../../styles/Home.css';

import TemporarilyUnavailable from '../../layouts/TemporarilyUnavailable';

function Shop() {
  return (
    <div className="home-content">
      {/* CTA SECTION */}
      <section className="cta-section">
        <h2>Ready for your next piercing?</h2>
        <a href="/booking" className="cta-btn">Book Now</a>
      </section>

      <TemporarilyUnavailable/>

      {/* ABOUT ME */}
      <section className="about-me">
        <h2>About Me</h2>
        <p>
          I'm a passionate professional dedicated to helping clients express
          themselves through safe, stylish, and expertly done piercings.
        </p>
      </section>
    </div>
  );
}
export default Shop;