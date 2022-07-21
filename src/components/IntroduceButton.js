import React from "react";
import { Button, ButtonGroup, Row } from "react-bootstrap";

function IntroduceButton({ clickMove }) {

  return (
    <Row style={{ justifyContent: "center" }}>
      <ButtonGroup id="moveBtn">
        <Button id="preMove" onClick={()=>clickMove('pre')}>
          <p>◁</p>
        </Button>
        <Button id="postMove" onClick={()=>clickMove('post')}>
          <p>▷</p>
        </Button>
      </ButtonGroup>
    </Row>
  );
}

export default IntroduceButton;
