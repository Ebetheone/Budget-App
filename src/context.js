import React, { useState, createContext } from "react";

const IndexContext = createContext();

const initialState = {
  ctxData: [],
};

export const Context = (props) => {
  const [state, setState] = useState(initialState);

  const HaveData = (props) => {
    setState({ ...state, ctxData: props });
  };

  const chosenData = state.ctxData;

  return (
    <IndexContext.Provider value={{ HaveData, chosenData }}>
      {props.children}
    </IndexContext.Provider>
  );
};

export default IndexContext;
