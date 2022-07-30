import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function ContactList() {
  return (
    <Container fluid className="pageEnter" id="contact">
      <Row id="contactContent" style={{flexDirection: "column", gap: "1rem"}}>
        <Col style={{ backgroundColor: "white", height: "100%" }}>
          <h1 id="impactText">hi</h1>
        </Col>

        <Link to="/contact" id="backContactBtn">
          <p>돌아가기</p>
        </Link>
      </Row>

    </Container>
  );
}

export default ContactList;
