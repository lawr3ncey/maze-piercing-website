import '../../styles/User/Connect.css';

function Connect() {
  return (
    <div className="connect-wrapper">
      <div className="connect-card">
        <h2>Get in Touch</h2>
        <p>If you have questions, inquiries, or want to book a consultation, feel free to reach out:</p>

        <ul className="contact-list">
          <li><strong>Phone:</strong> <a href="tel:+639949250993">+63 994 925 0993</a></li>
          <li><strong>Email:</strong> <a href="mailto:mazedeetz@gmail.com">mazedeetz@gmail.com</a></li>
          <li><strong>Instagram:</strong> <a href="https://instagram.com/mazedeetz" target="_blank" rel="noreferrer">@mazedeetz</a></li>
          <li><strong>Facebook:</strong> <a href="https://www.facebook.com/people/%F0%9D%90%81%F0%9D%90%8B%F0%9D%90%8E%F0%9D%90%8E%F0%9D%90%83-%F0%9D%90%93%F0%9D%90%87%F0%9D%90%8E%F0%9D%90%91%F0%9D%90%8D-%F0%9D%90%8E%F0%9D%90%85-%F0%9D%90%8C%F0%9D%90%80%F0%9D%90%99%F0%9D%90%84/61578050873234/" target="_blank" rel="noreferrer">Blood & Thorn of Maze</a></li>
          <li><strong>Location:</strong> 123 Studio St., Quezon City, Philippines</li>
        </ul>

        <p className="connect-note">We look forward to hearing from you!</p>
      </div>
    </div>
  );
}
export default Connect;