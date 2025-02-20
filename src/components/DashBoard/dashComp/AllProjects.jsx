import { Footer } from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { GitHubContext } from "@/context/context";
import { Github } from "lucide-react";
import React, { useContext } from "react";

export const AllProjects = () => {
  const { repos } = useContext(GitHubContext);

  const sortedRepos = repos.sort(
    (a, b) => new Date(b.created_at) - new Date(a.created_at)
  );

  return (
    <>
      <Navbar />
      <div className="text-white mt-22 md:px-24 px-4  grid sm:grid-cols-2 grid-cols-1 md:gap-10 gap-4 mb-8">
        {sortedRepos.map((repo, index) => {
          return (
            <div
              key={index}
              className="relative flex md:p-4 px-2 gap-7 items-center justify-start rounded-xl border-l-[2px] border-r-[2px]"
            >
              <h1 className="md:text-[7rem] text-[4rem] font-extrabold  gap-2">
                {Number(index) + 1}
              </h1>
              <div>
                <h2 className="md:text-2xl text-lg font-bold capitalize md:mb-2">
                  {repo?.name}
                </h2>
                <p className="md:text-[0.8rem] text-[0.7rem] md:w-[300px] w-full">
                  {repo?.description
                    ? repo.description.split(" ").slice(0, 21).join(" ") +
                      (repo.description.split(" ").length > 21 ? " ..." : "")
                    : "No description available."}
                </p>
              </div>
              <a
                href={repo?.html_url}
                className="absolute right-4 top-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={20}/>
              </a>
            </div>
          );
        })}
      </div>
      <Footer />
    </>
  );
};
