import React from "react";
import { Carousel, Col, Image } from "react-bootstrap";

export default function IntroduceImg() {

  return (
    <Col md="5" id="introduceImgDiv">
      <Carousel>
        <Carousel.Item>
          <Image src={"/images/introduce.jpg"} id="introduceImg" />
        </Carousel.Item>
      </Carousel>
    </Col>
  );
}
