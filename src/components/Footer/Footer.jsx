import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li>Rent a Car</li>
            <li>Services</li>
            <li>Contact</li>
            <li>Our Blogs</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Support</h4>
          <ul>
            <li>FAQs</li>
            <li>Help Center</li>
            <li>Booking Guide</li>
            <li>Account Settings</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Contact Us</h4>
          <ul>
            <li><a href="https://bento.me/ksr" target="_blank">https://bento.me/KSR</a></li>
            <li>kishoresr01@gmail.com</li>
            <li>123 Street, Bengaluru</li>
          </ul>
        </div>
      </div>

      <div className="footer-line"></div>

      <div className="footer-bottom">
        <p>RentXpress &copy; 2024</p>
        <a href="https://bento.me/ksr" target="_blank">
          <p className="my-name">
            <i className="ri-sparkling-2-fill"></i> Kishore S R
          </p>
        </a>
      </div>
    </footer>
  );
};
