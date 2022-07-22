import React, { useEffect, useRef, useState } from "react";
import { Container, Button } from "react-bootstrap";
import ContentsBox from "../components/ContentsBox";
import "../css/Home.css";

function Home({ start, sendBlurQuit, contents }) {
  const homeContainer = useRef();
  const useBlur = useRef();

  const [blurQuit, setBlurQuit] = useState(false);
  const [contentClick, setContentClick] = useState(false);

  // start 에 따라 화면 변화
  useEffect(() => {
    homeContainer.current.style.opacity = 1;
    setTimeout(() => {
      useBlur.current.style.backdropFilter = "blur(12px)";
      useBlur.current.style.opacity = 1;
      useBlur.current.style.gap = "3rem";
    }, 1500);
  }, [start]);

  // 더 알아보기 버튼 클릭 후 다시 닫기
  if (blurQuit) {
    useBlur.current.style.backdropFilter = "none";
    useBlur.current.style.opacity = 0;
    useBlur.current.style.gap = 0;
    setTimeout(() => {
      useBlur.current.remove();
    }, 1000);
  }

  if (contentClick) {
    // homeContainer.current.style.filter = "brightness(0%)";
  }

  // const isHome = homeContainer.current;
  // if (isHome) {
  //   console.log("check", homeContainer.current.getBoundingClientRect());
  // }

  return (
    <Container fluid className="backgroundStudio" ref={homeContainer} id="home">
      <div className="d-flex m-auto homeContent" ref={useBlur}>
        <h1>어제보다 오늘 더</h1>
        <p style={{ fontSize: "1.2rem" }}>
          꿈이 많은 어른 아이, <b>박상호</b>입니다. <br />
          <b>늘 새로운 도전을 추구하며, 세상에 좋은 영향을 주는 사람</b>을
          꿈꾸고 있습니다.
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
      <ContentsBox
        show={blurQuit}
        contents={contents}
        sendContentClick={setContentClick}
      />
    </Container>
  );
}

export default Home;
