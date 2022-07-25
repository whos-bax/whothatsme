import React, { useEffect, useState } from "react";
import { Container, ListGroup } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import "../css/ContentsBox.css";

function Home({ contents }) {
  return (
    <Container fluid className="backgroundStudio pageEnter" id="home">
      <ListGroup className="contentsGroup" style={{ opacity: 1 }}>
        {contents.map((content, idx) => (
          <ListGroup.Item action key={idx}>
            <Link to={`/${content}`}>
              <p>{`${content}`}</p>
            </Link>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
}

export default Home;
