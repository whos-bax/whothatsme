import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import "../css/Footer.css";

function Footer({ start }) {
  const [show, setShow] = useState(false);

  // start 값 받은 후 footer 보이기
  useEffect(() => {
    setShow(true);
    console.log('second')
  }, [start]);

  const handleScrollToTop = () => {
    window.location.href = "#home";
  };

  return (
    <Container
      fluid
      className="footer"
      style={show ? { height: "5rem" } : { height: 0 }}
    >
      <div id="footerDiv">
        <Button id="scrollTopBtn" onClick={handleScrollToTop}>
          ↑
        </Button>
        <p style={{ fontSize: "1rem" }}>
          © 2022 whosbax. All rights reserved.{" "}
        </p>
      </div>
    </Container>
  );
}

export default Footer;
