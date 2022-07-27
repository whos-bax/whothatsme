import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import IntroduceButton from "./IntroduceButton";
import IntroduceImg from "./IntroduceImg";

function Introduce01({ setMoveTo }) {
  return (
    <Row id="introduceContent">
      <IntroduceImg />
      <Col md="7" id="introduceBox">
        <div className="contentEnter" >
          <div style={{ padding: "1rem" }}>
            <h1>꿈이 많은 어른 아이</h1>
          </div>
          <div id="introduceFirst">
            <p>
              안녕하세요, <b>박상호</b> 입니다.
            </p>
            <p>늘 새로운 도전을 추구하며 꿈꾸는 하루하루를 살고 있습니다.</p>
            <p>
              나이는 어른이지만, 늘 어린 아이처럼 호기심 가득한 마음으로 세상을
              바라보고 싶기에
            </p>
            <p>
              <b>꿈이 많은 어른 아이</b> 라고 생각해요.
            </p>
            <div
              style={{
                maxWidth: "28rem",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <p id="impactText">
                <b>저를 짧게 소개하면요,</b>
              </p>
              <p>
                → <b>새로운 도전과 변화</b>를 가지는 것을 두려워 하지 않아요.
              </p>

              <p>
                → <b>빠르게 학습하고 이해</b>하며,{" "}
                <b>흥미를 느끼는 분야에서는 뛰어난 집중력과 성장력</b>을 보여요.
              </p>

              <p>
                → 보이는 것이 아닌 <b>본질</b>을 알기를 원해요.
              </p>

              <p>
                → 사색에 잠겨 있을 때가 종종 있으며, 생각을 정리하는 것을
                좋아해요.
              </p>

              <p>→ 음악을 좋아하고, 만드는 재주가 있어요.</p>

              <p>→ MBTI 는 ENFP이에요.</p>
            </div>
          </div>
          <IntroduceButton clickMove={setMoveTo} />
        </div>
      </Col>
    </Row>
  );
}
export default Introduce01;
