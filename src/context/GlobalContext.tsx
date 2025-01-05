"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface GlobalContextType {
    quantityCumulative: number;
    setQuantityCumulative: React.Dispatch<React.SetStateAction<number>>;
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [quantityCumulative, setQuantityCumulative] = useState(0);

  return (
    <GlobalContext.Provider
      value={{ quantityCumulative, setQuantityCumulative }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  return context;
};
