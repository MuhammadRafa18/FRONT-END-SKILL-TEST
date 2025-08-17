import React from "react";
import { Navbar } from "../Component/Navbar";
import { Footer } from "../Component/Footer"
export const Layouts = ({children}) => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen  bg-gray-50">{children}</main>
      <Footer/> 
    </>
  );
};
