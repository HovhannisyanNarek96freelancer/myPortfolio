import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { skillGroups } from "../constants";

const Tech = () => (
  <>
    <p className={styles.sectionSubText}>What I work with</p>
    <h2 className={styles.sectionHeadText}>Technical Skills.</h2>
    <div className='mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3'>
      {skillGroups.map(({ title, skills }) => (
        <div key={title} className='rounded-2xl bg-tertiary p-6'>
          <h3 className='text-white text-xl font-semibold'>{title}</h3>
          <ul className='mt-4 flex flex-wrap gap-2' aria-label={title}>
            {skills.map((skill) => (
              <li key={skill} className='rounded-full bg-black-100 px-3 py-2 text-sm text-white-100'>
                {skill}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </>
);

export default SectionWrapper(Tech, "skills");
