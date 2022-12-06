import React from "react";
import HomeTable from "../../widgets/HomeTable";
import Widget from "../../widgets/widget";
import "./style.scss";

const Homepage = () => {
  return (
    <div className="MainContainer">
      <div className="border">
        <div className="widgets">
          <Widget type="user" />
          <Widget type="item" />
          <Widget type="menu" />
          <Widget type="order" />
        </div>
      </div>
      <HomeTable />
    </div>
  );
};

export default Homepage;
