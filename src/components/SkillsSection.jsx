import {skillsData} from '/src/AllText.jsx';

export default function SkillsSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mr-6 ml-6">
      {Object.entries(skillsData).map(([category, skills]) => (
        <div
          key={category}
          className="border-2 border-orange-500 rounded-xl p-6 bg-transparent backdrop-blur-xl transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-orange-500"
        >
          <h2 className="text-2xl font-semibold mb-4 text-center text-white">{category}</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map(({ name, img }) => (
              <div
                key={name}
                className="flex gap-2 justify-center items-center py-2 px-3 bg-gray-800 text-sm rounded-lg border border-gray-600 hover:bg-gray-700 transition"
                aria-label={`${name} skill`}
              >
                <img src={img} alt={`${name} icon`} className="h-10 w-10" />
                <span className="text-white">{name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
