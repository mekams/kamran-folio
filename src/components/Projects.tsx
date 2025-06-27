import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: "Resume Builder",
      description: "Resume Builder web application allows users to enter personal and professional details via structured forms and choose from multiple modern templates. It leverages the tech stack below to generate and download resumes in PDF format.",
      image: "../assets/pmocks/rbuild.png",
      technologies: ["React.js", "Redux", "jspdf", "Material UI", "React-Router", "React Hook Form", "JavaScript", "Vercel"],
      demoUrl: "https://resume-builder-mekams.vercel.app/",
      githubUrl: "https://github.com/mekams/resume_builder",
      featured: true
    },
    {
      title: "Youtube Clone",
      description: "YouTube Clone delivers a smooth user experience with interactive video search, browsing, and playback, achieving fast load times and high responsiveness. It supports real-time data fetching and responsive design, resulting in increased user engagement and smooth interaction across devices.",
      image: "../assets/pmocks/yc.png",
      technologies: ["React.js", "JavaScript"," Tailwind CSS", "React-Router", "Netlify", "Axios", "RapidAPI", "CI/CD"],
      demoUrl: "https://k-tube.netlify.app/",
      githubUrl: "https://github.com/mekams/youtube-clone",
      featured: true
    },
    {
      title: "Food Delivery",
      description: "Food Delivery web app offers an intuitive interface for browsing, customizing, and ordering pizzas with real-time cart updates and order tracking. Efficient state management and routing enable fast, responsive performance across all devices.",
      image: "../assets/pmocks/fd.png",
      technologies: ["React.js", "Bootstrap", "Redux", "React-Router", "JavaScript", "Vercel"],
      demoUrl: "https://pizza-pulse-delivery.vercel.app/",
      githubUrl: "https://github.com/mekams/pizza-pulse-delivery",
      featured: false
    },
    {
      title: "LangChain Text Summarization",
      description: "LangChain Text Summarization is a hybrid text summarization tool using Hugging Face models and LangChain, improving ROUGE-1 F1 scores by 28% (68.66% vs. 53.52%). Deployed a real-time Streamlit app for document upload, summary generation, and model evaluation using CNN/DailyMail and ROUGE metrics.",
      image: "../assets/pmocks/langc.png",
      technologies: ["Python", "Hugging Face Transformers", "LangChain", "Dataset", "ROUGE", "Streamlit", "Word Cloud", "NLTK", "Pandas", "Matplotlib"],
      demoUrl: "https://langtextsum.streamlit.app/",
      githubUrl: "https://github.com/mekams/langTextSum",
      featured: false
    },
    {
      title: "Text Utility App",
      description: "Textu is a sleek and simple text utility app designed to quickly analyze, format, and transform your text with ease.",
      image: "../assets/pmocks/tutils.png",
      technologies: ["React.js", "JavaScript", "React-Router"],
      demoUrl: "https://textu.netlify.app/",
      githubUrl: "https://github.com/mekams/Text-Utils-1",
      featured: false
    },
    {
      title: "Lung Cancer Prediction",
      description: "Collaborative task management application with real-time updates and team features.",
      image: "../assets/pmocks/lc.png",
      technologies: ["Jupyter Notebook", "Pandas", "Data Cleaning", "Kaggle", "Decision Tree", "Random Forest", "ANN", "Data Visualization", "Model Train -Scikit-learn"],
      demoUrl: "#",
      githubUrl: "https://github.com/mekams/Lung-Cancer-Prediction",
      featured: false
    },
    {
      title: "Integrated Project Management System",
      description: "Integrated Project Management System is a relational database solution designed using MySQL with 13+ normalized entities, reducing redundancy by 30%. It includes over 12 complex SQL queries to extract critical business insights such as top-spending customers and project tracking.",
      image: "../assets/pmocks/mysql.png",
      technologies: ["MySQL", "XAMPP", "phpMyAdmin", "SQL"],
      demoUrl: "#",
      githubUrl: "https://github.com/mekams/MySql-databse-Project",
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
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {projects.slice(0, visibleCount).map((project, index) => {
          const hasDemo = project.demoUrl && project.demoUrl !== "#";
          const CardContent = (
            <div
              className={`group bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-emerald-500/70 transition-all duration-300 shadow-lg hover:shadow-2xl flex flex-col h-full hover:bg-emerald-900/30
                ${hasDemo ? 'cursor-pointer hover:-translate-y-2 hover:scale-[1.025] hover:bg-emerald-900/30' : 'opacity-70 cursor-not-allowed'}`}
              style={{ maxWidth: 420, margin: "0 auto" }}
            >
              {/* Larger image area */}
              <div className="relative w-full h-56 flex items-center justify-center overflow-hidden bg-gray-900">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105 group-hover:brightness-95"
                  style={{ aspectRatio: "16/9", background: "#222" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none"></div>
              </div>
              
              {/* More compact text area */}
              <div className="p-4 flex flex-col justify-center flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-lg font-bold text-white group-hover:text-white transition-colors duration-300 truncate">{project.title}</h3>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 flex items-center gap-1 text-slate-500/80 hover:text-red-400/70 transition-colors"
                    onClick={e => e.stopPropagation()}
                    tabIndex={-1}
                    aria-label="View on GitHub"
                  >
                    <Github className="w-5 h-5" />
                    <span className="text-xs font-medium">Source Code</span>
                  </a>
                </div>
                <p className="text-gray-300 mb-2 leading-snug text-sm">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.technologies.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-2 py-0.5 bg-emerald-900/20 text-green-300/60 rounded-full text-xs border border-stone-900/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-2 mt-auto">
                  <span className="inline-flex items-center text-red-400/70 hover:text-black text-xs font-semibold">
                    <ExternalLink className="w-4 h-4 mr-1" />
                    {hasDemo ? "Live Demo" : "No Live Demo"}
                  </span>
                </div>
              </div>
            </div>
          );

          return hasDemo ? (
            <a
              key={index}
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              {CardContent}
            </a>
          ) : (
            <div key={index}>{CardContent}</div>
          );
        })}
      </div>
      
      {visibleCount < projects.length && (
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            className="bg-gray-500/25 border-slate-700 text-white-300 hover:bg-green-600 px-4 py-2 text-sm w-auto"
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
