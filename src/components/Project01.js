import React from "react";
import { Col, Dropdown, Image, ListGroup, Row } from "react-bootstrap";

function Project01({ projectListArr }) {
  return (
    <Row className="projectBox" id={projectListArr[0].id}>
      <div className="contentEnter">
        <div style={{ padding: "1rem 0" }}>
          <h1 id="impactText">
            <b>{projectListArr[0].name}</b>{" "}
          </h1>
          <p>{projectListArr[0].date}</p>
        </div>
        <Row id="projectBody">
          <Col md={6}>
            <Image
              src={process.env.PUBLIC_URL + "/images/project/project01.png"}
              id="projectImg"
            />
          </Col>
          <Col md={6}>
            <Row id="projectSummary">
              <ListGroup variant="flush" style={{ padding: 0 }}>
                <ListGroup.Item>
                  <p className="my-2" id="impactText">
                    추천 알고리즘을 제시하여 사용자의 편의성을 맞춘 쇼핑몰 제작
                  </p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <p>
                    <b>팀원</b> : 김수빈, 박상호, 윤지원, 이재연 (총 4명)
                  </p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <p>
                    <b>주요기능</b> : 관리자/사용자 기반의 쇼핑몰 운영 및 UI,
                    상품등록/삭제/수정, 장바구니, 카카오페이를 이용한 결제
                  </p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <p>
                    <b>Frontend</b> : React, JavaScript, axios, bootstrap
                  </p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <p>
                    <b>Backend</b> : Node.js
                  </p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <p>
                    <b>Database</b> : MongoDB
                  </p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <p id="linkText">
                    <a
                      href="https://compmath.korea.ac.kr/gitlab/students/shopping-mall"
                      target={"_blank"}
                    >
                      Gitlab
                    </a>
                  </p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <p className="my-2" id="impactText">
                    의의
                  </p>
                  <p>
                    → 대학교 1학년 시절 잠깐 배웠던 C언어를 제외하곤 프로그래밍
                    언어를 전혀 접해본 적이 없던 제게 새로운 길을 알려준 첫
                    프로젝트이자 공부였습니다. 이미 1-2년 공부를 진행했던
                    친구들과 함께 프로젝트를 하기에는 배워야 하는 것부터 스스로
                    공부해야 하는 양이 정말 산더미 같았지만, 하나씩 이해하고
                    배워가다 보니 속도도 붙고 점점 자신감이 생기는 것을 배울 수
                    있었습니다. 운이 좋게도 처음부터{" "}
                    <b>Git을 이용해서 협업 작업을 진행</b>하게 되었고,{" "}
                    <b>다른 사람들과 호흡을 맞춰가며 방향성을 설계하는 방법</b>
                    도 알아갈 수 있었습니다. 이 프로젝트를 계기로{" "}
                    <b>웹 개발자의 꿈을 꾸게 되는 첫 발자국</b>이 될 수
                    있었습니다.
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

export default Project01;
