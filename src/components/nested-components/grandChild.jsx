import React, { useCallback, useEffect, useReducer, useState } from "react";
import { PERSONS } from "../../utils/data";

const GrandChild = () => {
  const [data, setData] = useState(undefined);

  useEffect(() => {
    // fetchData();
    someOp();
  }, []);

  const someOp = () => {
    setTimeout(() => setData(PERSONS), 2000);
  };

  // Other built-in hooks
  // useCallback, useMemo, useContext, useReducer

  //   const fetchData = async () => {
  //     return fetch("https://jsonplaceholder.typicode.com/users")
  //       .then((resp) => {
  //         resp.json()
  //       }).then(json => {
  //         setData(json);
  //         console.log(json)})
  //       .catch((err) => {
  //         console.log("some error", err);
  //       });
  //   };

  return (
    <div>
      {!data ? (
        <p>loading</p>
      ) : (
        data?.map((person, index) => <p key={index}>{person.name}</p>)
      )}
    </div>
  );
};

export default GrandChild;
