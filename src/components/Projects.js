import React from "react";
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

const Projects = () => {
  const projects = [
    { name: "Project 1", description: "Description of Project 1", link: "https://example.com" },
    { name: "Project 2", description: "Description of Project 2", link: "https://example.com" },
  ];

  return (
    <Container className="mt-5">
      <h1 className="text-center">Proyectos</h1>
      <Row>
        {projects.map((project, index) => (
          <Col sm={12} md={6} lg={4} key={index} className="d-flex align-items-stretch">
            <Card className="mb-4 w-100">
              <Card.Body>
                <Card.Title>{project.name}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <Button variant="primary" href={project.link} target="_blank">Ver Proyecto</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Projects;
