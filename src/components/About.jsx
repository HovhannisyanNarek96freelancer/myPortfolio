import React from "react";
import {Tilt} from "react-tilt";
import {motion} from "framer-motion";

import {styles} from "../styles";
import {services} from "../constants";
import {SectionWrapper} from "../hoc";
import {fadeIn, textVariant} from "../utils/motion";

const About = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Introduction</p>
                <h2 className={styles.sectionHeadText}>Overview.</h2>
            </motion.div>

            <motion.div
                variants={fadeIn("", "", 0.1, 1)}
                className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
            >
                <div className="p-8 rounded-lg shadow-md">
                    <h2 className="text-xl font-bold mb-4">Full-Stack Developer with 6+ Years of Experience</h2>

                    <p className="mb-4">
                        I'm a passionate and dedicated Full-Stack Developer with over 6 years of comprehensive
                        experience in building dynamic, responsive, and user-friendly web applications. My goal is to
                        deliver top-notch solutions that bring value and drive results.
                    </p>

                    <h3 className="text-lg font-semibold mb-2">Technical Expertise:</h3>

                    <div className="pl-4 mb-4">
                        <h4 className="font-medium mb-2">Frontend:</h4>
                        <ul className="list-disc pl-4">
                            <li>React: Building SPA using React with hooks, Redux, React Router, Axios and more.</li>
                            <li>Performance Optimization with React's virtual DOM.</li>
                            <li>Web Standards & Accessibility: Ensuring websites are accessible to all.</li>
                        </ul>
                    </div>

                    <div className="pl-4 mb-4">
                        <h4 className="font-medium mb-2">Backend:</h4>
                        <ul className="list-disc pl-4">
                            <li>NodeJS: Creating RESTful APIs, manage authentication, handle database connections, and
                                more.
                            </li>
                            <li>Database Integration with both SQL and NoSQL databases.</li>
                        </ul>
                    </div>

                    <div className="pl-4 mb-4">
                        <h4 className="font-medium mb-2">Development Practices:</h4>
                        <ul className="list-disc pl-4">
                            <li>Agile Methodologies for timely delivery and frequent communication.</li>
                            <li>Version Control with Git and platforms like GitHub.</li>
                            <li>Setting up CI/CD pipelines for automated testing and deployment.</li>
                        </ul>
                    </div>

                    <h3 className="text-lg font-semibold mb-2">Why Choose Me?</h3>

                    <ul className="list-disc pl-8 mb-4">
                        <li>Proactive Communication.</li>
                        <li>Quality First approach with high-quality, maintainable, and scalable code.</li>
                        <li>Problem Solver with a knack for troubleshooting and innovative solutions.</li>
                    </ul>

                    <p className="mb-4">
                        If you're looking for a reliable Full-Stack Developer who can transform your ideas into reality
                        and add value to your projects, let's connect! Whether you have a new project in mind or need
                        assistance with an existing one, I'm here to help. Looking forward to collaborating with
                        you.
                    </p>
                </div>
            </motion.div>
        </>
    );
};

export default SectionWrapper(About, "about");
