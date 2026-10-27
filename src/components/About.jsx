import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const About = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview.</h2>
    </motion.div>

    <motion.div
      variants={fadeIn("", "", 0.1, 1)}
      className='mt-6 max-w-4xl rounded-2xl bg-tertiary p-6 sm:p-8 text-white-100'
    >
      <h3 className='text-xl sm:text-2xl font-bold text-white'>Full-Stack Software Engineer with 7+ years of experience</h3>
      <p className='mt-4 text-[16px] sm:text-[18px] leading-8 text-secondary'>
        I build enterprise SaaS platforms and data-intensive web applications with React,
        Next.js, Node.js, and TypeScript. My work spans frontend interfaces, backend APIs,
        AWS services, data pipelines, caching, and subscription systems.
      </p>
      <p className='mt-4 text-[16px] sm:text-[18px] leading-8 text-secondary'>
        Recently, I&apos;ve worked on market-intelligence tools, healthcare workflows,
        and LLM-powered automation, including TypeScript MCP tools for AI-assisted research.
        I focus on scalability, reliability, and performance.
      </p>
    </motion.div>
  </>
);

export default SectionWrapper(About, "about");
