import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import introduceImg from "../img/introduce.jpg";
import IntroduceButton from "./IntroduceButton";

function Introduce01({setMoveTo}) {
  return (
    <Row id="introduceContent">
      <Col md="5">
        <Image src={introduceImg} id="introduceImg" />
      </Col>
      <Col md="7" id="introduceBox">
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
            바라보고 싶어서 스스로를 <b>어른 아이</b> 라고 생각해요.
          </p>
          <div
            style={{
              width: "80%",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <p style={{ color: "#FFC54D" }}>
              <b>저를 짧게 소개하면요,</b>
            </p>
            <p>→ 새로운 도전과 변화를 가지는 것을 두려워 하지 않아요.</p>

            <p>
              → 빠르게 학습하고 이해하며, 흥미를 느끼는 분야에서는 뛰어난
              집중력과 성장력을 보여요.
            </p>

            <p>→ 보기가 아닌 본질을 알기를 원해요.</p>

            <p>
              → 사색에 잠겨 있을 때가 종종 있으며, 생각을 정리하는 것을
              좋아해요.
            </p>

            <p>→ 음악을 좋아하고, 만드는 재주가 있어요.</p>

            <p>→ MBTI 는 ENFP이에요.</p>

          </div>
        </div>
            <IntroduceButton clickMove={setMoveTo}/>
      </Col>
    </Row>
  );
}
export default Introduce01;
