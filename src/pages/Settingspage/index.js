import React from "react";
import SettingsTable from "../../widgets/SettingsTable";
import "./style.scss";

const Settingspage = () => {
  return (
    <div className="MainContainer">
      <div className="border"></div>
      <SettingsTable />
    </div>
  );
};

export default Settingspage;
