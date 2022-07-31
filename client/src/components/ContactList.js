import React, { useEffect, useState } from "react";
import { Button, Col, Container, Modal, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getDB } from "../apis/contact.api";

function ContactList() {
  const [show, setShow] = useState(false);
  const [info, setInfo] = useState([]);

  useEffect(() => {
    getDB()
      .then((res) => setInfo(res))
      .catch((err) => console.log(err));
  });

  return (
    <Container fluid className="pageEnter" id="contact">
      <Row id="contactContent" style={{ flexDirection: "column", gap: "1rem" }}>
        <Col
          style={{
            backgroundColor: "white",
            height: "100%",
            overflow: "auto",
            padding: "1rem",
          }}
        >
          <Table hover variant="dark" id="contactTable">
            <thead>
              <tr>
                <th>제목</th>
                <th>작성자</th>
                <th>작성일</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {info.map((ele) => (
                <tr key={ele.ID}>
                  <td>
                    <b>{ele.Board_title}</b>
                  </td>
                  <td>{ele.Author_name}</td>
                  <td>{ele.Register_date}</td>
                  <td>
                    <Button
                      variant="outline-light"
                      onClick={() => setShow(true)}
                    >
                      ☰
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
        <Modal show={show} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>꿈이 많은 어른 아이</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row className="mb-3">
              <Col className="d-flex" style={{ justifyContent: "center" }}>
                <h3>고구려의 역사</h3>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col className="d-flex" style={{ justifyContent: "center" }}>
                고구려는 부여에서 기원전 1세기경부터 1세기까지 내려온
                예족집단과, 이들보다 일찍 비류수일대로 내려와 주변의 맥과 역사적
                경험을 같이하게 되면서 동화의 길을 걷고 있던 졸본부여를 위시한
                예맥족, 그리고 압록강 중류유역의 토착세력인 맥족이 결합하여 만든
                나라가 고구려였다.
              </Col>
            </Row>
            <Row>
              <Col className="d-flex" style={{ justifyContent: "center" }}>
                2022-07-31
              </Col>
              <Col className="d-flex" style={{ justifyContent: "center" }}>
                박상호
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShow(false)}>
              수정
            </Button>
            <Button variant="danger" onClick={() => setShow(false)}>
              삭제
            </Button>
          </Modal.Footer>
        </Modal>

        <Link to="/contact" id="backContactBtn">
          <p>돌아가기</p>
        </Link>
      </Row>
    </Container>
  );
}

export default ContactList;
