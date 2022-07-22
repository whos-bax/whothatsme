import React, { useRef, useState } from "react";
import {
  Button,
  Col,
  Image,
  Overlay,
  OverlayTrigger,
  Popover,
  ProgressBar,
  Row,
  Table,
  Tooltip,
} from "react-bootstrap";

import introduceImg from "../img/introduce.jpg";
import IntroduceButton from "./IntroduceButton";
import * as Icon from "../utils/Icon";
import Introduce02skills from "./Introduce02skills";

function Introduce02({ setMoveTo }) {
  const [show, setShow] = useState(false);
  const test = useRef();

  const languages = Icon.proficient;
  const langKeys = Object.keys(languages);

  const betteryVariant = (key) => {
    if (languages[key] > 60) {
      return "success";
    } else if (languages[key] > 40) {
      return "warning";
    } else return "danger";
  };

  return (
    <Row id="introduceContent">
      <Col md="5">
        <Image src={introduceImg} id="introduceImg" />
      </Col>
      <Col md="7" id="introduceBox">
        <div style={{ padding: "1rem" }}>
          <h1>꿈이 많은 어른 아이</h1>
        </div>
        <div id="introduceFirst" ref={test}>
          <p id="impactText">SKILLS</p>

          <Introduce02skills />

          <div
            style={{
              maxWidth: "28rem",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <p id="impactText">저를 짧게 소개하면요,</p>
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
        <IntroduceButton clickMove={setMoveTo} />
      </Col>
    </Row>
  );
}
export default Introduce02;
