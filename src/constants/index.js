import{
  reactjs,
  cdac,
  unschool,
  html,
  css,
  javascript,
  threejs,
  git,
  tailwind,
  mongodb,
  nextjs,
  bootstrap,
  firebase,
  youtube,
  netflix,
  blog,
  portfolio,
  ecommerce
} from "../assets"
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      // icon: web,
      // component: <ReactModel />
    },
    {
      title: "React Developer",
      // icon: mobile,
      // component: <WebModel />
    },
    {
      title: "Next js Developer",
      // icon: backend,
    },
    {
      title: "Graphics Designer",
      // icon: creator,
      // component: <GraphicsModel />
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    // {
    //   name: "TypeScript",
    //   icon: typescript,
    // },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Next JS",
      icon: nextjs,
    },
    {
      name: "Bootstrap",
      icon: bootstrap,
    },
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Firebase",
      icon: firebase,
    },
    // {
    //   name: "Node JS",
    //   icon: nodejs,
    // },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    // {
    //   name: "figma",
    //   icon: figma,
    // },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "Full Stack Web Developer (Intern)",
      company_name: "CDAC Silchar",
      icon: cdac,
      iconBg: "#383E56",
      date: "Aug 2022 - Oct 2022",
      points: [
        "Designed a visually appealing course website with a clean and modern layout to showcase courses in an effective manner.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Used dynamic visuals and animations to bring the website's content to life.",
      ],
    },
    {
      title: "React Js Developer (Intern)",
      company_name: "Unschool",
      icon: unschool,
      iconBg: "#E6DEDD",
      date: "Aug 2022 - Sept 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Developed a Full Stack Portfolio website using React.js.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    // {
    //   title: "Web Developer",
    //   company_name: "Shopify",
    //   // icon: shopify,
    //   iconBg: "#383E56",
    //   date: "Jan 2022 - Jan 2023",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   // icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];
  const projects = [
    {
      title: "QuickPicks (Ecommerce Website)",
      techstack : "React Js, Appwrite, Tailwind CSS, Material UI",
      icon: ecommerce,
      iconBg: "#383E56",
      date: "Jan-2023",
      points: [
        "Developed an impressive and user-friendly e-commerce website using React.js, showcasing strong frontend development skills.",
        "Implemented a robust backend using Node.js and Appwrite,demonstrating proficiency in backend development and API integration.",
        "Utilized Redux for state management, ensuring efficient data flow and seamless user interactions.",
        "Implemented a user-friendly shopping cart system, allowing customers to easily add and manage their selected items.",
        "Deployment link : https://quickpicks123.netlify.app/",
        "GitHub link : https://github.com/Habib7442/QuickPicks"
      ],
    },
    {
      title: "The Digital Diary (Blog Website)",
      techstack : "React Js, Firebase, Sass, Tilt.js",
      icon: blog,
      iconBg: "#383E56",
      date: "Jan-2023",
      points: [
        "Developed a dynamic blog website using React JS for the frontend and Firebase for the backend.",
        "Allowed users to like, delete, and update their own posts.",
        "Used Sass for responsive design and Tilt.js for 3D animation effects to enhance the user experience on multiple devices and present the content dynamically",
        "Deployment link : https://the-digital-diary.web.app/",
        "GitHub link : https://github.com/Habib7442/the-digital-diary"
      ],
    },
    {
      title: "Youtube 2.0 (Youtube Clone)",
      techstack : "React Js, Material UI, Youtube API",
      icon: youtube,
      iconBg: "#E6DEDD",
      date: "Jan-2023",
      points: [
        "Created a YouTube clone using React.js and Material-UI.",
        "Integrated with external APIs to retrieve and display data on the front-end.",
        "Integrated with external APIs to retrieve and display data on the front-end.",
        "Deployment link : https://youtube-habib.netlify.app/",
        "GitHub link : https://github.com/Habib7442/Youtube-2.0"
      ],
    },
    {
      title: "Personal Portfolio",
      techstack : "React Js, Scss, Tailwind CSS, Three.js, Firebase",
      icon: portfolio,
      iconBg: "#E6DEDD",
      date: "Nov-2022",
      points: [
        "Created a fully responsive portfolio website using the React js",
        "Improved front-end visuality with Scss and Tailwind CSS",
        "Used Three.js to create a 3D animation effect",
        "Used Firebase for and storing data",
        "Deployment link : https://habibportfolio123.netlify.app/",
        "GitHub link : https://github.com/Habib7442/React-Portfolio"
      ],
    },
    {
      title: "Netflix Clone",
      techstack : "React Js, Scss, Tailwind CSS, Three.js",
      icon: netflix,
      iconBg: "#E6DEDD",
      date: "Oct-2022",
      points: [
        "Created a replica of Netflix using React JS, Bootstrap, and Material UI. ",
        "Designed an engaging and interactive front-end.",
        "Used Firebase for secure user registration and login functionality .",
        "Deployment link : https://netflix-clone-224.netlify.app/",
        "Deployment link : https://netflix-clone-224.netlify.app/"
      ],
    },
    
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  // const projects = [
  //   {
  //     name: "Car Rent",
  //     description:
  //       "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
  //     tags: [
  //       {
  //         name: "react",
  //         color: "blue-text-gradient",
  //       },
  //       {
  //         name: "mongodb",
  //         color: "green-text-gradient",
  //       },
  //       {
  //         name: "tailwind",
  //         color: "pink-text-gradient",
  //       },
  //     ],
  //     // image: carrent,
  //     source_code_link: "https://github.com/",
  //   },
  //   {
  //     name: "Job IT",
  //     description:
  //       "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
  //     tags: [
  //       {
  //         name: "react",
  //         color: "blue-text-gradient",
  //       },
  //       {
  //         name: "restapi",
  //         color: "green-text-gradient",
  //       },
  //       {
  //         name: "scss",
  //         color: "pink-text-gradient",
  //       },
  //     ],
  //     // image: jobit,
  //     source_code_link: "https://github.com/",
  //   },
  //   {
  //     name: "Trip Guide",
  //     description:
  //       "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //     tags: [
  //       {
  //         name: "nextjs",
  //         color: "blue-text-gradient",
  //       },
  //       {
  //         name: "supabase",
  //         color: "green-text-gradient",
  //       },
  //       {
  //         name: "css",
  //         color: "pink-text-gradient",
  //       },
  //     ],
  //     // image: tripguide,
  //     source_code_link: "https://github.com/",
  //   },
  // ];
  
  export { services, technologies, experiences, testimonials, projects };