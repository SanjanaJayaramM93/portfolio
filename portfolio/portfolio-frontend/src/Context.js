// src/Context.js
import React, { createContext, useState } from 'react';

// Create the context
export const AppContext = createContext();

// Create and export the provider component
export const AppProvider = ({ children }) => {
  const [value, setValue] = useState("Welcome to my portfolio");

  return (
    <AppContext.Provider value={{ value, setValue }}>
      {children} {/* Render the children components */}
    </AppContext.Provider>
  );
};
