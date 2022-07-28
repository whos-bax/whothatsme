import React from "react";
import "../css/Project.css";
import { Container, Row } from "react-bootstrap";
import Intro from "../components/Intro";

function Project() {
  return (
    <Container fluid className="pageEnter" id="project">
      <Row id="introduceContent">
        <Intro />
      </Row>
    </Container>
  );
}

export default Project;
