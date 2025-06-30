import { workExperience, educationHistory } from './experienceData';

export default function Experience() {
  return (
    <div className="space-y-12">
      {/* Work Experience Section */}
      <div>
        <h3 className="text-xl font-bold text-white mb-6">Work Experience</h3>
        <div className="space-y-8">
          {workExperience.map((job, index) => (
            <div key={index} className="pl-4 border-l-2 border-gray-700">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="text-lg font-semibold text-gray-200">{job.role}</h4>
                  <p className="text-sm text-gray-400">{job.company} • {job.location}</p>
                </div>
                <p className="text-sm text-gray-500 font-medium whitespace-nowrap">{job.period}</p>
              </div>
              
              {/* Updated list to render simple, impactful bullet points */}
              <ul className="list-disc list-inside space-y-3 text-gray-400 text-sm">
                {job.responsibilities.map((responsibility, respIndex) => (
                  <li key={respIndex}>
                    {responsibility}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Education Section */}
      <div>
        <h3 className="text-xl font-bold text-white mb-6">Education</h3>
        <div className="space-y-4">
          {educationHistory.map((edu, index) => (
            <div key={index} className="pl-4 border-l-2 border-gray-700">
               <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-200">{edu.degree}</h4>
                    <p className="text-sm text-gray-400">{edu.institution}</p>
                  </div>
                  <p className="text-sm text-gray-500 font-medium">{edu.graduation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}