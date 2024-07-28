// import { createContext } from "react";

// const PathContext = createContext();

// export default PathContext;

import React, { createContext, useState } from 'react';

const PathContext = createContext();

export const PathProvider = ({ children }) => {
  const [currentPath, setCurrentPath] = useState('');

  return (
    <PathContext.Provider value={{ currentPath, setCurrentPath }}>
      {children}
    </PathContext.Provider>
  );
};

export default PathContext;