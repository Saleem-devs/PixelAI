import React, { useState, createContext } from "react";

export const SnackbarContext = createContext();

export const SnackbarProvider = ({ children }) => {
  const [snackbarText, setSnackbarText] = useState({
    open: false,
    message: "",
    linkText: "",
    success: false,
  });

  return (
    <SnackbarContext.Provider value={{ snackbarText, setSnackbarText }}>
      {children}
    </SnackbarContext.Provider>
  );
};
