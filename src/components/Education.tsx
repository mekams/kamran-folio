
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Master's in Computer Science",
      institution: "Birmingham City University - Birmingham, United Kingdom",
      period: "Jan 2024 - Mar 2025",
      grade: "Currently Enrolled",
      description: "Advanced studies in computer science with focus on modern software development practices and emerging technologies.",
      icon: "🎓"
    },
    {
      degree: "Bachelor's in Electronics & Communication Engineering",
      institution: "G. H. Raisoni Technical University - Lucknow, India",
      period: "Jul 2019 - Oct 2018",
      grade: "First Class Honours | 7.5/10",
      description: "Comprehensive study of electronics, communication systems, and engineering principles with practical applications.",
      icon: "⚡"
    }
  ];

  const skills = [
    {
      category: "Front-end development",
      technologies: ["HTML", "CSS", "React", "Vue", "JavaScript"],
      description: "Expert in HTML, CSS, React, and Vue. JavaScript, crafting responsive, high-performance websites."
    },
    {
      category: "Front-end development",
      technologies: ["HTML", "CSS", "React", "Vue", "JavaScript"],
      description: "Expert in HTML, CSS, React, and Vue. JavaScript, crafting responsive, high-performance websites."
    }
  ];

  return (
    <div className="animate-fade-in">
      <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
        My Background
      </h2>
      
      <div className="mb-16">
        <h3 className="text-2xl font-semibold text-white mb-8 flex items-center gap-3">
          <GraduationCap className="w-8 h-8 text-blue-500" />
          Education
        </h3>
        
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div 
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl">{edu.icon}</div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-white mb-2">{edu.degree}</h4>
                  <div className="flex flex-col gap-2 text-gray-300 mb-4">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{edu.institution}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Award className="w-4 h-4" />
                        <span>{edu.grade}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{edu.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {skills.map((skill, index) => (
          <div 
            key={index}
            className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50"
          >
            <h4 className="text-xl font-semibold text-white mb-4">{skill.category}</h4>
            <p className="text-gray-300 mb-6 leading-relaxed">{skill.description}</p>
            <div className="flex flex-wrap gap-2">
              {skill.technologies.map((tech, idx) => (
                <span 
                  key={idx}
                  className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm border border-blue-600/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
