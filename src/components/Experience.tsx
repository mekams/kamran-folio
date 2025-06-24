import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Technical Customer Support Advisor",
      company: "Boots UK Ltd.",
      location: "Onsite | Part-Time | United Kingdom",
      period: "Sep 2024 - Present",
      description: " I proactively managed inquiries and collaborated with internal teams to deliver timely solutions, ensuring high customer satisfaction.",
      responsibilities: [
        "Logged and tracked inquiries using CRM tools, ensuring timely follow-up and resolution.",
        "Coordinated with internal tech teams to escalate and solve complex problems.",
        "Maintained a customer satisfaction rating above 90% through effective communication and support.",
        "Provided technical support, resolving issues across customer-facing and internal systems.",
      ],
      image: "../assets/Boots_logo.png"  // Replace with your actual image path
    },
    {
      title: "Certification & Internship",
      company: "AlmaBetter Edutech Pvt. Ltd.",
      location: "Remote | Part-Time | India",
      period: " Jul 2022 - Mar 2023",
      description: "Gained valuable experience in software development and modern technologies through hands-on projects.",
      responsibilities: [
        "Completed a full-stack MERN development program, practicing Agile workflows with sprints and code reviews, accelerating feature delivery by 15%.",
        "Developed and tested RESTful APIs with JWT authentication, improving API reliability and reducing bugs by 20%, while gaining hands-on experience with Git/GitHub, Postman, and Jest."
      ],
      image: "/assets/AB.jpg"
    },
    {
      title: "Associate Software Developer",
      company: "Genpact India Pvt. Ltd.",
      location: "Hybrid | Full-Time | India",
      period: "Feb 2020 - Nov 2021",
      description: "Worked on multiple domains, including web development and Linux environments, gaining diverse technical experience.",
      responsibilities: [
        "Built responsive, component-based user interfaces using React.js, JSX, and modern ES6+ JavaScript, implementing reusable stateful and stateless components to streamline UI development.",
        "Developed RESTful APIs with Node.js and Express, integrated MongoDB, and partnered with QA to write Jest tests, improving system reliability and bug detection.",
        "Led efforts to containerize applications using Docker, automate CI deployments via scripting, and streamline internal environment setups, achieving a 25% reduction in manual deployment time; also handled user/group administration and system-level maintenance."
      ],
      image: "/assets/Gp.jpeg"
    },
    {
      title: "Digital Marketing Associate",
      company: "Atulyam Infratech Pvt. Ltd.",
      location: "Onsite | Full-Time | India",
      period: "Feb 2020 - Nov 2021",
      description: "In my role as a Digital Marketing Associate, I focused on optimizing website performance, user experience, and SEO strategies.",
      responsibilities: [
        "Managed and maintained WordPress websites through theme customization, plugin integration, and HTML/CSS edits, improving page load speed by 30% and enhancing user experience and styling consistency across all pages.",
        "Enhanced site performance and SEO by optimizing images, reducing plugin bloat, implementing caching and lazy loading, cutting page load time by 50%, and monitored metrics via Google Analytics and Search Console."
      ],
      image: "/assets/AT.webp"
    }
  ];

  return (
    <div className="animate-fade-in">
      <h2 className="text-4xl lg:text-5xl font-bold mb-12 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
        Experience
      </h2>
      
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div 
            key={index}
            className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:transform hover:scale-[1.01]"
          >
            <div className="flex items-start gap-4 mb-2">
              <div className="flex items-center justify-center min-w-[2.5rem] min-h-[2.5rem]">
                {exp.image && (
                  <img
                    src={exp.image}
                    alt={`${exp.company} logo`}
                    className="w-10 h-10 lg:w-12 lg:h-12 object-contain rounded-md bg-white/10"
                  />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 leading-tight">{exp.title}</h3>
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-base text-gray-300 mb-4">
                  <span className="font-semibold text-green-400 truncate">{exp.company}</span>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4 flex-shrink-0" />
                    <span className="truncate text-green-400">{exp.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4 flex-shrink-0" />
                    <span className="truncate text-green-400">{exp.period}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <p className="text-base text-gray-300 mb-2 leading-relaxed">{exp.description}</p>
            
            <div>
              {/* <h4 className="text-lg font-semibold text-white mb-4">Role & Responsibilities</h4> */}
              <ul className="space-y-3">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-base text-gray-300">
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
