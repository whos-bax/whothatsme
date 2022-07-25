import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import Footer from "./components/Footer";
import Titlebar from "./components/Titlebar";
import Introduce from "./pages/Introduce";

function App() {
  const contents = ["introduce", "project", "contact"];

  const [clickStart, setClickStart] = useState(false);
  const [afterStart, setAfterStart] = useState(false);
  const [welcomeDel, setWelcomeDel] = useState(true);
  const [blurQuit, setBlurQuit] = useState(false);

  // start 버튼을 눌렀을 때
  useEffect(() => {
    if (clickStart) {
      setWelcomeDel(false);
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
      <div
        className={"blackScreen" + `${clickStart ? " screenOut" : ""}`}
        id="blackScreenUp"
      >
        {blurQuit ? <Titlebar start={afterStart} contents={contents} /> : null}
      </div>
      {!afterStart ? (
        <div
          style={{ width: "100%", height: "100%", display: "flex" }}
        >
          <Button
            className={"startBtn" + `${clickStart ? " startBtnOut" : ""}`}
            variant="outline-light"
            onClick={() => setClickStart(true)}
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

      <div
        className={"blackScreen" + `${clickStart ? " screenOut" : ""}`}
        id="blackScreenDown"
      >
        {blurQuit ? <Footer start={afterStart} /> : null}
      </div>
    </Container>
  );
}

export default App;
