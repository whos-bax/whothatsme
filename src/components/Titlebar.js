import React, { useRef, useState } from "react";
import {
  Container,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";

function Titlebar({ start }) {
  const headerStyle = {
    margin: "auto",
    transition: "all 0.5s ease-out",
    opacity: 0,
  };

  const headerBtn = {
    display: "flex",
    width: "fit-content",
    height: "100%",
    margin: "auto",
    justifyContent: "center",
  };

  const titleRef = useRef();
  if (start) {
    setTimeout(() => {
      titleRef.current.style.opacity = "1";
      titleRef.current.style.zIndex = "1";
    }, 1500);
  }

  const [titleClicked, setTitleClicked] = useState(false);

  const handleClickTitle = () => {
    setTitleClicked(!titleClicked);
  };
  if (titleClicked) console.log(titleClicked);

  return (
    <Container style={headerStyle} ref={titleRef}>
      <DropdownButton
        className={`${titleClicked ? "titleClick" : ""}`}
        id="dropdown-title"
        title="꿈이 많은 어른 아이"
        style={headerBtn}
        onClick={handleClickTitle}
      >
        <Dropdown.Item as="button">Action</Dropdown.Item>
        <Dropdown.Item as="button">Another action</Dropdown.Item>
        <Dropdown.Item as="button">Something else</Dropdown.Item>
      </DropdownButton>
    </Container>
  );
}

export default Titlebar;
