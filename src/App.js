import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <Container fluid className="App">
      <BrowserRouter>
        <Welcome />
      </BrowserRouter>
    </Container>
  );
}

export default App;
