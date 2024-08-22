"use client";

import Footer from "@/layouts/Footer";
import TopBar from "@/layouts/TopBar";
import { ReactNode } from "react";

interface MainProviderProps {
  children: ReactNode;
}

const MainProvider = ({ children }: MainProviderProps) => {
  return (
    <div className="w-screen min-h-screen bg-background text-text">
      <TopBar/>
      {children}
      <Footer/> 
    </div>
  );
};

export default MainProvider;
