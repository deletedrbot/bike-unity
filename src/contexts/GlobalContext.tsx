import React, { useState } from 'react';
import { GlobalContext } from './globalContext.types';

export const GlobalProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => setIsDarkMode((v) => !v);
  return (
    <GlobalContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </GlobalContext.Provider>
  );
}; 