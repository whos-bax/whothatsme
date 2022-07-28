import React from "react";
import { Col, Row } from "react-bootstrap";

export const projectListArr = [
  { id: "kushop", name: "KU# 쇼핑몰 홈페이지", date: "(20.12 ~ 21.02)" },
  { id: "lotus-shop", name: "Lotus Shop", date: "(21.03 ~ 21.06)" },
  { id: "eue", name: "EUE", date: "(21.07 ~ 21.08)" },
  { id: "whos-mometum", name: "whos-momentum", date: "(21.08 ~ 21.09)" },
  { id: "music-survey", name: "Music Survey", date: "(21.09 ~ 21.12)" },
  {
    id: "kids-well",
    name: "Kids-well 어린이집 홈페이지",
    date: "(21.09 ~ 22.01)",
  },
  { id: "whothatsme", name: "꿈이 많은 어른 아이", date: "(22.07)" },
];

function ProjectList() {
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
                <a href={`#${list.id}`}>
                  <p>
                    <b>{list.name}</b> {list.date}{" "}
                  </p>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Row>
  );
}

export default ProjectList;
