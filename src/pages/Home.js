import React, { useRef } from "react";
import { Container, Button } from "react-bootstrap";
import "../css/Home.css";

function Home() {
  const homeStyle = {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    // overflow: "hidden"
  };

  const blackScreen = {
    position: "absolute",
    width: "100%",
    backgroundColor: "#191919",
    height: "50vh",
    transition: "all 2s ease-in-out",
  };

  const blackScreenUp = useRef();
  const blackScreenDown = useRef();
  const useBlur = useRef();
  const startDiv = useRef();
  const startBtn = useRef();

  function letsStart() {
    startBtn.current.style.width = 0;
    startBtn.current.style.height = 0;
    setTimeout(() => {
      startBtn.current.style.width = "100%";
    }, 500);
    setTimeout(() => {
      startBtn.current.style.opacity = 0;
      blackScreenUp.current.style.height = "0";
      blackScreenDown.current.style.height = "0";
    }, 1800);
    setTimeout(() => {
      blackScreenUp.current.style.height = "4rem";
      blackScreenDown.current.style.height = "4rem";
      startBtn.current.style.display = "none";
      startDiv.current.style.display = "none";
      useBlur.current.style.backdropFilter = "blur(10px)";
      useBlur.current.style.opacity = 1;
      useBlur.current.style.gap = "2rem";
    }, 3800);
  }

  console.log()

  return (
    <Container fluid className="backgroundStudio" style={homeStyle}>
      <div style={blackScreen} id="blackScreenUp" ref={blackScreenUp}></div>
      <div
        style={{ width: "100%", height: "100%", display: "flex" }}
        ref={startDiv}
      >
        <Button
          className="startBtn"
          variant="outline-light"
          ref={startBtn}
          onClick={letsStart}
        />
      </div>
      <div className="d-flex m-auto homeContent" ref={useBlur}>
        <h1>어제보다 오늘 더</h1>
        <p>
          반갑습니다. 꿈이 많은 어른 아이, 박상호입니다. <br />늘 새로운 도전을
          추구하며 보다 더 세상에 영향을 주는 사람을 꿈꾸고 있습니다.
        </p>
        <Button variant="outline-light" className="moreBtn">
          더 알아보기
        </Button>
      </div>

      <div style={blackScreen} id="blackScreenDown" ref={blackScreenDown}></div>
    </Container>
  );
}

export default Home;
