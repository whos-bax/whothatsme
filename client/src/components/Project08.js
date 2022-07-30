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
                    <b>주요기능</b> : 회원가입, 로그인/로그아웃, 원장/교사/학부모에 따른 UI 및 기능 차별화, 일정 안내, 공지사항 작성/수정/삭제, 댓글기능
                  </p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <p>
                    <b>Frontend</b> : React, JavaScript, React-Bootstrap, React-Router-Dom
                  </p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <p>
                    <b>Backend</b> : Node.js, express
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
                  연구실에서 같이 프로젝트를 하던 멤버들과 교수님과 첫 프로젝트를 진행해보기로 했습니다. 각자 공부했던 것을 살려서 <b>프론트엔드, 백엔드, 데이터베이스까지 우리 손으로 직접 진행</b>해보며 오류가 생기거나 문제가 생기는 부분에서 교수님의 피드백을 받고 수정하며 완성시키는 것이 목표였습니다. 교수님 아는 지인분께 우리가 만든 것을 드려서 직접 사용하시기로 했습니다.
                  </p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <p className="my-2" id="meaningText">
                    의의
                  </p>
                  <p>
                  우선 중도 취소 된 이유는 같이 하던 팀원들이 개인적인 사정으로 그만두면서 해체되었고 교수님과 저 둘만이 남아 짧은 시간 내에 전부를 마무리 해야만 했기 때문에 현실적으로 어려워 보이게 되어 고민 끝에 그만하게 되었습니다. 정말 많은 시간을 투자했고, 그만큼 애착이 있었던 프로젝트 였기 때문에 그만해야한다는 생각이 들 때는 굉장히 힘들었습니다. 
                  </p>
                  <p>
                  우선 <b>TypeScript</b>를 사용함으로써 코드를 짜는데 조금 더 정확하게 진행 되었음을 느꼈습니다. 타입 지정을 올바르게 하므로써 오류를 방지할 수 있었습니다. 전체적인 <b>데이터베이스 설계</b>부터 각 <b>개인의 역할도 분담</b>하여 각자의 파트별 해결사항을 해결하도록 하였고, <b>매주 1~2회의 회의</b>를 통해서 각자 잘된점, 안된점에 대해서 회의를 하고 서로에게 피드백을 줄 수 있는 시간을 갖을 수 있었습니다. <b>Gitlab</b>을 통한 협업을 진행했으며 issue란에 개인의 문제, to do 등을 적어 서로가 해야 할 것을 공유하고 도움을 줄 수 있도록 했습니다. 회의가 끝나면 wiki를 통해서 회의 내용을 기록하고 그 외에 <b>fullcalender</b>나 <b>tailwind, Fontawesome</b> 등 이전에 접하지 않았거나 헷갈리는 라이브러리에 대한 간략한 소개, 사용법을 적어 사용하는데 불편함이 없도록 했습니다.
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
