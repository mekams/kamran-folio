
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: "Resume Builder",
      description: "Expert in HTML, CSS, React, and Vue. JavaScript, crafting responsive, high-performance websites.",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["HTML", "CSS", "React", "Vue", "JS"],
      demoUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Food Delivery",
      description: "Expert in HTML, CSS, React, and Vue. JavaScript, crafting responsive, high-performance websites.",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["HTML", "CSS", "React", "Vue", "JS"],
      demoUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution with modern design and secure payment integration.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f9da2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      demoUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates and team features.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["Vue.js", "Firebase", "Tailwind"],
      demoUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ];

  return (
    <div className="animate-fade-in">
      <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
        Projects
      </h2>
      
      <div className="space-y-8">
        {projects.map((project, index) => (
          <div 
            key={index}
            className={`bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 ${
              project.featured ? 'lg:h-80' : 'lg:h-64'
            }`}
          >
            <div className="flex flex-col lg:flex-row h-full">
              <div className="lg:w-1/2 relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 lg:h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
              </div>
              
              <div className="lg:w-1/2 p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm border border-blue-600/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-gray-600 text-gray-300 hover:bg-gray-700"
                    asChild
                  >
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-gray-600 text-gray-300 hover:bg-gray-700"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-12">
        <Button 
          variant="outline" 
          className="border-gray-600 text-gray-300 hover:bg-gray-700 px-8 py-3"
        >
          Load more projects
        </Button>
      </div>
    </div>
  );
};

export default Projects;
