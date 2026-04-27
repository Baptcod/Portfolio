import React, { useState } from 'react';

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  const experiences = [
    {
      company: "Groupe Carso",
      title: "Technicien Informatique Alternant",
      period: "2025 - Présent",
      description: [
        "Support informatique de niveau 1 et 2 pour 200+ utilisateurs",
        "Déploiement et configuration de postes de travail Windows",
        "Gestion des comptes Active Directory et des permissions",
        "Résolution d'incidents réseau et systèmes",
      ]
    },
    {
      company: "Laboratoire CBTP",
      title: "Assistant Technique",
      period: "Sept 2024 - Aujourd'hui",
      description: [
        "Automatisation des processus administratifs avec VBA/Excel",
        "Participation à une journée Cybersécurité avec ABSI Group",
        "Optimisation des workflows de laboratoire"
      ]
    },
    {
      company: "OLGA",
      title: "Technicien de laboratoire",
      period: "Mars 2024 - Juin 2024",
      description: [
        "Analyses physico-chimiques d'échantillons alimentaires",
        "Respect des procédures qualité et sécurité"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-start">
          <h2 className="text-2xl font-bold text-lightest-slate whitespace-nowrap mr-8">
            Expérience Professionnelle
          </h2>
          <div className="w-full h-px bg-lightest-navy mt-3"></div>
        </div>

        <div className="mt-10 flex flex-col lg:flex-row gap-8">
          {/* Onglets */}
          <div className="lg:w-1/4">
            <div className="flex lg:flex-col overflow-x-auto">
              {experiences.map((exp, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`px-4 py-3 text-left font-mono text-sm whitespace-nowrap border-l-2 lg:border-l-0 lg:border-b-2 transition-colors ${
                    activeTab === index
                      ? 'text-green border-green bg-green/10'
                      : 'text-slate border-lightest-navy hover:bg-lightest-navy/50'
                  }`}
                >
                  {exp.company}
                </button>
              ))}
            </div>
          </div>

          {/* Contenu */}
          <div className="lg:w-3/4">
            <div className="fade-in-up">
              <h3 className="text-xl text-lightest-slate font-semibold">
                {experiences[activeTab].title}{' '}
                <span className="text-green">@ {experiences[activeTab].company}</span>
              </h3>
              <p className="font-mono text-sm text-slate mt-1 mb-6">
                {experiences[activeTab].period}
              </p>
              <ul className="space-y-3">
                {experiences[activeTab].description.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green mr-4 mt-1">▹</span>
                    <span className="text-slate">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;