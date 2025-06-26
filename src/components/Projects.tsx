import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: "Resume Builder",
      description: "Expert in HTML, CSS, React, and Vue. JavaScript, crafting responsive, high-performance websites.",
      image: "../assets/pmocks/rbuild.png",
      technologies: ["HTML", "CSS", "React", "Vue", "JS"],
      demoUrl: "https://resume-builder-mekams.vercel.app/",
      githubUrl: "https://github.com/mekams/resume_builder",
      featured: true
    },
    {
      title: "Youtube Clone",
      description: "Expert in HTML, CSS, React, and Vue. JavaScript, crafting responsive, high-performance websites.",
      image: "../assets/pmocks/yc.png",
      technologies: ["HTML", "CSS", "React", "Vue", "JS"],
      demoUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Food Delivery",
      description: "Full-stack e-commerce solution with modern design and secure payment integration.",
      image: "../assets/pmocks/fd.png",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      demoUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "LangChain Text Summarization",
      description: "Collaborative task management application with real-time updates and team features.",
      image: "../assets/pmocks/langc.png",
      technologies: ["Vue.js", "Firebase", "Tailwind"],
      demoUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Text Utility App",
      description: "Collaborative task management application with real-time updates and team features.",
      image: "../assets/pmocks/tutils.png",
      technologies: ["Vue.js", "Firebase", "Tailwind"],
      demoUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Lung Cancer Prediction",
      description: "Collaborative task management application with real-time updates and team features.",
      image: "../assets/pmocks/tutils.png",
      technologies: ["Vue.js", "Firebase", "Tailwind"],
      demoUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Integrated Project Management System",
      description: "Collaborative task management application with real-time updates and team features.",
      image: "../assets/pmocks/tutils.png",
      technologies: ["Vue.js", "Firebase", "Tailwind"],
      demoUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ];

  const [visibleCount, setVisibleCount] = useState(4);

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 4, projects.length));
  };

  return (
    <div className="animate-fade-in">
      <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
        Projects
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.slice(0, visibleCount).map((project, index) => (
          <a
            key={index}
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-blue-500 transition-all duration-300 shadow-lg hover:shadow-2xl cursor-pointer flex flex-col h-full
              hover:-translate-y-2 hover:scale-[1.025] hover:bg-gray-800/80 no-underline"
            style={{ textDecoration: 'none' }}
          >
            <div className="relative w-full h-48 flex items-center justify-center overflow-hidden bg-gray-900">
              <img 
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110 group-hover:brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none"></div>
            </div>
            
            <div className="p-6 flex flex-col justify-center flex-1">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">{project.title}</h3>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 flex items-center gap-1 text-gray-400 hover:text-blue-400 transition-colors"
                  onClick={e => e.stopPropagation()}
                  tabIndex={-1}
                  aria-label="View on GitHub"
                >
                  <Github className="w-6 h-6" />
                  <span className="text-xs font-medium">Source Code</span>
                </a>
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, idx) => (
                  <span 
                    key={idx}
                    className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm border border-blue-600/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-2 mt-auto">
                <span className="inline-flex items-center text-blue-400 text-sm font-semibold">
                  <ExternalLink className="w-4 h-4 mr-1" />
                  Live Demo
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
      
      {visibleCount < projects.length && (
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            className="border-gray-600 text-gray-300 hover:bg-gray-700 px-8 py-3"
            onClick={handleLoadMore}
          >
            Load more projects
          </Button>
        </div>
      )}
    </div>
  );
};

export default Projects;
