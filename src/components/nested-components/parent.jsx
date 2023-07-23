import React from "react";
import Child from "./child";

const Parent = ({ data }) => {
  return (
    <div>
      <p>this is parent</p>
      <p>{data}</p>
      {/* <Child data={data} /> */}
    </div>
  );
};

export default Parent;
