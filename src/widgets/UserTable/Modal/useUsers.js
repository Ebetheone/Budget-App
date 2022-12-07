import axios from "../../../axios";
import { useCallback, useState, useEffect } from "react";

export const useUsers = () => {
  const [loading, setLoading] = useState(false);
  const [Data, setData] = useState([]);
  const token = localStorage.getItem("token");
  const getUsers = useCallback(() => {
    setLoading(true);
    axios
      .get("/user/getUsers", {
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
    getUsers();
  }, []);
  return {
    data: Data,
    getUsers,
    loading,
  };
};
