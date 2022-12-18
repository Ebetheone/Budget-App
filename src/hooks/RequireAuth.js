import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useUserContext } from "../context/user.context";

const RequireAuth = () => {
  const { user } = useUserContext();
  const location = useLocation();
  const token = localStorage.getItem("token");

  return user || token ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
