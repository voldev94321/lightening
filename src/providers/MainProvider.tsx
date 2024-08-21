"use client";

import { ReactNode } from "react";

interface MainProviderProps {
  children: ReactNode;
}

const MainProvider = ({ children }: MainProviderProps) => {
  return (
    <div className="w-screen min-h-screen bg-background text-primary">
      {children}
    </div>
  );
};

export default MainProvider;
