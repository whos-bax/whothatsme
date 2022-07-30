import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export default function Intro({ setBigName }) {
  const search = useLocation();
  const introText = search.pathname.slice(1);
  useEffect(() => {
    setTimeout(() => {
      setBigName(true);
    }, 2500);
  }, [introText]);
  return (
    <div>
      <h1 id="bigName">{introText}</h1>
    </div>
  );
}
