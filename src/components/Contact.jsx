import 'react'; 
import { Container, Form, Button, Row, Col } from 'react-bootstrap';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <section id="contact" className="contact">
      <Container>
        <h2 className="section-title text-center">Contact</h2>
        <div className="contact-content">
          <Row>
            <Col lg={8} className="mx-auto">
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-4">
                  <Form.Control 
                    type="text" 
                    placeholder="Name" 
                    required 
                    className="form-control-custom"
                    style={{
                      padding: '0.8rem',
                      backgroundColor: '#1a1a1a',
                      border: '1px solid #00b7ff',
                      color: '#ffd700e6',
                      borderRadius: '5px'
                    }}
                  />
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Control 
                    type="email" 
                    placeholder="Email" 
                    required
                    className="form-control-custom"
                    style={{
                      padding: '0.8rem',
                      backgroundColor: '#1a1a1a',
                      border: '1px solid #00b7ff',
                      color: '#ffffff',
                      borderRadius: '5px'
                    }}
                  />
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Control 
                    as="textarea" 
                    rows={4} 
                    placeholder="Message" 
                    required
                    className="form-control-custom"
                    style={{
                      padding: '0.8rem',
                      backgroundColor: '#1a1a1a',
                      border: '1px solid #00b7ff',
                      color: '#ffd700e6',
                      borderRadius: '5px'
                    }}
                  />
                </Form.Group>
                <Button 
                  type="submit" 
                  className="custom-btn w-100"
                  style={{
                    backgroundColor: '#00b7ff',
                    border: 'none',
                    padding: '0.8rem',
                    fontSize: '1.1rem',
                    transition: 'all 0.3s ease'
                  }}
                >
                  Send
                </Button>
              </Form>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
