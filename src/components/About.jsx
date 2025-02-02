import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
  return (
    <section id="sobre-mi" className="about-section py-5">
      <Container>
        <h2 className="section-title text-center mb-5">Sobre Mí</h2>
        <Row className="justify-content-center">
          <Col md={8} className="text-center">
            <p className="about-text">
              Soy un desarrollador web frontend apasionado por crear experiencias digitales únicas y atractivas. 
              Con experiencia en tecnologías modernas como React, me especializo en construir aplicaciones web 
              responsivas y centradas en el usuario.
            </p>
            <p className="about-text">
              Mi objetivo es combinar diseño y funcionalidad para crear soluciones web que no solo se vean 
              bien, sino que también proporcionen una excelente experiencia de usuario. Constantemente me 
              mantengo actualizado con las últimas tendencias y tecnologías en el desarrollo web.
            </p>
            <div className="mt-4">
              <a href="#contacto" className="btn custom-btn">Contactar</a>
              <a href="/cv.pdf" className="btn custom-btn ms-3" target="_blank">Descargar CV</a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;