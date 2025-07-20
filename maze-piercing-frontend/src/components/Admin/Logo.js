import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <div className="hero-content">
      <Link to="/" className="logo">{'<Blood and Ťhorn of mazƎ>'}</Link>
      <p className="tagline">Stylish. Safe. Professional.</p>
    </div>
  );
};

export default Logo;
