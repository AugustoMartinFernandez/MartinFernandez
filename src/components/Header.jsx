import { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Typewriter from 'typewriter-effect';

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  const handleNavClick = (e) => {
    const href = e.target.getAttribute('href');
    const element = document.querySelector(href);
    if (element) {
      setExpanded(false);
    }
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top" expanded={expanded} className="custom-navbar">
      <Container>
        <Navbar.Brand href="#inicio" className="brand-font" onClick={handleNavClick}>
          <Typewriter
            options={{
              strings: ['Tinchodev'],
              autoStart: true,
              loop: true,
              deleteSpeed: 30,
            }}
          />
        </Navbar.Brand>
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav" 
          onClick={() => setExpanded(expanded ? false : "expanded")} 
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#inicio" onClick={handleNavClick}>Inicio</Nav.Link>
            <Nav.Link href="#sobre-mi" onClick={handleNavClick}>Sobre Mí</Nav.Link>
            <Nav.Link href="#proyectos" onClick={handleNavClick}>Proyectos</Nav.Link>
            <Nav.Link href="#habilidades" onClick={handleNavClick}>Habilidades</Nav.Link>
            <Nav.Link href="#contacto" onClick={handleNavClick}>Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;