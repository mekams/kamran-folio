
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Technical Customer Support Advisor",
      company: "Boots",
      location: "Remote",
      period: "2023 - Present",
      description: "Providing technical support and troubleshooting assistance to customers, ensuring efficient resolution of technical issues.",
      responsibilities: [
        "Build and maintain front-end and back-end web applications",
        "Debug and resolve complex issues across applications",
        "Apply excellent problem-solving abilities for seamless solutions",
        "Collaborate with cross-functional teams for project execution"
      ],
      logo: "💊"
    },
    {
      title: "Certification & Internship",
      company: "AB Technologies",
      location: "Birmingham, UK",
      period: "2022 - 2023",
      description: "Gained valuable experience in software development and modern technologies through hands-on projects.",
      responsibilities: [
        "Create modern web designs tailored to client needs",
        "Implement responsive design for all device compatibility",
        "Ensure consistency in branding and design principles"
      ],
      logo: "🏢"
    },
    {
      title: "Associate Software Developer",
      company: "Various Projects",
      location: "Remote",
      period: "2021 - 2022",
      description: "Worked on multiple software development projects, gaining experience in full-stack development.",
      responsibilities: [
        "Develop and maintain web applications",
        "Collaborate with development teams",
        "Implement best practices in code quality"
      ],
      logo: "💻"
    }
  ];

  return (
    <div className="animate-fade-in">
      <h2 className="text-3xl lg:text-4xl font-bold mb-8 lg:mb-12 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
        Experience
      </h2>
      
      <div className="space-y-6 lg:space-y-8">
        {experiences.map((exp, index) => (
          <div 
            key={index}
            className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-4 lg:p-6 xl:p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:transform hover:scale-[1.02]"
          >
            <div className="flex items-start gap-3 lg:gap-4 mb-4 lg:mb-6">
              <div className="text-2xl lg:text-3xl xl:text-4xl">{exp.logo}</div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg lg:text-xl xl:text-2xl font-bold text-white mb-2 leading-tight">{exp.title}</h3>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 lg:gap-6 text-sm lg:text-base text-gray-300 mb-3 lg:mb-4">
                  <span className="font-semibold text-blue-400 truncate">{exp.company}</span>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 lg:w-4 lg:h-4 flex-shrink-0" />
                    <span className="truncate">{exp.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 lg:w-4 lg:h-4 flex-shrink-0" />
                    <span className="truncate">{exp.period}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <p className="text-sm lg:text-base text-gray-300 mb-4 lg:mb-6 leading-relaxed">{exp.description}</p>
            
            <div>
              <h4 className="text-base lg:text-lg font-semibold text-white mb-3 lg:mb-4">Role & Responsibilities</h4>
              <ul className="space-y-2">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm lg:text-base text-gray-300">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="leading-relaxed">{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
