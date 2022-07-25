import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import "../css/Welcome.css";

function Welcome({ sendWelcomeDown }) {
  const [clickStart, setClickStart] = useState(false);
  const [welcomeDel, setWelcomeDel] = useState(true);

  // start 버튼을 눌렀을 때
  useEffect(() => {
    if (clickStart) {
      // welcome 텍스트 삭제
      setWelcomeDel(false);
      // start css 전부 처리 이후 완료된 값 부모에게 넘겨주기 -> 다시 welcome 안띄우기
      setTimeout(() => {
        sendWelcomeDown(true);
      }, 3500);
    }
  }, [clickStart]);
  console.log(clickStart);

  return (
    <Container fluid className="App">
      <div
        className={"blackScreen" + `${clickStart ? " screenOut" : ""}`}
        id="blackScreenUp"
      ></div>
      <div id="startDiv">
        <Button
          className={"startBtn" + `${clickStart ? " startBtnOut" : ""}`}
          variant="outline-light"
          onClick={() => {
            setClickStart(true);
          }}
        >
          {welcomeDel ? <p>WELCOME</p> : null}
        </Button>
      </div>
      <div
        className={"blackScreen" + `${clickStart ? " screenOut" : ""}`}
        id="blackScreenDown"
      ></div>
    </Container>
  );
}

export default Welcome;
