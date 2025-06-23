// src/components/Skills.jsx

import { skillsData } from './skillsData'; // Import the data

export default function Skills() {
  return (
    <div className="space-y-8">
      {skillsData.map((categoryItem) => (
        <div key={categoryItem.category}>
          {/* Category Title */}
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
            {categoryItem.category}
          </h3>
          {/* List of Skills in the Category */}
          <div className="flex flex-wrap gap-3">
            {categoryItem.skills.map((skill) => (
              <div
                key={skill.name}
                className="flex items-center gap-2 bg-gray-800/50 px-3 py-1.5 rounded-md hover:bg-gray-700/50 transition-colors"
              >
                <span className="text-xl">{skill.icon}</span>
                <span className="text-sm font-medium text-gray-300">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}