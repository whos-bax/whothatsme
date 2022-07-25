import React, { useEffect, useState } from "react";
import { Container, Dropdown } from "react-bootstrap";
import "../css/Titlebar.css";

function Titlebar({ start, contents }) {
  const [titleClicked, setTitleClicked] = useState(false);
  const [show, setShow] = useState(false);

  // start 값 받은 후 titlebar 보이기
  useEffect(() => {
    setShow(true);
  }, [start]);

  // 아래 titleClicked에 의해 메뉴 보이기
  const handleClickTitle = () => {
    setTitleClicked(!titleClicked);
  };

  return (
    <Container
      className="titleBar"
      style={show ? { opacity: 1 } : { opacity: 0 }}
    >
      <Dropdown
        style={{ width: "100%" }}
        onClick={(e) => {
          if (e.target.id === "titleNameBtn") {
            handleClickTitle();
          }
        }}
        className={`${titleClicked ? " titleClick" : ""}`}
      >
        <Dropdown.Toggle variant="outline-light" id="titleNameBtn">
          꿈이 많은 어른 아이
        </Dropdown.Toggle>

        <Dropdown.Menu
          id="menuList"
          style={titleClicked ? { opacity: 1 } : { opacity: 0 }}
        >
          {contents.map((content) => (
            <Dropdown.Item
              key={content}
              href={`#${content}`}
              disabled={!titleClicked}
            >{`${content}`}</Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </Container>
  );
}

export default Titlebar;
