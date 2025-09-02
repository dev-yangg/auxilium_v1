"use client";

import { createContext, useContext } from "react";
import React from "react";

interface AsideContextType {
  asideVisibility: boolean;
  setAsideVisibility: React.Dispatch<React.SetStateAction<boolean>>;
}

const AsideContext = createContext<AsideContextType | null>(null);

// Custom hook
export function useAside() {
  const context = useContext(AsideContext);
  if (!context) {
    throw new Error("useAside must be used within an AsideProvider");
  }
  return context;
}

export function AsideProvider({ children }: { children: React.ReactNode }) {
  const [asideVisibility, setAsideVisibility] = React.useState(true);

  return (
    <AsideContext.Provider value={{ asideVisibility, setAsideVisibility }}>
      {children}
    </AsideContext.Provider>
  );
}
