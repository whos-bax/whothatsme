import React from "react";
import { Button, ButtonGroup, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";

function IntroduceButton({ clickMove }) {
  const search = useLocation();
  const nowPageNum = Number(search.pathname.slice(-1));

  return (
    <Row style={{ justifyContent: "center" }}>
      <ButtonGroup id="moveBtn">
        <Button
          id="preMove"
          onClick={() => clickMove("pre")}
          style={nowPageNum === 1 ? { display: "none" } : null}
        >
          <p>◁</p>
        </Button>
        <Button id="postMove" onClick={() => clickMove("post")}>
          <p>▷</p>
        </Button>
      </ButtonGroup>
    </Row>
  );
}

export default IntroduceButton;
