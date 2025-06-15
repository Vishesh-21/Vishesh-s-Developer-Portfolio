import { Footer } from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { GitHubContext } from "@/context/context";
import { Github, ExternalLink, Code, Star, GitFork } from "lucide-react";
import React, { useContext, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const AllProjects = () => {
  const { repos } = useContext(GitHubContext);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [expandedCard, setExpandedCard] = useState(null);
  const [isGridView, setIsGridView] = useState(true);
  const [randomColors, setRandomColors] = useState([]);

  const sortedRepos = repos.sort(
    (a, b) => new Date(b.created_at) - new Date(a.created_at)
  );

  // Generate vibrant colors for each repo
  useEffect(() => {
    const colors = sortedRepos.map(() => {
      const hue = Math.floor(Math.random() * 360);
      return `hsl(${hue}, 80%, 60%)`;
    });
    setRandomColors(colors);
  }, [sortedRepos.length]);

  // Animation variants
  const containerVariants = {
    grid: {
      transition: {
        staggerChildren: 0.05,
      },
    },
    list: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.05,
        duration: 0.5,
        type: "spring",
        stiffness: 100,
      },
    }),
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.3 } },
    hover: { scale: 1.03, transition: { duration: 0.2 } },
  };

  const glowVariants = {
    initial: { opacity: 0 },
    hover: {
      opacity: 1,
      transition: { duration: 0.3 },
    },
  };

  const codeIconVariants = {
    initial: { opacity: 0, pathLength: 0 },
    animate: {
      opacity: 1,
      pathLength: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
      },
    },
  };

  // Format date function
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  // Get language color
  const getLanguageColor = (language) => {
    const colors = {
      JavaScript: "#f7df1e",
      TypeScript: "#3178c6",
      Python: "#3776ab",
      HTML: "#e34c26",
      CSS: "#563d7c",
      Java: "#b07219",
      Ruby: "#701516",
      PHP: "#4F5D95",
      Go: "#00ADD8",
      Rust: "#dea584",
      Swift: "#ffac45",
      Kotlin: "#A97BFF",
      Dart: "#00B4AB",
    };
    return colors[language] || "#6e7681";
  };

  // Toggle between grid and list view
  const toggleView = () => {
    setIsGridView(!isGridView);
    setExpandedCard(null);
  };

  return (
    <>
      <Navbar />
      <div className="text-white min-h-screen  pt-12 pb-16 md:px-16 px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center mb-10"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 0.2,
              duration: 0.8,
            }}
            className="relative mb-6"
          >
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <Code size={40} className="text-white" />
            </div>
            <motion.div
              className="absolute inset-0 rounded-full"
              animate={{
                boxShadow: [
                  "0 0 0 0px rgba(59, 130, 246, 0.6)",
                  "0 0 0 10px rgba(59, 130, 246, 0)",
                ],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
                repeatDelay: 0.5,
              }}
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mb-3"
          >
            My GitHub Projects
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-lg text-gray-300 mb-8 text-center max-w-2xl"
          >
            Explore {sortedRepos.length} projects developed with passion and
            creativity
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleView}
            className="px-5 py-2 bg-indigo-600 rounded-full mb-6 hover:bg-indigo-700 transition-colors"
          >
            Switch to {isGridView ? "List" : "Grid"} View
          </motion.button>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={isGridView ? "grid" : "list"}
            variants={containerVariants}
            initial="hidden"
            animate={isGridView ? "grid" : "list"}
            className={
              isGridView
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                : "flex flex-col gap-6"
            }
          >
            {sortedRepos.map((repo, index) => {
              const isExpanded = expandedCard === index;

              return (
                <motion.div
                  key={repo.id}
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  whileHover={expandedCard === null ? "hover" : ""}
                  onClick={() => {
                    if (!isGridView) {
                      setExpandedCard(isExpanded ? null : index);
                    }
                  }}
                  className={`relative ${
                    isGridView
                      ? "aspect-square"
                      : isExpanded
                      ? "h-auto"
                      : "h-24"
                  } 
                    bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-lg cursor-pointer transition-all duration-300`}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Background pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage:
                          "radial-gradient(circle at 25px 25px, white 2px, transparent 0)",
                        backgroundSize: "50px 50px",
                      }}
                    />
                  </div>

                  {/* Glow effect on hover */}
                  <motion.div
                    variants={glowVariants}
                    initial="initial"
                    animate={hoveredCard === index ? "hover" : "initial"}
                    className="absolute inset-0 rounded-xl"
                    style={{
                      background: `radial-gradient(circle at center, ${randomColors[index]}20 0%, transparent 70%)`,
                      zIndex: 1,
                    }}
                  />

                  {/* Border line that animates */}
                  <motion.div
                    className="absolute inset-0 rounded-xl z-0"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${randomColors[index]}, transparent)`,
                      backgroundSize: "200% 100%",
                      opacity: hoveredCard === index ? 1 : 0,
                    }}
                    animate={
                      hoveredCard === index
                        ? {
                            backgroundPosition: [
                              "200% 0%",
                              "0% 0%",
                              "-200% 0%",
                            ],
                          }
                        : {}
                    }
                    transition={{ duration: 2, repeat: Infinity }}
                  />

                  {/* Actual content container */}
                  <div className="absolute inset-[1px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl z-10 flex flex-col">
                    {isGridView ? (
                      /* Grid view layout */
                      <div className="flex flex-col h-full p-6">
                        {/* Project number */}
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{
                            delay: index * 0.05 + 0.2,
                            type: "spring",
                          }}
                          style={{ backgroundColor: randomColors[index] }}
                          className="absolute -right-6 -top-6 w-20 h-20 rounded-full flex items-center justify-center z-20 shadow-lg"
                        >
                          <span className="text-2xl font-bold text-white translate-x-[-6px] translate-y-[-6px]">
                            {index + 1}
                          </span>
                        </motion.div>

                        {/* Language badge */}
                        {repo.language && (
                          <div className="self-start mb-4 flex items-center space-x-2">
                            <span
                              className="w-3 h-3 rounded-full"
                              style={{
                                backgroundColor: getLanguageColor(
                                  repo.language
                                ),
                              }}
                            />
                            <span className="text-sm">{repo.language}</span>
                          </div>
                        )}

                        {/* Title */}
                        <h2 className="text-xl font-bold capitalize mb-3 text-white">
                          {repo?.name.replace(/-/g, " ")}
                        </h2>

                        {/* Description */}
                        <p className="text-sm text-gray-300 mb-4 flex-grow">
                          {repo?.description
                            ? repo.description
                                .split(" ")
                                .slice(0, 21)
                                .join(" ") +
                              (repo.description.split(" ").length > 21
                                ? " ..."
                                : "")
                            : "No description available."}
                        </p>

                        {/* Stats and links */}
                        <div className="mt-auto">
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center space-x-4">
                              <div className="flex items-center space-x-1">
                                <Star size={16} className="text-yellow-400" />
                                <span className="text-sm">
                                  {repo.stargazers_count || 0}
                                </span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <GitFork size={16} className="text-blue-400" />
                                <span className="text-sm">
                                  {repo.forks_count || 0}
                                </span>
                              </div>
                            </div>
                            <div className="text-xs text-gray-400">
                              {formatDate(repo?.created_at)}
                            </div>
                          </div>

                          {/* Action buttons */}
                          <div className="flex space-x-3 justify-center">
                            <motion.a
                              href={repo?.html_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              className="flex-1 py-2 px-3 bg-gray-700 hover:bg-gray-600 rounded-lg flex items-center justify-center space-x-2"
                            >
                              <Github size={16} />
                              <span className="text-sm">Code</span>
                            </motion.a>
                            {repo?.homepage && (
                              <motion.a
                                href={repo.homepage}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="flex-1 py-2 px-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg flex items-center justify-center space-x-2"
                              >
                                <ExternalLink size={16} />
                                <span className="text-sm">Demo</span>
                              </motion.a>
                            )}
                          </div>
                        </div>
                      </div>

                    ) : (
                      /* List view layout */
                      <div
                        className={`relative flex items-center h-full ${
                          isExpanded ? "flex-col p-6" : "p-4"
                        }`}
                      >
                        {!isExpanded ? (
                          /* Collapsed view */
                          <>
                            <div
                              className="w-12 h-12 rounded-full flex items-center justify-center mr-4"
                              style={{ backgroundColor: randomColors[index] }}
                            >
                              <span className="font-bold">{index + 1}</span>
                            </div>

                            <div className="flex-grow">
                              <h2 className="text-lg font-bold capitalize text-white">
                                {repo?.name.replace(/-/g, " ")}
                              </h2>
                              {repo.language && (
                                <div className="flex items-center space-x-2">
                                  <span
                                    className="w-2 h-2 rounded-full"
                                    style={{
                                      backgroundColor: getLanguageColor(
                                        repo.language
                                      ),
                                    }}
                                  />
                                  <span className="text-sm text-gray-300">
                                    {repo.language}
                                  </span>
                                </div>
                              )}
                            </div>

                            <div className="flex items-center space-x-3">
                              <motion.a
                                href={repo?.html_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={(e) => e.stopPropagation()}
                                className="p-2 bg-gray-700 hover:bg-gray-600 rounded-full"
                              >
                                <Github size={16} />
                              </motion.a>
                              {repo?.homepage && (
                                <motion.a
                                  href={repo.homepage}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.9 }}
                                  onClick={(e) => e.stopPropagation()}
                                  className="p-2 bg-indigo-600 hover:bg-indigo-700 rounded-full"
                                >
                                  <ExternalLink size={16} />
                                </motion.a>
                              )}
                            </div>
                          </>
                        ) : (
                          /* Expanded view */
                          <>
                            <div className="self-start w-full flex items-center mb-4">
                              <div
                                className="w-14 h-14 rounded-full flex items-center justify-center mr-4"
                                style={{ backgroundColor: randomColors[index] }}
                              >
                                <span className="text-xl font-bold">
                                  {index + 1}
                                </span>
                              </div>
                              <div>
                                <h2 className="text-xl font-bold capitalize text-white">
                                  {repo?.name.replace(/-/g, " ")}
                                </h2>
                                {repo.language && (
                                  <div className="flex items-center space-x-2">
                                    <span
                                      className="w-2 h-2 rounded-full"
                                      style={{
                                        backgroundColor: getLanguageColor(
                                          repo.language
                                        ),
                                      }}
                                    />
                                    <span className="text-sm">
                                      {repo.language}
                                    </span>
                                  </div>
                                )}
                              </div>
                            </div>

                            <div className="w-full">
                              <p className="text-gray-300 mb-6">
                                {repo?.description ||
                                  "No description available."}
                              </p>

                              <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center space-x-6">
                                  <div className="flex items-center space-x-2">
                                    <Star
                                      size={18}
                                      className="text-yellow-400"
                                    />
                                    <span>
                                      {repo.stargazers_count || 0} stars
                                    </span>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    <GitFork
                                      size={18}
                                      className="text-blue-400"
                                    />
                                    <span>{repo.forks_count || 0} forks</span>
                                  </div>
                                </div>
                                <div className="text-gray-400">
                                  {formatDate(repo?.created_at)}
                                </div>
                              </div>

                              <div className="flex space-x-4">
                                <motion.a
                                  href={repo?.html_url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.95 }}
                                  onClick={(e) => e.stopPropagation()}
                                  className="flex-1 py-3 px-4 bg-gray-700 hover:bg-gray-600 rounded-lg flex items-center justify-center space-x-2"
                                >
                                  <Github size={18} />
                                  <span>View Repository</span>
                                </motion.a>
                                {repo?.homepage && (
                                  <motion.a
                                    href={repo.homepage}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={(e) => e.stopPropagation()}
                                    className="flex-1 py-3 px-4 bg-indigo-600 hover:bg-indigo-700 rounded-lg flex items-center justify-center space-x-2"
                                  >
                                    <ExternalLink size={18} />
                                    <span>Live Demo</span>
                                  </motion.a>
                                )}
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
      <Footer />
    </>
  );
};
