import React from "react";
import { useLocation } from "react-router-dom";

export default function Intro() {
  const search = useLocation();
  const introText = search.pathname.slice(1)

  return (
    <div>
      <h1 id="bigName">{introText}</h1>
    </div>
  );
}
