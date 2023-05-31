import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import Header from "./Header";
import Main from "./AboutMe";
import Frontend from "./Frontend";
import "./App.css";
import AboutMe from "./AboutMe";

function App() {
  return (
    <div className="App">
      <Container className="main-container">
        <Navbar />
        <Row style={{ height: "1em" }}></Row>
        <Header />
        <Row style={{ height: "100px" }}></Row>
        <Frontend />
        <Row style={{ height: "100px" }}></Row>
        <AboutMe />
        <Row style={{ height: "100px" }}></Row>
        <Row className="footer">
          <p>+41 76 570 1553</p>
          <p>james.p.wallington@gmail.com</p>
        </Row>
      </Container>
    </div>
  );
}

export default App;
