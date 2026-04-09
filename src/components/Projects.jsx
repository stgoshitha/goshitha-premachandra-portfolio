import { useState } from 'react';
import { projectData } from '/src/AllText.jsx';
import { FiGithub } from "react-icons/fi";

const Projects = ({ id }) => {
  const [category, setCategory] = useState('Software Engineering');
  const [visibleCount, setVisibleCount] = useState(6);
  const [selectedProject, setSelectedProject] = useState(null); // 👈 For modal
  const currentProjects = projectData[category];

  const closeModal = () => setSelectedProject(null);

  return (
    <div id={id} className="flex justify-center items-center my-16">
      <div className="flex flex-col items-center w-full max-w-6xl mr-3 ml-3">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-white mb-8">My Projects</h2>
        
        {/* Category Switch */}
        <div className="flex justify-end lg:justify-start items-end lg:items-center space-x-4 mb-8">
          <span
            className={`sm:text-sm lg:text-xl ${
              category === "Software Engineering" ? "text-orange-500" : "text-white"
            }`}
          >
            Software Engineering
          </span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              id="category-switch"
              className="sr-only peer"
              onChange={() =>
                setCategory(
                  category === "Software Engineering"
                    ? "Graphic Design"
                    : "Software Engineering"
                )
              }
              checked={category === "Graphic Design"}
            />
            <span className="w-16 h-8 bg-gray-300 rounded-full peer-checked:bg-orange-500 peer-focus:ring-2 peer-focus:ring-orange-400 transition-all"></span>
            <span className="absolute left-1 top-1 w-6 h-6 bg-white rounded-full shadow-md peer-checked:translate-x-8 transform transition-all delay-500"></span>
          </label>
          <span
            className={`sm:text-sm lg:text-xl ${
              category === "Graphic Design" ? "text-orange-500" : "text-white"
            }`}
          >
            Graphic Design
          </span>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
          {currentProjects.slice(0, visibleCount).map((project, index) => (
            <div key={index} className="relative group">
              <div className={`border-[0.5px] bg-primary border-gray-900 rounded-xl p-6 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300 hover:shadow-sm hover:shadow-orange-500 max-w-[350px] ${
                    category === 'Graphic Design' ? '' : 'h-[600px]'
                  } overflow-hidden`}>
                <img
                  src={project.screenshot}
                  alt={project.title}
                  className={`w-full  rounded-lg mb-4 ${
                    category === 'Software Engineering' ? 'group-hover:blur-sm h-[200px]' : ''
                  } transition duration-300 `}
                />
                <h3 className="text-lg xl:text-xl font-semibold text-orange-500 mb-3">{project.title}</h3>

                {category === 'Software Engineering' && (
                  <>
                    <h3 className="text-ms font-medium text-white mb-1">{project.time}</h3>
                    <p className="text-gray-300 text-sm md:text-base lg:text-sm mb-4 text-justify hyphens-auto">{project.description}</p>
                    
                    <div className="flex items-end flex-wrap gap-2 my-3">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-orange-500 text-white text-xs font-semibold py-1 px-3 rounded-full "
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* GitHub button logic */}
                    <button
                      onClick={() => {
                        if (project.github02) {
                          setSelectedProject(project); // open modal
                        } else if (project.github01) {
                          window.open(project.github01, "_blank");
                        }
                      }}
                      className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-90 text-orange-500 text-lg font-bold opacity-0 group-hover:opacity-100 transition duration-300"
                    >
                      <div className='flex flex-col items-center justify-center'>
                        <FiGithub className="text-4xl text-center" />
                        <span>View on GitHub</span>
                      </div>
                    </button>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        {visibleCount < currentProjects.length && (
          <button
            onClick={() => setVisibleCount((prev) => prev + 6)}
            className="relative mt-6 bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition duration-300"
          >
            Show More
          </button>
        )}
      </div>

      {/* Modal for frontend/backend links */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="bg-gray-900 text-white p-6 rounded-xl shadow-xl max-w-sm w-full text-center">
            <h3 className="text-2xl font-semibold text-orange-500 mb-4">{selectedProject.title}</h3>
            <p className="text-gray-300 mb-6">Select a repository to view:</p>
            <div className="flex flex-col gap-3">
              <a
                href={selectedProject.github01}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-lg"
              >
                Frontend Repository
              </a>
              <a
                href={selectedProject.github02}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-lg"
              >
                Backend Repository
              </a>
            </div>
            <button
              onClick={closeModal}
              className="mt-6 text-sm text-gray-400 hover:text-orange-500 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
