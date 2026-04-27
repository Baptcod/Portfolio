import React from 'react';
 
const Projects = () => {
  const projects = [
    {
      title: "Portfolio Personnel",
      description: "Site web développé avec React et TailwindCSS pour présenter mon parcours professionnel et mes compétences en développement.",
      technologies: ["React", "TailwindCSS", "Vite"],
      doc: "/docs/Doc-Creation-Portfolio.pdf",
      image: "/project1.jpg"
    },
    {
      title: "Active Directory",
      description: "Mise en place et administration d'un environnement Active Directory : gestion des utilisateurs, groupes, stratégies de groupe (GPO) et sécurisation du domaine.",
      technologies: ["Active Directory", "Windows Server", "GPO", "PowerShell"],
      doc: "/docs/Doc-AD.pdf",
      image: "/project-ad.jpg"
    },
    {
      title: "AutomatedLab",
      description: "Déploiement automatisé d'infrastructures de laboratoire virtuel avec AutomatedLab, permettant de provisionner rapidement des environnements Windows complets pour les tests.",
      technologies: ["AutomatedLab", "PowerShell", "Hyper-V", "Windows Server"],
      doc: "/docs/Doc-AutomatedLab.pdf",
      image: "/project-automatedlab.jpg"
    },
    {
      title: "GLPI",
      description: "Installation et configuration de GLPI pour la gestion du parc informatique et du helpdesk : inventaire des assets, ticketing et gestion des incidents.",
      technologies: ["GLPI", "Linux", "PHP", "MySQL"],
      doc: "/docs/Doc-GLPI.pdf",
      image: "/project-glpi.jpg"
    },
    {
      title: "Proxmox",
      description: "Déploiement d'une infrastructure de virtualisation avec Proxmox VE : création et gestion de VMs et conteneurs LXC, configuration réseau et stockage.",
      technologies: ["Proxmox", "KVM", "LXC", "Linux"],
      doc: "/docs/Doc-Proxmox.pdf",
      image: "/project-proxmox.jpg"
    },
    {
      title: "Wake on LAN",
      description: "Système de démarrage à distance d'un PC fixe via un Raspberry Pi Zero 2 W, un VPN Tailscale et une interface web accessible depuis n'importe où dans le monde.",
      technologies: ["Raspberry Pi", "Tailscale", "Python", "Flask", "Linux"],
      doc: "/docs/Doc-WoL.pdf",
      image: "/project-wol.jpg"
    }
  ];
 
  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-start">
          <h2 className="text-2xl font-bold text-lightest-slate whitespace-nowrap mr-8">
            Projets
          </h2>
          <div className="w-full h-px bg-lightest-navy mt-3"></div>
        </div>
 
        <div className="mt-10 grid grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <div key={index} className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center group">
              <div className="lg:col-span-3 order-2 lg:order-1">
                <h3 className="text-2xl font-bold text-lightest-slate mb-4">{project.title}</h3>
                <div className="bg-light-navy p-6 rounded-lg mb-6">
                  <p className="text-slate">{project.description}</p>
                </div>
                <div className="flex flex-wrap gap-3 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="font-mono text-xs text-slate">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 items-center">
                  {project.github && (
                    <a href={project.github} className="text-lightest-slate hover:text-green transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} className="text-lightest-slate hover:text-green transition-colors">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                  {project.doc && (
                    <a
                      href={project.doc}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 font-mono text-xs text-green border border-green rounded px-3 py-1.5 hover:bg-green/10 transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                      </svg>
                      Documentation
                    </a>
                  )}
                </div>
              </div>
 
              <div className="lg:col-span-2 order-1 lg:order-2 relative group">
                <div className="relative rounded-lg overflow-hidden">
                  <div className="w-full h-64 bg-lightest-navy rounded-lg"></div>
                  <div className="absolute inset-0 bg-green/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
 
export default Projects;