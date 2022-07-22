import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import React, { useEffect, useRef, useState } from "react";
import { Button, Container } from "react-bootstrap";
import Footer from "./components/Footer";
import Titlebar from "./components/Titlebar";
import Introduce from "./pages/Introduce";

function App() {
  const contents = ["introduce", "project", "contact"];

  const startDiv = useRef();
  const startBtn = useRef();

  const [clickStart, setClickStart] = useState(false);
  const [afterStart, setAfterStart] = useState(false);
  const [welcomeDel, setWelcomeDel] = useState(true);
  const [blurQuit, setBlurQuit] = useState(false);

  // start 버튼을 눌렀을 때
  useEffect(() => {
    if (clickStart) {
    //   startBtn.current.style.width = 0;
    // startBtn.current.style.height = 0;
    // blackScreenUp.current.style.transition = "all 1s ease-in-out";
    // blackScreenDown.current.style.transition = "all 1s ease-in-out";
    setWelcomeDel(false);
      document.getElementsByClassName("blackScreen")[0].style.trasition =
        "all 1s ease-in-out";

      // 영역 나누기
      setTimeout(() => {
        document.getElementById("startBtn").style.width = "100%";
      }, 700);

      // setTimeout(() => {
      // document.getElementById("startBtn").style.opacity = "0";
      //   console.log(document.getElementsByClassName("blackScreen")[0].style);
      document.getElementsByClassName("blackScreen")[0].style.height =
        "0 !important";
      //   startBtn.current.style.opacity = 0;
      // blackScreenUp.current.style.height = "0";
      // blackScreenDown.current.style.height = "0";
      //   setAfterStart(true);
      // }, 2500);
    }
  }, [clickStart]);

  // 블러 페이지 닫고 나서
  // if (blurQuit) {
  //   setTimeout(() => {
  //     blackScreenUp.current.style.height = "5rem";
  //     blackScreenDown.current.style.height = "5rem";
  //   }, 1000);

  //   // body 내 overflow 통제
  //   const bodyOverFlow = document.querySelector(".App");
  //   bodyOverFlow.style.overflowY = "auto";
  // }

  return (
    <Container fluid className="App">
      <div className="blackScreen" id="blackScreenUp">
        {blurQuit ? <Titlebar start={afterStart} contents={contents} /> : null}
      </div>
      {!afterStart ? (
        <div
          style={{ width: "100%", height: "100%", display: "flex" }}
          ref={startDiv}
        >
          <Button
            id="startBtn"
            variant="outline-light"
            ref={startBtn}
            onClick={() => setClickStart(true)}
            style={clickStart ? { width: 0, height: 0 } : null}
          >
            {welcomeDel ? <p>WELCOME</p> : null}
          </Button>
        </div>
      ) : (
        <>
          <Home
            start={afterStart}
            sendBlurQuit={setBlurQuit}
            contents={contents}
          />
          <Introduce />
        </>
      )}

      <div className="blackScreen" id="blackScreenDown">
        {blurQuit ? <Footer start={afterStart} /> : null}
      </div>
    </Container>
  );
}

export default App;
