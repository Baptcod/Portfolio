// Import des dépendances React
import React, { useState, useEffect } from 'react';

// Composant Navbar - Barre de navigation latérale
const Navbar = () => {
  // État pour suivre la section active dans la page
  const [activeSection, setActiveSection] = useState('home');

  // useEffect pour gérer le défilement et la détection de section active
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'À Propos', href: '#about' },
    { name: 'Expérience', href: '#experience' },
    { name: 'Projets', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    // Navbar fixe mais avec width 1/3
    <nav className="fixed left-0 top-0 h-full w-1/3 bg-navy/90 backdrop-blur-sm z-50 border-r border-green/20 overflow-y-auto">
      <div className="flex flex-col h-full p-12">
        
        {/* Section Nom et Titre */}
        <div className="mb-16">
          <h1 className="text-3xl font-bold text-lightest-slate mb-4">Baptiste Bideau</h1>
          <h2 className="text-xl font-bold text-slate mb-6">
            Technicien Informatique &amp; Étudiant en BTS SIO
          </h2>
          <div className="w-20 h-1 bg-green mb-6"></div>
        </div>
        
        {/* Liste de navigation */}
        <ul className="flex flex-col space-y-6">
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className={`font-mono text-lg hover:text-green transition-colors flex items-center py-2 ${
                  activeSection === item.href.slice(1) ? 'text-green' : 'text-light-slate'
                }`}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        
        {/* Contact */}
        <div className="mt-auto pt-8">
          <p className="text-sm text-light-slate mb-4">
            baptiste.bideau@my-digital-school.org
          </p>
          <div className="text-xs text-light-slate font-mono">
            © 2024 Baptiste
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;