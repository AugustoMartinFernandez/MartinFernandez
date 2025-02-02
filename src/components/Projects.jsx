import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: 'NeoVape',
      description: 'E-commerce desarrollado con React y Firebase. Implementación de carrito de compras, autenticación de usuarios y pagos online.',
      image: 'https://via.placeholder.com/300',
      technologies: ['React', 'Firebase', 'Bootstrap'],
      github: 'https://github.com',
      demo: 'https://neovape.com'
    },
    {
      title: 'Proyecto 2',
      description: 'Aplicación web responsive con funcionalidades de CRUD, integración de APIs y diseño moderno.',
      image: 'https://via.placeholder.com/300',
      technologies: ['React', 'Node.js', 'MongoDB'],
      github: 'https://github.com',
      demo: 'https://demo.com'
    },
  ];

  return (
    <section id="proyectos" className="projects-section py-5">
      <Container>
        <h2 className="section-title text-center mb-5">Proyectos</h2>
        <Row>
          {projects.map((project, index) => (
            <Col key={index} lg={6} className="mb-4">
              <Card className="project-card">
                <div className="project-image-container">
                  <Card.Img variant="top" src={project.image} className="project-image" />
                  <div className="project-overlay">
                    <div className="project-links">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                        <FaGithub /> Código
                      </a>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                        <FaExternalLinkAlt /> Demo
                      </a>
                    </div>
                  </div>
                </div>
                <Card.Body className="project-body">
                  <Card.Title className="project-title">{project.title}</Card.Title>
                  <Card.Text className="project-description">{project.description}</Card.Text>
                  <div className="project-technologies">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;