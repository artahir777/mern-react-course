import styled from "styled-components";

const setSize = (size) => {
  switch (size) {
    case "small":
      return "5px 8px";

    case "medium":
      return "7px 11px";

    case "large":
      return "10px 14px";

    default:
      return "7px 11px";
  }
};

// types -> contained, outlined, text
const btnType = (type) => {
  switch (type) {
    case "contained":
      return `background-color: #1976d2; color: white; border: none`;

    case "outlined":
      return `background-color: inherit; color: #1976d2; border: 1px solid #1976d2;`;

    case "text":
      return `background-color: inherit; color: #1976d2;`;

    default:
      return `background-color: #1976d2; color: white; border: none`;
  }
};

const ButtonStyle = styled.div`
  .custom-button {
    border-radius: 5px;

    padding: ${(props) => setSize(props.size)};
    background-color:
    color: white;
    border: none;
    ${(props) => btnType(props.type)}
  }
`;

export default ButtonStyle;
