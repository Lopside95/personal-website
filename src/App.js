import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { useEffect } from "react";
import { nanoid } from "nanoid";
import Navbar from "./Navbar";
import Header from "./Header";
import Main from "./Main";
import Frontend from "./Frontend";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Container className="main-container">
        <Navbar />
        <br />
        {/* instead of these being breaks they could be rows */}
        <Header />
        <Row className="row-break-1">
          {/* <Col lg={2} style={{ width: "40px" }}></Col> */}
          <Col lg={1}></Col>
          <Col lg={2} className="break-1-col-right">
            <h4>Projects</h4>
          </Col>
          <Col lg={7}></Col>
        </Row>
        <Frontend />
        <br />
        <Main />
      </Container>
    </div>
  );
}

export default App;
