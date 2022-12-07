import React from "react";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import Homepage from "../Homepage";
import Userpage from "../Userpage";
import Sidebar from "../../Sidebar";
import "./style.scss";
function PrivateRoute() {
  if (!localStorage.getItem("token")) {
    return <Navigate to="/" state={{ from: history.location }} />;
  }
  return <Outlet />;
}

const Allpages = () => {
  return (
    <div className="background">
      <Sidebar />
      <Routes>
        <Route exact path="" element={<PrivateRoute />}>
          <Route exact path="/home" element={<Homepage />} />
          <Route path="/user" element={<Userpage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default Allpages;
