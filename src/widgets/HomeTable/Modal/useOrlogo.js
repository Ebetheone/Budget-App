import axios from "../../../axios";
import React, { useCallback, useState, useEffect } from "react";
import { useUserContext } from "../../../context/user.context";

export const useOrlogo = (state) => {
  const [loadingO, setLoading] = useState(false);
  const [Data, setData] = useState([]);

  const { user } = useUserContext();
  const userId = user?._id ? user._id : localStorage.getItem("userId");

  const token = localStorage.getItem("token");

  const getOrlogo = useCallback(() => {
    setLoading(true);
    axios
      .get(`/orlogo/getOrlogo?userId=${userId}`, {
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
  }, [Data]);
  useEffect(() => {
    getOrlogo();
  }, [state]);

  return {
    dataO: Data,
    getOrlogo,
    loadingO,
  };
};
