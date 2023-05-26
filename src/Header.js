import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";

export default function Header() {
  return (
    <Container>
      <Row className="header">
        <Col className="header-col">
          <h2 className="intro-text">
            My feelings toward long walks on the beach are varied and
            inconclusive.
            <br />
            It’s been several years since I ate an olive and I don’t like horror
            movies.
          </h2>
          <h1 className="i-like-text">But I do like coding</h1>
          <img className="prof-pic-img" src="./cv-picture.jpg" alt="" />
          <p className="bio">
            I’m James, a frontend developer with a background in copywriting and
            UX design. I’ve worked as a strategist and copywriter and have a
            certificate in user-centred design, where my strength is in
            information architecture.
            <br /> Over time I’ve come to realise that my future lies in coding
            and last I year I began my journey into frontend development.
          </p>
        </Col>
      </Row>
    </Container>
  );
}
