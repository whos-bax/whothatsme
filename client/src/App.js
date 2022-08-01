import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";

import Welcome from "./pages/Welcome";
import Titlebar from "./components/Titlebar";
import Footer from "./components/Footer";
import Main from "./pages/Main";
import Home from "./pages/Home";
import Introduce from "./pages/Introduce";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ContactList from "./components/ContactList";
import Project from "./pages/Project";

const routesInfo = [
  { path: "/home", Component: Home },
  { path: "/introduce", Component: Introduce },
  { path: "*", Component: NotFound },
];

function App() {
  const contents = ["home", "introduce", "project", "contact"];
  const [welcomeDown, setWelcomeDown] = useState(false);
  const [isWelcome, setIsWelcome] = useState(false);
  const [blurQuit, setBlurQuit] = useState(false);
  const [getBlur, setGetBlur] = useState(false);

  const navigate = useNavigate();

  // welcome 버튼 누른 이후
  useEffect(() => {
    if (welcomeDown) {
      localStorage.setItem("welcome", welcomeDown);
    }
    setIsWelcome(Boolean(localStorage.getItem("welcome")));

    if (isWelcome) {
      navigate("/");
    }
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
    <Container
      fluid
      className="App"
      style={getBlur ? { backgroundColor: "#171717" } : null}
    >
      {!isWelcome ? (
        <Welcome sendWelcomeDown={setWelcomeDown} />
      ) : (
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
            <Route path="/contact" element={<Contact />} />
            <Route path="/contact/contact-list" element={<ContactList />} />
            <Route path="/project/*" element={<Project />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer contents={contents} />{" "}
        </>
      )}
    </Container>
  );
}

export default App;
