import React, { useState } from "react";
import { Home } from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AllProjects } from "./components/DashBoard/dashComp/AllProjects";
import {PortLoader} from "./components/Loader/PortLoader"

const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? (
        <PortLoader onLoadingComplete={() => setLoading(false)} />
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<AllProjects />} />
          </Routes>
        </Router>
      )}
    </>
  );
};

export default App;
