import React, { useRef } from "react";
import { ListGroup } from "react-bootstrap";
import "../css/ContentsBox.css";

function ContentsBox({ show, contents }) {
  const btnGroup = useRef();

  // 컨텐츠 보이기
  if (show) {
    setTimeout(() => {
      btnGroup.current.style.opacity = 1;
    }, 1500);
  }
  return (
    <ListGroup ref={btnGroup}>
      {contents.map((content) => (
        <ListGroup.Item
          action
          key={content}
          href={`#${content}`}
        >
          <p style={{ textAlign: "center" }}>{`${content}`}</p>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default ContentsBox;
