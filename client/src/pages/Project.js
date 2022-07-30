import React, { useEffect, useState } from "react";
import "../css/Project.css";
import { Container, Dropdown, DropdownButton, Row } from "react-bootstrap";
import Intro from "../components/Intro";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import ProjectList from "../components/ProjectList";
import Project01 from "../components/Project01";
import Project02 from "../components/Project02";
import Project03 from "../components/Project03";
import Project04 from "../components/Project04";
import Project05 from "../components/Project05";
import Project06 from "../components/Project06";
import Project07 from "../components/Project07";
import Project08 from "../components/Project08";

const projectListArr = [
  { id: "kushop", name: "KU# 쇼핑몰 홈페이지", date: "(20.12 ~ 21.02)" },
  { id: "lotus-shop", name: "Lotus Shop", date: "(21.03 ~ 21.06)" },
  {
    id: "eue",
    name: "EUE (Efficient Usage of Electricity)",
    date: "(21.07 ~ 21.08)",
  },
  { id: "whos-mometum", name: "whos-momentum", date: "(21.08 ~ 21.09)" },
  { id: "dbcrud-php", name: "DBcrud-php", date: "(21.09 ~ 21.12)" },
  { id: "music-survey", name: "Music Survey", date: "(21.09 ~ 21.12)" },
  {
    id: "kids-well",
    name: "Kids-well 어린이집 홈페이지",
    date: "(21.09 ~ 22.01)",
  },
  { id: "whothatsme", name: "꿈이 많은 어른 아이", date: "(22.07)" },
];

function Project() {
  const search = useLocation();
  const [bigName, setBigName] = useState(false);

  // 배경 블러
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
              <Routes>
                <Route
                  path="/"
                  element={<ProjectList projectListArr={projectListArr} />}
                />
                <Route
                  path={`/${projectListArr[0].id}`}
                  element={<Project01 projectListArr={projectListArr} />}
                />
                <Route
                  path={`/${projectListArr[1].id}`}
                  element={<Project02 projectListArr={projectListArr} />}
                />
                <Route
                  path={`/${projectListArr[2].id}`}
                  element={<Project03 projectListArr={projectListArr} />}
                />
                <Route
                  path={`/${projectListArr[3].id}`}
                  element={<Project04 projectListArr={projectListArr} />}
                />
                <Route
                  path={`/${projectListArr[4].id}`}
                  element={<Project05 projectListArr={projectListArr} />}
                />
                <Route
                  path={`/${projectListArr[5].id}`}
                  element={<Project06 projectListArr={projectListArr} />}
                />
                <Route
                  path={`/${projectListArr[6].id}`}
                  element={<Project07 projectListArr={projectListArr} />}
                />
                <Route
                  path={`/${projectListArr[7].id}`}
                  element={<Project08 projectListArr={projectListArr} />}
                />
              </Routes>

              <DropdownButton id="projectListBtn" title="">
                <Dropdown.Item as="button" key={"0"}>
                  <Link to="">
                    <p id="impactText">LIST</p>
                  </Link>
                </Dropdown.Item>
                <Dropdown.Divider />
                {projectListArr.map((list, idx) => (
                  <Dropdown.Item as="button" key={idx}>
                    <Link to={list.id}>
                      <p>{list.name}</p>
                    </Link>
                  </Dropdown.Item>
                ))}
              </DropdownButton>
            </Row>
          </Container>
        </Container>
      )}
    </>
  );
}

export default Project;
