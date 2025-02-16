import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const GitHubContext = createContext();

export const ContextProvider = ({ children }) => {
  const [githubData, setGithubData] = useState("");
  
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("https://api.github.com/users/Vishesh-21");
      if (res.status === 200) {
        setGithubData(res.data);
      }
    };
    fetchData();
  }, []);

  return (
    <GitHubContext.Provider value={{githubData}}>
      {children}
    </GitHubContext.Provider>
  );
};
