import React, { useRef, useState } from "react";
import { Button, ButtonGroup, Container } from "react-bootstrap";
import Introduce01 from "../components/Introduce01";
import "../css/Introduce.css";

function Introduce({ address }) {

  const [moveTo, setMoveTo] = useState('')

  console.log(moveTo)
  return (
    <Container fluid id="introduce">
      <Introduce01 setMoveTo={setMoveTo}/>

      
    </Container>
  );
}

export default Introduce;
