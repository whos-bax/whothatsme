import React, { useRef, useState } from "react";
import {
  Button,
  Col,
  Container,
  Overlay,
  ProgressBar,
  Row,
  Tooltip,
} from "react-bootstrap";
import * as Icon from "../utils/Icon";

function Introduce02skills() {
  const [show, setShow] = useState(false);
  const [help, setHelp] = useState(false);

  const target = useRef(null);

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
      <Row style={{ gap: ".rem" }}>
        <Col>
          <Icon.HtmlSvg id="iconBlack" />
          <ProgressBar
            animated
            variant={betteryVariant("HtmlSvg")}
            now={languages["HtmlSvg"]}
            style={show ? { opacity: "1" } : { opacity: "0" }}
          />
        </Col>
        <Col>
          <Icon.CssSvg id="iconBlack" />
          <ProgressBar
            animated
            variant={betteryVariant("CssSvg")}
            now={languages["CssSvg"]}
            style={show ? { opacity: "1" } : { opacity: "0" }}
          />
        </Col>
        <Col>
          <Icon.JavascriptSvg id="iconBlack" />
          <ProgressBar
            animated
            variant={betteryVariant("JavascriptSvg")}
            now={languages["JavascriptSvg"]}
            style={show ? { opacity: "1" } : { opacity: "0" }}
          />
        </Col>
        <Col>
          <Icon.ReactSvg id="iconBlack" />
          <ProgressBar
            animated
            variant={betteryVariant("ReactSvg")}
            now={languages["ReactSvg"]}
            style={show ? { opacity: "1" } : { opacity: "0" }}
          />
        </Col>
        <Col>
          <Icon.GitlabSvg id="iconBlack" />
          <ProgressBar
            animated
            variant={betteryVariant("GitlabSvg")}
            now={languages["GitlabSvg"]}
            style={show ? { opacity: "1" } : { opacity: "0" }}
          />
        </Col>
        <Col>
          <Icon.GithubSvg id="iconBlack" />
          <ProgressBar
            animated
            variant={betteryVariant("GithubSvg")}
            now={languages["GithubSvg"]}
            style={show ? { opacity: "1" } : { opacity: "0" }}
          />
        </Col>
        <Col>
          <Icon.TypescriptSvg id="iconBlack" />
          <ProgressBar
            animated
            variant={betteryVariant("TypescriptSvg")}
            now={languages["TypescriptSvg"]}
            style={show ? { opacity: "1" } : { opacity: "0" }}
          />
        </Col>
        <Col>
          <Icon.VueSvg id="iconBlack" />
          <ProgressBar
            animated
            variant={betteryVariant("VueSvg")}
            now={languages["VueSvg"]}
            style={show ? { opacity: "1" } : { opacity: "0" }}
          />
        </Col>
        <Col>
          <Icon.PythonSvg id="iconBlack" />
          <ProgressBar
            animated
            variant={betteryVariant("PythonSvg")}
            now={languages["PythonSvg"]}
            style={show ? { opacity: "1" } : { opacity: "0" }}
          />
        </Col>
        <Col>
          <Icon.PhpSvg id="iconBlack" />
          <ProgressBar
            animated
            variant={betteryVariant("PhpSvg")}
            now={languages["PhpSvg"]}
            style={show ? { opacity: "1" } : { opacity: "0" }}
          />
        </Col>
        <Col>
          <Icon.MysqlSvg id="iconBlack" />
          <ProgressBar
            animated
            variant={betteryVariant("MysqlSvg")}
            now={languages["MysqlSvg"]}
            style={show ? { opacity: "1" } : { opacity: "0" }}
          />
        </Col>
        <Col>
          <Icon.PostgresqlSvg id="iconBlack" />
          <ProgressBar
            animated
            variant={betteryVariant("PostgresqlSvg")}
            now={languages["PostgresqlSvg"]}
            style={show ? { opacity: "1" } : { opacity: "0" }}
          />
        </Col>
        <Col>
          <Icon.PhotoshopSvg id="iconBlack" />
          <ProgressBar
            animated
            variant={betteryVariant("PhotoshopSvg")}
            now={languages["PhotoshopSvg"]}
            style={show ? { opacity: "1" } : { opacity: "0" }}
          />
        </Col>
        <Col>
          <Icon.PremierproSvg id="iconBlack" />
          <ProgressBar
            animated
            variant={betteryVariant("PremierproSvg")}
            now={languages["PremierproSvg"]}
            style={show ? { opacity: "1" } : { opacity: "0" }}
          />
        </Col>
        <Col>
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
        <Button id="svgHelpBtn" onClick={() => setHelp(!help)}>
          ?
        </Button>
        {help && (
          <div id="help-tooltip">
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
              <ProgressBar animated variant={"danger"} now={100} label="미흡" />
            </p>
          </div>
        )}
      </Col>
    </Container>
  );
}

export default Introduce02skills;
