import React, { useEffect, useRef, useState } from "react";
import { Alert, Button, Container } from "react-bootstrap";
import {
  Link,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Introduce01 from "../components/Introduce01";
import Introduce02 from "../components/Introduce02";
import "../css/Introduce.css";

function Introduce() {
  const navigate = useNavigate();
  const search = useLocation();
  const [moveTo, setMoveTo] = useState();

  // introduce 들어온 이후 1번 페이지 보여주기
  useEffect(() => {
    if (search.pathname === "/introduce") {
      navigate("/introduce/1");
    }
  }, [navigate]);

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
    if (nowPageNum < 1 || nowPageNum > 2) {
      navigate(-1);
    }
    setMoveTo();
  }, [nowPageNum]);

  return (
    <Container fluid className="pageEnter" id="introduce">
      <Routes>
        <Route path="1" element={<Introduce01 setMoveTo={setMoveTo} />} />
        <Route path="2" element={<Introduce02 setMoveTo={setMoveTo} />} />
        {/* <Route path="/*" element={<NotFound />} /> */}
      </Routes>
    </Container>
  );
}

export default Introduce;
