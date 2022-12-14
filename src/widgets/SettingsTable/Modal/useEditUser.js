import React, { useCallback, useState } from "react";
import axios from "../../../axios";

export const useEditUser = () => {
  const [loading, setLoading] = useState(false);

  const addUser = useCallback((values) => {
    if (!values.email) {
      alert("И-мэйлээ оруулна уу.");
      return;
    }
    if (!values.firstName) {
      alert("Нэрээ оруулна уу.");
      return;
    }
    if (!values.lastName) {
      alert("Овгоо оруулна уу.");
      return;
    }
    if (!values.password) {
      alert("Нууц үгээ оруулна уу.");
      return;
    }
    setLoading(true);
    axios
      .post("/auth/register", {
        email: values.email,
        firstName: values.firstName,
        lastName: values.lastName,
        password: values.password,
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

  const editUser = useCallback(async (values) => {
    await axios
      .post("/user/edit", {
        id: values._id,
        firstName: values.firstName,
        lastName: values.lastName,
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

  const resetUser = useCallback(async (values) => {
    await axios
      .post("/user/reset", {
        id: values._id,
        password: values.password,
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

  const deleteUser = useCallback((id) => {
    axios
      .post("/user/delete", {
        userId: id,
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

  return { addUser, editUser, resetUser, deleteUser, loading };
};
