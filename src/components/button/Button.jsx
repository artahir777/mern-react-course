import React from "react";
import ButtonStyle from "./button.styled";

const Button = ({ text, onClick, size }) => {
  return (
    <ButtonStyle size={size}>
      <button className="custom-button" onClick={onClick}>
        {text}
      </button>
    </ButtonStyle>
  );
};

export default Button;
