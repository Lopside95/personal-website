import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";

export default function Header() {
  function handleLoad() {}

  return (
    <Container>
      <Row className="header">
        {/* <Col lg={1}></Col> */}
        {/* <Col lg={4}>
          <p className="bio">
            I’m a frontend developer with a background in copywriting and UX
            design. I’ve worked as a strategist and copywriter and have a
            certificate in user-centred design. Over time I’ve come to realise
            that my desired role lies in coding.
          </p>
        </Col> */}
        <Col lg={1}></Col>
        <Col lg={5} className="intro">
          <p className="intro-text">
            My feelings toward long walks on the beach are varied and
            inconclusive.
            <br />
            It’s been several years since I ate an olive and I don’t like horror
            movies.
          </p>
          <p className="i-like-coding">But I do like coding.</p>
        </Col>
        <Col lg={1}></Col>
        <Col lg={3} className="prof-pic">
          <img className="prof-pic-img" src="./tree-pic.jpg" alt="" />
        </Col>

        <Col lg={2}></Col>
      </Row>
      <Row></Row>
    </Container>
  );
}
