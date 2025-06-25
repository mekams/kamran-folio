import { Github, Linkedin, Mail, Phone, Contact, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect, useMemo } from 'react';

const Hero = () => {
  const titles = useMemo(
    () => [
      'Full-Stack Developer',
      'Software Engineer',
      'AI Engineer',
      'Problem Solver',
      'Tech Enthusiast'
    ],
    []
  );
  const colors = ['text-green-400'];

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedLetters, setDisplayedLetters] = useState(0);

  // Typewriter effect for each title
  useEffect(() => {
    if (displayedLetters < titles[currentTitleIndex].length) {
      const timeout = setTimeout(() => {
        setDisplayedLetters(displayedLetters + 1);
      }, 70);
      return () => clearTimeout(timeout);
    } else {
      // Wait before moving to next title
      const timeout = setTimeout(() => {
        setDisplayedLetters(0);
        setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
      }, 1500);
      return () => clearTimeout(timeout);
    }
  }, [displayedLetters, currentTitleIndex, titles]);

  const handleCall = () => {
    window.location.href = 'tel:+447869128971';
  };

  const handleEmail = () => {
    window.location.href = 'mailto:kamraneg@gmail.com';
  };

  const handleDownloadCV = () => {
    const cvUrl = '../assets/Kamran_IT_Resume.pdf';
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Kamran_Mustafa_CV.pdf';
    link.click();
  };

  return (
    <div className="hero-container h-[90vh] flex items-center justify-center p-4">
      <div className="hero-card bg-gray-800/40 backdrop-blur-sm rounded-3xl border border-gray-700/50 shadow-2xl p-8 max-w-sm w-full text-center">
        <div className="mb-2">
          <div className="relative mx-auto mb-3 w-44 h-44">
            <img 
              src="../../assets/20240315_124547-c.jpg"
              alt="Profile"
              className="w-44 h-44 rounded-full object-cover border-4 border-green-500/30 shadow-xl animate-pulse transition-transform transform hover:scale-105 hover:shadow-2xl"
            />
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-lg mb-1">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            Available for work
          </div>
        </div>
        
        <div className="mb-2">
          <div className="text-xl font-bold mb-1">👋 Say Hello,</div>
          <h1 className="text-2xl font-bold mb-1 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent leading-tight">
            I'm Kamran Mustafa,
          </h1>
          <h2 className="rotating-title text-2xl font-bold text-gray-300 mb-1 min-h-[24px] transition-all duration-500 ease-in-out">
            {titles[currentTitleIndex]
              .slice(0, displayedLetters)
              .split('')
              .map((char, idx) => (
                <span key={idx} className={colors[idx % colors.length]}>
                  {char}
                </span>
              ))}
            <span className="animate-pulse text-blue-400">|</span>
          </h2>
          <h3 className="text-xl font-bold text-gray-400 mb-2">
            United Kingdom
          </h3>
        </div>
        
        <p className="text-gray-400 leading-relaxed mb-2 text-xs font-semibold">
          Computer Science graduate with 2+ years of hands-on experience in software and web development, 
          working with modern technologies in Linux environments. Currently growing a strong interest in 
          real-world AI applications.
        </p>

        {/* Social Media Links */}
        <div className="flex justify-center gap-3 mb-2">
          <a 
            href="https://github.com/mekams" 
            target="_blank" 
            rel="noopener noreferrer"
            className="relative group p-2 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors"
          >
            <Github className="w-5 h-5 group-hover:text-blue-400 transition-colors" />
            <span className="absolute left-1/2 -translate-x-1/2 top-10 opacity-0 group-hover:opacity-100 bg-gray-900 text-xs text-white px-2 py-1 rounded shadow transition-opacity pointer-events-none z-10">
              GitHub
            </span>
          </a>
          <a 
            href="https://linkedin.com/in/kamran51" 
            target="_blank" 
            rel="noopener noreferrer"
            className="relative group p-2 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors"
          >
            <Linkedin className="w-5 h-5 group-hover:text-blue-400 transition-colors" />
            <span className="absolute left-1/2 -translate-x-1/2 top-10 opacity-0 group-hover:opacity-100 bg-gray-900 text-xs text-white px-2 py-1 rounded shadow transition-opacity pointer-events-none z-10">
              LinkedIn
            </span>
          </a>
        </div>

        {/* Contact Information */}
        <div className="mb-2 space-y-1 font-semibold">
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
        
        <div className="flex flex-row gap-2 justify-center">
          <Button 
            onClick={handleEmail}
            className="bg-emerald-500/25 hover:bg-green-600 text-white px-4 py-2 text-xs w-auto"
          >
            <Contact className="w-3 h-3 mr-2" />
            Contact Me
          </Button>
          <Button 
            onClick={handleDownloadCV}
            variant="outline" 
            className="bg-slate-900/70 border-gray-600 text-black-300 hover:bg-green-500 px-4 py-2 text-xs w-auto "
          >
            <Download className="w-3 h-3 mr-2" />
            Download CV
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
