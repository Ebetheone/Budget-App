import { useCallback, useState, useContext } from "react";
import axios from "../../axios";
import { useNavigate } from "react-router-dom";
import IndexContext from "../../context";

export const useLogin = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const ctx = useContext(IndexContext);
  const HaveEmail = (props) => {
    ctx.HaveEmail(props);
  };

  const login = useCallback((values) => {
    if (!values.email) {
      alert("И-мэйлээ оруулна уу.");
      return;
    }
    if (!values.password) {
      alert("Нууц үгээ оруулна уу.");
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
          HaveEmail(data.private.email);
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
      alert("И-мэйлээ оруулна уу.");
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
        password: values.password,
        firstName: values.firstName,
        lastName: values.lastName,
      })
      .then(({ data }) => {
        if (data.success) {
          localStorage.setItem("token", data.result);
          HaveEmail(data.private);
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
