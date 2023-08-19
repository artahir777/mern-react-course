import React from "react";

const useDebounce = (value, delay = 1200) => {
  const [dbValue, setDbValue] = React.useState(value);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setDbValue(value);
    }, delay);
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return dbValue;
};

export default useDebounce;
