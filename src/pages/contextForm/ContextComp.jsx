import React, { useState } from "react";
import { MyContext } from "../../context/MyContext";
import Child from "./Child";

const ContextComp = () => {
  const [text, setText] = useState("");
  const { Provider } = MyContext;

  return (
    <Provider>
      <div>ContextComp</div>
      <Child/>
    </Provider>
  );
};

export default ContextComp;
