import React from "react";
import { Col, Image, ListGroup, Row } from "react-bootstrap";

function Project05({ projectListArr }) {
  return (
    <Row className="projectBox" id={projectListArr[4].id}>
      <div className="contentEnter">
        <div style={{ padding: "1rem 0" }}>
          <h1 id="impactText">
            <b>{projectListArr[4].name}</b>{" "}
          </h1>
          <p>{projectListArr[4].date}</p>
        </div>
        <Row id="projectBody">
          <Col md={6}>
            <Image
              src={process.env.PUBLIC_URL + "/images/project/project05.png"}
              id="projectImg"
            />
            <Image
              src={process.env.PUBLIC_URL + "/images/project/project05-1.png"}
              id="projectImg"
            />
          </Col>
          <Col md={6}>
            <Row id="projectSummary">
              <ListGroup variant="flush" style={{ padding: 0 }}>
                <ListGroup.Item>
                  <p className="my-2" id="impactText">
                    Mysql과 PHP를 이용하여 Database 관리하기
                  </p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <p>
                    <b>팀원</b> : 개인 (총 1명)
                  </p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <p>
                    <b>주요기능</b> : 사용자가 입력한 값 데이터에 저장하기,
                    SQL문 이용해서 데이터 값 저장 및 수정, 삭제
                  </p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <p>HTML, CSS, JavaScript, APM (Apache,Php,Mysql)</p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <p id="linkText">
                    <a
                      href="https://github.com/whos-bax/dbcrud-php"
                      target={"_blank"}
                    >
                      Github
                    </a>
                  </p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <p className="my-2" id="meaningText">
                    배경
                  </p>
                  <p>
                    개인 홈페이지를 만들고자하는 마음이 있었기 때문에{" "}
                    <b>데이터베이스를 이해하고 공부</b>해야 할 필요성을
                    느꼈습니다.
                  </p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <p className="my-2" id="meaningText">
                    의의
                  </p>
                  <p>
                    SQL문을 이해하고 어떤 구조로 진행되는지를 이해하는 시간을
                    가졌습니다. 프로젝트를 진행할 때 교수님께서
                    데이터베이스에서는 전문가가 매우 중요하다고 말씀하셨는데,{" "}
                    <b>
                      보안과 경로의 문제가 없게 하기 위해서 정확하게 알아야만
                      한다
                    </b>
                    고 생각합니다.
                  </p>
                </ListGroup.Item>
              </ListGroup>
            </Row>
          </Col>
        </Row>
      </div>
    </Row>
  );
}

export default Project05;
