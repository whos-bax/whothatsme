import React from "react";
import { Container } from "react-bootstrap";

function Footer() {
  const footerStyle = {
    width: "100%",
    color: "white",
    height: "4rem",
    justifyContent: "end",
    cursor: "default"
  };

  const footerDiv = {
    display: "flex",
    height: "100%",
    justifyContent: "center",
    textAlign: "right"
  };
  return (
    <Container className="footer" style={footerStyle}>
      <div style={footerDiv}>
        <p>© 2022 whosbax. All rights reserved. </p>
      </div>
    </Container>
  );
}

export default Footer;
