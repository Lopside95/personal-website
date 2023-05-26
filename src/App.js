import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
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
        <Header />
        <Row style={{ height: "40px" }}></Row>

        <Frontend />
        <br />
        <Main />
      </Container>
    </div>
  );
}

export default App;
