import { Container, Row, Col } from 'react-bootstrap';
import { FaHeart, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-section py-4">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start">
            <p className="mb-0 footer-text">
              &copy; {new Date().getFullYear()} Martín Fernández. Hecho con 
              <FaHeart className="heart-icon mx-1" /> 
              en Argentina
            </p>
          </Col>
          <Col md={6}>
            <div className="social-links text-center text-md-end">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;