import React from "react";
import { Col, Image, ListGroup, Row } from "react-bootstrap";

function Project07({ projectListArr }) {
  return (
    <Row className="projectBox" id={projectListArr[7].id}>
      <div className="contentEnter">
        <div style={{ padding: "1rem 0" }}>
          <h1 id="impactText">
            <b>{projectListArr[7].name}</b>{" "}
          </h1>
          <p>{projectListArr[7].date}</p>
        </div>
        <Row id="projectBody">
          <Col md={6}>
            <Image
              src={process.env.PUBLIC_URL + "/images/project/project08-1.png"}
              id="projectImg"
            />
            <Image
              src={process.env.PUBLIC_URL + "/images/project/project08-2.png"}
              id="projectImg"
            />
            <Image
              src={process.env.PUBLIC_URL + "/images/project/project08-3.png"}
              id="projectImg"
            />
          </Col>
          <Col md={6}>
            <Row id="projectSummary">
              <ListGroup variant="flush" style={{ padding: 0 }}>
                <ListGroup.Item>
                  <p className="my-2" id="impactText">
                    포트폴리오 제작
                  </p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <p>
                    <b>팀원</b> : 박상호 (총 1명)
                  </p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <p>
                    <b>
                      프론트엔드 포트폴리오 제작을 위해 기획, Client, Server, DB
                      구현 및 Github page 웹 호스팅
                    </b>
                  </p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <p>
                    <b>
                      Javascript, React, React-Router-Dom, React-Bootstrap,
                      Axios / Node.js, Express / MariaDB(MySQL)
                    </b>
                  </p>
                </ListGroup.Item>{" "}
                <ListGroup.Item>
                  <p>- React-Bootstrap을 이용한 반응형 UI (웹/앱)</p>
                  <p>
                    - React-Router-Dom을 이용하여 페이지 재로딩 없이 다른 페이지
                    방문
                  </p>
                  <p>
                    - Axios와 async-await를 이용한 비동기적으로 Client-Server
                    연동
                  </p>
                  <p>- REST API를 통해 방명록 기능 구현 (CRUD)</p>
                  <p>- Email.js를 이용한 클라이언트에서 이메일 전송</p>
                  <p>- MariaDB(MySQL)을 이용해 DB 관리</p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <p id="linkText">
                    <a
                      href="https://github.com/whos-bax/whothatsme"
                      target={"_blank"}
                    >
                      Github
                    </a>
                  </p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <p id="linkText">
                    <a
                      href="https://whos-bax.github.io/whothatsme/"
                      target={"_blank"}
                    >
                      Pages
                    </a>
                  </p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <p className="my-2" id="meaningText">
                    배경
                  </p>
                  <p>
                    이전에 했던 프로젝트를 바탕으로 통틀어서 스스로를 소개하는
                    홈페이지를 만들기로 했습니다. 내가 어느정도까지 알고 있는지{" "}
                    <b>스스로 메타인지하기 위한 수단으로 사용</b>하므로써 본인을
                    돌아보는 시간을 갖고자 했습니다.
                  </p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <p className="my-2" id="meaningText">
                    의의
                  </p>
                  <p>
                    이전에 했던 프로젝트에서는 결국 내가 제대로 할 수 있었던
                    것은 너무나도 작은 범위였구나 하는 생각을 했습니다.{" "}
                    <b>Client-Server-DB 의 연동</b>을 이해하면서 직접 기능이 될
                    수 있기까지 짧은 기간이지만 많은 시간이 소요되었습니다.
                    우선적으로 리액트의 대한 이해를 높히는 시간을 갖을 수
                    있었으며, <b>Hook을 이용해 상태변화에 따른 페이지의 변동</b>
                    이라는 점을 배우게 되었습니다. 또{" "}
                    <b>
                      React-Router-Dom을 이용해서 페이지가 재로드 되지 않고,
                      컴포넌트의 값을 변화
                    </b>
                    하도록 하는 구현을 하면서 개발자와 사용자 둘의 입장에서
                    바라볼 수 있게 되었습니다. 또,<b>CRUD 기능을 구현</b>하는
                    과정에서는 클라이언트와 서버, 데이터베이스가 상호적으로
                    데이터를 주고 받도록 하면서 원하고자 하는 바가 성공할 떄는
                    굉장히 기뻤습니다. 가장 힘들었던 부분은 서버에 대한 이해도가
                    전혀 없어서 시작하는 부분부터 어려웠는데, 처음부터 천천히
                    진행하면서 구조가 어떻게 되어있는지를 생각하다보니 생각보다
                    쉽게 마무리 되었습니다.
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

export default Project07;
