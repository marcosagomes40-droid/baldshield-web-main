import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const EmbaixadorPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <section className="px-6 pt-40 pb-24 max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-start">
        
        {/* COLUNA ESQUERDA */}
        <div>
          <span className="tracking-[0.3em] text-primary uppercase text-sm font-semibold">
            Programa Embaixador
          </span>

          <h1
            className="text-5xl md:text-6xl xl:text-7xl font-bold leading-tight mt-6"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Torne-se um Embaixador BaldShield
          </h1>

          <p className="text-zinc-300 text-xl leading-relaxed mt-8 max-w-xl">
            Buscamos pessoas que representem autenticidade, presença e confiança.
            Faça parte da construção da primeira marca brasileira focada no cuidado
            premium do couro cabeludo.
          </p>

          <div className="mt-8 space-y-3 text-zinc-200">
            <div>✓ Acesso antecipado aos lançamentos</div>
            <div>✓ Participação em campanhas exclusivas</div>
            <div>✓ Benefícios futuros para embaixadores</div>
            <div>✓ Comunidade oficial BaldShield</div>
          </div>

          <div className="mt-10 bg-zinc-950/80 border border-white/10 rounded-3xl p-8 shadow-2xl backdrop-blur-md max-w-2xl">
            <h2 className="text-3xl font-bold mb-8">
              Quero participar
            </h2>

            <form className="space-y-5">
              <input
                type="text"
                placeholder="Seu nome"
                className="w-full bg-black border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-primary"
              />

              <input
                type="text"
                placeholder="Instagram"
                className="w-full bg-black border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-primary"
              />

              <input
                type="text"
                placeholder="WhatsApp"
                className="w-full bg-black border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-primary"
              />

              <input
                type="text"
                placeholder="Cidade"
                className="w-full bg-black border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-primary"
              />

              <textarea
                placeholder="Por que você quer representar a BaldShield?"
                rows="5"
                className="w-full bg-black border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-primary"
              />

              <button
                type="button"
                className="w-full bg-primary text-black font-bold py-4 rounded-xl hover:scale-[1.02] transition-all duration-300"
              >
                Enviar candidatura
              </button>
            </form>
          </div>
        </div>

        {/* COLUNA DIREITA */}
        <div className="mt-10 lg:mt-0 lg:sticky lg:top-36 lg:pt-4">
          <img
            src="/embaixador-baldshield-premium.webp"
            alt="Embaixador BaldShield"
            className="w-full max-w-xl mx-auto rounded-3xl object-cover shadow-2xl border border-white/10"
        />
        </div>

      </section>

      <Footer />
    </div>
  );
};

export default EmbaixadorPage;