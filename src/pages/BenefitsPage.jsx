import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import {
  Shield,
  Sun,
  Sparkles,
  Wind,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';

import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import CTASection from '@/components/CTASection.jsx';

const BenefitsPage = () => {
  const benefits = [
    {
      icon: Sparkles,
      title: 'Visual limpo o dia inteiro',
      description:
        'Redução da aparência de brilho excessivo para uma presença mais elegante e confiante.',
    },
    {
      icon: Sun,
      title: 'Confiança mesmo sob o sol',
      description:
        'Proteção e conforto para a rotina diária, calor, exposição e ambientes externos.',
    },
    {
      icon: Wind,
      title: 'Conforto sem sensação oleosa',
      description:
        'Produtos desenvolvidos para manter o couro cabeludo leve, confortável e equilibrado.',
    },
    {
      icon: Shield,
      title: 'Cuidado pensado para homens carecas',
      description:
        'Uma rotina criada especificamente para necessidades ignoradas pela indústria tradicional.',
    },
  ];

  const problems = [
    'Brilho excessivo ao longo do dia',
    'Queimaduras solares no couro cabeludo',
    'Oleosidade e desconforto',
    'Falta de produtos específicos',
  ];

  const routine = [
    { name: 'Clean', subtitle: 'Limpeza diária' },
    { name: 'Hydrate', subtitle: 'Hidratação leve' },
    { name: 'Protect', subtitle: 'Proteção solar matte' },
    { name: 'Matte', subtitle: 'Controle instantâneo de brilho' },
  ];

  return (
    <>
      <Helmet>
        <title>Benefícios BaldShield | Cuidado Premium para Homens Carecas</title>

        <meta
          name="description"
          content="Descubra os benefícios da BaldShield: controle de brilho, proteção, conforto e uma rotina premium criada para homens carecas."
        />

        <link rel="canonical" href="https://www.baldshield.com/benefits" />
      </Helmet>

      <div className="min-h-screen bg-black text-foreground overflow-hidden">
        <Header />

        {/* HERO */}
        <section className="relative min-h-[88vh] flex items-center bg-black border-b border-border/20 overflow-hidden after:absolute after:inset-0 after:bg-gradient-to-r after:from-black/35 after:to-transparent after:pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_28%,rgba(255,115,0,0.20),transparent_30%),radial-gradient(circle_at_12%_82%,rgba(255,115,0,0.08),transparent_34%),linear-gradient(to_bottom,#000,#050505_52%,#000)]" />

          <div className="absolute inset-0 opacity-[0.025] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:80px_80px]" />

          <div className="absolute right-[-16%] top-[10%] w-[580px] h-[580px] rounded-full bg-primary/20 blur-[130px]" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 w-full z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="max-w-[720px]">
                <motion.p
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  className="text-xs md:text-sm uppercase tracking-[0.42em] pl-[0.42em] text-primary font-semibold mb-8"
                >
                  BaldShield Benefits
                </motion.p>

                <motion.h1
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.02] mb-8 text-white"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  A careca chama atenção.
                  <span className="block mt-5 pb-2 bg-gradient-to-r from-orange-300 via-primary to-orange-600 bg-clip-text text-transparent drop-shadow-[0_0_34px_rgba(255,115,0,0.24)]">
                    A presença fica na memória.
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-lg md:text-2xl text-secondary max-w-2xl leading-relaxed mt-3"
                >
                  A BaldShield foi criada para homens que assumiram a careca —
                  e decidiram cuidar dela com o mesmo nível de atenção que
                  qualquer outra parte da aparência.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="flex flex-col sm:flex-row gap-4 mt-14"
                >
                  <a
                    href="#benefits"
                    className="inline-flex items-center justify-center px-10 py-5 rounded-full bg-primary text-black font-semibold tracking-wide hover:bg-primary/90 hover:scale-[1.02] transition-all duration-300 shadow-[0_0_45px_rgba(255,115,0,0.28)]"
                  >
                    Conhecer benefícios
                  </a>

                  <a
                    href="/pre-launch"
                    className="inline-flex items-center justify-center px-10 py-5 rounded-full border border-primary/60 text-primary font-semibold tracking-wide hover:bg-primary/10 hover:border-primary/80 transition-all duration-300 shadow-[0_0_20px_rgba(255,115,0,0.10)]"
                  >
                    Entrar na lista VIP
                  </a>
                </motion.div>
              </div>

              {/* MOCKUP */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.25 }}
                className="hidden lg:block relative -translate-y-3"
              >
                <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />

                <div className="relative min-h-[500px] rounded-[2.5rem] border border-primary/20 bg-gradient-to-br from-white/[0.08] via-white/[0.025] to-black/85 backdrop-blur-sm shadow-[0_30px_120px_rgba(0,0,0,0.72)] overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,115,0,0.18),transparent_40%)]" />

                  <div className="relative h-full min-h-[500px] flex items-center justify-center p-12 z-10">
                    <div className="relative w-[270px] h-[380px] rounded-[2rem] bg-gradient-to-b from-zinc-900 via-black to-black border border-white/10 shadow-[28px_34px_80px_rgba(0,0,0,0.85)] flex flex-col items-center justify-center text-center px-8 rotate-[-2deg] hover:rotate-0 hover:scale-[1.015] transition-all duration-500 overflow-hidden">
                      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.10),transparent_32%,rgba(255,115,0,0.08)_100%)]" />

                      <div className="relative">
                        <img
                          src="/escudo.png"
                          alt="Escudo BaldShield"
                          className="w-20 h-20 object-contain mx-auto mb-6 drop-shadow-[0_0_28px_rgba(255,115,0,0.32)]"
                        />

                        <p className="text-base uppercase tracking-[0.45em] text-primary font-semibold mb-6">
                          BALDSHIELD
                        </p>

                        <h3
                          className="text-4xl font-bold text-white mb-4"
                          style={{ fontFamily: 'Playfair Display, serif' }}
                        >
                          Presence
                        </h3>

                        <p className="text-sm text-secondary leading-relaxed">
                          Menos brilho. Mais conforto. Mais confiança.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* PROBLEMS */}
        <section className="pt-24 pb-20 bg-black">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="text-center mb-6">
              <span className="inline-block text-primary uppercase tracking-[0.28em] text-sm font-semibold">
                O que ninguém fala
              </span>
            </div>

            <h2
              className="text-4xl md:text-6xl font-bold mb-8 text-white"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Durante anos, homens carecas improvisaram.
            </h2>

            <p className="text-lg md:text-xl text-secondary leading-relaxed max-w-3xl mx-auto mb-12">
              Oleosidade. Brilho excessivo. Queimaduras solares. Desconforto.
              Problemas reais que a indústria simplesmente ignorou.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-12">
              {problems.map((problem) => (
                <div
                  key={problem}
                  className="bg-black/60 border border-border rounded-2xl px-6 py-5 text-left flex items-center gap-4"
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />

                  <span className="text-secondary">{problem}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section
          id="benefits"
          className="pt-20 pb-28 scroll-mt-28 bg-gradient-to-b from-black to-card border-t border-border/20"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div className="text-center mb-5">
                <span className="inline-block text-primary uppercase tracking-[0.28em] text-sm font-semibold">
                  Performance diária
                </span>
              </div>

              <h2
                className="text-4xl md:text-6xl font-bold mb-6 text-white"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Benefícios criados para a rotina real.
              </h2>

              <p className="text-lg text-secondary leading-relaxed">
                Mais do que produtos. Uma nova experiência de cuidado para
                homens carecas.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="group relative overflow-hidden bg-black/60 border border-border rounded-[2rem] p-8 hover:border-primary/50 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(255,115,0,0.08)] transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,115,0,0.08),transparent_45%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-8 group-hover:bg-primary/20 transition-all">
                      <item.icon className="w-8 h-8 text-primary" />
                    </div>

                    <h3
                      className="text-3xl font-bold text-white mb-5"
                      style={{ fontFamily: 'Playfair Display, serif' }}
                    >
                      {item.title}
                    </h3>

                    <p className="text-secondary leading-relaxed text-lg">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ROUTINE */}
        <section className="py-28 bg-black border-t border-border/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="text-center mb-5">
                <span className="inline-block text-primary uppercase tracking-[0.28em] text-sm font-semibold">
                  The Bald Routine
                </span>
              </div>

              <h2
                className="text-4xl md:text-5xl font-bold mb-6 text-white"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Uma rotina completa para quem assumiu a careca.
              </h2>

              <p className="text-lg text-secondary leading-relaxed">
                Clean. Hydrate. Protect. Matte.
                Uma nova geração de cuidados masculinos.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {routine.map((item) => (
                <div
                  key={item.name}
                  className="bg-black/60 border border-border rounded-3xl p-8 text-center hover:border-primary/50 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(255,115,0,0.06)] transition-all duration-300"
                >
                  <h3
                    className="text-3xl font-bold text-white mb-3"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {item.name}
                  </h3>

                  <p className="text-secondary">{item.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* VIP CTA */}
        <section className="py-28 bg-gradient-to-b from-black to-card border-t border-border/20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-[2.5rem] border border-primary/25 bg-gradient-to-br from-primary/15 via-black to-black backdrop-blur-sm p-10 md:p-16 text-center">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,115,0,0.22),transparent_38%)]" />

              <div className="relative">
                <div className="text-center mb-5">
                  <span className="inline-block text-primary uppercase tracking-[0.28em] text-xs font-semibold">
                    Lista VIP BaldShield
                  </span>
                </div>

                <h2
                  className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  Entre para o primeiro drop da BaldShield.
                </h2>

                <p className="text-secondary text-lg leading-relaxed max-w-2xl mx-auto mb-10">
                  Receba acesso antecipado aos lançamentos, novidades e à
                  primeira rotina premium desenvolvida para homens carecas no
                  Brasil.
                </p>

                <a
                  href="/pre-launch"
                  className="group inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-primary text-black font-semibold tracking-wide hover:bg-primary/90 hover:scale-[1.02] transition-all duration-300 shadow-[0_0_45px_rgba(255,115,0,0.28)]"
                >
                  Quero entrar na lista VIP

                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <CTASection />
        <Footer />
      </div>
    </>
  );
};

export default BenefitsPage;