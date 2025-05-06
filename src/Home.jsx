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
      <div className="mt-28 flex md:flex-row flex-col gap-10 max-w-6xl mx-auto md:px-0 px-6">
        <div className="md:w-[30%] w-full">
          <Sidebar />
        </div>
        <div className="md:w-[70%] w-full overflow-x-hidden">
          <Dashboard />
        </div>
      </div>
      <Footer />
      <ResumeDownloader />
    </>
  );
};
