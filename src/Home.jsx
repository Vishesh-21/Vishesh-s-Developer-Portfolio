import React from "react";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Dashboard } from "./components/DashBoard/Dashboard";
import Navbar from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";

export const Home = () => {
  return (
    <>
      <Navbar />
      <div className="w-full mt-28 flex gap-8 px-[100px] mb-4">
        <Sidebar />
        <Dashboard />
      </div>
      <Footer />
    </>
  );
};
