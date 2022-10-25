import React, { useEffect, useState } from "react";
import axios from "axios";

export default function useFetch(url) {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect (() => {
    axios.get(url).then((response) => {
      setData(response.data);
      setLoading(true);
    }).catch((err) => {
      setError(err);
      setLoading(true);
    }).finally(() => {
        setLoading(false);
    })
  }, [url]);
  console.log(data.results)
   return { data, error, loading };
}
