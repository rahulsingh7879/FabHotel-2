import React from 'react';

const Footer = () => {
  return (
    <footer className="footer mx-5 my-3">
      <div className="footer-menu">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Rooms</li>
          <li>Amenities</li>
          <li>Offers</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className="useful-links">
        <ul>
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
          <li>FAQ</li>
          <li>Blog</li>
          <li>Careers</li>
        </ul>
      </div>
      <div className="contact-info">
        <p>
          FabHotel<br />
          1234 Main Street<br />
          City, State, ZIP<br />
          Country
        </p>
        <p>
          Phone: +1-123-456-7890<br />
          Email: info@fabhotel.com
        </p>
      </div>
      <div className="social-media">
        <ul>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Instagram</li>
          <li>LinkedIn</li>
        </ul>
      </div>
      <div className="newsletter-signup">
        <p>Sign up for our newsletter to receive the latest updates, exclusive offers, and promotions directly to your inbox.</p>
        <div className="input-wrapper">
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; 2023 FabHotel. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

