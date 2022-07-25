import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import Welcome from "./pages/Welcome";
import Titlebar from "./components/Titlebar";
import Footer from "./components/Footer";
import Home from "./pages/Home";

function App() {
  const contents = ["introduce", "project", "contact"];
  
  const [welcomeDown, setWelcomeDown] = useState(false);
  const [blurQuit, setBlurQuit] = useState(false);

  // 블러 닫힌 후 스크롤 가능
  useEffect(() => {
    if (blurQuit)
      document.getElementsByClassName("App")[0].style.overflowY = "auto";
  }, [blurQuit]);

  return (
    <Container fluid className="App">
      <BrowserRouter>
        {!welcomeDown ? <Welcome sendWelcomeDown={setWelcomeDown} /> : null}
        {welcomeDown ? (
          <Titlebar start={welcomeDown} contents={contents} />
        ) : null}
        <Routes>
          {/* <Route exact path="/" element={<Home />}></Route> */}
        </Routes>
        {welcomeDown ? <Footer contents={contents} /> : null}
      </BrowserRouter>
    </Container>
  );
}

export default App;
