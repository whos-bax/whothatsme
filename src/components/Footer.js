import React, { useRef } from "react";
import { Button, Container } from "react-bootstrap";
import "../css/Footer.css";

function Footer({ start }) {
  const footerRef = useRef();
  // 값이 넘어오고 나서 footer 보여주기
  if (start) {
    setTimeout(() => {
      footerRef.current.style.opacity = "1";
      footerRef.current.style.zIndex = "1";
    }, 1500);
  }
  return (
    <Container className="footer" ref={footerRef}>
      <div id="footerDiv">
        <Button id="scrollTopBtn">↑</Button>
        <p style={{ fontSize: "1rem" }}>
          © 2022 whosbax. All rights reserved.{" "}
        </p>
      </div>
    </Container>
  );
}

export default Footer;
