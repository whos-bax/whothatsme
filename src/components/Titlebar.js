import React, { useEffect, useState } from "react";
import { Container, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../css/Titlebar.css";

function Titlebar({ start, contents, getBlur }) {
  const [titleClicked, setTitleClicked] = useState(false);
  const [show, setShow] = useState(false);

  // start 값 받은 후 titlebar 보이기
  useEffect(() => {
    setShow(true);
  }, [start]);

  // 아래 titleClicked에 의해 메뉴 보이기
  const handleClickTitle = () => {
    if (getBlur) setTitleClicked(!titleClicked);
  };

  return (
    <Container
      fluid
      className="titleBar"
      style={show ? { height: "5rem" } : { height: 0 }}
    >
      <Dropdown
        onClick={(e) => {
          if (e.target.id === "titleNameBtn") {
            handleClickTitle();
          }
        }}
        className={`${titleClicked ? " titleClick" : ""}`}
        style={show ? { opacity: "1" } : { opacity: 0 }}
      >
        <Dropdown.Toggle variant="outline-light" id="titleNameBtn">
          꿈이 많은 어른 아이
        </Dropdown.Toggle>

        <Dropdown.Menu
          id="menuList"
          style={titleClicked ? { opacity: 1 } : { opacity: 0 }}
        >
          {contents.map((content, idx) => (
            <Dropdown.Item key={idx} disabled={!titleClicked} as="div" id="dropdown-item">
              <Link key={idx} to={`/${content}`}>{`${content}`}</Link>
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </Container>
  );
}

export default Titlebar;
