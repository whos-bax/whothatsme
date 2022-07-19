import { useRef, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import { Button, Navbar } from "react-bootstrap";

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
      setStart(true);
    }, 3800);
  }

  return (
    <div className="App">
      <Navbar style={blackScreen} id="blackScreenUp" ref={blackScreenUp}></Navbar>
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
      {/* <Home props={start} /> */}

      <footer style={blackScreen} id="blackScreenDown" ref={blackScreenDown}></footer>
    </div>
  );
}

export default App;
