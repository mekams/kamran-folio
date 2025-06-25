import { GraduationCap, Calendar, MapPin, Award, Paintbrush, Code2 } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Master's in Computer Science",
      institution: "Birmingham City University - Birmingham, United Kingdom",
      period: "Jan 2024 - Mar 2025",
      grade: "Distinction | 7.6/10",
      description: "Completed a Master’s in Computer Science from Birmingham City University, focusing on software development, algorithms, and advanced computing technologies.",
      image: "/assets/bcu.png"
    },
    {
      degree: "Bachelor's in Electronics & Communication Engineering",
      institution: "Dr. A.P.J Abdul Kalam Technical University - Lucknow, India",
      period: "Jul 2014 - Oct 2018",
      grade: "First Class Honours | 7.5/10",
      description: "Comprehensive study of electronics, communication systems, and engineering principles, with a focus on practical applications and integration of basic computer programming.",
      image: "/assets/aktu.png"
    }
  ];

  // Add an icon or image for each skill category
  const skills = [
    {
      category: "UI/UX Design & Markup",
      icon: <Paintbrush className="w-6 h-6 text-pink-400" />, // Lucide icon
      technologies: [
        { name: "HTML", image: "/assets/html-5.png" },
        { name: "CSS", image: "/assets/css3.jpg" },
        { name: "Tailwind", image: "/assets/tailwindcss.png" },
        { name: "Material UI", image: "/assets/materialui.png" },
        { name: "Bootstrap", image: "/assets/bootstrap.png" },
        { name: "Framer", image: "/assets/framer.png" },
        { name: "Figma", image: "/assets/figma.webp" }
      ],
      description: "Expert in HTML, CSS, React, and Vue. JavaScript, crafting responsive, high-performance websites."
    },
    {
      category: "Front-end development",
      icon: <Code2 className="w-6 h-6 text-blue-400" />, // Lucide icon
      technologies: [
        { name: "HTML", image: "/assets/html-5.png" },
        { name: "CSS", image: "/assets/css.png" },
        { name: "React", image: "/assets/react.png" },
        { name: "Vue", image: "/assets/vue.png" },
        { name: "JavaScript", image: "/assets/js.png" }
      ],
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
          🎓 Education
        </h3>
        
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div 
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-1">
                <div className="flex items-center justify-center min-w-[3rem] min-h-[3rem]">
                  <img
                    src={edu.image}
                    alt={`${edu.institution} logo`}
                    className="w-12 h-12 object-contain rounded bg-white/10"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-white mb-2">{edu.degree}</h4>
                  <div className="flex flex-col gap-2 text-gray-300 mb-4">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span className="text-green-400">{edu.institution}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span className="text-green-400">{edu.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Award className="w-4 h-4" />
                        <span className="text-green-400">{edu.grade}</span>
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
            <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              {skill.icon}
              {skill.category}
            </h4>
            <p className="text-gray-300 mb-6 leading-relaxed">{skill.description}</p>
            <div className="flex flex-wrap gap-2">
              {skill.technologies.map((tech, idx) => (
                <span 
                  key={idx}
                  className="flex items-center gap-2 px-3 py-1 bg-emerald-600/10 text-green-400/40 rounded-full text-sm border border-blue-600/30"
                >
                  {tech.image && (
                    <img
                      src={tech.image}
                      alt={tech.name}
                      className="w-5 h-5 object-contain"
                    />
                  )}
                  {tech.name}
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
