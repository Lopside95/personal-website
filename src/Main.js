import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";

export default function Main() {
  return (
    <Container>
      <Row>
        {/* <Col lg={1}></Col> */}
        <Col className="main" lg={12}>
          <Row className="tech-and-skills">
            <Col className="technologies" lg={2}>
              <ul className="tech-list">
                <h6 className="tech-ul-heading">Technologies</h6>
                <li>React</li>
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Git</li>
              </ul>
            </Col>
            <Col className="skills" lg={3}>
              <ul className="skills-list">
                <h6 className="skills-ul-heading">Skills</h6>
                <li>Strategy</li>
                <li>Concept development</li>
                <li>Information architecture</li>
                <li>Client-facing communication</li>
                <li>Intra-business communication</li>
              </ul>
            </Col>

            <Col className="work-experience" lg={5}>
              <ul className="work-exp-list">
                <h6>Work Experience</h6>
                <li>Consultant, Copywriter | Serious Moonlight Consulting</li>
                January 2020 - present
                <li>Copy Editor | Monkeyland Primate Sanctuary</li>
                August - September 2020
                <li>Tour Guide | Monkeyland Primate Sanctuary</li>
                January - April 2019
              </ul>
            </Col>
          </Row>
          <br />
          <Row>
            <Col className="education" lg={8}>
              <ul className="edu-list">
                <h6>Education</h6>
                <li>Learn React for Free | Scrimba</li>
                <li>The Complete Front-End Web Development Course | Udemy </li>
                <li>Front End Web Developer Nanodegree | Udacity</li>
                <li>
                  National Certificate in Design Techniques – User-centred
                  Design | Red & Yellow Creative School of Business
                </li>
                <li>
                  Struik PRH Creative Writing online short course | Penguin
                  Random House South Africa
                </li>
                <li>
                  Diploma in Copywriting | Red & Yellow Creative School of
                  Business
                </li>
              </ul>
            </Col>
          </Row>
        </Col>
        {/* <Col lg={2}></Col> */}
      </Row>
    </Container>
  );
}
