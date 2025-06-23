
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="text-center animate-fade-in">
      <div className="mb-8">
        <img 
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
          alt="Profile"
          className="w-48 h-48 rounded-full mx-auto mb-6 object-cover border-4 border-blue-500/30 shadow-2xl"
        />
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm mb-4">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          Available for work
        </div>
      </div>
      
      <div className="mb-8">
        <div className="text-4xl mb-4">👋 Say Hello,</div>
        <h1 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          I'm Kamran Mustafa,
        </h1>
        <h2 className="text-2xl lg:text-3xl font-semibold text-gray-300 mb-2">
          Full-Stack Developer,
        </h2>
        <h3 className="text-xl text-gray-400 mb-6">
          From United Kingdom
        </h3>
      </div>
      
      <p className="text-gray-300 leading-relaxed mb-8 max-w-md mx-auto">
        Computer Science graduate with 2+ years of hands-on experience in software and web development, 
        working with modern technologies in Linux environments. Currently growing a strong interest in 
        real-world AI applications.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3">
          Contact Me
        </Button>
        <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 px-6 py-3">
          View My Background
        </Button>
      </div>
      
      <div className="flex justify-center gap-6">
        <a 
          href="https://github.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors"
        >
          <Github className="w-6 h-6" />
        </a>
        <a 
          href="https://linkedin.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors"
        >
          <Linkedin className="w-6 h-6" />
        </a>
        <a 
          href="mailto:contact@example.com"
          className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors"
        >
          <Mail className="w-6 h-6" />
        </a>
        <a 
          href="tel:+44123456789"
          className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors"
        >
          <Phone className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
};

export default Hero;
