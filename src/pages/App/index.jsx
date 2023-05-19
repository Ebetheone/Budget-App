import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loginpage from "../Loginpage";
import Allpages from "../Allpages";
import { UserProvider } from "../../context/user.context";

const App = () => {
  // contexteer burj ugnu
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="*" element={<Allpages />} />
          <Route exact path="/login" element={<Loginpage />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
};

export default App;
