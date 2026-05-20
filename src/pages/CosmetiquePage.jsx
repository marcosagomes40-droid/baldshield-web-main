import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import {
  Shield,
  Sparkles,
  Sun,
  ArrowRight,
  MessageCircle,
  CheckCircle,
} from 'lucide-react';

import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const CosmetiquePage = () => {
  const pains = [
    'Brilho excessivo ao longo do dia',
    'Queimaduras solares no couro cabeludo',
    'Produtos genéricos para homens carecas',
    'Desconforto e oleosidade',
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
        <title>BaldShield na FCE Cosmetique 2026 | Premium Scalp Care</title>

        <meta
          name="description"
          content="Conheça a BaldShield na FCE Cosmetique 2026. A nova geração de cuidados premium para homens carecas."
        />

        <link rel="canonical" href="https://www.baldshield.com/cosmetique" />
      </Helmet>

      <div className="min-h-screen bg-black text-foreground overflow-hidden">
        <Header />

        {/* HERO */}
        <section className="relative min-h-[92vh] flex items-center bg-black overflow-hidden border-b border-border/20 after:absolute after:inset-0 after:bg-gradient-to-r after:from-black/40 after:to-transparent after:pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_28%,rgba(255,115,0,0.22),transparent_28%),radial-gradient(circle_at_14%_82%,rgba(255,115,0,0.08),transparent_34%),linear-gradient(to_bottom,#000,#050505_52%,#000)]" />

          <div className="absolute inset-0 opacity-[0.025] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:80px_80px]" />

          <div className="absolute right-[-14%] top-[10%] w-[560px] h-[560px] rounded-full bg-primary/20 blur-[120px]" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-14 w-full z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="max-w-[720px]">
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  className="mb-8"
                >
                  <span className="inline-block text-xs md:text-sm uppercase tracking-[0.42em] text-primary font-semibold">
                    FCE Cosmetique 2026
                  </span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.02] mb-8 text-white"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  A nova geração
                  <span className="block mt-5 pb-2 bg-gradient-to-r from-orange-300 via-primary to-orange-600 bg-clip-text text-transparent drop-shadow-[0_0_34px_rgba(255,115,0,0.24)]">
                    de cuidados para homens carecas.
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-lg md:text-2xl text-secondary max-w-2xl leading-relaxed"
                >
                  Conheça a BaldShield. A primeira marca brasileira focada na
                  rotina premium do couro cabeludo masculino.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="flex flex-col sm:flex-row gap-4 mt-14"
                >
                  <a
                    href="/pre-launch?scroll=lista"
                    className="inline-flex items-center justify-center px-10 py-5 rounded-full bg-primary text-black font-semibold tracking-wide hover:bg-primary/90 hover:scale-[1.02] transition-all duration-300 shadow-[0_0_45px_rgba(255,115,0,0.28)]"
                  >
                    Entrar na lista VIP
                  </a>

                  <a
                    href="https://wa.me/5511939441361"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full border border-primary/60 text-primary font-semibold tracking-wide hover:bg-primary/10 hover:border-primary/80 transition-all duration-300"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Falar no WhatsApp
                  </a>
                </motion.div>
              </div>

              {/* MOCKUP */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.25 }}
                className="hidden lg:block relative"
              >
                <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />

                <div className="relative min-h-[500px] rounded-[2.5rem] border border-primary/20 bg-gradient-to-br from-white/[0.08] via-white/[0.025] to-black/85 backdrop-blur-sm shadow-[0_30px_120px_rgba(0,0,0,0.72)] overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,115,0,0.18),transparent_40%)]" />

                  <div className="relative h-full min-h-[500px] flex items-center justify-center p-12 z-10">
                    <div className="relative w-[280px] h-[390px] rounded-[2rem] bg-gradient-to-b from-zinc-900 via-black to-black border border-white/10 shadow-[28px_34px_80px_rgba(0,0,0,0.85)] flex flex-col items-center justify-center text-center px-8 rotate-[-2deg] hover:rotate-0 hover:scale-[1.015] transition-all duration-500 overflow-hidden">
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
                        Connect
                        </h3>

                        <p className="text-sm text-secondary leading-relaxed">
                          Confidence for the bold.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* PROBLEM */}
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
              A indústria criou milhares de produtos para cabelo. Mas quase
              ninguém criou produtos para quem decidiu viver sem ele.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-12">
              {pains.map((item) => (
                <div
                  key={item}
                  className="bg-black/60 border border-border rounded-2xl px-6 py-5 text-left flex items-center gap-4"
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />

                  <span className="text-secondary">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ROUTINE */}
        <section className="py-28 bg-gradient-to-b from-black to-card border-t border-border/20">
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
                Uma rotina completa para homens carecas.
              </h2>

              <p className="text-lg text-secondary leading-relaxed">
                Clean. Hydrate. Protect. Matte. Uma nova geração de cuidados
                masculinos premium.
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

        {/* COSMETIQUE */}
        <section className="py-28 bg-black border-t border-border/20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="text-center mb-6">
              <span className="inline-block text-primary uppercase tracking-[0.28em] text-sm font-semibold">
                Networking & Partnerships
              </span>
            </div>

            <h2
              className="text-4xl md:text-6xl font-bold mb-8 text-white"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Vamos nos encontrar na FCE Cosmetique.
            </h2>

            <p className="text-lg md:text-xl text-secondary leading-relaxed max-w-3xl mx-auto mb-14">
              Estamos participando da feira para conhecer novos parceiros,
              fornecedores e oportunidades para construir a próxima geração de
              cuidados masculinos para homens carecas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/pre-launch?scroll=lista"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-primary text-black font-semibold tracking-wide hover:bg-primary/90 hover:scale-[1.02] transition-all duration-300 shadow-[0_0_45px_rgba(255,115,0,0.28)]"
              >
                Entrar na lista VIP
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="https://wa.me/5511939441361"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full border border-primary/60 text-primary font-semibold tracking-wide hover:bg-primary/10 hover:border-primary/80 transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5" />
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-28 bg-gradient-to-b from-black to-card border-t border-border/20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-[2.5rem] border border-primary/25 bg-gradient-to-br from-primary/15 via-black to-black backdrop-blur-sm p-10 md:p-16 text-center">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,115,0,0.22),transparent_38%)]" />

              <div className="relative">
                <div className="text-center mb-5">
                  <span className="inline-block text-primary uppercase tracking-[0.28em] text-xs font-semibold">
                    Confidence for the bold
                  </span>
                </div>

                <h2
                  className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  Faça parte do primeiro drop da BaldShield.
                </h2>

                <p className="text-secondary text-lg leading-relaxed max-w-2xl mx-auto mb-10">
                  Receba acesso antecipado aos lançamentos, novidades e à nova
                  geração de cuidados premium para homens carecas.
                </p>

                <a
                  href="/pre-launch?scroll=lista"
                  className="group inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-primary text-black font-semibold tracking-wide hover:bg-primary/90 hover:scale-[1.02] transition-all duration-300 shadow-[0_0_45px_rgba(255,115,0,0.28)]"
                >
                  Quero entrar na lista VIP
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default CosmetiquePage;