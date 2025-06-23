
import { Github, Linkedin, Mail, Phone, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const handleCall = () => {
    window.location.href = 'tel:+447869128971';
  };

  const handleEmail = () => {
    window.location.href = 'mailto:kamraneg@gmail.com';
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
    <div className="text-center animate-fade-in px-4 py-6 max-w-xs mx-auto h-full flex flex-col justify-center">
      <div className="mb-6">
        <div className="relative mx-auto mb-4 w-32 h-32">
          <img 
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
            alt="Profile"
            className="w-full h-full rounded-full object-cover border-3 border-blue-500/30 shadow-xl"
          />
        </div>
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs mb-3">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          Available for work
        </div>
      </div>
      
      <div className="mb-6">
        <div className="text-xl mb-2">👋 Say Hello,</div>
        <h1 className="text-xl font-bold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent leading-tight">
          I'm Kamran Mustafa,
        </h1>
        <h2 className="text-base font-semibold text-gray-300 mb-1">
          Full-Stack Developer,
        </h2>
        <h3 className="text-sm text-gray-400 mb-4">
          From United Kingdom
        </h3>
      </div>
      
      <p className="text-gray-300 leading-relaxed mb-6 text-xs">
        Computer Science graduate with 2+ years of hands-on experience in software and web development, 
        working with modern technologies in Linux environments. Currently growing a strong interest in 
        real-world AI applications.
      </p>

      {/* Social Media Links */}
      <div className="flex justify-center gap-3 mb-6">
        <a 
          href="https://github.com/mekams" 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-2 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors group"
        >
          <Github className="w-4 h-4 group-hover:text-blue-400 transition-colors" />
        </a>
        <a 
          href="https://linkedin.com/in/kamran51" 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-2 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors group"
        >
          <Linkedin className="w-4 h-4 group-hover:text-blue-400 transition-colors" />
        </a>
      </div>

      {/* Contact Information */}
      <div className="mb-6 space-y-2">
        <div className="flex items-center justify-center gap-2 text-gray-300">
          <Mail className="w-3 h-3 text-blue-400" />
          <button 
            onClick={handleEmail}
            className="hover:text-blue-400 transition-colors text-xs"
          >
            kamraneg@gmail.com
          </button>
        </div>
        <div className="flex items-center justify-center gap-2 text-gray-300">
          <Phone className="w-3 h-3 text-blue-400" />
          <button 
            onClick={handleCall}
            className="hover:text-blue-400 transition-colors text-xs"
          >
            +44 (786) 912 8971
          </button>
        </div>
      </div>
      
      <div className="flex flex-col gap-2 justify-center">
        <Button 
          onClick={handleEmail}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 text-xs w-full"
        >
          Contact Me
        </Button>
        <Button 
          onClick={handleDownloadCV}
          variant="outline" 
          className="border-gray-600 text-gray-300 hover:bg-gray-800 px-4 py-2 text-xs w-full"
        >
          <Download className="w-3 h-3 mr-2" />
          Download CV
        </Button>
      </div>
    </div>
  );
};

export default Hero;
