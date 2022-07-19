import React, { useEffect, useRef, useState } from "react";
import { Navbar, Container, Nav, Image, Alert, Button } from "react-bootstrap";
import '../css/Home.css'

function Home() {
  const homeStyle = {
    width: "100%",
    height: "100%",
    justifyContent: "center",
  };

  const blackScreen = {
    position: "absolute",
    width: "100vw",
    backgroundColor: "black",
    height: "50vh",
    transition: "all 3s ease-out",
  };

  const blackScreenUp = useRef();
  const blackScreenDown = useRef();

  const visibleAnima = useRef();
  const useBlur = useRef();

  useEffect(() => {
    setTimeout(() => {
      blackScreenUp.current.style.height = "4rem";
      blackScreenDown.current.style.height = "4rem";
      useBlur.current.style.display = "flex";
    }, 1000);

    setTimeout(() => {
      useBlur.current.style.backdropFilter = "blur(5px)";
      useBlur.current.style.opacity = 1;
    }, 4000);
  });

  return (
    <Container
      fluid
      className="backgroundStudio"
      style={homeStyle}
      ref={visibleAnima}
    >
      <div style={blackScreen} id="blackScreenUp" ref={blackScreenUp}></div>

      <div className="d-flex m-auto homeContent" ref={useBlur}>
        <h1>어제보다 오늘 더</h1>
        <p>
          안녕하세요 꿈이 많은 어른 아이 박상호입니다. <br />늘 새로운 도전을
          추구하며 보다 더 세상에 영향을 주는 사람을 꿈꾸고 있습니다.
        </p>
        <Button variant="outline-light" className="moreBtn">
          더 알아보기
        </Button>
      </div>

      <div style={blackScreen} id="blackScreenDown" ref={blackScreenDown}></div>
    </Container>
  );
}

export default Home;
