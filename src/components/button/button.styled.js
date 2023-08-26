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

const ButtonStyle = styled.div`
  .custom-button {
    border-radius: 5px;
    border: none;
    background-color: #12abe2;
    color: white;
    padding: ${(props) => setSize(props.size)};
  }
`;

export default ButtonStyle;
