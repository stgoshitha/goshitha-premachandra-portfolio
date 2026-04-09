import { workExperienceContent, workExperienceHistory } from "/src/AllText.jsx";

const WorkExperience = ({ id }) => {
  return (
    <section id={id} className="py-24 px-6 bg-primary">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            {workExperienceContent.topic}
          </h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Experience Grid */}
        <div className="grid gap-10">

          {workExperienceHistory.map((exp, index) => (
            <div
              key={index}
              className="group relative bg-tertiary rounded-2xl p-8 
                         border border-white/5 
                         hover:border-orange-500/40 
                         transition-all duration-300 
                         hover:-translate-y-2"
            >
              
              {/* Top Row */}
              <div className="flex items-start gap-4 mb-6">

                {/* Icon */}
                {exp.icon && (
                  <div className="w-14 h-14 flex items-center justify-center 
                                  bg-white rounded-xl shadow-md shrink-0">
                    <img
                      src={exp.icon}
                      alt={exp.company_name}
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                )}

                {/* Title & Company */}
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {exp.title}
                  </h3>
                  <p className="text-orange-400 text-sm font-medium mt-1">
                    {exp.company_name}
                  </p>
                  <p className="text-gray-400 text-xs mt-2">
                    {exp.date}
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="h-[1px] bg-white/10 mb-6"></div>

              {/* Points */}
              <ul className="space-y-3">
                {exp.points.map((point, i) => (
                  <li
                    key={i}
                    className="text-gray-300 text-sm leading-relaxed flex items-start gap-2"
                  >
                    <span className="text-orange-500 mt-[6px] text-xs">●</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default WorkExperience;