import React, { useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import "../css/Introduce.css";

function Introduce({ address }) {
  const contentRef = useRef();

//   if (`${address}` + "#introduce") {
//     setTimeout(() => {
//       contentRef.current.style.opacity = 1;
//     }, 1500);
//   } else
//     setTimeout(() => {
//       contentRef.current.style.opacity = 0;
//     }, 1500);

  return (
    <Container fluid id="introduce">
      <div className="d-flex m-auto introduceContent" ref={contentRef}>
        <h1>어제보다 오늘 더</h1>
        <p style={{ fontSize: "1.2rem" }}>
          꿈이 많은 어른 아이, <b>박상호</b>입니다. <br />
          <b>늘 새로운 도전을 추구하며, 세상에 좋은 영향을 주는 사람</b>을
          꿈꾸고 있습니다.
        </p>
      </div>
    </Container>
  );
}

export default Introduce;
