import emailjs from "@emailjs/browser";
import React, { useEffect, useRef, useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  ListGroup,
  Modal,
  Row,
} from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import Intro from "../components/Intro";
import "../css/Contact.css";
import emailjsForm from "../utils/emailjsForm";

function Contact() {
  const [show, setShow] = useState(false);
  const [validated, setValidated] = useState(false);
  const [contactMessage, setContactMessage] = useState();

  const search = useLocation();
  const [bigName, setBigName] = useState(false);
  const [canContact, setCanContact] = useState(false);
  const [emailSwitch, setEmailSwitch] = useState(false);

  const [getEntries, setGetEntries] = useState();

  const date = new Date();
  useEffect(() => {
    if (search.pathname === "/contact" && bigName === true) {
      setCanContact(true);
    }
  });

  useEffect(() => {
    if (contactMessage !== undefined) {
      setGetEntries(Object.entries(contactMessage));
    }
  }, [contactMessage]);

  useEffect(() => {
    if (getEntries !== undefined) {
      getEntries.map((ele) => {
        localStorage.setItem("contact", ele);
      });
    }
  }, [getEntries]);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    // 유효성 검사
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      console.log("Fill in all your content");
    } else {
      setContactMessage({
        name: form.name.value,
        password: form.password.value,
        title: form.title.value,
        message: form.message.value,
        email: form.email.value,
      });
      event.preventDefault();
      // emailjs로 매일 보내기
      // emailjs
      //   .sendForm(
      //     emailjsForm.serviceId,
      //     emailjsForm.templateId,
      //     form,
      //     emailjsForm.publicKey
      //   )
      //   .then(
      //     (result) => {
      //       console.log(result.text);
      //     },
      //     (error) => {
      //       console.log(error.text);
      //     }
      //   );
    }
    setValidated(true);
  };

  return (
    <>
      {!canContact ? (
        <Container fluid id="contact">
          <Row id="contactContent">
            <Intro setBigName={setBigName} />
          </Row>
        </Container>
      ) : (
        <Container fluid id="contact">
          <Row className="afterIntro" id="contactContent">
            <Button variant="light" id="linkBtn" onClick={() => setShow(true)}>
              <p>LINK</p>
            </Button>
            {/* Link 모달 띄우기 */}
            <Modal
              id="linkModal"
              show={show}
              onHide={() => setShow(false)}
              style={{ top: "15%", margin: "auto" }}
            >
              <Modal.Body
                style={{
                  height: "25rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Card
                  style={{
                    width: "18rem",
                    border: "#FFC54D solid",
                    margin: "auto",
                  }}
                >
                  <div
                    style={{
                      padding: "1rem 0",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <p id="impactText">LINK</p>
                  </div>
                  <Card.Header>
                    <p>
                      <b>You can contact me by</b>
                    </p>
                  </Card.Header>
                  <ListGroup variant="flush">
                    <ListGroup.Item
                      action
                      variant="warning"
                      target={"_blank"}
                      href="https://whosbax.notion.site/whosbax/0d558da814ad41efbf31fede4f410a5a"
                    >
                      <p>Notion</p>
                    </ListGroup.Item>
                    <ListGroup.Item
                      action
                      variant="warning"
                      target={"_blank"}
                      href="https://github.com/whos-bax"
                    >
                      <p>Github</p>
                    </ListGroup.Item>
                    <ListGroup.Item
                      action
                      variant="warning"
                      target={"_blank"}
                      href="https://whothatsme.tistory.com/"
                    >
                      <p>Tistory</p>
                    </ListGroup.Item>
                    <ListGroup.Item
                      action
                      variant="warning"
                      target={"_blank"}
                      href="mailto:bbak9604@gmail.com"
                    >
                      <p>Email</p>
                    </ListGroup.Item>
                    <ListGroup.Item
                      action
                      variant="warning"
                      target={"_blank"}
                      href="tel:01029635750"
                    >
                      <p>Phone</p>
                    </ListGroup.Item>
                  </ListGroup>
                </Card>
              </Modal.Body>
            </Modal>

            <Col md="7" id="contactBox">
              <Row
                style={{
                  margin: "1rem",
                  display: "flex",
                  height: "100%",
                  justifyContent: "center",
                }}
              >
                <div style={{ height: "fit-content" }}>
                  <p style={{ fontSize: "1.8rem" }}>Contact Me</p>
                </div>
                <div style={{ height: "fit-content" }}>
                  <p id="impactText">하고 싶은 말을 남겨주세요</p>
                </div>
                {/* Form 형태 */}
                <Form
                  id="contactForm"
                  noValidate
                  validated={validated}
                  onSubmit={handleSubmit}
                >
                  <Row id="nameEmail">
                    <Col>
                      <Row>
                        <Form.Group>
                          <Form.Control
                            type="text"
                            placeholder="Name"
                            id="name"
                            name="name"
                            required
                          />
                        </Form.Group>
                        <Form.Group>
                          <Form.Control
                            type="password"
                            placeholder="Password(4자리 문자 및 숫자)"
                            id="password"
                            maxLength={4}
                            minLength={4}
                            required
                          />
                        </Form.Group>
                      </Row>
                    </Col>
                    <Col>
                      <Row>
                        <Form.Group>
                          <Form.Check
                            type="switch"
                            id="emailSwitch"
                            name="emailSwitch"
                            label="이메일 전송 없이 저장"
                            style={{
                              width: "100%",
                              gap: "5px",
                              justifyContent: "end",
                            }}
                            onClick={() => setEmailSwitch(!emailSwitch)}
                          />
                        </Form.Group>
                        <Form.Group>
                          <Form.Control
                            type="email"
                            placeholder="Email"
                            id="email"
                            name="email"
                            disabled={emailSwitch}
                            required={!emailSwitch}
                          />
                        </Form.Group>
                      </Row>
                    </Col>
                  </Row>

                  <Row style={{ width: "100%" }}>
                    <Form.Control
                      type="text"
                      placeholder="Title"
                      id="title"
                      name="title"
                      required
                    />
                    <Form.Control
                      placeholder="Message"
                      as="textarea"
                      id="message"
                      name="message"
                      required
                    />
                  </Row>
                  <Button variant="outline-light" type="submit">
                    Save {"&"} Send
                  </Button>
                  <Link to="/contact/contact-list">
                    <p>목록</p>
                  </Link>
                </Form>
              </Row>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
}
export default Contact;
