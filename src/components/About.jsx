import React from 'react';

const About = () => {
  const skills = [
    'Windows Server',
    'VMware Workstation',
    'Active Directory',
    'Cisco Packet Tracer',
    'PowerShell',
    'GLPI',
    'Freshservice',
    'Linux',
    'React',
    'TailwindCSS',
  ];

  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-start">
          <h2 className="text-2xl font-bold text-lightest-slate whitespace-nowrap mr-8">
            
            À Propos de moi
          </h2>
          <div className="w-full h-px bg-lightest-navy mt-3"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">
          <div className="lg:col-span-2">
            <div className="space-y-4 text-slate">
              <p>
                Après une formation en chimie industrielle, j'ai décidé de me reconvertir dans l'informatique, 
                un domaine qui me passionne. Aujourd'hui, je suis technicien informatique en alternance 
                chez <span className="text-green">Groupe Carso</span> tout en poursuivant mon BTS SIO option SISR.
              </p>
              <p>
                Mon rôle actuel me permet d'intervenir sur divers aspects de l'infrastructure IT : support utilisateur, 
                déploiement de postes, gestion Active Directory, et résolution d'incidents. Chaque jour est l'occasion 
                d'apprendre et de relever de nouveaux défis techniques.
              </p>
              <p>
                Voici quelques technologies avec lesquelles je travaille actuellement :
              </p>
            </div>
            
            <div className="mt-6">
              <div className="grid grid-cols-2 gap-2 max-w-md">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-center">
                    <span className="text-green mr-2">▹</span>
                    <span className="text-slate text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="relative group">
            <div className="w-64 h-64 border-2 border-green rounded-lg transition-all duration-300 group-hover:translate-x-2 group-hover:translate-y-2">
              {/* Remplace par ta photo */}
              <div className="w-full h-full bg-lightest-navy rounded-lg"></div>
            </div>
            <div className="absolute top-4 left-4 w-64 h-64 border-2 border-light-slate rounded-lg -z-10 transition-all duration-300 group-hover:translate-x-2 group-hover:translate-y-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;