import React, { useState } from "react";
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
import "../css/Contact.css";

function Contact() {
  const [show, setShow] = useState(false);

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
            <div style={{ paddingBottom: "1rem" }}>
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

            <Form
              id="contactForm"
              onChange={(e) => console.log(e.target.id, e.target.value)}
            >
              <Row id="nameEmail">
                <Col md="8">
                  <Form.Control type="text" placeholder="Title" id="title" />
                </Col>
                <Col md="4">
                  <Row>
                    <Form.Group>
                      <Form.Control type="text" placeholder="Name" id="name" />
                    </Form.Group>
                    <Form.Group>
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        id="password"
                      />
                    </Form.Group>
                  </Row>
                </Col>
              </Row>
              {/* <Form.Group> */}
              <Form.Control placeholder="Message" as="textarea" id="message" />
              {/* </Form.Group> */}
              <Button variant="outline-light" type="submit">
                Send
              </Button>
            </Form>
          </Row>
        </Col>

        <Button variant="light" id="linkBtn" onClick={() => setShow(true)}>
          <p id="impactText">LINK</p>
        </Button>
        <Modal
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
              <div style={{ padding: "5px" }}>
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
