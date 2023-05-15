import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";

export default function Navbar() {
  return (
    <div>
      <Row className="navbar">
        <Col lg={1} className="home-btn">
          <h1>JW</h1>
        </Col>
        <Col lg={3} className="content-headings">
          <h5 className="frontend-btn">Frontend</h5>
          <h5 className="copywriting-btn">Copywriting</h5>
        </Col>
        <Col lg={4} className="buffer"></Col>
        <Col lg={3} className="site-links">
          <h5 className="linkedIn-btn">LinkedIn</h5>
          <h5 className="github-btn">Github</h5>
        </Col>
      </Row>
    </div>
  );
}
