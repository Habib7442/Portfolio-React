import netflixImg from "./assets/netflix.jpg";
import blogImg from "./assets/blognew.jfif";
import myntraImg from "./assets/myntra.jfif";
import youtubeImg from "./assets/youtube.png";
import quickPicks from "./assets/quickpicks.jpg";

const projectData = [
  {
    id: 1,
    title: "QuickPicks",
    img: quickPicks,
    desc: [
      "Developed an impressive and user-friendly e-commerce website using React.js, showcasing strong frontend development skills.",
      "Implemented a robust backend using Node.js and Appwrite,demonstrating proficiency in backend development and API integration.",
      "Utilized Redux for state management, ensuring efficient data flow and seamless user interactions.",
      "Implemented a user-friendly shopping cart system, allowing customers to easily add and manage their selected items.",
    ],
    github: "https://github.com/Habib7442/QuickPicks",
    netlify: "https://quickpicks123.netlify.app/",
    linkedin: "https://www.linkedin.com/in/habib-tanwir/details/projects/"
  },
  {
    id: 2,
    title: "Netflix Clone",
    img: netflixImg,
    desc: [
      "Created a replica of Netflix using React JS, Bootstrap, and Material UI. ",
      "Designed an engaging and interactive front-end.",
      "Used Firebase for secure user registration and login functionality .",
    ],
    github: "https://github.com/Habib7442/Netflix-Clone",
    netlify: "https://netflix-clone-224.netlify.app/",
    linkedin: "https://www.linkedin.com/in/habib-tanwir/details/projects/"
  },
  {
    id: 3,
    title: "Youtube Clone",
    img: youtubeImg,
    desc: [
      "Created a YouTube clone using React.js and Material-UI.",
      "Integrated with external APIs to retrieve and display data on the front-end.",
      "Integrated with external APIs to retrieve and display data on the front-end.",
    ],
    github: "https://github.com/Habib7442/Youtube-2.0",
    netlify: "https://youtube-habib.netlify.app/",
    linkedin: "https://www.linkedin.com/in/habib-tanwir/details/projects/"
  },
  {
    id: 4,
    title: "Blog Website",
    img: blogImg,
    desc: [
      "Developed a dynamic blog website using React JS for the frontend and Firebase for the backend.",
      "Allowed users to like, delete, and update their own posts.",
      "Used Sass for responsive design and Tilt.js for 3D animation effects to enhance the user experience on multiple devices and present the content dynamically",
    ],
    github: "https://github.com/Habib7442",
    netlify: "https://the-digital-diary.web.app/",
    linkedin: "https://www.linkedin.com/in/habib-tanwir/details/projects/"
  },
  {
    id: 5,
    title: "Myntra Clone",
    img: myntraImg,
    desc: ["Tried to recreate this Myntra-Homepage-Clone using HTML, CSS"],
    github: "https://github.com/Habib7442/Myntra-clone",
    netlify: "https://myntraclone7442.netlify.app/",
    linkedin: "https://www.linkedin.com/in/habib-tanwir/details/projects/"
  },
  // {
  //   id: 5,
  //   title: "Some Fun with CSS",
  //   img: blogImg,
  //   desc: "CSS only Drawing",
  //   github: "https://github.com/Habib7442/Drawing-with-css",
  //   netlify: "https://drawingwithcss.netlify.app/",
  // },
];

export default projectData;
