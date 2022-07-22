import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import React, { useRef, useState } from "react";
import { Button, Container } from "react-bootstrap";
import Footer from "./components/Footer";
import Titlebar from "./components/Titlebar";
import Introduce from "./pages/Introduce";

function App() {
  const contents = ["introduce", "project", "contact"];
  const locationAddress = "http://localhost:3000/";

  const blackScreenUp = useRef();
  const blackScreenDown = useRef();
  const startDiv = useRef();
  const startBtn = useRef();

  const [start, setStart] = useState(false);
  const [welcomeDel, setwelcomeDel] = useState(true);
  const [blurQuit, setBlurQuit] = useState(false);

  // start 버튼을 눌렀을 때
  function clickStartBtn() {
    startBtn.current.style.width = 0;
    startBtn.current.style.height = 0;
    blackScreenUp.current.style.transition = "all 1s ease-in-out";
    blackScreenDown.current.style.transition = "all 1s ease-in-out";
    setwelcomeDel(false);
    setTimeout(() => {
      startBtn.current.style.width = "100%";
    }, 700);
    setTimeout(() => {
      startBtn.current.style.opacity = 0;
      blackScreenUp.current.style.height = "0";
      blackScreenDown.current.style.height = "0";
      setStart(true);
    }, 1800);
  }

  // 블러 페이지 닫고 나서
  if (blurQuit) {
    setTimeout(() => {
      blackScreenUp.current.style.height = "5rem";
      blackScreenDown.current.style.height = "5rem";
    }, 1000);
    // body 내 overflow 통제
    const bodyOverFlow = document.querySelector(".App");
    bodyOverFlow.style.overflowY = "auto";
  }

  // const scrollHome = useRef();
  // const isHome = scrollHome;
  // console.log("check", isHome);

  return (
    <Container fluid className="App">
      <div className="blackScreen" id="blackScreenUp" ref={blackScreenUp}>
        {blurQuit ? <Titlebar start={start} contents={contents} /> : null}
      </div>
      {!start ? (
        <div
          style={{ width: "100%", height: "100%", display: "flex" }}
          ref={startDiv}
        >
          <Button
            className="startBtn"
            variant="outline-light"
            ref={startBtn}
            onClick={clickStartBtn}
          >
            {welcomeDel ? <p>WELCOME</p> : null}
          </Button>
        </div>
      ) : (
        <>
          <Home
            start={start}
            sendBlurQuit={setBlurQuit}
            contents={contents}
            // ref={scrollHome}
          />
          <Introduce address={locationAddress} />
        </>
      )}

      <div className="blackScreen" id="blackScreenDown" ref={blackScreenDown}>
        {blurQuit ? <Footer start={start} /> : null}
      </div>
    </Container>
  );
}

export default App;
