import React, { useEffect, useRef, useState } from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ContentsBox from "../components/ContentsBox";
import "../css/Home.css";

function Home({ start, sendBlurQuit, contents }) {
  const blurPage = useRef();
  const [useBlur, setUseBlur] = useState("");
  const [blurQuit, setBlurQuit] = useState(false);

  useEffect(() => {
    // start 이후 배경 보여줬다가 블러처리, 시간을 이용한 시각적인 처리
    if (start) {
      setTimeout(() => {
        setUseBlur(" useBlur");
      }, 1800);
    }
  }, [start]);

  useEffect(() => {
    // 블러페이지 닫은 이후 제거하기 => ContentsBox 보여주기
    if (blurQuit) {
      setTimeout(() => {
        blurPage.current.remove();
      }, 1000);
    }
  }, [blurQuit]);

  return (
    <Container fluid className="backgroundStudio" id="home">
      <div
        className={
          "d-flex m-auto homeContent" + `${!blurQuit ? useBlur : " blurQuit"}`
        }
        ref={blurPage}
      >
        <h1>어제보다 오늘 더</h1>
        <p style={{ fontSize: "1.2rem" }}>
          꿈이 많은 어른 아이, <b>박상호</b>입니다. <br />
          <b>늘 새로운 도전을 추구하며, 세상에 좋은 영향을 주는 사람</b>을
          꿈꾸고 있습니다.
        </p>
        <Link to="/home">
          <Button
            variant="outline-light"
            className="moreBtn"
            onClick={() => {
              sendBlurQuit(true); // 부모로 블러페이지가 닫혔음을 알려주기
              setBlurQuit(true);
            }}
          >
            더 알아보기
          </Button>
        </Link>
      </div>

      <ContentsBox show={blurQuit} contents={contents} />
    </Container>
  );
}

export default Home;
