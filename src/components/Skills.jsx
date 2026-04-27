import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      category: "Systèmes & Réseaux",
      skills: ["Windows Server", "Active Directory", "Linux", "TCP/IP", "DHCP", "DNS", "Cisco Packet Tracer"]
    },
    {
      category: "Support & Déploiement",
      skills: ["Support technique", "Déploiement de postes", "Résolution d'incidents", "Gestion des comptes"]
    },
    {
      category: "Développement & Automatisation",
      skills: ["Python", "HTML/CSS", "JavaScript", "React", "Node.js", "VBA", "TailwindCSS"]
    },
    {
      category: "Bureautique",
      skills: ["Pack Office (Excel, Word, PowerPoint)", "Automatisation Excel/VBA"]
    }
  ];

  return (
    <section id="skills" className="py-16 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Compétences</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span key={i} className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;