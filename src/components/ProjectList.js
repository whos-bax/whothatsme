import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link, Route, Routes } from "react-router-dom";
import Project01 from "./Project01";

function ProjectList({ projectListArr }) {
  return (
    <Row className="projectBox" id="list">
      <div className="contentEnter">
        <div style={{ padding: "1rem" }}>
          <h1 id="impactText">project list</h1>
        </div>
        <div id="introduceContentBody">
          <ul>
            {projectListArr.map((list, idx) => (
              <li key={idx}>
                <Link to={`${list.id}`} id="project-hash-list">
                  <p>
                    <b>{list.name}</b> {list.date}{" "}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Row>
  );
}

export default ProjectList;
