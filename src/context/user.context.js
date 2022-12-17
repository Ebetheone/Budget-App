import React, { createContext, useContext, useState } from "react";
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState();

  const setUserData = (user) => {
    if (user !== null) {
      return setUser(user);
    }
    setUser(null);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUserData,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
