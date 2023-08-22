import {
  backend,
  css,
  docker,
  figma,
  git,
  html,
  javascript,
  mobile,
  mongodb,
  nextjs,
  nodejs,
  reactjs,
  redux,
  smartcorner,
  tailwind,
  threejs,
  typescript,
  web,
  shareMe,
  portfolioForDesigner,
  storiesApp,
  restaurantLandingPage,
  shareMeFavicon,
  portfolioForDesignerFavicon,
  storiesAppFavicon,
  restaurantLandingPageFavicon,
} from "../assets";

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
    title: "Frond-End Development",
    icon: web,
  },
  {
    title: "Back-End Development",
    icon: mobile,
  },
  {
    title: "Full-Stack Development",
    icon: backend,
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
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
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
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "JavaScript Developer",
    company_name: "Freelance",
    icon: reactjs,
    iconBg: "#383E56",
    date: "Sep 2019 - Jan 2020",
    points: [
      "Developed a robust and intuitive CRM system tailored for a large-scale e-commerce platform. The application aids in tracking customer interactions, leads, and sales, ensuring improved customer service and business growth",
      "Integrated Redux with React to effectively manage the application's state, enabling real-time updates and efficient data flow across components.",
      "Leveraged TypeScript to add static typing, which improved code maintainability, prevented potential runtime errors, and ensured robustness.",
      "Collaborated with the design team to ensure a responsive and consistent user experience across various devices and screen sizes.",
      "Implemented unit and integration tests using Jest and React Testing Library, achieving 95% code coverage.",
    ],
  },
  {
    title: "React.js Developer",
    company_name: "Smart Corner",
    icon: smartcorner,
    iconBg: "#ffffff",
    date: "Feb 2020 - Mar 2023",
    points: [
      "Developing and maintaining web applications using React. This has involved creating new features, fixing bugs, and optimizing performance.",
      "Working on maps for adding stop points and creating tours between several stop points, optimize tours and provide more details about that",
      "Working on charts, creating different types of dynamic charts (2D, 3D), related to changing and receiving data. Implementing features filtration and aggregation for chart data.",
      "Working with grid tables, which include a lot of data. Filtering and sorting received data dynamically",
      "Working with big (huge) data, implementing features for those dynamically filtering and sorting",
      "Implementing a feature for creating javascript expressions using Blockly library, then from those expressions generating XML for use by android developers",
      "Working with calendars, data reports, dashboards and with other different kinds of features",
    ],
  },
  {
    title: "NextJS Developer",
    company_name: "Freelance",
    icon: nextjs,
    iconBg: "#E6DEDD",
    date: "Apr 2023 - Jul 2023",
    points: [
      "Built an e-commerce platform optimized for SEO and performance. With the use of NextJS, ensured faster page loads, resulting in an increased conversion rate and enhanced user experience.",
      "Utilized NextJS for server-side rendering, dramatically improving the website's SEO ranking and initial load time",
      "Implemented dynamic routing to cater to hundreds of product categories and thousands of individual product pages.",
      "Integrated a secure and efficient payment gateway, ensuring seamless transactions.",
      "Leveraged NextJS's API routes for building lightweight backend functionality like user authentication and order processing.",
    ],
  },
  {
    title: "NodeJS Developer",
    company_name: "Freelance",
    icon: nodejs,
    iconBg: "#E6DEDD",
    date: "Oug 2023 - Present",
    points: [
      "Engineered a scalable and real-time chat application catering to over 10,000 active users. This platform provides users with instant messaging capabilities, group chats, media sharing, and notifications.",
      "Used Express.js for building RESTful APIs, handling user authentication, message storage, and retrieval functionalities.",
      "Integrated WebSocket with the Express.js backend to enable real-time messaging capabilities.",
      "Transitioned to NestJS mid-project to leverage its modular architecture and robust ecosystem, resulting in improved code scalability and maintainability.",
      "Worked closely with the database team to optimize database queries, ensuring swift retrieval of chat histories and user data.",
    ],
  },
];

const testimonials = [
  // {
  //   testimonial: "",
  //   name: "",
  //   designation: "",
  //   company: "",
  //   image: "",
  // },
];

const projects = [
  {
    name: "Share Me",
    description:
        "I developed a custom front-end social media application that provided users with an easy-to-use and visually appealing platform to connect and share content.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "sanity",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: shareMe,
    favicon: shareMeFavicon,
    source_link: "https://sharemejsm.netlify.app/",
    source_code_link: "https://github.com/HovhannisyanNarek96freelancer/socialMedia",
  },
  {
    name: "Portfolio For Designer",
    description:
      "I developed a custom landing page portfolio that showcased the client's work in a visually appealing and easy-to-navigate way. I implemented smooth scrolling, dynamic transitions, and interactive animations to enhance the user experience and showcase the client's design skills.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "sanity",
        color: "green-text-gradient",
      },
      {
        name: "sass",
        color: "pink-text-gradient",
      },
    ],
    image: portfolioForDesigner,
    favicon: portfolioForDesignerFavicon,
    source_link: "https://curious-flan-f2cac5.netlify.app/",
    source_code_link: "https://github.com/HovhannisyanNarek96freelancer/FullstackPortfolio",
  },
  {
    name: "Stories App",
    description:
      "I created a user-friendly front-end using ReactJS that communicates seamlessly with the back-end, which I developed using NodeJS, ExpressJS, and MongoDB. I made sure that the application followed best coding practices and was secure and scalable.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodeJS",
        color: "green-text-gradient",
      },
      {
        name: "expressJS",
        color: "pink-text-gradient",
      },
      {
        name: "mongoDB",
        color: "green-text-gradient",
      },
    ],
    image: storiesApp,
    favicon: storiesAppFavicon,
    source_link: "https://stories-social-media-app.vercel.app/posts",
    source_code_link: "https://github.com/HovhannisyanNarek96freelancer/StoriesSocialMediaApp",
  },
  {
    name: "Restaurant Landing Page",
    description:
      "I developed the Restaurant Landing Page using React, HTML, and CSS. I designed a clean and visually appealing layout that highlighted the restaurant's brand and key offerings. I integrated the restaurant's menu and ensured the landing page was fully responsive across all devices.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: restaurantLandingPage,
    favicon: restaurantLandingPageFavicon,
    source_link: "https://stellar-cupcake-25ea7a.netlify.app/",
    source_code_link: "https://github.com/HovhannisyanNarek96freelancer/websiteForServe",
  },
];

export { services, technologies, experiences, testimonials, projects };
