import React from "react";
import { Col, Image, ListGroup, Row } from "react-bootstrap";

function Project06({ projectListArr }) {
  return (
    <Row className="projectBox" id={projectListArr[5].id}>
      <div className="contentEnter">
        <div style={{ padding: "1rem 0" }}>
          <h1 id="impactText">
            <b>{projectListArr[5].name}</b>{" "}
          </h1>
          <p>{projectListArr[5].date}</p>
        </div>
        <Row id="projectBody">
          <Col md={6}>
            <Image
              src={process.env.PUBLIC_URL + "/images/project/project06.png"}
              id="projectImg"
            />
            <Image
              src={process.env.PUBLIC_URL + "/images/project/project06-1.png"}
              id="projectImg"
            />
          </Col>
          <Col md={6}>
            <Row id="projectSummary">
              <ListGroup variant="flush" style={{ padding: 0 }}>
                <ListGroup.Item>
                  <p className="my-2" id="impactText">
                    "음악을 얼마나 즐기시나요?" 설문조사 페이지 만들기
                  </p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <p>
                    <b>팀원</b> : 개인 (총 1명)
                  </p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <p>
                    <b>HTML, CSS, JavaScript / Node.js, express / SQLite3</b>
                  </p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <p>- 해시(#)를 이용하여 페이지 지정 값으로 스크롤 기능</p>
                  <p>- HTTP method를 이용하여 설문조사 값을 저장 및 불러오기</p>
                  <p>- SQLite를 이용한 DB관리</p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <p id="linkText">
                    <a
                      href="https://github.com/whos-bax/music-survey"
                      target={"_blank"}
                    >
                      Github
                    </a>
                  </p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <p id="linkText">
                    <a
                      href="https://whos-bax.github.io/music-survey/public/index.html"
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
                    CRUD에 관심이 생기면서 가벼운 주제부터 해보자고
                    생각했습니다. 수업을 토대로 JavaScript에 대해서 더
                    공부하면서 추가적으로{" "}
                    <b>저장하고 읽고 수정하고 삭제까지 하는 과정을 이해</b>하고,{" "}
                    <b>SQL</b>을 이용해서 이를 원활하게 사용하고자 하는 것을
                    배우고자 했습니다.
                  </p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <p className="my-2" id="meaningText">
                    의의
                  </p>
                  <p>
                    한 학기에 SQL문을 가까이서 배우고 이해하면서 어떤 흐름인지를
                    조금이나마 깨닫게 되었습니다. Table을 만들고 그에 따른
                    데이터를 선별하고 선택하면서 쉬워보이지만 잘못하면 다른
                    정보들도 가져오거나, 필요한 정보를 빼놓고 올 수도 있다는
                    생각을 하게 되었습니다. 데이터베이스 뿐만 아니라 프론트 혹은
                    백에서 요청하는 값이 실수가 나면 전혀 전달이 이루어지지
                    않듯이{" "}
                    <b>정확하게 이해하고 사용해야 오류 없이 이뤄지는 것</b>을
                    더욱 몸소 느끼게 되었습니다.{" "}
                    <b>
                      HTTP method를 이용하여 CRUD, 즉 REST API의 구조가 조금 더
                      와닿는 수업이었습니다.
                    </b>
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

export default Project06;
