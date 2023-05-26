import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";

export default function Frontend() {
  return (
    <Container>
      <Row className="projects">
        <Col lg={2}>
          <h3 className="hero-app-heading">Hero Builder</h3>
        </Col>
        <Col className="hero-app-desc" lg={5}>
          <p className="hero-desc-text">
            This project allows users to create a hero through form selections
            and text inputs. Options synergise differently and final values,
            such as health, are calculated using a number of variables. Heroes
            are submitted and saved to a team.{" "}
          </p>
        </Col>
        <Col className="hero-app-visual" lg={5}>
          {/* <img className="team-mem-img" src="./team-mem.png" alt="" /> */}
          {/* <img src="./hero-app.gif" alt="hero-app-gif" width="600px" /> */}
          <video controls className="hero-app-vid">
            <source src="./hero-app-vid.mp4" type="video/mp4" />
            Video tag not supported by browser
          </video>
        </Col>
      </Row>
    </Container>
  );
}
