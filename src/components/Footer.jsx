import './Footer.css';
import { Container, Row, Col } from "react-bootstrap";
//import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from '/assets/images/black.png';

export default function Footer() {
  return (
    <footer className="footerSection bg-light text-dark ">
      <Container>
      <Row className="text-start align-items-center">
        <Col xs={8} md={4}>
          <p className="footerText">Contact Us</p>
          <p className="contactText">
            Ready to capture unforgettable moments? Reach out to book a session or discuss your photography needs—I’m here to bring your vision to life!
          </p>
        </Col>
        <Col xs={4} md={4} className="text-center position-relative">
          <img
            src={logo}
            alt="Logo"
            className="footer-logo mb-3"
          />
        </Col>
        <Col md={4} className='footerTitle'>
          <p className="footerText">Majd Alghaith Photography Videography</p>
          <p className="contactText">Email: your-email@example.com</p>
          <p className="contactText">Phone: (123) 456-7890</p>
        </Col>
      </Row>


        <hr className="bg-dark my-4" />

        <Row>
          <Col md={6} className="copyright">
            <p className="mb-0">© 2024 Majd Alghaith. All rights reserved.  <br />| developed by F.S</p>
          </Col>
          <Col md={6} className="socialMedia">
            <a href="https://www.facebook.com/your-profile" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="mx-2 socialLogo" style={{ color: "#4267B2" }} />
            </a>
            <a href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="mx-2 socialLogo" style={{ color: "#C13584" }} />
            </a>
            <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="mx-2 socialLogo" style={{ color: "#0077B5" }} />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
