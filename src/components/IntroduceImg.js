import React from "react";
import { Col, Image } from "react-bootstrap";

export default function IntroduceImg() {
  return (
    <Col md="5">
      <Image src={"/images/introduce.jpg"} id="introduceImg" />
    </Col>
  );
}
