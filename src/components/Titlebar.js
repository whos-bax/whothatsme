import React from "react";
import {
  Container,
  Dropdown,
  DropdownButton,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";

function Titlebar() {
  const headerStyle = {
    display: "flex",
    width: "100%",
    height: "4rem",
    justifyContent: "end",
  };

  const headerBtn = {
    display: "flex",
    width: "fit-content",
    height: "100%",
    margin: "auto",
    justifyContent: "center",
    backgroundColor: "transparent"
  };
  return (
    <Container fluid style={headerStyle}>
      <DropdownButton
        id="dropdown-item-button"
        title="꿈이 많은 어른 아이"
        style={headerBtn}
      >
        <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
        <Dropdown.Item as="button">Action</Dropdown.Item>
        <Dropdown.Item as="button">Another action</Dropdown.Item>
        <Dropdown.Item as="button">Something else</Dropdown.Item>
      </DropdownButton>
      {/* <Dropdown.Menu show={true} style={headerBtn}>
      <Dropdown.Header>Dropdown header</Dropdown.Header>
      <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
      <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
    </Dropdown.Menu> */}
    </Container>
  );
}

export default Titlebar;
