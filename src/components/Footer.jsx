import { Container, Row, Col } from 'react-bootstrap';
import { FaHeart, FaGithub, FaLinkedin, FaTwitter, FaCode } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-section py-4 bg-dark text-white">
      <Container>
        {/* Sección principal - Stack vertical en móviles */}
        <Row className="align-items-center">
          <Col xs={12} md={6} className="text-center text-md-start mb-4 mb-md-0">
            <div className="d-flex flex-column align-items-center align-items-md-start">
              <p className="mb-2 fs-6">
                <FaCode className="me-2 text-info" /> 
                <strong>Martín Fernández</strong>
                <span className="d-block d-md-inline mt-1 mt-md-0"> - Frontend Web Developer React</span>
              </p>
              <p className="mb-2 small">
                &copy; {new Date().getFullYear()} Todos los derechos reservados
                <FaHeart className="heart-icon mx-1 text-danger" />
              </p>
              <p className="small text-secondary mb-0">
                Construido con React | Buenos Aires
              </p>
            </div>
          </Col>

          {/* Sección social - Centrado en móviles */}
          <Col xs={12} md={6}>
            <div className="d-flex flex-column align-items-center align-items-md-end">
              <div className="social-links mb-3">
                <span className="me-2 small text-light d-block d-md-inline mb-2 mb-md-0">Conectemos:</span>
                <div className="d-flex justify-content-center">
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2 mx-md-3">
                    <FaGithub className="hover-effect" size={20} />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2 mx-md-3">
                    <FaLinkedin className="hover-effect" size={20} />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2 mx-md-3">
                    <FaTwitter className="hover-effect" size={20} />
                  </a>
                </div>
              </div>
              <div className="text-center text-md-end">
                <p className="small mb-1 text-light">¿Proyecto interesante?</p>
                <a href="mailto:contacto@ejemplo.com" className="small text-info text-decoration-none">
                  tinchodeev@gmail.com
                </a>
              </div>
            </div>
          </Col>
        </Row>
        
        {/* Línea inferior - Ajuste móvil */}
        <Row className="mt-3">
          <Col xs={12}>
            <div className="d-flex flex-column align-items-center">
              <p className="small text-secondary mb-0 text-center">
                Comprometido con la excelencia técnica
              </p>
              <a href="/politica-privacidad" className="small text-secondary text-decoration-underline mt-1">
                Política de privacidad
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;