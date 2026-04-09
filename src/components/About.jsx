import { aboutContent, services } from '/src/AllText.jsx';
import ServiceCard from './ServiceCard';
import { motion } from 'framer-motion';

const About = ({ id }) => {
  return (
    <div id={id}>
      <div className="h-full text-white flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl px-4 py-12 sm:px-6 lg:px-8 text-center">
        <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-orange-500"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1.0 }}
          >
            {aboutContent.topic}
          </motion.h2>

          <motion.p
            className="text-base sm:text-lg lg:text-xl mb-6"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1.0 }}
          >
            {aboutContent.aboutMe}
          </motion.p>

          <div className="mt-20 flex flex-col lg:flex-row gap-10">
            {services.map((service, index) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
