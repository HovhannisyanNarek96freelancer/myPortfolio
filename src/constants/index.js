import {
  reactjs,
  smartcorner,
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
    title: "Experience",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const skillGroups = [
  { title: "Languages & Web", skills: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "SCSS"] },
  { title: "Frontend", skills: ["React", "Next.js", "Redux Toolkit", "Zustand", "TanStack Query", "Material UI", "Ant Design"] },
  { title: "Backend", skills: ["Node.js", "Express.js", "REST APIs", "OAuth 2.0"] },
  { title: "AI & LLM Integrations", skills: ["LLM API integration", "Large language models", "Model Context Protocol (MCP)", "AI-powered automation"] },
  { title: "Databases", skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis"] },
  { title: "Cloud & DevOps", skills: ["AWS Lambda", "Amazon S3", "Amazon SQS", "Amazon EventBridge", "Docker", "CI/CD", "GitHub Actions"] },
  { title: "Testing & Tools", skills: ["Jest", "Cypress", "Git", "Webpack", "Core Web Vitals"] },
];

const experiences = [
  {
    title: "Full-Stack Software Engineer · Contractor",
    company_name: "Exploding Topics (Backlinko / Semrush)",
    iconText: "ET",
    iconBg: "#1d1836",
    date: "Jun 2023 - Present · Remote, Armenia",
    points: [
      "Built React and Next.js trend directories and website analytics interfaces, expanding the analytics catalogue by 10,000+ unique domains.",
      "Shipped three paid API packages with team entitlements and corrected credit accounting for cached API responses.",
      "Removed 18 seconds of fixed delay from uncached social-channel analysis by parallelizing nine external lookups.",
      "Engineered a trend-data ingestion pipeline for three external providers with weighted queues, concurrency controls, retries, and timeouts.",
      "Improved reliability with CMS response caching, webhook-driven invalidation, and resumable monthly analytics jobs.",
      "Integrated LLM APIs for topic moderation and data enrichment, and developed nine TypeScript MCP tools for AI-assisted market research.",
    ],
  },
  {
    title: "React Developer · Full-time",
    company_name: "Actual Solutions",
    icon: reactjs,
    iconBg: "#1d1836",
    date: "Sep 2023 - May 2025 · Yerevan, Armenia",
    points: [
      "Delivered React and TypeScript interfaces for healthcare billing and patient-management workflows, including insurance verification, claims, payments, and patient records.",
      "Built complex patient and insurance forms with React Hook Form, Yup, and Zod.",
      "Developed reusable Ant Design and Material UI components, including a themed library documented in Storybook.",
      "Implemented URL-based filtering, sorting, and pagination for healthcare records, preserving search context across navigation.",
      "Integrated REST APIs with TanStack Query and Axios, including record refreshes, document uploads, and spreadsheet import/export.",
    ],
  },
  {
    title: "Full-Stack Developer · Full-time",
    company_name: "Smart Corner",
    icon: smartcorner,
    iconBg: "#ffffff",
    date: "Sep 2020 - Aug 2023 · Yerevan, Armenia",
    points: [
      "Built mapping and multi-stop route-planning features for ginstr web, an enterprise business-data platform.",
      "Developed interactive 2D and 3D visualizations, data-intensive grids, dashboards, calendars, and reports with dynamic filtering and aggregation.",
      "Built a visual JavaScript expression editor with Blockly that generated XML configurations for Android applications.",
      "Developed Node.js and Express REST endpoints with validation and error handling, plus database queries for server-side search, sorting, and pagination.",
      "Improved reliability through debugging, refactoring, and automated testing with Cypress.",
    ],
  },
  {
    title: "Freelance JavaScript Developer",
    company_name: "Self-Employed",
    iconText: "JS",
    iconBg: "#1d1836",
    date: "Sep 2016 - Jul 2018 · Yerevan, Armenia",
    points: [
      "Developed responsive web applications with JavaScript, React, HTML, and CSS for independent clients.",
      "Built reusable UI components and independently handled feature development, debugging, and frontend improvements.",
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

export { skillGroups, experiences, testimonials, projects };
