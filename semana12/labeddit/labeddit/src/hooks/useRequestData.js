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
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.message);
        alert("Something happened!", error.message);
      });
  }, [url]);
  return data;
};

export default useRequestData;
