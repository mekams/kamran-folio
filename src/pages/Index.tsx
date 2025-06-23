
import { useState } from 'react';
import Hero from '../components/Hero';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Navigation from '../components/Navigation';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Left section - Fixed on desktop, no scrolling */}
        <div className="lg:w-2/5 lg:fixed lg:h-screen flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
          <Hero />
        </div>
        
        {/* Right section - Scrollable, more space */}
        <div className="lg:w-3/5 lg:ml-[40%] relative">
          <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
          
          <div className="space-y-0">
            <section id="experience" className="min-h-screen p-6 lg:p-10 xl:p-12 flex items-center">
              <div className="w-full">
                <Experience />
              </div>
            </section>
            
            <section id="education" className="min-h-screen p-6 lg:p-10 xl:p-12 bg-gray-800/30 flex items-center">
              <div className="w-full">
                <Education />
              </div>
            </section>
            
            <section id="projects" className="min-h-screen p-6 lg:p-10 xl:p-12 flex items-center">
              <div className="w-full">
                <Projects />
              </div>
            </section>
            
            <section id="contact" className="min-h-screen p-6 lg:p-10 xl:p-12 bg-gray-800/30 flex items-center">
              <div className="w-full">
                <Contact />
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
