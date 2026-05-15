import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const EmbaixadorPage = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    whatsapp: '',
    cidade: '',
    motivo: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwrA99Uyr3o6lC-mbMTqL1jxZk0BEzNUKkqqyo1Muhx2Tn0UQHZT_jmkhPfBh4GADTPLw/exec';

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = {
      nome: formData.nome,
      email: formData.email,
      assunto: 'Cadastro Embaixador',
      mensagem: `WhatsApp: ${formData.whatsapp} | Cidade: ${formData.cidade} | Motivo: ${formData.motivo}`,
      origem: 'embaixador',
    };

    try {
      await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      alert('Cadastro enviado com sucesso!');

      setFormData({
        nome: '',
        email: '',
        whatsapp: '',
        cidade: '',
        motivo: '',
      });
    } catch (error) {
      alert('Não foi possível enviar seu cadastro. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <section className="px-6 pt-40 pb-24 max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-start">
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

            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                name="nome"
                placeholder="Seu nome"
                value={formData.nome}
                onChange={handleChange}
                required
                className="w-full bg-black border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-primary"
              />

              <input
                type="text"
                name="email"
                placeholder="E-mail"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-black border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-primary"
              />

              <input
                type="text"
                name="whatsapp"
                placeholder="WhatsApp com DDD"
                value={formData.whatsapp}
                onChange={handleChange}
                required
                className="w-full bg-black border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-primary"
              />

              <input
                type="text"
                name="cidade"
                placeholder="Cidade"
                value={formData.cidade}
                onChange={handleChange}
                required
                className="w-full bg-black border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-primary"
              />

              <textarea
                name="motivo"
                placeholder="Por que você quer representar a BaldShield?"
                rows="5"
                value={formData.motivo}
                onChange={handleChange}
                required
                className="w-full bg-black border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-primary"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-black font-bold py-4 rounded-xl hover:scale-[1.02] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar candidatura'}
              </button>
            </form>
          </div>
        </div>

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