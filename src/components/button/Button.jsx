import React from "react";
import ButtonStyle from "./button.styled";

export const someFunc = () => console.log("hello");

const Button = ({ text, onClick, size, type }) => {
  return (
    <ButtonStyle size={size} type={type}>
      <button className="custom-button" onClick={onClick}>
        {text}
      </button>
    </ButtonStyle>
  );
};

export default Button;
