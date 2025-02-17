import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const GitHubContext = createContext();

export const ContextProvider = ({ children }) => {
  const [githubData, setGithubData] = useState("");
  const [repos ,setRepos] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("https://api.github.com/users/Vishesh-21");
      if (res.status === 200) {
        setGithubData(res.data);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("https://api.github.com/users/Vishesh-21/repos");
      if (res.status === 200) {
        setRepos(res.data);
      }
    };
    fetchData();
  }, []);

  return (
    <GitHubContext.Provider value={{githubData,repos}}>
      {children}
    </GitHubContext.Provider>
  );
};
