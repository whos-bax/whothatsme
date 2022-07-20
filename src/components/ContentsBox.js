import React, { useRef } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import "../css/ContentsBox.css"

function ContentsBox() {
  const btnGroup = useRef();
  const triangle = {
    width: "6rem",
    margin: "auto",
    border: "6px solid",
  };
  return (
    <ButtonGroup
      vertical
      ref={btnGroup}
    >
      <Button variant="outline-light">introduce</Button>
      <Button variant="outline-light">project</Button>
      <Button variant="outline-light"/>
      <Button variant="outline-light"/>
    </ButtonGroup>
  );
}

export default ContentsBox;
