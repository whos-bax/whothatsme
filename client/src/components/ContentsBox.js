import React from "react";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../css/ContentsBox.css";

function ContentsBox({ show, contents }) {
  return (
    <ListGroup
      className="contentsGroup"
      style={show ? { opacity: 1 } : { opacity: 0 }}
    >
      {contents.map((content, idx) => (
        <ListGroup.Item action key={idx}>
          <Link to={`/${content}`}>
            <p>{`${content}`}</p>
          </Link>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default ContentsBox;
