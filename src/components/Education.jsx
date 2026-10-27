import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

const Education = () => (
  <>
    <p className={styles.sectionSubText}>Academic background</p>
    <h2 className={styles.sectionHeadText}>Education.</h2>
    <div className='mt-10 max-w-3xl rounded-2xl bg-tertiary p-6 sm:p-8'>
      <h3 className='text-white text-xl sm:text-2xl font-bold'>Bachelor of Engineering in Informatics and Computer Science</h3>
      <p className='mt-3 text-white-100 text-lg'>National Polytechnic University of Armenia</p>
      <p className='mt-2 text-secondary'>Jan 2014 - Jun 2018</p>
    </div>
  </>
);

export default SectionWrapper(Education, "education");
