import React from "react";
import useDebounce from "../../hooks/useDebounce";

const Search = () => {
  const [value, setValue] = React.useState("");

  const searchRs = useDebounce(value);

  // React.useEffect(()=>{
  //     clg
  // })

  return (
    <div>
      <input type="text" onChange={(e) => setValue(e.target.value)} />
      <p>Search Results: {searchRs}</p>
    </div>
  );
};

export default Search;
