import React, { useState, createContext } from "react";

const IndexContext = createContext();

const initialState = {
  email: "",
};

export const Context = (props) => {
  const [state, setState] = useState(initialState);

  const HaveEmail = (props) => {
    setState({ ...state, email: props });
  };
  const chosenEmail = state.email;

  return (
    <IndexContext.Provider value={{ chosenEmail, HaveEmail }}>
      {props.children}
    </IndexContext.Provider>
  );
};

export default IndexContext;
