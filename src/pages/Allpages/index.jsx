import React from "react";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import "./style.scss";

import Homepage from "../Homepage";
import Userpage from "../Userpage";
import Sidebar from "../../Sidebar";
import Settings from "../Settingspage";
import Report from "../ Reportpage";
import RequireAuth from "../../hooks/RequireAuth";

const Allpages = () => {
  return (
    <div className="background">
      <Sidebar />
      <Routes>
        <Route exact path="/" element={<RequireAuth />}>
          <Route exact path="/home" element={<Homepage />} />
          <Route path="/user" element={<Userpage />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/report" element={<Report />} />
        </Route>
      </Routes>
    </div>
  );
};

export default Allpages;
