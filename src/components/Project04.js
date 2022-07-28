import React from "react";
import { Col, Dropdown, Image, ListGroup, Row } from "react-bootstrap";
import { projectListArr } from "./ProjectList";

function Project03() {
  return (
    <Row className="projectBox" id={projectListArr[3].id}>
      <div className="contentEnter">
        <div style={{ padding: "1rem 0" }}>
          <h1 id="impactText">
            <b>{projectListArr[3].name}</b>{" "}
          </h1>
          <p>{projectListArr[3].date}</p>
        </div>
        <Row id="projectBody">
          <Col md={6}>
            <Image
              src={process.env.PUBLIC_URL + "/images/project/project03.png"}
              id="projectImg"
            />
            <Image
              src={process.env.PUBLIC_URL + "/images/project/project03-1.png"}
              id="projectImg"
            />
          </Col>
          <Col md={6}>
            <Row id="projectSummary">
              <ListGroup variant="flush" style={{ padding: 0 }}>
                <ListGroup.Item>
                  <p id="impactText">
                  노마드코더를 참고하여, Vanilla JS와 HTML, CSS 만으로 Momentum 만들기
                  </p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <p>
                  <b>팀장</b> 개인 (총 1명)
                  </p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <p>
                    <b>주요기능</b> : 사용자 편의를 위한 UI, 반응형 화면, 시/군/구에 따른 위치값 설정, 현재 온도와 이전 온도 값을 받고 미래 값 예측
                  </p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <p>
                    <b>Frontend</b> : React, JavaScript, axios, React-Bootstrap, React-router-dom
                  </p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <p>
                    <b>Backend</b> : Node.js, express
                  </p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <p>
                    <b>DataProcessing</b> : Python, TensorFlow, NumPy
                  </p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <p>
                    <b>Database</b> : PostgreSQL
                  </p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <p id="linkText">
                    <a
                      href="https://compmath.korea.ac.kr/gitlab/students/eue"
                      target={"_blank"}
                    >
                      Gitlab
                    </a>
                  </p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <p id="linkText">
                    <a
                      href="https://www.notion.so/dorakang612/EUE-047f1812c6c24096a528dfd3330c227d "
                      target={"_blank"}
                    >
                      Notion
                    </a>
                  </p>
                </ListGroup.Item>
              </ListGroup>
            </Row>
            <Row id="projectDropdown">
            <Dropdown drop='up'>
                <Dropdown.Toggle variant="success">
                  배경
                </Dropdown.Toggle>

                <Dropdown.Menu style={{border: "3px #171717 solid"}}>
                  <Dropdown.ItemText>
                    <p>
                    21년 여름 방학에 진행 했던 프로젝트로, 온실가스의 배출이 많아지면서 지구온난화가 급격해지는 것을 방지하고자 <b>효율적인 에너지 사용</b>을 위한 웹 페이지를 제작하였습니다. <b>온도 유지를 위한 전력 소모가 더 큰 점을 고려하여, 온도 조절을 효율적으로 하는 방향으로 진행</b>하려 했습니다. 데이터를 수집하고, 온도를 예측하여 사용자에게 온도 조절 장치 사용을 제안하는 방향으로 진행했습니다.
                    </p>
                  </Dropdown.ItemText>
                </Dropdown.Menu>
              </Dropdown>

              <Dropdown drop='down'>
                <Dropdown.Toggle variant="warning">
                  의의
                </Dropdown.Toggle>

                <Dropdown.Menu style={{border: "3px #171717 solid"}}>
                  <Dropdown.ItemText>
                    <p>
                    지난 프로젝트와 다르게 3명의 팀원이 협력하고 의지하여 하나의 결과물을 만들어낼 수 있었습니다. Frontend, Backend, DataProcessing, 세 부분을 각각 담당하여 모든 것이 어우러지고 조화되도록 하는 것이 주된 목적이었습니다. 거의 매일 같이 회의하고 이야기를 나누었고, <b>Frontend에 전반적인 부분을 담당</b>하면서 Chart.js, SweetAlert2 등 다양한 라이브러리를 사용해보고 디자인적으로, 기능적으로 더 잘 어울리는 부분을 고민하게 되는 소중한 시간이었습니다. 또 KakaoAPI를 이용해 보면서 회원가입과 로그인에 직접적으로 관여해보는 시간도 갖을 수 있었습니다.
                    </p>
                  </Dropdown.ItemText>
                </Dropdown.Menu>
              </Dropdown>
            </Row>
          </Col>
        </Row>
      </div>
    </Row>
  );
}

export default Project03;
