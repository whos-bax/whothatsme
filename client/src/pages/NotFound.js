import { useEffect } from "react";
import { Container, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => navigate("/home"), 1500);
  });

  const notfoundStyle = {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: "1rem",
    backgroundColor: "#171717",
    color: "white",
  };

  return (
    <Container fluid className="pageEnter" style={notfoundStyle}>
      <p style={{ fontSize: "1.5rem" }}>
        <b>잘못된 접근</b>입니다.
        <br />
        홈페이지로 돌아갑니다.
      </p>
      <p>
        Invalid approach. <br />
        Return to the homepage.
      </p>
      <br />
      <Spinner animation="border" role="status" variant="danger">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </Container>
  );
}
