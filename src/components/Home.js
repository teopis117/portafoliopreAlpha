import React from 'react';
import { Container, Button } from 'react-bootstrap';

const Home = () => (
  <Container fluid style={{backgroundColor: '#f8f9fa', padding: '2rem'}}>
    <h1>Hola, soy José Eduardo Díaz Morales</h1>
    <p>
      Soy ingeniero en sistemas, especializado en ciberseguridad y egresado del IPN ESCOM México.
    </p>
    <Button variant="primary">Conóceme más</Button>
  </Container>
);

export default Home;
