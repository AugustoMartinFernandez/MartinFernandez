import { Container, Row, Col, Image } from "react-bootstrap";
import Perfil from "../assets/Perfil.jpg";
import Portada from "../assets/Portada.jpg";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <section id="inicio" className="hero-section">
      <div
        className="cover-image"
        style={{ backgroundImage: `url(${Portada})` }}
      >
        <div className="overlay"></div>
      </div>
      <Container>
        <Row className="align-items-center hero-content">
          <Col md={6} className="text-center">
            <div className="profile-container">
              <Image
                src={Perfil}
                roundedCircle
                fluid
                className="profile-photo"
                alt="Martin Fernandez Profile"
              />
            </div>
          </Col>
          <Col md={6} className="text-center text-md-start">
            <h1 className="hero-title">Martin Fernandez</h1>
            <p className="hero-subtitle">Frontend Web Developer React</p>
            <div className="typing-container" translate="no">
              <div className="hero-text animated-text">
                <Typewriter
                  options={{
                    strings: [
                      '<span style="color: #fff; display: inline-block">Turning ideas into </span><span style="color: #FFD700; font-weight: 600; display: inline-block">  digital solutions</span>',
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 40,
                    deleteSpeed: 25,
                    cursor: '<span style="color: #FFD700">|</span>',
                  }}
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
