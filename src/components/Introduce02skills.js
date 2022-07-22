import React, { useState } from "react";
import { Button, Col, Container, ProgressBar, Row } from "react-bootstrap";
import * as Icon from "../utils/Icon";

function Introduce02skills() {
  const [show, setShow] = useState(false);

  const languages = Icon.proficient;

  const betteryVariant = (key) => {
    if (languages[key] > 60) {
      return "success";
    } else if (languages[key] > 40) {
      return "warning";
    } else return "danger";
  };

  return (
    <Container id="skillsContainer">
      <Row style={{ gap: ".5rem" }}>
        <Col>
          <Icon.HtmlSvg />
          <ProgressBar
            animated
            variant={betteryVariant("HtmlSvg")}
            now={languages["HtmlSvg"]}
            style={show ? { opacity: "1" } : { opacity: "0" }}
          />
        </Col>
        <Col>
          <Icon.CssSvg />
          <ProgressBar
            animated
            variant={betteryVariant("CssSvg")}
            now={languages["CssSvg"]}
            style={show ? { opacity: "1" } : { opacity: "0" }}
          />
        </Col>
        <Col>
          <Icon.JavascriptSvg />
          <ProgressBar
            animated
            variant={betteryVariant("JavascriptSvg")}
            now={languages["JavascriptSvg"]}
            style={show ? { opacity: "1" } : { opacity: "0" }}
          />
        </Col>
        <Col>
          <Icon.ReactSvg />
          <ProgressBar
            animated
            variant={betteryVariant("ReactSvg")}
            now={languages["ReactSvg"]}
            style={show ? { opacity: "1" } : { opacity: "0" }}
          />
        </Col>
      </Row>

      <Col id="svgBtnGroup">
        <Button id="svgBtn" onClick={() => setShow(!show)}>
          {!show ? <p>숙련도 보기</p> : <p>숙련도 닫기</p>}
        </Button>
        <Button id="svgHelpBtn">?</Button>
      </Col>
    </Container>
  );
}

export default Introduce02skills;
