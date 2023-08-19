import React from "react";
import GrandChild from "./GrandChild";

const Child = () => {

  // using the useContext hook, we can access the value of a context object
  return (
    <div>
      <h4>Child</h4>
      <GrandChild/>
    </div>
  );
};

export default Child;
