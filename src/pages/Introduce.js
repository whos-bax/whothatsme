import React, { useRef, useState } from "react";
import { Container } from "react-bootstrap";
import Introduce01 from "../components/Introduce01";
import Introduce02 from "../components/Introduce02";
import "../css/Introduce.css";

function Introduce({ address }) {
  const [moveTo, setMoveTo] = useState("");

  const introRef = useRef();
  console.log(moveTo, introRef);
  return (
    <Container fluid id="introduce" ref={introRef}>
      <Introduce01 setMoveTo={setMoveTo} introRef={introRef.current} />
      {/* <Introduce02 setMoveTo={setMoveTo} /> */}
    </Container>
  );
}

export default Introduce;
