import axios from "axios";
import { useEffect, useState } from "react";
import { headers } from "../constants/requestsData";

const useRequestData = (initialData, url) => {
  const [data, setData] = useState(initialData);

  useEffect(() => {
    axios
      .get(url, headers)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log("entrou no err", error.message);
      });
  }, [url]);
  return data;
};

export default useRequestData;
