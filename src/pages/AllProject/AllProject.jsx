import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import projectData from "../../ProjectData"; // Assuming you have your project data here

const AllProject = () => {
  const [projectModals, setProjectModals] = useState(
    Array(projectData.length).fill(false)
  );

  const openModal = (index) => {
    const updatedModals = [...projectModals];
    updatedModals[index] = true;
    setProjectModals(updatedModals);
  };

  const closeModal = (index) => {
    const updatedModals = [...projectModals];
    updatedModals[index] = false;
    setProjectModals(updatedModals);
  };

  return (
    <div className="allProject bg-black">
      <a
        type="button"
        href="/"
        className="hidden lg:inline-block bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded-lg mt-2"
        style={{ textDecoration: "none" }}
      >
        Home
      </a>
      <div className="center flex flex-wrap justify-center gap-5">
        {projectData.map((project, index) => (
          <div
            key={project.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden mt-4 mb-5"
            style={{ maxWidth: "22rem" }}
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-auto"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-2 text-justify">
                {project.desc[0].slice(0, 50)}
                <a
                  href="#"
                  onClick={() => openModal(index)}
                  className="text-blue-500 hover:underline ml-2"
                >
                  Read more
                </a>
              </p>
              <div className="flex items-center space-x-2">
                <a
                  href={project.github}
                  className="text-blue-500 hover:underline"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a
                  href={project.linkedin}
                  className="text-blue-500 hover:underline"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="#" className="text-blue-500 hover:underline">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a
                  type="button"
                  style={{ textDecoration: "none" }}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-2 rounded-lg shadow-md transition duration-300 ease-in-out"
                  href={project.netlify}
                >
                  View Live
                </a>
              </div>
            </div>

            {projectModals[index] && (
              <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 mb-4">
                    {project.desc.map((point, pointIndex) => (
                      <li key={pointIndex}>{point}</li>
                    ))}
                  </ul>
                  <button
                    onClick={() => closeModal(index)}
                    className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded-lg"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProject;
