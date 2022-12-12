import axios from "../../../axios";
import { useCallback, useState, useEffect } from "react";

export const useZarlaga = () => {
  const [loadingZ, setLoading] = useState(false);
  const [Data, setData] = useState([]);

  const getZarlaga = useCallback(() => {
    setLoading(true);
    axios
      .get("/zarlaga/getZarlaga")
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
    dataZ: Data,
    getZarlaga,
    loadingZ,
  };
};
