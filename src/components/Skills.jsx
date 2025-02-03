import { Container, Row, Col } from 'react-bootstrap';
import { 
  FaReact, 
  FaHtml5, 
  FaCss3Alt, 
  FaJsSquare, 
  FaGitAlt,
  FaSass,
  FaNpm
} from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { icon: <FaHtml5 size={50} />, name: 'HTML5', level: 90 },
        { icon: <FaCss3Alt size={50} />, name: 'CSS3', level: 85 },
        { icon: <FaJsSquare size={50} />, name: 'JavaScript', level: 85 },
        { icon: <FaReact size={50} />, name: 'React', level: 80 },
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { icon: <FaGitAlt size={50} />, name: 'Git', level: 65 },
        { icon: <FaSass size={50} />, name: 'Sass', level: 80 },
        { icon: <SiTailwindcss size={50} />, name: 'Tailwind', level: 45 },
        { icon: <FaNpm size={50} />, name: 'NPM', level: 50 },
      ]
    }
  ];

  return (
    <section id="habilidades" className="skills-section py-5">
      <Container>
        <h2 className="section-title text-center mb-5">Skills</h2>
        {skillCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="skill-category mb-5">
            <h3 className="category-title text-center mb-4">{category.title}</h3>
            <Row className="justify-content-center">
              {category.skills.map((skill, index) => (
                <Col key={index} md={3} sm={6} className="mb-4">
                  <div className="skill-card">
                    <div className="skill-icon-container">
                      {skill.icon}
                    </div>
                    <p className="skill-name">{skill.name}</p>
                    <div className="skill-level-container">
                      <div 
                        className="skill-level-bar" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        ))}
      </Container>
    </section>
  );
};

export default Skills;