import React from "react";
import { Carousel, Col, Image } from "react-bootstrap";

export default function IntroduceImg() {
  return (
    <Col md="5" id="introduceImgDiv">
      <Carousel interval={5000}>
        <Carousel.Item>
          <Image src={"/images/introduce/introduce01.jpg"} id="introduceImg" />
        </Carousel.Item>
        <Carousel.Item>
          <Image src={"/images/introduce/introduce02.jpg"} id="introduceImg" />
        </Carousel.Item>
        <Carousel.Item>
          <Image src={"/images/introduce/introduce03.jpg"} id="introduceImg" />
        </Carousel.Item>
        <Carousel.Item>
          <Image src={"/images/introduce/startup.jpg"} id="introduceImg" 
            style={{ objectPosition: "center 40%" }}/>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            src={"/images/introduce/whosbax.png"}
            id="introduceImg"
            style={{ objectPosition: "10% 35%" }}
          />
        </Carousel.Item>
      </Carousel>
    </Col>
  );
}
