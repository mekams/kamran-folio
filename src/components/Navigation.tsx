import { Home, Briefcase, GraduationCap, Code, Contact } from 'lucide-react';
import { useEffect } from 'react';

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Navigation = ({ activeSection, setActiveSection }: NavigationProps) => {
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
    <nav className="fixed top-8 right-8 z-50 lg:flex hidden">
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
  );
};

export default Navigation;
