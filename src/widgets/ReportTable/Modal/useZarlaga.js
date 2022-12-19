import axios from "../../../axios";
import { useCallback, useState, useEffect } from "react";
import { useUserContext } from "../../../context/user.context";

export const useZarlaga = () => {
  const [loadingZ, setLoading] = useState(false);
  const [Data, setData] = useState([]);

  const { user } = useUserContext();
  const userId = user?._id ? user._id : localStorage.getItem("userId");

  const token = localStorage.getItem("token");

  const getZarlaga = useCallback(() => {
    setLoading(true);
    axios
      .get(`/zarlaga/getZarlaga?userId=${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
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
  }, [Data]);

  return {
    dataZ: Data,
    getZarlaga,
    loadingZ,
  };
};
