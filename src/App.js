import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import Welcome from "./pages/Welcome";
import Titlebar from "./components/Titlebar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Introduce from "./pages/Introduce";
import NotFound from "./pages/NotFound";

function App() {
  const contents = ["home", "introduce", "project", "contact"];

  const [welcomeDown, setWelcomeDown] = useState(false);
  const [isWelcome, setIsWelcome] = useState("second");
  const [blurQuit, setBlurQuit] = useState(false);

  useEffect(() => {
    if (welcomeDown) {
      localStorage.setItem("welcome", welcomeDown);
    }
    setIsWelcome(localStorage.getItem("welcome"));
  }, [welcomeDown]);

  // 블러 닫힌 후 스크롤 가능
  useEffect(() => {
    if (blurQuit)
      document.getElementsByClassName("App")[0].style.overflowY = "auto";
  }, [blurQuit]);

  return (
    <Container fluid className="App">
      <BrowserRouter>
        {!isWelcome ? <Welcome sendWelcomeDown={setWelcomeDown} /> : null}
        {isWelcome ? (
          <>
            <Titlebar
              start={isWelcome}
              contents={contents}
              blurQuit={blurQuit}
            />
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <>
                    <Home
                      start={isWelcome}
                      sendBlurQuit={setBlurQuit}
                      contents={contents}
                    />
                    <Introduce />
                  </>
                }
              ></Route>

              <Route path="*" element={<NotFound />}></Route>
            </Routes>
            <Footer contents={contents} />{" "}
          </>
        ) : null}
      </BrowserRouter>
    </Container>
  );
}

export default App;
