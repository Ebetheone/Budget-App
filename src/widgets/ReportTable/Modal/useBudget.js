import axios from "../../../axios";
import { useCallback, useState, useEffect } from "react";

export const useBudget = () => {
  const [loading, setLoading] = useState(false);
  const [Data, setData] = useState([]);

  const getOrlogo = useCallback(() => {
    setLoading(true);
    axios
      .get("/getOrlogo")
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
  }, []);

  const getZarlaga = useCallback(() => {
    setLoading(true);
    axios
      .get("/getZarlaga")
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
    getZarlaga();
  }, []);

  return {
    data: Data,
    getOrlogo,
    getZarlaga,
    loading,
  };
};
