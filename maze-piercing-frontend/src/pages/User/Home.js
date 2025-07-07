import '../../styles/User/Home.css';
import TemporarilyUnavailable from '../../layouts/TemporarilyUnavailable';

function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="home-hero">
        {/* Left: Hero Image */}
        <div className="hero-image">
          <img
            src="/images/Maze.jpg"
            alt="Piercing close-up"
          />
        </div>

        {/* Right: Text Content */}
        <div className="home-hero-content">
          <p className="welcome-text">WELCOME</p>
          <h1 className="hero-headline">Quality piercings and high end jewelry</h1>
          <p className="hero-subtext">
            Ready for your next piercing or curation? Contact us for a consultation!
          </p>
          <a href="mailto:ameliahorror@yahoo.com" className="hero-button">
            MESSAGE DIRECTLY
          </a>
        </div>
      </div>

      {/* Additional Content */}
      <div className="home-lower-section">
        <TemporarilyUnavailable />
      </div>
    </>
  );
}

export default Home;
