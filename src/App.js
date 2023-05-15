import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { useEffect } from "react";
import { nanoid } from "nanoid";
import Navbar from "./Navbar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Container>
        {/* <Row className="navbar-row"> */}
        <Navbar />
        {/* </Row> */}
        <Row className="header"></Row>
      </Container>
    </div>
  );
}

export default App;
