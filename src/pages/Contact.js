import emailjs from "@emailjs/browser";
import React, { useEffect, useState, useRef } from "react";
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
import { Link } from "react-router-dom";
import "../css/Contact.css";
import emailjsForm from "../utils/emailjsForm";

function Contact() {
  const [show, setShow] = useState(false);
  const [validated, setValidated] = useState(false);
  const [contactMessage, setContactMessage] = useState({});

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      console.log("Fill in all your content");
    } else {
      setContactMessage({
        title: form.title.value,
        name: form.name.value,
        password: form.password.value,
        message: form.message.value,
        email: form.email.value,
      });
      
      // emailjs로 매일 보내기
      emailjs
        .sendForm(emailjsForm.serviceId, emailjsForm.templateId, form, emailjsForm.publicKey)
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
    setValidated(true);
  };

  return (
    <Container fluid className="pageEnter" id="contact">
      <Row id="contactContent">
        <Col md="5" id="contact-me-by">
          <Card
            style={{
              width: "18rem",
              height: "50%",
              justifyContent: "center",
              border: "#FFC54D solid",
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
        </Col>
        <Col md="7" id="contactBox">
          <Row style={{ margin: "1rem", display: "flex", height: "100%" }}>
            <p style={{ fontSize: "1.8rem" }}>Contact Me</p>
            <p id="impactText">하고 싶은 말을 남겨주세요</p>
            <Form
              id="contactForm"
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
            >
              <Row id="nameEmail">
                <Col md="4">
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
                        placeholder="Password"
                        id="password"
                        required
                      />
                    </Form.Group>
                  </Row>
                </Col>
                <Col>
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    id="email"
                    name="email"
                    required
                  />
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

        <Button variant="light" id="linkBtn" onClick={() => setShow(true)}>
          <p id="impactText">LINK</p>
        </Button>
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
      </Row>
    </Container>
  );
}
export default Contact;
