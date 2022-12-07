import { useCallback, useState } from "react";
import axios from "../../axios";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const login = useCallback((values) => {
    if (!values.email) {
      alert("email oruulna uu");
      return;
    }
    if (!values.password) {
      alert("password oruulna uu");
      return;
    }
    setLoading(true);
    axios
      .post("/auth/login", {
        email: values.email,
        password: values.password,
      })
      .then(({ data }) => {
        if (data.success) {
          localStorage.setItem("token", data.result);
          console.log("login" + data.result);
          navigate("/home", { replace: true });
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

  const register = useCallback((values) => {
    if (!values.email) {
      alert("email oruulna uu");
      return;
    }
    if (!values.password) {
      alert("password oruulna uu");
      return;
    }
    setLoading(true);

    axios
      .post("/auth/register", {
        email: values.email,
        password: values.password,
        firstName: values.firstName,
        lastName: values.lastName,
      })
      .then(({ data }) => {
        if (data.success) {
          localStorage.setItem("token", data.result);
          console.log("register" + data.result);
          navigate("/home", { replace: true });
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

  return { login, loading, register };
};
