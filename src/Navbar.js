import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";

export default function Navbar() {
  return (
    <Container>
      <Row className="navbar">
        <Col lg={1} className="home-btn">
          <h1 className="jw">JW</h1>
        </Col>
        <Col lg={3} className="content-headings">
          <h5 className="frontend-btn">Frontend</h5>
          <h5 className="copywriting-btn">Copywriting</h5>
        </Col>
        <Col lg={5} className="buffer"></Col>
        <Col lg={3} className="site-links">
          <h5 className="linkedIn-btn">
            <a href="https://www.linkedin.com/in/james-wallington-2a122bb6/">
              LinkedIn
            </a>
          </h5>
          <h5 className="github-btn">
            <a href="https://github.com/Lopside95">Github</a>
          </h5>
        </Col>
      </Row>
    </Container>
  );
}
