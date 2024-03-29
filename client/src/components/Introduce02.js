import React, { useState } from "react";
import {
  Button,
  Col,
  ProgressBar,
  Row,
  Container,
  Modal,
} from "react-bootstrap";

import IntroduceButton from "./IntroduceButton";
import * as Icon from "../utils/Icon";

export default function Introduce02({ setMoveTo }) {
  const [show, setShow] = useState(false);
  const [help, setHelp] = useState(false);

  // 숙련도
  const languages = Icon.proficient;

  // 숙련도에 따라 색변하기
  const betteryVariant = (key) => {
    if (languages[key] > 60) {
      return "success";
    } else if (languages[key] > 40) {
      return "warning";
    } else return "danger";
  };

  return (
    <Col md="7" id="introduceBox">
      <div className="contentEnter">
        <div style={{ padding: "1rem" }}>
          <h1>꿈이 많은 어른 아이</h1>
        </div>
        <div id="introduceContentBody">
          <Container id="skillsContainer">
            <p id="impactText">할 수 있는</p>
            <Row style={{ gap: "1rem" }}>
              <Col>
                <p id="progressFont">Html5</p>
                <Icon.HtmlSvg id="iconBlack" />
                <ProgressBar
                  animated
                  variant={betteryVariant("HtmlSvg")}
                  now={languages["HtmlSvg"]}
                  style={show ? { opacity: "1" } : { opacity: "0" }}
                />
              </Col>
              <Col>
                <p id="progressFont">Css3</p>
                <Icon.CssSvg id="iconBlack" />
                <ProgressBar
                  animated
                  variant={betteryVariant("CssSvg")}
                  now={languages["CssSvg"]}
                  style={show ? { opacity: "1" } : { opacity: "0" }}
                />
              </Col>
              <Col>
                <p id="progressFont">Javascript</p>
                <Icon.JavascriptSvg id="iconBlack" />
                <ProgressBar
                  animated
                  variant={betteryVariant("JavascriptSvg")}
                  now={languages["JavascriptSvg"]}
                  style={show ? { opacity: "1" } : { opacity: "0" }}
                />
              </Col>
              <Col>
                <p id="progressFont">bootstrap</p>
                <Icon.BootstrapSvg id="iconBlack" />
                <ProgressBar
                  animated
                  variant={betteryVariant("BootstrapSvg")}
                  now={languages["BootstrapSvg"]}
                  style={show ? { opacity: "1" } : { opacity: "0" }}
                />
              </Col>
              <Col>
                <p id="progressFont">React</p>
                <Icon.ReactSvg id="iconBlack" />
                <ProgressBar
                  animated
                  variant={betteryVariant("ReactSvg")}
                  now={languages["ReactSvg"]}
                  style={show ? { opacity: "1" } : { opacity: "0" }}
                />
              </Col>
              <Col>
                <p id="progressFont">Gitlab</p>
                <Icon.GitlabSvg id="iconBlack" />
                <ProgressBar
                  animated
                  variant={betteryVariant("GitlabSvg")}
                  now={languages["GitlabSvg"]}
                  style={show ? { opacity: "1" } : { opacity: "0" }}
                />
              </Col>
              <Col>
                <p id="progressFont">Github</p>
                <Icon.GithubSvg id="iconBlack" />
                <ProgressBar
                  animated
                  variant={betteryVariant("GithubSvg")}
                  now={languages["GithubSvg"]}
                  style={show ? { opacity: "1" } : { opacity: "0" }}
                />
              </Col>
            </Row>
            <p id="impactText">사용한 경험이 있는</p>
            <Row style={{ gap: "1rem" }}>
              <Col>
                <p id="progressFont">Typescript</p>
                <Icon.TypescriptSvg id="iconBlack" />
                <ProgressBar
                  animated
                  variant={betteryVariant("TypescriptSvg")}
                  now={languages["TypescriptSvg"]}
                  style={show ? { opacity: "1" } : { opacity: "0" }}
                />
              </Col>
              <Col>
                <p id="progressFont">Vue</p>
                <Icon.VueSvg id="iconBlack" />
                <ProgressBar
                  animated
                  variant={betteryVariant("VueSvg")}
                  now={languages["VueSvg"]}
                  style={show ? { opacity: "1" } : { opacity: "0" }}
                />
              </Col>
              <Col>
                <p id="progressFont">Python</p>
                <Icon.PythonSvg id="iconBlack" />
                <ProgressBar
                  animated
                  variant={betteryVariant("PythonSvg")}
                  now={languages["PythonSvg"]}
                  style={show ? { opacity: "1" } : { opacity: "0" }}
                />
              </Col>
              <Col>
                <p id="progressFont">Php</p>
                <Icon.PhpSvg id="iconBlack" />
                <ProgressBar
                  animated
                  variant={betteryVariant("PhpSvg")}
                  now={languages["PhpSvg"]}
                  style={show ? { opacity: "1" } : { opacity: "0" }}
                />
              </Col>
              <Col>
                <p id="progressFont">MySQL</p>
                <Icon.MysqlSvg id="iconBlack" />
                <ProgressBar
                  animated
                  variant={betteryVariant("MysqlSvg")}
                  now={languages["MysqlSvg"]}
                  style={show ? { opacity: "1" } : { opacity: "0" }}
                />
              </Col>
              <Col>
                <p id="progressFont">PostgreSQL</p>
                <Icon.PostgresqlSvg id="iconBlack" />
                <ProgressBar
                  animated
                  variant={betteryVariant("PostgresqlSvg")}
                  now={languages["PostgresqlSvg"]}
                  style={show ? { opacity: "1" } : { opacity: "0" }}
                />
              </Col>
              </Row>
            <p id="impactText">이 외에 다른</p>
            <Row style={{ gap: "1rem" }}>
              <Col>
                <p id="progressFont">Photoshop</p>
                <Icon.PhotoshopSvg id="iconBlack" />
                <ProgressBar
                  animated
                  variant={betteryVariant("PhotoshopSvg")}
                  now={languages["PhotoshopSvg"]}
                  style={show ? { opacity: "1" } : { opacity: "0" }}
                />
              </Col>
              <Col>
                <p id="progressFont">Premire Pro</p>
                <Icon.PremierproSvg id="iconBlack" />
                <ProgressBar
                  animated
                  variant={betteryVariant("PremierproSvg")}
                  now={languages["PremierproSvg"]}
                  style={show ? { opacity: "1" } : { opacity: "0" }}
                />
              </Col>
              <Col>
                <p id="progressFont">Ableton Live</p>
                <Icon.AbletonSvg id="iconBlack" />
                <ProgressBar
                  animated
                  variant={betteryVariant("AbletonSvg")}
                  now={languages["AbletonSvg"]}
                  style={show ? { opacity: "1" } : { opacity: "0" }}
                />
              </Col>
            </Row>

            <Col id="svgBtnGroup">
              <Button id="svgBtn" onClick={() => setShow(!show)}>
                {!show ? <p>숙련도 보기</p> : <p>숙련도 닫기</p>}
              </Button>

              <Button id="svgHelpBtn" onClick={() => setHelp(true)}>
                ?
              </Button>
              <Modal show={help} onHide={() => setHelp(false)} id="helpModal">
                <Modal.Body>
                  <p>
                    <ProgressBar
                      animated
                      variant={"success"}
                      now={100}
                      label="능숙"
                    />
                    <ProgressBar
                      animated
                      variant={"warning"}
                      now={100}
                      label="보통"
                    />
                    <ProgressBar
                      animated
                      variant={"danger"}
                      now={100}
                      label="미흡"
                    />
                  </p>
                </Modal.Body>
              </Modal>
            </Col>
          </Container>
        </div>
        <IntroduceButton clickMove={setMoveTo} />
      </div>
    </Col>
  );
}
