import React from 'react'
import { Navbar, Container, Nav, Image } from 'react-bootstrap';

function Home() {
    return (
        <Navbar bg="dark" variant="dark">
            <Image src="img/studio.jpg" style={{width: '18em'}} alt="logo"/>
        {/* <img src="img/studio.jpg" className="App" alt="logo" /> */}
            <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Home;