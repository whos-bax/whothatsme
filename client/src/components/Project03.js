import React from "react";
import { Col, Dropdown, Image, ListGroup, Row } from "react-bootstrap";

function Project03({ projectListArr }) {
  return (
    <Row className="projectBox" id={projectListArr[2].id}>
      <div className="contentEnter">
        <div style={{ padding: "1rem 0" }}>
          <h1 id="impactText">
            <b>{projectListArr[2].name}</b>{" "}
          </h1>
          <p>{projectListArr[2].date}</p>
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
                  <p className="my-2" id="impactText">
                    사용자 지정 장소에 따라 효율적인 전력 사용을 돕고자 하는
                    프로젝트 진행
                  </p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <p>
                    <b>팀장</b> : 안강민 (Backend), <b>팀원</b> :
                    박상호(Frontend), 박수영(DataProcessing) (총 3명)
                  </p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <p>
                    <b>
                      Javascript, React, React-Router-Dom, React-Bootstrap,
                      Axios
                    </b>
                  </p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <p>- React-Bootstrap을 이용한 반응형 UI (웹/앱)</p>
                  <p>
                    - React-Router-Dom을 이용하여 페이지 재로딩 없이 다른 페이지
                    방문
                  </p>
                  <p>
                    - 회원가입, 로그인/로그아웃, 마이페이지 등 REST API 구현
                  </p>
                  <p>
                    - Kakao API를 이용해 카카오톡을 통한 로그인/로그아웃 구현
                  </p>
                  <p>- jwt을 이용한 로그인/로그아웃 관리</p>
                  <p>
                    - islogined 함수를 이용하여 로그인 여부에 따른 Guest/User
                    UI/기능 구분
                  </p>
                  <p>
                    - DB에 저장된 위치 정보에 따라 시/군/구 구분하여 화면에
                    나타내기
                  </p>
                  <p>
                    - openweatherAPI를 사용하여 사용자가 지정한 위치의 온도값
                    나타내기
                  </p>
                  <p>
                    - Chart.js, SweetAlert 라이브러리를 사용하여 데이터 시각화
                    및 디자인 요소 추가
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
                <ListGroup.Item>
                  <p className="my-2" id="meaningText">
                    배경
                  </p>
                  <p>
                    21년 여름 방학에 진행 했던 프로젝트로, 온실가스의 배출이
                    많아지면서 지구온난화가 급격해지는 것을 방지하고자{" "}
                    <b>효율적인 에너지 사용</b>을 위한 웹 페이지를
                    제작하였습니다.{" "}
                    <b>
                      온도 유지를 위한 전력 소모가 더 큰 점을 고려하여, 온도
                      조절을 효율적으로 하는 방향으로 진행
                    </b>
                    하려 했습니다. 데이터를 수집하고, 온도를 예측하여 사용자에게
                    온도 조절 장치 사용을 제안하는 방향으로 진행했습니다.
                  </p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <p className="my-2" id="meaningText">
                    의의
                  </p>
                  <p>
                    지난 프로젝트와 다르게 3명의 팀원이 협력하고 의지하여 하나의
                    결과물을 만들어낼 수 있었습니다. Frontend, Backend,
                    DataProcessing, 세 부분을 각각 담당하여 모든 것이 어우러지고
                    조화되도록 하는 것이 주된 목적이었습니다. 거의 매일 같이
                    회의하고 이야기를 나누었고,{" "}
                    <b>Frontend에 전반적인 부분을 담당</b>하면서 Chart.js, SweetAlert2 등 다양한 라이브러리를 사용해보고 디자인적으로, 기능적으로 더 잘 어울리는 부분을 고민하게 되었습니다. 회원가입과 로그인에 관련하여서 어떻게 하면 보다 안전하게 정보를 주고 받을 수 있을까 고민하다가 <b>jwt</b>에 대해 공부해보고 접하게 되었습니다. 데이터를 직접 넘기는 것이 아닌 토큰을 주고 받으면서 유효하고 인증 되었는지를 검증하는 방법을 사용하므로써 더 안전하게 진행할 수 있었습니다. 또, KakaoAPI를 이용해 보면서 외부 REST API를 적용하는 방법도 배우는 시간이었습니다.
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

export default Project03;
