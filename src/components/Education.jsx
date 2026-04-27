import React from 'react';

const Education = () => {
  const formations = [
    {
      diploma: "BTS SIO option SISR",
      school: "MyDigitalSchool Rennes",
      period: "2025/2027"
    },
    {
      diploma: "Formation autodidacte - Développement & Réseaux",
      school: "OpenClassrooms, ressources en ligne",
      period: "2024/2025"
    },
    {
      diploma: "Licence de chimie industrielle",
      school: "Université Rennes 1",
      period: "2019/2023"
    }
  ];

  return (
    <section id="education" className="py-16 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Formation</h2>
        <div className="max-w-4xl mx-auto">
          {formations.map((edu, index) => (
            <div key={index} className="mb-8 bg-gray-900 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-blue-400">{edu.diploma}</h3>
              <p className="text-lg text-gray-300">{edu.school}</p>
              <p className="text-gray-400">{edu.period}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;