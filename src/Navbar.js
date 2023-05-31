import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";

export default function Navbar() {
  return (
    <Container className="navbar-element">
      <Row className="navbar">
        <Col lg={1} className="home-btn">
          <h2
            className="jw"
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            JW
          </h2>
        </Col>
        <Col lg={3} className="content-headings">
          <h6 className="frontend-btn">Frontend Developer</h6>
          <h6 className="copywriting-btn">Copywriter</h6>
        </Col>

        <Col lg={5} className="buffer"></Col>
        <Col lg={3} className="site-links">
          <Col>
            <h6 className="linkedIn-btn">
              <a
                className="linkedIn-link"
                href="https://www.linkedin.com/in/james-wallington-2a122bb6/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </h6>
          </Col>
          <h6 className="github-btn">
            <a
              className="github-link"
              href="https://github.com/Lopside95"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </h6>
        </Col>
      </Row>
    </Container>
  );
}
