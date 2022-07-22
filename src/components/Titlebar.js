import React, {
  createRef,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
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
  const menu = useRef();

  // 타이틀 클릭시 state 값 변화주기
  const [titleClicked, setTitleClicked] = useState(false);

  const handleClickTitle = () => {
    setTitleClicked(!titleClicked);
    // 아래 titleClicked에 의해 메뉴 보이기
  };

  
  // 값이 넘어오고 나서 title 보여주기
  const titleRef = useCallback((node) => {
    if (node !== null) {
      setTimeout(() => {
        node.style.opacity = "1";
        node.style.zIndex = "1";
      }, 1500);
    }
  }, []);

  const menuRef = useCallback((node) => {
    if (node !== null) {
      titleClicked
        ? (node.style.opacity = "0")
        : (node.style.opacity = "1");

    }
  })

  return (
    <Container className="titleBar" ref={titleRef}>
      <Dropdown
        onClick={(e) => {
          if (e.target.id === "titleNameBtn") {
            console.log(e);
            handleClickTitle();
          }
        }}
        style={{ width: "100%" }}
        className={`${titleClicked ? " titleClick" : ""}`}
      >
        <Dropdown.Toggle variant="outline-light" id="titleNameBtn">
          <p>꿈이 많은 어른 아이</p>
        </Dropdown.Toggle>

        <Dropdown.Menu id="menuList" ref={menuRef}>
          {contents.map((content) => (
            <Dropdown.Item
              key={content}
              href={`#${content}`}
            >{`${content}`}</Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </Container>
  );
}

export default Titlebar;
