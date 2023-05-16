import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { useEffect } from "react";
import { nanoid } from "nanoid";
import Navbar from "./Navbar";
import Header from "./Header";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Container className="main-container">
        <Navbar />
        <br />
        <Header />
      </Container>
    </div>
  );
}

export default App;
