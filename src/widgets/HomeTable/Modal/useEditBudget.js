import { useCallback, useState } from "react";
import axios from "../../../axios";

export const useEditBudget = () => {
  const [loading, setLoading] = useState(false);

  const addOrlogo = useCallback((values) => {
    if (!values.orlogo) {
      alert("Орлогоо оруулна уу.");
      return;
    }
    setLoading(true);
    axios
      .post("/orlogo/addOrlogo", {
        orlogo: values.orlogo,
        date: values.date,
        detail: values.detail,
      })
      .then(({ data }) => {
        if (data.success) {
          setLoading(false);
        } else {
          alert(data.message);
        }
      })
      .catch((err) => {
        console.log(err.message);
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
      .post("/zarlaga/addZarlaga", {
        zarlaga: values.zarlaga,
        date: values.date,
        detail: values.detail,
      })
      .then(({ data }) => {
        if (data.success) {
          setLoading(false);
        } else {
          alert(data.message);
        }
      })
      .catch((err) => {
        console.log(err.message);
        setLoading(false);
      })
      .finally(() => setLoading(false));
  }, []);

  const DeleteOrlogo = useCallback((id) => {
    axios
      .post("/orlogo/deleteOrlogo", {
        orlogoId: id,
      })
      .then(({ data }) => {
        if (data.success) {
          console.log(data.success);
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

  const DeleteZarlaga = useCallback((id) => {
    axios
      .post("/zarlaga/deleteZarlaga", {
        zarlagaId: id,
      })
      .then(({ data }) => {
        if (data.success) {
          console.log(data.success);
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

  return { addOrlogo, addZarlaga, DeleteOrlogo, DeleteZarlaga, loading };
};
