import React from 'react';
import { Container, Card } from 'react-bootstrap';

const About = () => {
  return (
    <Container className="mt-5">
      <Card>
        <Card.Body>
          <Card.Title>Sobre mí</Card.Title>
          <Card.Text>
            Soy José Eduardo Díaz Morales, un apasionado por la tecnología y la ciberseguridad.
            Me gradué en la ESCOM del IPN en México. 
            Mi objetivo es aportar mis habilidades en ciberseguridad para crear soluciones seguras y eficientes.
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default About;
