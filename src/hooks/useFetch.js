import React from "react";

const useFetch = (url) => {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const resp = await fetch(url);
        const jsonData = await resp.json();
        setData(jsonData);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, [url]);

  return { data, error, loading };
};

export default useFetch;
