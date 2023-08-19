import React from "react";
import "./header.css";
const HeadingAndText = ({heading, text}) => {
  return (
    <span className="header">
      <h4>{heading}</h4>
      <p>{text}</p>
    </span>
  );
};

export default HeadingAndText;
