import React, { useEffect, useState } from "react";
import { Button, Container, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../css/Footer.css";

function Footer({ start }) {
  const [show, setShow] = useState(false);
  const [goFirst, setGoFirst] = useState(false);

  const navigate = useNavigate();

  // start 값 받은 후 footer 보이기
  useEffect(() => {
    setShow(true);
  }, [start]);

  // 모두 지우고 welcome이 나오는 첫 페이지로 다시 이동
  const welcomeAgain = () => {
    navigate('/');
    navigate(0);
    localStorage.clear();
  };
  return (
    <Container
      fluid
      className="footer"
      style={show ? { height: "5rem" } : { height: 0 }}
    >
      <div id="welcomeDiv" style={show ? { opacity: 1 } : { opacity: 0 }}>
        <Button id="welcomeAgainSty" onClick={() => setGoFirst(true)}>
          ↺
        </Button>
        <Modal show={goFirst} onHide={() => setGoFirst(false)} id="backModal">
          <Modal.Header
            closeButton={false}
            style={{ border: 0, justifyContent: "center" }}
          >
            <Modal.Title>
              <p style={{ color: "red" }}>처음부터 다시 보기</p>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ textAlign: "center" }}>
            <p>맨 처음으로 돌아가시겠습니까?</p>
          </Modal.Body>
          <Modal.Footer style={{ border: 0, justifyContent: "center" }}>
            <Button variant="secondary" onClick={() => setGoFirst(false)}>
              닫기
            </Button>
            <Button variant="warning" onClick={welcomeAgain}>
              돌아가기
            </Button>
          </Modal.Footer>
        </Modal>
      </div>

      <div id="footerDiv" style={show ? { opacity: 1 } : { opacity: 0 }}>
        <p style={{ fontSize: "14px" }}>
          © 2022 whosbax. All rights reserved.{" "}
        </p>
      </div>
    </Container>
  );
}

export default Footer;
