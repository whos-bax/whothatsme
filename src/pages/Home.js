import React, { useEffect, useRef, useState } from "react";
import {
  Navbar,
  Container,
  Nav,
  Image,
  Alert,
  Button,
  Spinner,
  ProgressBar,
} from "react-bootstrap";
import "../css/Home.css";

function Home() {
  const homeStyle = {
    width: "100%",
    height: "100%",
    justifyContent: "center",
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

  const visibleAnima = useRef();
  const useBlur = useRef();

  const startBtn = useRef();

  const [screen, setScreen] = useState(false);

  function letsStart() {
    startBtn.current.style.width = 0;
    startBtn.current.style.height = 0;
    setScreen(true);
    console.log(screen);
    setTimeout(() => {
      console.log("@");
      startBtn.current.style.width = "100%";
      movieStart();
    }, 500);
  }

  function movieStart() {
    console.log("@?", screen);
    screen
      ? setTimeout(() => {
          blackScreenUp.current.style.height = "4rem";
          blackScreenDown.current.style.height = "4rem";
        }, 500)
      : console.log("wrong");
  }

  useEffect(() => {
    setTimeout(() => {
      // blackScreenUp.current.style.height = "4rem";
      //   useBlur.current.style.display = "flex";
    }, 1000);

    setTimeout(() => {
      //   useBlur.current.style.backdropFilter = "blur(5px)";
      //   useBlur.current.style.opacity = 1;
      //   useBlur.current.style.gap = "2.5rem";
    }, 3000);
  });

  return (
    <Container
      fluid
      className="backgroundStudio"
      style={homeStyle}
      ref={visibleAnima}
    >
      {/* <div style={blackScreen} id="blackScreenUp" ref={blackScreenUp}></div> */}
      <div style={{ width: "100%", height: "100%", display: "flex" }}>
        <Button
          className="startBtn"
          variant="outline-light"
          ref={startBtn}
          //   onClick={() => {
          //     letsStart();
          //   }}
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
