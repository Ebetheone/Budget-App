import axios from "../../../axios";
import { useCallback, useState, useEffect } from "react";

export const useOrlogo = () => {
  const [loadingO, setLoading] = useState(false);
  const [Data, setData] = useState([]);

  const getOrlogo = useCallback(() => {
    axios
      .get("/orlogo/getOrlogo")
      .then(({ data }) => {
        if (!data.success) {
          throw new Error({ message: data.result });
        }
        setData(data.result);
      })
      .catch((err) => {
        alert(err.message);
        setLoading(false);
      })
      .finally(() => setLoading(false));
  });
  useEffect(() => {
    getOrlogo();
  }, [Data]);

  return {
    dataO: Data,
    getOrlogo,
    loadingO,
  };
};
