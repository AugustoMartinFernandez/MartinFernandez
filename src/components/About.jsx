import { Container, Row, Col } from "react-bootstrap";

const About = () => {
  return (
    <section id="sobre-mi" className="about-section py-5">
      <Container>
        <h2 className="section-title text-center mb-5">About Me</h2>
        <Row className="justify-content-center">
          <Col md={8} className="text-center">
            <p className="about-text">
              I'm <span className="text-warning">Martin Fernandez</span>, a 22-year-old 
              <span className="text-warning"> Argentine Army Soldier</span> currently serving at the 
              <span className="text-warning"> Sargento Cabral Army NCO School</span>. While dedicating myself to military service, 
              I've simultaneously pursued my passion for <span className="text-warning">Frontend Development</span> through 
              <span className="text-warning"> CoderHouse's React Career</span>, accumulating two years of hands-on experience.
            </p>
            
            <p className="about-text">
              My technical focus centers on building <span className="text-warning">modern web applications</span> with 
              <span className="text-warning"> React</span> and <span className="text-warning">Firebase</span>. I specialize in creating 
              <span className="text-warning"> e-commerce solutions</span>, 
              <span className="text-warning"> dynamic portfolios</span>, and 
              <span className="text-warning"> API-integrated platforms</span> that solve real user needs. My military discipline translates 
              into <span className="text-warning">meticulous code organization</span> and 
              <span className="text-warning"> mission-focused development</span>.
            </p>

            <p className="about-text">
              Core Tech Stack:  
              <span className="text-warning"> React</span> · 
              <span className="text-warning"> JavaScript</span> · 
              <span className="text-warning"> Firebase</span> · 
              <span className="text-warning"> REST APIs</span> · 
              <span className="text-warning"> Bootstrap</span> · 
              <span className="text-warning"> Git</span>
            </p>

            <div className="mt-4">
              <a href="#contact" className="btn custom-btn">
                Get in Touch
              </a>
              <a
                href="/cv.pdf"
                className="btn custom-btn ms-3"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
