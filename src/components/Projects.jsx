import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import NeoVape from '../assets/NeoVape.png';
import PixelLoop from '../assets/PixelLoop.png';

const Projects = () => {
  const projects = [
    {
      "title": "NeoVape",
      "description": "Vaping-focused e-commerce platform featuring secure authentication, persistent cart, and PDF receipts generation. Includes booking system, integrated checkout, promotional banners, real-time notifications, and adaptable light/dark design.",
      "image": NeoVape,
      "technologies": ["React", "Firebase", "Bootstrap", "React Hot Toast", "Firestore"],
      "github": "https://github.com",
      "demo": "https://neovape.vercel.app/"
    },
    {
      "title": "PixelLoop",
      "description": "Interactive GIF explorer with real-time search, favorites, and instant sharing. Discover and organize animations through a dynamic API with custom save options and direct link copying.",
      "image":PixelLoop,
      "technologies": ["React", "JavaScript", "Firebase", "Bootstrap", "GIPHY API"],
      "github": "https://github.com",
      "demo": "https://pixel-loop.vercel.app/"
    }
  ];

  return (
    <section id="proyectos" className="projects-section py-5">
      <Container>
        <h2 className="section-title text-center mb-5">Proyects</h2>
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