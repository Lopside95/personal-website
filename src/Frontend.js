import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";

export default function Frontend() {
  return (
    <Container>
      <Row className="projects">
        <Col lg={3}>
          <h3 className="hero-app-heading">Hero Builder</h3>
        </Col>
        <Col className="hero-app-desc" lg={4}>
          This project allows users to create a hero through form selections and
          text inputs. Options synergise and differently and final values, such
          as health, are calculated with a number of variables saved as a team
          member on submission of the form.
        </Col>
        <Col className="hero-app-visual" lg={5}>
          <img className="team-mem-img" src="./team-mem.png" alt="" />
        </Col>
      </Row>
    </Container>
  );
}
