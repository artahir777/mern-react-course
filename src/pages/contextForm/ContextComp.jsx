import React, { useState } from "react";
import { MyContext } from "../../context/MyContext";
import Child from "./Child";

const ContextComp = () => {
  const [value, setValue] = useState("some value");
  const { Provider } = MyContext;

  return (
    <Provider value={{value, setValue}} >
      <div>The value in parent: {value}</div>
      <Child/>
    </Provider>
  );
};

export default ContextComp;
