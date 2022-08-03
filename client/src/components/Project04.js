import React from "react";
import { Col, Image, ListGroup, Row } from "react-bootstrap";

function Project04({ projectListArr }) {
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
              src={process.env.PUBLIC_URL + "/images/project/project04.png"}
              id="projectImg"
            />
          </Col>
          <Col md={6}>
            <Row id="projectSummary">
              <ListGroup variant="flush" style={{ padding: 0 }}>
                <ListGroup.Item>
                  <p className="my-2" id="impactText">
                    노마드코더 클론코딩하여, Vanilla JS와 HTML, CSS 만으로
                    Momentum 만들기
                  </p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <p>
                    <b>팀원</b> : 개인 (총 1명)
                  </p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <p>
                    <b>HTML, CSS, JavaScript</b>
                  </p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <p>- 현재 시각 알려주기</p>
                  <p>
                    - geolocation API로 현재위치 값을 알고, fetch 함수와
                    openweatherAPI 이용하여 현재 위치에 따른 온도 값 받아와서
                    뿌려주기
                  </p>
                  <p>
                    - localstorage를 이용하여 이름 값 저장, 불러오기, 초기화
                    하기
                  </p>
                  <p>- 새로고침이 될 때마다 배경화면 랜덤으로 보여주기</p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <p id="linkText">
                    <a
                      href="https://github.com/whos-bax/whos-momentum"
                      target={"_blank"}
                    >
                      Github
                    </a>
                  </p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <p id="linkText">
                    <a
                      href="https://whos-bax.github.io/whos-momentum/"
                      target={"_blank"}
                    >
                      Page
                    </a>
                  </p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <p className="my-2" id="meaningText">
                    배경
                  </p>
                  <p>
                    JavaScript에 대한 공부 없이 React로 시작한 입장에서{" "}
                    <b>기본을 더 공부해야겠다</b> 하는 생각이 들었습니다. 여름
                    프로젝트의 팀장의 조언으로 JavaScript를 더 공부해보자는
                    생각으로 시작했습니다.
                  </p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <p className="my-2" id="meaningText">
                    의의
                  </p>
                  <p>
                    HTML과 Vanilla JS, CSS만을 이용해서 만들어보면서{" "}
                    <b>
                      왜 React를 사용하고 Bootstrap을 사용하려 하는지에 대한
                      이유
                    </b>
                    를 이해할 수 있었습니다. React는 컴포넌트를 나누어서
                    사용해서 각 부분 별로 작업이 가능하기에 이 프로젝트와
                    비교하여 장점을 극명히 느낄 수 있었습니다. 기본이 되는
                    자바스크립트를 더 알고 이해하는 시간을 가질 수 있었습니다.
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

export default Project04;
