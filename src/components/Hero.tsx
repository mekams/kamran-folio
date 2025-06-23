
import { Github, Linkedin, Mail, Phone, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const handleCall = () => {
    window.location.href = 'tel:+447869128971';
  };

  const handleEmail = () => {
    window.location.href = 'mailto:kamran@example.com';
  };

  const handleDownloadCV = () => {
    // Replace with actual CV file path
    const cvUrl = '/path-to-your-cv.pdf';
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Kamran_Mustafa_CV.pdf';
    link.click();
  };

  return (
    <div className="text-center animate-fade-in px-4 py-8">
      <div className="mb-6 lg:mb-8">
        <img 
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
          alt="Profile"
          className="w-56 h-56 lg:w-64 lg:h-64 rounded-full mx-auto mb-4 lg:mb-6 object-cover border-4 border-blue-500/30 shadow-2xl"
        />
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm mb-4">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          Available for work
        </div>
      </div>
      
      <div className="mb-6 lg:mb-8">
        <div className="text-3xl lg:text-4xl mb-3 lg:mb-4">👋 Say Hello,</div>
        <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 lg:mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent leading-tight">
          I'm Kamran Mustafa,
        </h1>
        <h2 className="text-xl lg:text-2xl xl:text-3xl font-semibold text-gray-300 mb-2 leading-relaxed">
          Full-Stack Developer,
        </h2>
        <h3 className="text-lg lg:text-xl text-gray-400 mb-4 lg:mb-6">
          From United Kingdom
        </h3>
      </div>
      
      <p className="text-gray-300 leading-relaxed mb-6 lg:mb-8 max-w-md mx-auto text-sm lg:text-base px-2">
        Computer Science graduate with 2+ years of hands-on experience in software and web development, 
        working with modern technologies in Linux environments. Currently growing a strong interest in 
        real-world AI applications.
      </p>

      {/* Contact Information */}
      <div className="mb-6 lg:mb-8 space-y-3">
        <div className="flex items-center justify-center gap-2 text-gray-300">
          <Mail className="w-4 h-4 text-blue-400" />
          <button 
            onClick={handleEmail}
            className="hover:text-blue-400 transition-colors text-sm lg:text-base"
          >
            kamran@example.com
          </button>
        </div>
        <div className="flex items-center justify-center gap-2 text-gray-300">
          <Phone className="w-4 h-4 text-blue-400" />
          <button 
            onClick={handleCall}
            className="hover:text-blue-400 transition-colors text-sm lg:text-base"
          >
            +44 (786) 912 8971
          </button>
        </div>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center mb-6 lg:mb-8 px-4">
        <Button 
          onClick={handleEmail}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 lg:px-6 py-2 lg:py-3 text-sm lg:text-base"
        >
          Contact Me
        </Button>
        <Button 
          onClick={handleDownloadCV}
          variant="outline" 
          className="border-gray-600 text-gray-300 hover:bg-gray-800 px-4 lg:px-6 py-2 lg:py-3 text-sm lg:text-base"
        >
          <Download className="w-4 h-4 mr-2" />
          Download CV
        </Button>
      </div>
      
      <div className="flex justify-center gap-4 lg:gap-6">
        <a 
          href="https://github.com/kamranmustafa" 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-2 lg:p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors group"
        >
          <Github className="w-5 h-5 lg:w-6 lg:h-6 group-hover:text-blue-400 transition-colors" />
        </a>
        <a 
          href="https://linkedin.com/in/kamranmustafa" 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-2 lg:p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors group"
        >
          <Linkedin className="w-5 h-5 lg:w-6 lg:h-6 group-hover:text-blue-400 transition-colors" />
        </a>
        <button
          onClick={handleEmail}
          className="p-2 lg:p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors group"
        >
          <Mail className="w-5 h-5 lg:w-6 lg:h-6 group-hover:text-blue-400 transition-colors" />
        </button>
        <button
          onClick={handleCall}
          className="p-2 lg:p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors group"
        >
          <Phone className="w-5 h-5 lg:w-6 lg:h-6 group-hover:text-blue-400 transition-colors" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
