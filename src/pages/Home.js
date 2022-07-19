import React, { useEffect, useRef, useState } from "react";
import { Navbar, Container, Nav, Image, Alert } from "react-bootstrap";

function Home() {
  const homeStyle = {
    width: "100%",
    height: "100%",
    justifyContent: "center",
  };

  const homeContents = {
    
  };

  const visibleAnima = useRef();

  useEffect(() => {
    setTimeout(() => {
      visibleAnima.current.animate({ opacity: 1 }, 400);
      // visibleAnima.current.style.opacity = 1;
    }, 1500);
  });

  return (
    <Container
      fluid
      className="home backgroundStudio d-flex"
      style={homeStyle}
      ref={visibleAnima}
    >
      <div className="d-flex homeContent" style={homeContents}>
        꿈이 많은 어른 아이
      </div>
    </Container>
    // <Navbar bg="dark" variant="dark">
    //     <Image src="img/studio.jpg" style={{width: '18em'}} alt="logo"/>
    // {/* <img src="img/studio.jpg" className="App" alt="logo" /> */}
    //     <Container>
    //         <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    //         <Nav className="me-auto">
    //             <Nav.Link href="#home">Home</Nav.Link>
    //             <Nav.Link href="#features">Features</Nav.Link>
    //             <Nav.Link href="#pricing">Pricing</Nav.Link>
    //         </Nav>
    //     </Container>
    // </Navbar>
  );
}

export default Home;
