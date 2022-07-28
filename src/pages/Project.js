import React, { useEffect, useState } from "react";
import "../css/Project.css";
import { Container, Row } from "react-bootstrap";
import Intro from "../components/Intro";
import { useLocation } from "react-router-dom";
import Project01 from "../components/Project01";

function Project() {
  const search = useLocation();
  const [bigName, setBigName] = useState(false);

  useEffect(() => {
    if (bigName === true)
      document.getElementById("project").style.backdropFilter = "blur(12px)";
  }, [bigName]);

  return (
    <>
      {!bigName ? (
        <Container fluid className="pageEnter" id="project">
          <Row id="projectContent">
            <Intro setBigName={setBigName} />
          </Row>
        </Container>
      ) : (
        <Container fluid id="project">
          <Row className="afterIntro" id="projectContent">
            <Project01 />
            
          </Row>
        </Container>
      )}
    </>
  );
}

export default Project;
