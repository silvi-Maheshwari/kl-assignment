// src/context/UserContext.jsx
import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState(() => {
    const localData = localStorage.getItem("users");
    return localData ? JSON.parse(localData) : [];
  });

  const addUser = (user) => {
    const updatedUsers = [...users, user];
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  return (
    <UserContext.Provider value={{ users, addUser }}>
      {children}
    </UserContext.Provider>
  );
};
