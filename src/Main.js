import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";

export default function Main() {
  return (
    <Container>
      <Row>
        <Col className="education" lg={5}>
          <ul className="edu-list">
            <h5>Education</h5>
            <li>Learn React for Free | Scrimba</li>
            <li>The Complete Front-End Web Development Course | Udemy </li>
            <li>Front End Web Developer Nanodegree | Udacity</li>
            <li>
              National Certificate in Design Techniques – User-centred Design |
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
        <Col className="technologies" lg={3}>
          <ul className="tech-list">
            <h5>Technologies</h5>
            <li>React</li>
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Git</li>
          </ul>
        </Col>
        <Col className="work-experience" lg={4}>
          <ul className="work-exp-list">
            <h5>Work Experience</h5>

            <li>
              Strategy Consultant, Copywriter | Serious Moonlight Consulting
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}
