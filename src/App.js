import { useRef, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import { Button, Container, Navbar } from "react-bootstrap";

function App() {
  const blackScreenUp = useRef();
  const blackScreenDown = useRef();
  const startDiv = useRef();
  const startBtn = useRef();

  const [start, setStart] = useState(false);

  const blackScreen = {
    position: "absolute",
    width: "100%",
    backgroundColor: "#141414",
    height: "50vh",
    transition: "all 2s ease-in-out",
    padding: 0,
    margin: 0,
  };

  function clickStartBtn() {
    startBtn.current.style.width = 0;
    startBtn.current.style.height = 0;
    setTimeout(() => {
      startBtn.current.style.width = "100%";
    }, 1000);
    setTimeout(() => {
      startBtn.current.style.opacity = 0;
      blackScreenUp.current.style.height = "0";
      blackScreenDown.current.style.height = "0";
    }, 1800);
    setTimeout(() => {
      // blackScreenUp.current.style.height = "4rem";
      // blackScreenDown.current.style.height = "4rem";
      setStart(true);
    }, 5000);
  }

  return (
    <Container fluid className="App">
      <div style={blackScreen} id="blackScreenUp" ref={blackScreenUp}></div>
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
          />
        </div>
      ) : (
        <Home props={start} />
      )}

      <div style={blackScreen} id="blackScreenDown" ref={blackScreenDown}></div>
    </Container>
  );
}

export default App;
