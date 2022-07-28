import React, { useEffect, useState } from "react";
import "../css/Project.css";
import { Button, Container, Row } from "react-bootstrap";
import Intro from "../components/Intro";
import { useLocation } from "react-router-dom";
import ProjectList from "../components/ProjectList";
import Project01 from "../components/Project01";
import Project02 from "../components/Project02";
import Project03 from "../components/Project03";

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
          <Row id="projectContainer">
            <Intro setBigName={setBigName} />
          </Row>
        </Container>
      ) : (
        <Container fluid id="project">
          <Container className="afterIntro" id="projectContainer">
            <Row id="projectRow">
              <ProjectList id="list" />
              <Project01 />
              <Project02 />
              <Project03 />

              <Button id="scrollBtn">
                <a href="#list">↑</a>
              </Button>
            </Row>
          </Container>
        </Container>
      )}
    </>
  );
}

export default Project;
