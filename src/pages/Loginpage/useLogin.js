import { useCallback, useState } from "react";
import axios from "../../axios";
import { useLocation, useNavigate } from "react-router-dom";
import { useUserContext } from "../../context/user.context";

export const useLogin = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const from = location.state?.from?.pathName || "/home";
  const { setUserData } = useUserContext();

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
          localStorage.clear("token");
          localStorage.clear("userId");

          const accessToken = data.accessToken;
          localStorage.setItem("token", accessToken);
          localStorage.setItem("userId", data.private._id);
          setUserData(data.private);
          navigate(from, { replace: true });
        } else {
          alert(data.result);
        }
      })
      .catch((err) => {
        alert(err.message);
        setLoading(false);
      })
      .finally(() => {
        setLoading(false);
      });
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
      .post(
        "/auth/register",
        {
          email: values.email,
          password: values.password,
          firstName: values.firstName,
          lastName: values.lastName,
        },
        { withCredentials: true }
      )
      .then(({ data }) => {
        if (data.success) {
          const accessToken = data.accessToken;
          localStorage.setItem("token", accessToken);
          localStorage.setItem("userId", data.private._id);
          setUserData(data.private);
          navigate(from, { replace: true });
        } else {
          console.log(data.result);
        }
      })
      .catch((err) => {
        alert(err.message);
        console.log("duda");
        setLoading(false);
      })
      .finally(() => setLoading(false));
  }, []);

  return { login, loading, register };
};
