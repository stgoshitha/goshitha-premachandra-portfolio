import SkillsSection from '/src/components/SkillsSection.jsx';
import { motion } from 'framer-motion';

const Skills = ({ id }) => {
  return (
    <div id={id} className="w-full my-10">
      <div className="flex flex-col items-center">
        <motion.h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-white mb-8"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: false }} 
          transition={{
            duration: 1,
            delay: 0.3,
            ease: 'easeIn',
          }}
        >
          Skills
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }} 
          whileInView={{ opacity: 1, scale: 1 }} 
          viewport={{ once: false }} 
          transition={{
            duration: 1,
            delay: 0.5,
            ease: 'easeOut',
          }}
        >
          <SkillsSection />
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
