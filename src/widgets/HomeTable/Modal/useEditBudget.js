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
      .post("/addOrlogo", {
        orlogo: values.orlogo,
      })
      .then(({ data }) => {
        if (data.success) {
          setLoading(false);
        } else {
          alert(data.result);
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
      .post("/addZarlaga", {
        zarlaga: values.zarlaga,
      })
      .then(({ data }) => {
        if (data.success) {
          setLoading(false);
        } else {
          alert(data.result);
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
      .post("/deleteOrlogo", {
        orlogoId: id,
      })
      .then(({ data }) => {
        if (data.success) {
          console.log(data.success);
        } else {
          alert(data.result);
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
      .post("/deleteZarlaga", {
        zarlagaId: id,
      })
      .then(({ data }) => {
        if (data.success) {
          console.log(data.success);
        } else {
          alert(data.result);
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
