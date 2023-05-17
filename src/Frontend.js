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
          This app, loosely based on the video game <i>Dota 2</i>, allows users
          to create a hero by through form selections. Calculations are made to
          determine the values their selections have output and they can save
          the hero as a team member, going on to create other heroes and
          developing a team.
        </Col>
        <Col className="hero-app-visual" lg={5}>
          <img className="team-mem-img" src="./team-mem.png" alt="" />
        </Col>
      </Row>
    </Container>
  );
}
