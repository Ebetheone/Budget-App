import React from "react";
import HomeTable from "../../widgets/HomeTable";
import "./style.scss";

const Homepage = () => {
  return (
    <div className="MainContainer">
      <div className="border"></div>
      <HomeTable />
    </div>
  );
};

export default Homepage;
