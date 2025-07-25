import '../../styles/User/Connect.css';

function Connect() {
  return (
    <>
    <div className="connect-wrapper">
      <div className="connect-card">
        <h2>Get in Touch</h2>
        <p>If you have questions, inquiries, or want to book a consultation, feel free to reach out:</p>

        <ul className="contact-list">
          <li><strong>Phone:</strong> <a href="tel:+639949250993">+63 994 925 0993</a></li>
          <li><strong>Email:</strong> <a href="mailto:mazedeetz@gmail.com">mazedeetz@gmail.com</a></li>
          <li><strong>Instagram:</strong> <a href="https://instagram.com/mazedeetz" target="_blank" rel="noreferrer">@mazedeetz</a></li>
          <li><strong>Facebook:</strong> <a href="https://www.facebook.com/people/%F0%9D%90%81%F0%9D%90%8B%F0%9D%90%8E%F0%9D%90%8E%F0%9D%90%83-%F0%9D%90%93%F0%9D%90%87%F0%9D%90%8E%F0%9D%90%91%F0%9D%90%8D-%F0%9D%90%8E%F0%9D%90%85-%F0%9D%90%8C%F0%9D%90%80%F0%9D%90%99%F0%9D%90%84/61578050873234/" target="_blank" rel="noreferrer">Blood & Thorn of Maze</a></li>
          <li><strong>Location:</strong> 4528 V. Francisco St., Sta. Mesa, Manila</li>
        </ul>

        <p className="connect-note">We look forward to hearing from you!</p>
      </div>
    </div>

    <div className="map-container">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7721.979795405419!2d121.00852253165286!3d14.599651305612898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c9dc4e1f0533%3A0xb6f332361dfdc77d!2s4528%20V.%20Francisco%20St%2C%20Santa%20Mesa%2C%20Manila%2C%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1753377696643!5m2!1sen!2sph" 
        width="100%" 
        height="450" 
        style={{ border: 0 }}
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade">
      </iframe>
    
      <a
        href="https://maps.app.goo.gl/qEUnh1y6MDj9NqTD8"
        target="_blank"
        rel="noopener noreferrer"
        className="directions-button"
      >
        Get Directions
      </a> 
    </div>
    </>
  );
}
export default Connect;