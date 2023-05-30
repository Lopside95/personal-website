import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";

export default function AboutMe() {
  return (
    <Container>
      <Row>
        <h3 className="about-me-heading">Me</h3>
      </Row>
      <Row className="technologies">
        <Col lg={6}>
          <h3 className="tech-heading">Technologies</h3>
        </Col>
        <Col lg={1}></Col>
        <Col lg={5}>
          <ul className="tech-list">
            <li>React</li>
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Git</li>
          </ul>
        </Col>
      </Row>
      <Row className="skills">
        <Col lg={6}>
          <h3 className="skills-heading">Skills</h3>
        </Col>
        <Col lg={1}></Col>
        <Col lg={5}>
          <ul className="skills-list">
            <li>Strategy</li>
            <li>Concept development</li>
            <li>Information architecture</li>
            <li>Client-facing communication</li>
            <li>Intra-business communication</li>
          </ul>
        </Col>
      </Row>
      <Row className="experience">
        <Col lg={6}>
          <h3 className="exp-heading">Experience</h3>
        </Col>
        <Col lg={1}></Col>
        <Col lg={5}>
          <ul className="exp-list">
            <li>
              Consultant, Copywriter | Serious Moonlight Consulting <br />
              January 2020 - present
            </li>
            <li>
              Copy Editor | Monkeyland Primate Sanctuary <br /> August -
              September 2020
            </li>
            <li>
              Tour Guide | Monkeyland Primate Sanctuary <br />
              January - April 2019
            </li>
          </ul>
        </Col>
      </Row>

      <Row className="education">
        <Col lg={6}>
          <h3 className="edu-heading">Education</h3>
        </Col>
        <Col lg={1}></Col>
        <Col lg={5}>
          <ul className="edu-list">
            <li>Learn React for Free | Scrimba</li>
            <li>The Complete Front-End Web Development Course | Udemy </li>
            <li>Front End Web Developer Nanodegree | Udacity</li>
            <li>
              National Certificate in Design Techniques – User-centred Design |{" "}
              <br />
              Red & Yellow Creative School of Business
            </li>
            <li>
              Struik PRH Creative Writing online short course | Penguin Random
              House South Africa
            </li>
            <li>
              Diploma in Copywriting | Red & Yellow Creative School of Business
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}
