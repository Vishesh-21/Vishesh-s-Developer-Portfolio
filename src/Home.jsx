import React from "react";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Dashboard } from "./components/DashBoard/Dashboard";
import Navbar from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { ResumeDownloader } from "./ResumeDownloader";

export const Home = () => {
  return (
    <>
      <Navbar />
      <div className="w-full mt-28 flex md:flex-row flex-col gap-10 md:px-[100px] px-[30px] mb-4">
        <Sidebar />
        <Dashboard />
      </div>
      <Footer />
      <ResumeDownloader/>
    </>
  );
};
