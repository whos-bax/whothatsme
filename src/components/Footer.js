import React, { useEffect, useRef, useState } from "react";
import { Button, Container, Overlay, Tooltip } from "react-bootstrap";
import "../css/Footer.css";

function Footer({ start }) {
  const [show, setShow] = useState(false);

  const target = useRef(null);

  // start 값 받은 후 footer 보이기
  useEffect(() => {
    setShow(true);
  }, [start]);

  const handleScrollToTop = () => {
    window.location.href = "home";
  };

  return (
    <Container
      fluid
      className="footer"
      style={show ? { height: "5rem" } : { height: 0 }}
    >
      {/* <Button ref={target} onClick={() => setShow(!show)}>
        Click me!
      </Button>
      <Overlay target={target.current} show={show} placement="right">
        {(props) => (
          <Tooltip id="overlay-example" {...props}>
            My Tooltip
          </Tooltip>
        )}
      </Overlay> */}

      <div id="footerDiv" style={show ? { opacity: 1 } : { opacity: 0 }}>
        <Button id="scrollTopBtn" onClick={handleScrollToTop}>
          ↑
        </Button>
        <p style={{ fontSize: ".8rem" }}>
          © 2022 whosbax. All rights reserved.{" "}
        </p>
      </div>
    </Container>
  );
}

export default Footer;
