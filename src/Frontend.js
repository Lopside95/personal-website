import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";

export default function Frontend() {
  return (
    <Container>
      <Row className="projects">
        <h3 className="projects-heading">Projects</h3>

        <Row>
          <h3 className="hero-app-heading">Hero Builder</h3>
        </Row>
        <Row className="hero-app">
          <Col className="hero-app-desc" lg={5}>
            <p className="hero-desc-text">
              This project allows users to create a hero through form selections
              and text inputs. Options synergise differently and final values,
              such as health, are calculated using a number of variables. Heroes
              are submitted and saved to a team. The {""}
              <a
                className="hero-app-link"
                href="https://github.com/Lopside95/create-hero"
                target="_blank"
                rel="noreferrer"
              >
                Hero Builder {""}
              </a>
              {""} and other project repositories are available {""}
              <a
                className="github-link"
                href="https://github.com/Lopside95"
                target="_blank"
                rel="noreferrer"
              >
                here.
              </a>
            </p>
          </Col>
          <Col className="hero-app-visual" lg={5}>
            <video controls className="hero-app-vid">
              <source src="./hero-app-vid.mp4" type="video/mp4" />
              Video tag not supported by browser
            </video>
          </Col>
        </Row>
      </Row>
    </Container>
  );
}
