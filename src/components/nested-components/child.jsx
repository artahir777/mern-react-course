import React, { useState } from "react";
import GrandChild from "./grandChild";

const Child = ({ data, setData }) => {
  console.log("re-render");
  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setData((data) =>
        data === data.toLowerCase() ? data.toUpperCase() : data.toLowerCase()
      );
      setLoading(false);
    }, 2000);
  };

  const [loading, setLoading] = useState(false);

  return (
    <div>
      {/* <p>this is child</p> */}
      {/* <GrandChild data={data} /> */}
      <p>{data}</p>
      <button disabled={loading} onClick={handleClick}>
        Change data
      </button>
    </div>
  );
};

export default Child;
