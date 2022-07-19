import React, { useEffect, useRef } from "react";
import { Container, Button } from "react-bootstrap";
import "../css/Home.css";

function Home({ props }) {
  const homeStyle = {
    width: "100%",
    height: "100%",
    justifyContent: "center",
  };

  const homeContainer = useRef();
  const useBlur = useRef();

  useEffect(() => {
    homeContainer.current.style.opacity = 1;
    setTimeout(() => {
      useBlur.current.style.backdropFilter = "blur(10px)";
      useBlur.current.style.opacity = 1;
      useBlur.current.style.gap = "2rem";
    }, 1000);
  }, [props]);

  function clickMoreBtn() {
    useBlur.current.style.backdropFilter = "none";
    useBlur.current.style.display = "none";
  }

  return (
    <Container
      fluid
      className="backgroundStudio"
      style={homeStyle}
      ref={homeContainer}
    >
      {/* <div className="d-flex m-auto homeContent" ref={useBlur}>
        <h1>어제보다 오늘 더</h1>
        <p>
          반갑습니다. 꿈이 많은 어른 아이, 박상호입니다. <br />늘 새로운 도전을
          추구하며 보다 더 세상에 영향을 주는 사람을 꿈꾸고 있습니다.
        </p>
        <Button
          variant="outline-light"
          className="moreBtn"
          onClick={clickMoreBtn}
        >
          더 알아보기
        </Button>
      </div> */}
    </Container>
  );
}

export default Home;
