import React from 'react';
import { Container, Card } from 'react-bootstrap';

const Experience = () => {
  return (
    <Container className="mt-5">
      <Card>
        <Card.Body>
          <Card.Title>Experiencia</Card.Title>
          <Card.Text>
            <strong>Empresa XYZ</strong>
            <br/>
            Ingeniero en Ciberseguridad - Fechas
            <br/>
            Descripción de tus responsabilidades y logros en este puesto.
            <br/>
            <br/>
            <strong>Empresa ABC</strong>
            <br/>
            Ingeniero en Sistemas - Fechas
            <br/>
            Descripción de tus responsabilidades y logros en este puesto.
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Experience;
