import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import { motion } from 'framer-motion';
import { educationHistory,educationContent } from '/src/AllText.jsx';

const Education = ({ id }) => {
  return (
    <div className="h-full py-10">
      <div id={id} className="text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-8">{educationContent.topic}</h2>
      </div>
      <div className="flex justify-center">
        <VerticalTimeline>
          {educationHistory.map((education, index) => (
            <VerticalTimelineElement
              key={index}
              date={education.date}
              contentStyle={{ background: "#1d1836", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid  #f97316" }}
              iconStyle={{ background: education.iconBg }}
              icon={
                <img
                  src={education.icon}
                  alt={`${education.institution_name} logo`}
                  className="md:w-12 md:h-12 xl:h-[60px] xl:w-[60px] rounded-full"
                  aria-label={education.institution_name}
                />
              }
              className="sm:timeline-left"
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white">{education.title}</h3>
                <p className="text-sm sm:text-base text-orange-400">{education.institution_name}</p>
                <ul className="mt-3 list-disc ml-5 space-y-2">
                  {education.points.map((point, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                      className="text-sm sm:text-base text-gray-300 text-justify"
                    >
                      {point}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Education;
