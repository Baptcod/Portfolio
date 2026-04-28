import { Link } from 'react-router-dom';

const Header = () => {
  const handleOpenPDF = () => {
    // Ouvre le PDF dans un nouvel onglet
    window.open('/documents/tableau-competences.pdf', '_blank');
  };

  const handleDownloadPDF = () => {
  window.open('/documents/tableau-competences.pdf', '_blank');
};

  return (
    <section id="home" className="min-h-screen flex items-center px-12">
      <div className="max-w-3xl text-center">
        <p className="text-green font-mono mb-8 text-2xl">
          Bonjour et bienvenue sur mon portfolio
        </p>
        <p className="text-xl text-slate mb-12 leading-relaxed">
          Actuellement en BTS SIO option SISR, je suis en alternance en tant que technicien informatique. Je souhaite me spécialiser dans les infrastructures réseaux et la sécurité informatique.
        </p>
        <div className="flex justify-center space-x-6">
          <div className="relative group">
            <button
              onClick={handleOpenPDF}
              className="border border-green text-green px-8 py-4 rounded font-mono text-sm hover:bg-green/10 transition-colors"
            >
              Tableau de compétences
            </button>
            {/* Menu déroulant pour les options */}
            <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10">
              <button
                onClick={handleOpenPDF}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-t-md"
              >
                📄 Ouvrir le PDF
              </button>
              <button
                onClick={handleDownloadPDF}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-b-md"
              >
                💾 Télécharger le PDF
              </button>
            </div>
          </div>
          <a
            href="#projects"
            className="border border-slate text-slate px-8 py-4 rounded font-mono text-sm hover:bg-slate/10 transition-colors"
          >
            Voir mes réalisations
          </a>
        </div>
      </div>
    </section>
  );
};

export default Header;