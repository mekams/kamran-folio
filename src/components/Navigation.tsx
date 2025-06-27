import { Home, Briefcase, GraduationCap, Code, Contact } from 'lucide-react';
import { useEffect, useState } from 'react';

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Navigation = ({ activeSection, setActiveSection }: NavigationProps) => {
  const [showMobileNav, setShowMobileNav] = useState(true);

  useEffect(() => {
    if (showMobileNav) {
      const timer = setTimeout(() => setShowMobileNav(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [showMobileNav]);

  // Show nav again when user taps/clicks anywhere on the screen
  useEffect(() => {
    const handleShowNav = () => setShowMobileNav(true);
    window.addEventListener('touchstart', handleShowNav);
    window.addEventListener('mousedown', handleShowNav);
    return () => {
      window.removeEventListener('touchstart', handleShowNav);
      window.removeEventListener('mousedown', handleShowNav);
    };
  }, []);

  const navItems = [
    // { id: 'home', icon: Home, label: 'Home' },
    { id: 'experience', icon: Briefcase, label: 'Experience' },
    { id: 'mybackground', icon: GraduationCap, label: 'My Background' },
    { id: 'projects', icon: Code, label: 'Projects' },
    { id: 'contact', icon: Contact, label: 'Contact' }
  ];

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-8 right-1 z-50 lg:flex hidden">
        <div className="flex flex-col gap-2 bg-gray-800/80 backdrop-blur-sm p-2 rounded-2xl border border-gray-700">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`p-3 rounded-xl transition-all duration-200 group relative ${
                activeSection === item.id
                  ? 'bg-emerald-600/70 text-white'
                  : 'text-gray-400 hover:text-white hover:bg-gray-500/40 hover:shadow-lg'
              }`}
              title={item.label}
              aria-label={item.label}
            >
              <item.icon className="w-5 h-5" />
              <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </nav>

      {/* Mobile Capsule Navigation */}
      {showMobileNav && (
        <nav
          className={`fixed right-1 top-1/4 -translate-y-1/2 z-50 flex flex-col lg:hidden transition-opacity duration-300 ${
            showMobileNav ? 'opacity-75' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div className="flex flex-col gap-2 bg-gray-800/90 backdrop-blur-sm px-2 py-3 rounded-full border border-gray-700 shadow-lg">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`p-2 rounded-full transition-all duration-200 ${
                  activeSection === item.id
                    ? 'bg-emerald-600/80 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-gray-500/40'
                }`}
                title={item.label}
                aria-label={item.label}
              >
                <item.icon className="w-4 h-4" />
              </button>
            ))}
          </div>
        </nav>
      )}
    </>
  );
};

export default Navigation;
