import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loginpage from "../Loginpage";
import Allpages from "../Allpages";
import { Context } from "../../context";

const App = () => {
  return (
    <Context>
      <BrowserRouter>
        <Routes>
          <Route exact path="*" element={<Allpages />} />
          <Route exact path="/" element={<Loginpage />} />
        </Routes>
      </BrowserRouter>
    </Context>
  );
};

export default App;
