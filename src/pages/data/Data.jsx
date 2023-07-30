import React from "react";
import useFetch from "../../hooks/useFetch";

const Data = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const { data, error, loading } = useFetch(url);

  if (loading) {
    return (
      <div>
        <h4>Loading...</h4>
      </div>
    );
  }

  //   console.log("data", data);

  return data ? (
    <div>
      {data?.map((item, index) => (
        <p key={index}>
          {`ID: ${item?.id}`}
          <br />
          {item?.title}
        </p>
      ))}
    </div>
  ) : (
    <p>Something went wrong</p>
  );
};

export default Data;
