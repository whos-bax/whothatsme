import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Modal,
  Row,
  Table,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { deleteDB, getDB } from "../apis/contact.api";

function ContactList() {
  const navigate = useNavigate;
  const [show, setShow] = useState(false);
  const [checkId, setCheckId] = useState();
  const [contacts, setContacts] = useState([]);

  const [update, setUpdate] = useState(false);
  const [deleteFile, setDeleteFile] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [passwordCheck, setPasswordCheck] = useState();

  const [updateValue, setUpdateValue] = useState({
    _id: "",
    title: "",
    name: "",
    message: "",
  });

  // db에서 파일 받아오기
  useEffect(() => {
    getDB()
      .then((res) => {
        setContacts(res);
      })
      .catch((err) => console.log(err));
  }, [getDB]);

  // 패스워드가 같은지 확인 후 업데이트 진행
  const checkPasswordUpdate = () => {
    contacts.map((ele) => {
      if (ele._id === checkId) {
        if (ele.Author_password === Number(passwordCheck)) {
          setUpdate(true);
          setUpdateModal(false);
        } else {
          setUpdate(false);
        }
      }
    });
  };

  // 패스워드가 같은지 확인 후 삭제 진행
  const checkPasswordDelete = () => {
    contacts.map((ele) => {
      if (ele._id === checkId) {
        if (ele.Author_password === Number(passwordCheck)) {
          setDeleteFile(true);
        } else {
          setDeleteFile(false);
        }
      }
    });
  };

  // 정말로 삭제하기
  const handleDelete = () => {
    contacts.map((ele) => {
      if (ele._id === checkId) {
        deleteDB({ checkId })
          .then((res) => console.log(res.statusText))
          .catch((err) => console.error(err));
        window.location.reload();
      }
    });
  };

  const handleUpdateValue = (event) => {
    const { name, value } = event.currentTarget;
  };

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
                <th>최종 작성일</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((ele) => (
                <tr key={ele._id} id={ele._id}>
                  <td>
                    <b>{ele.Board_title}</b>
                  </td>
                  <td>{ele.Author_name}</td>
                  <td>{ele.Update_date}</td>
                  <td>
                    <Button
                      variant="outline-light"
                      onClick={() => {
                        setShow(true);
                        setCheckId(ele._id);
                      }}
                    >
                      ☰
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
        {contacts.map((ele) => (
          <div key={ele._id}>
            {ele._id === checkId ? (
              <Modal
                show={show}
                onHide={() => {
                  setShow(false);
                  setUpdate(false);
                }}
              >
                <Modal.Header closeButton>
                  <Modal.Title>꿈이 많은 어른 아이</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  {/* update form */}
                  <Form>
                    <Row className="mb-3">
                      <Col
                        className="d-flex"
                        style={{ justifyContent: "center" }}
                      >
                        <h3 style={{ width: "100%", height: "100%" }}>
                          <Form.Control
                            type="text"
                            id="title"
                            name="title"
                            onChange={(e) => {
                              // value = e.target.value;
                              console.log(e.target.value);
                            }}
                            value={`${ele.Board_title}`}
                            disabled={!update}
                          ></Form.Control>
                        </h3>
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Col
                        className="d-flex"
                        style={{ justifyContent: "center" }}
                      >
                        <p>
                          <Form.Control
                            type="text"
                            id="name"
                            name="name"
                            value={`${ele.Author_name}`}
                            disabled={!update}
                          ></Form.Control>
                        </p>
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Col
                        className="d-flex"
                        style={{ justifyContent: "center" }}
                      >
                        <p style={{ width: "100%", height: "100%" }}>
                          <Form.Control
                            as="textarea"
                            id="message"
                            name="message"
                            value={`${ele.Board_message}`}
                            disabled={!update}
                          ></Form.Control>
                        </p>
                      </Col>
                    </Row>
                  </Form>
                  <Row>
                    <Col
                      className="d-flex"
                      style={{ justifyContent: "center" }}
                    >
                      <p style={{ fontSize: ".9rem" }}>
                        최초 작성일 : {ele.Register_date}
                      </p>
                    </Col>
                    <Col
                      className="d-flex"
                      style={{ justifyContent: "center" }}
                    >
                      <p style={{ fontSize: ".9rem" }}>
                        최종 작성일 : {ele.Update_date}
                      </p>
                    </Col>
                  </Row>
                </Modal.Body>
                <Modal.Footer>
                  {update ? (
                    <>
                      <Button
                        variant="secondary"
                        onClick={() => setUpdate(false)}
                      >
                        취소
                      </Button>
                      <Button variant="success" onClick={() => setShow(false)}>
                        저장
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button
                        variant="secondary"
                        onClick={() => setUpdateModal(true)}
                      >
                        수정
                      </Button>
                      <Button
                        variant="danger"
                        onClick={() => setDeleteModal(true)}
                      >
                        삭제
                      </Button>
                    </>
                  )}
                </Modal.Footer>
              </Modal>
            ) : null}
          </div>
        ))}

        {/* update Modal */}
        <Modal show={updateModal} onHide={() => setUpdateModal(false)}>
          <Modal.Body
            className="d-flex"
            style={{
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#FFC54D",
              gap: "1rem",
            }}
          >
            <h4>수정하기</h4>
            <p>비밀번호를 입력해주세요</p>
            <Form.Control
              type="text"
              id="passwordcheck"
              name="passwordcheck"
              maxLength={4}
              onChange={(e) => setPasswordCheck(e.target.value)}
              required
              style={{ width: "10rem" }}
            />
            {!update && (
              <p style={{ fontSize: "0.8rem", color: "red" }}>
                올바른 비밀번호를 입력하세요
              </p>
            )}
            <Button
              variant="light"
              style={{ width: "fit-content" }}
              onClick={checkPasswordUpdate}
            >
              확인
            </Button>
          </Modal.Body>
        </Modal>

        {/* delete Modal */}
        <Modal
          show={deleteModal}
          onHide={() => {
            setDeleteModal(false);
            setDeleteFile(false);
          }}
        >
          <Modal.Body
            className="d-flex"
            style={{
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#FFC54D",
              gap: "1rem",
            }}
          >
            <h4>삭제하기</h4>
            {!deleteFile ? (
              <>
                <p>비밀번호를 입력해주세요</p>
                <Form.Control
                  type="text"
                  id="passwordcheck"
                  name="passwordcheck"
                  maxLength={4}
                  onChange={(e) => setPasswordCheck(e.target.value)}
                  required
                  style={{ width: "10rem" }}
                />

                <p style={{ fontSize: "0.8rem", color: "red" }}>
                  올바른 비밀번호를 입력하세요
                </p>

                <Button
                  variant="light"
                  style={{ width: "fit-content" }}
                  onClick={checkPasswordDelete}
                >
                  확인
                </Button>
              </>
            ) : (
              <>
                <p>정말로 삭제하시겠습니까?</p>
                <p style={{ color: "red" }}>
                  (삭제 이후에는 다시 복구할 수 없습니다)
                </p>
                <Col>
                  <Button
                    variant="light"
                    style={{ width: "fit-content" }}
                    onClick={() => setDeleteFile(false)}
                  >
                    취소
                  </Button>{" "}
                  <Button
                    variant="danger"
                    style={{ width: "fit-content" }}
                    onClick={handleDelete}
                  >
                    삭제
                  </Button>
                </Col>
              </>
            )}
          </Modal.Body>
        </Modal>
        <Link to="/contact" id="backContactBtn">
          <p>돌아가기</p>
        </Link>
      </Row>
    </Container>
  );
}

export default ContactList;
