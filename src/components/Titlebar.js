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

function Titlebar({ start, contents }) {
  const titleRef = useRef();
  const menu = useRef();

  // 값이 넘어오고 나서 title 보여주기
  if (start) {
    setTimeout(() => {
      titleRef.current.style.opacity = "1";
      titleRef.current.style.zIndex = "1";
    }, 1500);
  }

  // 타이틀 클릭시 state 값 변화주기
  const [titleClicked, setTitleClicked] = useState(false);

  const handleClickTitle = () => {
    setTitleClicked(!titleClicked);
    
    // 아래 titleClicked에 의해 메뉴 보이기
    titleClicked
      ? (menu.current.style.opacity = "0")
      : (menu.current.style.opacity = "1");
  };

  return (
    <Container
      className={"titleBar " + `${titleClicked ? "titleClick" : ""}`}
      ref={titleRef}
    >
      <Dropdown
        onClick={(e) => {
          if (e.target.id === "titleNameBtn") {
            handleClickTitle();
          }
        }}
        style={{ width: "100%" }}
      >
        <Dropdown.Toggle variant="outline-light" id="titleNameBtn">
          꿈이 많은 어른 아이
        </Dropdown.Toggle>

        <Dropdown.Menu id="menuList" ref={menu}>
          {contents.map((content) => (
            <Dropdown.Item href={`#${content}`}>{`${content}`}</Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </Container>
  );
}

export default Titlebar;
