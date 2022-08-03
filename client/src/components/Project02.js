import React from "react";
import { Col, Image, ListGroup, Row } from "react-bootstrap";

function Project02({ projectListArr }) {
  return (
    <Row className="projectBox" id={projectListArr[1].id}>
      <div className="contentEnter">
        <div style={{ padding: "1rem 0" }}>
          <h1 id="impactText">
            <b>{projectListArr[1].name}</b>{" "}
          </h1>
          <p>{projectListArr[1].date} * 중도 취소</p>
        </div>
        <Row id="projectBody">
          <Col md={6}>
            <Image
              src={process.env.PUBLIC_URL + "/images/project/project02.png"}
              id="projectImg"
            />
          </Col>
          <Col md={6}>
            <Row id="projectSummary">
              <ListGroup variant="flush" style={{ padding: 0 }}>
                <ListGroup.Item>
                  <p className="my-2" id="impactText">
                    개인 쇼핑몰 제작을 위한 프로젝트
                  </p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <p>
                    <b>팀원</b> : 박상호 외 1명 (총 2명)
                  </p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <p>
                    <b>Javascript, React, React-Bootstrap</b>
                  </p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <p>- 관리자/사용자 역할에 따른 쇼핑몰 UI 구분</p>
                  <p>- React-Bootsrap을 이용한 반응형 UI (웹/앱)</p>
                  <p>- Localstorage를 이용한 회원가입, 로그인, 로그아웃</p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <p className="my-2" id="meaningText">
                    배경
                  </p>
                  <p>
                    방학동안에 배웠던{" "}
                    <b>React로 직접 혼자만의 홈페이지를 제작</b>해보고 싶어서,
                    코딩을 배우고 싶어하는 동생과 함께 해보기로 했습니다. 나
                    또한 잘 안다고 할 수 없지만 둘의 열정이 있으면 공부하는데에
                    있어서 충분히 어느정도의 성과를 만들어 낼 수 있을 것이라
                    생각했습니다. 소재는 아는 지인이 실제로 판매하고 있는 상품을
                    바탕으로 진행했으며 차후에 실제 홈페이지로도 사용할 수 있게
                    된다면 도움이 되고자 하는 마음으로 시작했습니다.
                  </p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <p className="my-2" id="meaningText">
                    의의
                  </p>
                  <p>
                    이번 프로젝트를 진행하고 나서 가장 크게 배운 점은{" "}
                    <b>팀이 함께 움직여야 좋은 성과가 나온다</b>는 점이었습니다.
                    시작하기전에는 함께하기로 했지만, 바쁘다는 핑계로 한줄의
                    코드도 적지 않은 팀원을 같은 팀이라는 이유로 혼자
                    이끌어가려다보니 스스로도 너무 힘들었고 결과물 또한 나오지
                    않았습니다. 그래서 첫번째로는{" "}
                    <b>아직 혼자 무엇을 만들어 가기에는 많이 부족하다는 점</b>을
                    배우게 되었습니다. 또, 앞으로 어떤 팀이던 같은 프로젝트를
                    진행하게 될 때,{" "}
                    <b>
                      혼자만의 의견과 혼자만의 열정이 아닌 모두가 함께 하는 것이
                      팀으로써 가장 중요한 역할
                    </b>
                    이 아닐까 하는 큰 배움을 얻었습니다.
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

export default Project02;
