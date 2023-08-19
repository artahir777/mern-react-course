import React, { useContext } from "react";
import { MyContext } from "../../context/MyContext";

const GrtGrandChild = () => {
  const {value, setValue} = useContext(MyContext);

  return (
    <>
      <div>GrtGrandChild</div>
      <p>The value in great grandchild: {value}</p>
      <input type="text" onChange={e => setValue(e.target.value)} />
    </>
  );
};

export default GrtGrandChild;
