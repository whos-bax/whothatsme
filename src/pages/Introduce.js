import React, { useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import Introduce01 from "../components/Introduce01";
import Introduce02 from "../components/Introduce02";
import "../css/Introduce.css";

function Introduce({ address }) {
  const [moveTo, setMoveTo] = useState("");

  const search = useLocation();
  const [pageEnter, setPageEnter] = useState(false);

  useEffect(() => {
    if (search.pathname === "/introduce") {
      setPageEnter(true);
    }
  }, [search]);

  const introRef = useRef();
  console.log(moveTo, introRef);
  return (
    <Container fluid className={`${pageEnter ? " pageEnter" : " pageOut"}`} id="introduce" ref={introRef}>
      {/* <Introduce01 setMoveTo={setMoveTo} introRef={introRef.current} /> */}
      <Introduce02 setMoveTo={setMoveTo} />
    </Container>
  );
}

export default Introduce;
