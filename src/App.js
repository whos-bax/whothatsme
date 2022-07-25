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
      // welcome 텍스트 삭제
      setWelcomeDel(false);
      // start css 전부 처리 이후 완료된 값 자녀에게 넘겨주기
      setTimeout(() => {
        setAfterStart(true);
      }, 2000);
    }
  }, [clickStart]);

  return (
    <Container fluid className="App">
      <div
        className={
          "blackScreen" +
          `${
            clickStart && !blurQuit
              ? " screenDelay screenOut"
              : clickStart && blurQuit
              ? " screenAdjust"
              : " screenDelay"
          }`
        }
        id="blackScreenUp"
      >
        {blurQuit ? <Titlebar start={clickStart} contents={contents} /> : null}
      </div>

      {!afterStart ? (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
          }}
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
        className={
          "blackScreen" +
          `${
            clickStart && !blurQuit
              ? " screenDelay screenOut"
              : clickStart && blurQuit
              ? " screenAdjust"
              : " screenDelay"
          }`
        }
        id="blackScreenDown"
      >
        {blurQuit ? <Footer start={clickStart} /> : null}
      </div>
    </Container>
  );
}

export default App;
