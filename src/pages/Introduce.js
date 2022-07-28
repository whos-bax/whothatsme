import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Intro from "../components/Intro";
import Introduce01 from "../components/Introduce01";
import Introduce02 from "../components/Introduce02";
import Introduce03 from "../components/Introduce03";
import IntroduceImg from "../components/IntroduceImg";
import "../css/Introduce.css";

function Introduce() {
  const navigate = useNavigate();
  const search = useLocation();
  const [moveTo, setMoveTo] = useState();
  const [introImg, setIntroImg] = useState(false);
  const [bigName, setBigName] = useState(false);

  // introduce 들어온 이후 intro('/') -> 1번('1') 페이지 보여주기
  useEffect(() => {
    if (search.pathname === "/introduce" && bigName === true) {
      navigate("1");
      setIntroImg(true);
    }
  });

  // 페이지 번호 알기
  let nowPageNum = Number(search.pathname.slice(-1));

  // 페이지 버튼 클릭 시 이동
  useEffect(() => {
    if (moveTo === "post") {
      nowPageNum += 1;
      navigate(`${nowPageNum}`);
    } else if (moveTo === "pre") {
      nowPageNum -= 1;
      navigate(`${nowPageNum}`);
    }
  }, [moveTo]);

  // 페이지 미만/초과 시 뒤로 가기
  useEffect(() => {
    if (nowPageNum < 1 || nowPageNum > 3) {
      navigate(-1);
    }
    setMoveTo();
  }, [nowPageNum]);

  return (
    <Container fluid className="pageEnter" id="introduce">
      <Row id="introduceContent">
        {introImg && <IntroduceImg />}
        <Routes>
          <Route path="/" element={<Intro setBigName={setBigName} />} />
          <Route path="1" element={<Introduce01 setMoveTo={setMoveTo} />} />
          <Route path="2" element={<Introduce02 setMoveTo={setMoveTo} />} />
          <Route path="3" element={<Introduce03 setMoveTo={setMoveTo} />} />
        </Routes>
      </Row>
    </Container>
  );
}

export default Introduce;
