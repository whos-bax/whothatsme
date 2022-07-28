import React, { useEffect, useState } from "react";
import "../css/Project.css";
import { Container, Row } from "react-bootstrap";
import Intro from "../components/Intro";
import { useLocation } from "react-router-dom";
import Introduce01 from "../components/Introduce01";

function Project() {
  const search = useLocation();
  const [bigName, setBigName] = useState(false);

  useEffect(() => {
    if (bigName === true)
      document.getElementById("project").style.backdropFilter = "blur(12px)";
  }, [bigName]);

  return (
    <Container fluid className="pageEnter" id="project">
      <Row id="introduceContent">
        <Intro setBigName={setBigName} />
        <Introduce01/>
      </Row>
    </Container>
  );
}

export default Project;
