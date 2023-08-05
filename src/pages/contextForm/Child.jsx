import React, { useContext } from "react";
import { MyContext } from "../../context/MyContext";

const Child = () => {
  const value = useContext(MyContext);

  return (
    <div>
      <h4>Child</h4>
      <p>{value}</p>
    </div>
  );
};

export default Child;
