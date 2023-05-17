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
        <Header />
        <br />
        <Frontend />
        <br />
        <Main />
      </Container>
    </div>
  );
}

export default App;
