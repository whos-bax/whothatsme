import React, { useRef } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import "../css/ContentsBox.css";

function ContentsBox({ show }) {
  const btnGroup = useRef();
  if (show) {
    setTimeout(() => {
      btnGroup.current.style.opacity = 1;
    }, 1500);
  }
  return (
    <ButtonGroup vertical ref={btnGroup}>
      <Button variant="outline-light">introduce</Button>
      <Button variant="outline-light">project</Button>
      <Button variant="outline-light" />
      <Button variant="outline-light" />
    </ButtonGroup>
  );
}

export default ContentsBox;
