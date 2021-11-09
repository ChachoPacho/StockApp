import React, { useState, createContext } from 'react';

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [handleUpdateStockView, setHandleUpdateStockView] = useState(false);

  return (
    <AppContext.Provider value={[handleUpdateStockView, setHandleUpdateStockView]}>
      {children}
    </AppContext.Provider>
  )
};