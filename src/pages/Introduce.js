import React, { useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";
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
      navigate("1");
    }
  }, [navigate]);

  let nowPageNum = Number(search.pathname.slice(-1));

  useEffect(() => {
    if (moveTo === "post") {
      nowPageNum += 1;
      navigate(`${nowPageNum}`);
      setMoveTo();
    } else if (moveTo === "pre") {
      nowPageNum -= 1;
      navigate(`${nowPageNum}`);
      setMoveTo();
    }
  }, [moveTo]);
  console.log(moveTo);

  return (
    <Container fluid className="pageEnter" id="introduce">
      <Routes>
        <Route path="1" element={<Introduce01 setMoveTo={setMoveTo} />} />
        <Route path="2" element={<Introduce02 setMoveTo={setMoveTo} />} />
      </Routes>
    </Container>
  );
}

export default Introduce;
