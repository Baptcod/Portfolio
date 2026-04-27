import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-lightest-slate mb-8">Prenez Contact</h2>
        <a
          href="mailto:baptiste.bideau@email.com"
          className="border border-green text-green px-8 py-4 rounded font-mono text-sm hover:bg-green/10 transition-colors inline-block"
        >
          Dire Bonjour
        </a>
      </div>
    </section>
  );
};

export default Contact;