import React, { useState, useEffect, useRef } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Typewriter from 'typewriter-effect';

const Header = () => {
  const [expanded, setExpanded] = useState(false);
  const [activeSection, setActiveSection] = useState('#inicio');
  const navbarRef = useRef(null);

  // Actualizar altura de la navbar y manejar scroll
  useEffect(() => {
    const updateNavbarHeight = () => {
      const height = navbarRef.current?.offsetHeight || 76;
      document.documentElement.style.setProperty('--navbar-height', `${height}px`);
    };

    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(`#${section.id}`);
        }
      });
    };

    updateNavbarHeight();
    window.addEventListener('resize', updateNavbarHeight);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('resize', updateNavbarHeight);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      setExpanded(false);
      setTimeout(() => {
        const navbarHeight = navbarRef.current?.offsetHeight || 76;
        const offset = element.offsetTop - navbarHeight;
        window.scrollTo({ top: offset, behavior: 'smooth' });
      }, 300);
    }
  };

  // Secciones con textos en inglés
  const navSections = [
    { id: '#inicio', text: 'Home' },
    { id: '#sobre-mi', text: 'About Me' },
    { id: '#proyectos', text: 'Projects' },
    { id: '#habilidades', text: 'Skills' },
    { id: '#contact', text: 'Contact' }
  ];

  return (
    <Navbar 
      ref={navbarRef}
      bg="dark" 
      variant="dark" 
      expand="lg" 
      fixed="top"
      expanded={expanded}
      className="custom-navbar"
      collapseOnSelect
      onToggle={() => setExpanded(!expanded)}
    >
      <Container fluid="xl">
      <Navbar.Brand 
  href="#inicio" 
  className="brand-font"
  onClick={(e) => handleNavClick(e, '#inicio')}
  translate="no"
  style={{ 
    userSelect: 'none',
    fontSize: '1.5rem',
    fontWeight: 500,
    letterSpacing: '0.05em'
  }}
>
  <div className="untranslatable-wrapper" style={{ lineHeight: '1.2' }}>
    <Typewriter
      options={{
        strings: [
          '<span class="brand-text">Tinchodev</span>'
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 30,  // Velocidad más natural
        cursor: '<span class="custom-cursor">|</span>',
        delay: 70,  // Aumentado para mejor legibilidad
        wrapperClassName: 'typewriter-wrapper',
        cursorClassName: 'cursor-wrapper'
      }}
    />
  </div>
</Navbar.Brand>

        <Navbar.Toggle 
          aria-controls="navbar-content" 
          className="custom-toggler"
          aria-label="Toggle navigation"
        />

        <Navbar.Collapse id="navbar-content">
          <Nav className="ms-auto align-items-lg-center">
            {navSections.map((section) => (
              <Nav.Link
                key={section.id}
                href={section.id}
                onClick={(e) => handleNavClick(e, section.id)}
                className={`nav-item ${activeSection === section.id ? 'active' : ''}`}
                aria-current={activeSection === section.id ? 'page' : null}
              >
                {section.text}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;