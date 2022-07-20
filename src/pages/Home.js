import React, { useEffect, useRef, useState } from "react";
import { Container, Button, ButtonGroup } from "react-bootstrap";
import ContentsBox from "../components/ContentsBox";
import "../css/Home.css";

function Home({ start, sendBlurQuit }) {
  console.log("Home", start, sendBlurQuit);

  const homeContainer = useRef();
  const useBlur = useRef();

  const [blurQuit, setBlurQuit] = useState(false);

  useEffect(() => {
    homeContainer.current.style.opacity = 1;
    setTimeout(() => {
      useBlur.current.style.backdropFilter = "blur(10px)";
      useBlur.current.style.opacity = 1;
      useBlur.current.style.gap = "2rem";
    }, 1500);
  }, [start]);

  if (blurQuit) {
    useBlur.current.style.backdropFilter = "none";
    useBlur.current.style.opacity = 0;
    useBlur.current.style.gap = 0;
    setTimeout(() => {
      useBlur.current.remove();
    }, 1000);
  }

  return (
    <Container fluid className="backgroundStudio" ref={homeContainer}>
      <div className="d-flex m-auto homeContent" ref={useBlur}>
        <h1>어제보다 오늘 더</h1>
        <p>
          반갑습니다. 꿈이 많은 어른 아이, 박상호입니다. <br />늘 새로운 도전을
          추구하며 보다 더 세상에 영향을 주는 사람을 꿈꾸고 있습니다.
        </p>
        <Button
          variant="outline-light"
          className="moreBtn"
          onClick={() => {
            sendBlurQuit(true);
            setBlurQuit(true);
          }}
        >
          더 알아보기
        </Button>
      </div>
      <ContentsBox show={blurQuit} />
    </Container>
  );
}

export default Home;
