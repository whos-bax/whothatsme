import React, { useRef, useState } from "react";
import {
  Button,
  ButtonGroup,
  Container,
  Dropdown,
  DropdownButton,
  ListGroup,
  Nav,
} from "react-bootstrap";
import "../css/Titlebar.css";

function Titlebar({ start }) {
  const titleRef = useRef();
  if (start) {
    setTimeout(() => {
      titleRef.current.style.opacity = "1";
      titleRef.current.style.zIndex = "1";
    }, 2000);
  }

  const [titleClicked, setTitleClicked] = useState(false);

  const handleClickTitle = () => {
    setTitleClicked(!titleClicked);
  };

  return (
    <Container className="titleBar" ref={titleRef}>
      <ButtonGroup id="titleNameDiv">
        <Button
          variant="outline-light"
          className={`${titleClicked ? "titleClick" : ""}`}
          id="titleNameBtn"
          onClick={handleClickTitle}
        >
          <p>꿈이 많은 어른 아이</p>
        </Button>
      </ButtonGroup>
      {titleClicked ? (
        <Nav
          activeKey="/home"
          onSelect={(selectedKey) => console.log(`selected ${selectedKey}`)}
          style={{ display: "flex", flexDirection: "row", top: "4rem" }}
        >
          {/* <Nav.Item>
            <Nav.Link href="/home">Active</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">Link</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">Link</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>
              Disabled
            </Nav.Link>
          </Nav.Item> */}
        </Nav>
      ) : null}
    </Container>
  );
}

export default Titlebar;
