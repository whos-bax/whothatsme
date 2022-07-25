import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Welcome from "./pages/Welcome";
import Titlebar from "./components/Titlebar";
import Footer from "./components/Footer";
import Main from "./pages/Main";
import Home from "./pages/Home";
import Introduce from "./pages/Introduce";
import NotFound from "./pages/NotFound";

const routesInfo = [
  { path: "/home", Component: Home },
  { path: "/introduce", Component: Introduce },
  { path: "*", Component: NotFound },
];

function App() {
  const contents = ["home", "introduce", "project", "contact"];
  const [welcomeDown, setWelcomeDown] = useState(false);
  const [isWelcome, setIsWelcome] = useState("");
  const [blurQuit, setBlurQuit] = useState(false);
  const [getBlur, setGetBlur] = useState(false);

  useEffect(() => {
    if (welcomeDown) {
      localStorage.setItem("welcome", welcomeDown);
    }
    setIsWelcome(localStorage.getItem("welcome"));
  }, [welcomeDown]);

  // 블러 닫힌 후 스크롤 가능
  useEffect(() => {
    if (blurQuit) {
      document.getElementsByClassName("App")[0].style.overflowY = "auto";
      localStorage.setItem("blurQuit", blurQuit);
    }
    setGetBlur(localStorage.getItem("blurQuit"));
  }, [blurQuit]);

  return (
    <Container fluid className="App">
      <BrowserRouter>
        {!isWelcome ? <Welcome sendWelcomeDown={setWelcomeDown} /> : null}
        {isWelcome ? (
          <>
            <Titlebar start={isWelcome} contents={contents} getBlur={getBlur} />
            <Routes>
              <Route
                path="/"
                element={
                  <Main
                    start={isWelcome}
                    sendBlurQuit={setBlurQuit}
                    contents={contents}
                  />
                }
              />
              <Route path="/home" element={<Home contents={contents} />} />
              <Route
                path="/introduce/*"
                element={<Introduce contents={contents} />}
              />
              <Route path="*" element={<NotFound />} />

              {/* {routesInfo.map((route, index) => {
                {
                  console.log(routesInfo.path);
                }
                if (route) {
                  <Route
                    path={`${routesInfo.path}`}
                    element={<routesInfo.Component />}
                  ></Route>;
                }
              })} */}
            </Routes>
            <Footer contents={contents} />{" "}
          </>
        ) : null}
      </BrowserRouter>
    </Container>
  );
}

export default App;
