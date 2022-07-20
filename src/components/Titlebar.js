import React, { useRef, useState } from "react";
import {
  Container,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import '../css/Titlebar.css'

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
    <Container ref={titleRef}>
      <DropdownButton
        className={`${titleClicked ? "titleClick" : ""}`}
        id="dropdown-title"
        title="꿈이 많은 어른 아이"
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
