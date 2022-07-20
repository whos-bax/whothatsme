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
  const menu = useRef();
  if (start) {
    setTimeout(() => {
      titleRef.current.style.opacity = "1";
      titleRef.current.style.zIndex = "1";
      menu.current.style.opacity = "1";
    }, 500);
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
        <ListGroup horizontal id="menuList" ref={menu}>
          <ListGroup.Item>
            <Button variant="light">This</Button>
          </ListGroup.Item>
          <ListGroup.Item>ListGroup</ListGroup.Item>
          <ListGroup.Item>renders</ListGroup.Item>
          <ListGroup.Item>horizontally!</ListGroup.Item>
        </ListGroup>
      ) : null}
    </Container>
  );
}

export default Titlebar;
