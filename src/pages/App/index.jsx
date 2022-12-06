import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loginpage from "../Loginpage";
import Allpages from "../Allpages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="*" element={<Allpages />} />
        <Route exact path="/" element={<Loginpage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
