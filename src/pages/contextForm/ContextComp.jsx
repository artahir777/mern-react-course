import React, { useState } from "react";
import { MyContext } from "../../context/MyContext";
import Child from "./Child";

const ContextComp = () => {
  const [value, setValue] = useState("some value");
    
  // using the provider component, we can pass the value of context object from one PARENT component to its children
  const { Provider } = MyContext;

  return (
    <Provider value={{value, setValue}} >
      <div>The value in parent: {value}</div>
      <Child/>
    </Provider>
  );
};

export default ContextComp;
