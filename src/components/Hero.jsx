import { Container, Row, Col, Image } from 'react-bootstrap';
import Perfil from '../assets/Perfil.jpg';
// import CoverBg from '../assets/cover-bg.jpg';

const Hero = () => {
  return (
    <section id="inicio" className="hero-section">
      <div className="cover-image" style={{ backgroundImage: `url(${Perfil})` }}>
        <div className="overlay"></div>
      </div>
      <Container>
        <Row className="align-items-center hero-content">
          <Col md={6} className="text-center">
            <div className="profile-container">
              <Image src={Perfil} roundedCircle fluid className="profile-photo" />
            </div>
          </Col>
          <Col md={6} className="text-center text-md-start">
            <h1 className="hero-title">Martín Fernández</h1>
            <p className="hero-subtitle">Desarrollador Web Frontend</p>
            <p className="hero-text typing-effect">Bienvenido a mi portfolio...</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;