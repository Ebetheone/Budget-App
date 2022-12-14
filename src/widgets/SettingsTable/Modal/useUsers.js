import axios from "../../../axios";
import { useCallback, useState, useEffect } from "react";

export const useUsers = () => {
  const [loading, setLoading] = useState(false);
  const [Data, setData] = useState([]);
  const token = localStorage.getItem("token");

  const getUsers = useCallback(() => {
    axios
      .get("/user/getUsers", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(({ data }) => {
        if (!data.success) {
          throw new Error({ message: data.message });
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
    getUsers();
  }, [Data]);
  return {
    data: Data,
    getUsers,
    loading,
  };
};
