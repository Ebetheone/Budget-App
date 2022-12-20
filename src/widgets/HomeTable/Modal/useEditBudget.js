import axios from "../../../axios";
import React, { useCallback, useState } from "react";
import { useUserContext } from "../../../context/user.context";

export const useEditBudget = () => {
  const [loading, setLoading] = useState(false);

  const { user } = useUserContext();
  const userId = user?._id ? user._id : localStorage.getItem("userId");

  const addOrlogo = useCallback((values) => {
    if (!values.orlogo) {
      alert("Орлогоо оруулна уу.");
      return;
    }
    setLoading(true);
    axios
      .post(`/orlogo/addOrlogo?userId=${userId}`, {
        orlogo: values.orlogo,
        date: values.date,
        detail: values.detail,
        type: values.type,
      })
      .then(({ data }) => {
        if (data.success) {
          setLoading(false);
        } else {
          alert(data.message);
        }
      })
      .catch((err) => {
        alert(err.message);
        setLoading(false);
      })
      .finally(() => setLoading(false));
  }, []);

  const addZarlaga = useCallback((values) => {
    if (!values.zarlaga) {
      alert("Зарлагаа оруулна уу.");
      return;
    }
    setLoading(true);
    axios
      .post(`/zarlaga/addZarlaga?userId=${userId}`, {
        zarlaga: values.zarlaga,
        date: values.date,
        detail: values.detail,
        type: values.type,
      })
      .then(({ data }) => {
        if (data.success) {
          setLoading(false);
        } else {
          alert(data.message);
        }
      })
      .catch((err) => {
        alert(err.message);
        setLoading(false);
      })
      .finally(() => setLoading(false));
  }, []);

  const DeleteOrlogo = useCallback((id) => {
    axios
      .delete(`/orlogo/deleteOrlogo?id=${id}`)
      .then(({ data }) => {
        if (data.success) {
          console.log(data);
        } else {
          alert(data.message);
        }
      })
      .catch((err) => {
        alert(err.message);
        setLoading(false);
      })
      .finally(() => setLoading(false));
    return true;
  }, []);

  const DeleteZarlaga = useCallback((id) => {
    axios
      .delete(`/zarlaga/deleteZarlaga?id=${id}`)
      .then(({ data }) => {
        if (data.success) {
          data.success;
        } else {
          alert(data.message);
        }
      })
      .catch((err) => {
        alert(err.message);
        setLoading(false);
      })
      .finally(() => setLoading(false));
    return true;
  }, []);

  return {
    addOrlogo,
    addZarlaga,
    DeleteOrlogo,
    DeleteZarlaga,
    loading,
  };
};
