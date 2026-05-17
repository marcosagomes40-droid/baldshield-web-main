import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import {
  Shield,
  Sun,
  Sparkles,
  Droplet,
  Wind,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';

import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import CTASection from '@/components/CTASection.jsx';

const ProductsPage = () => {
  const routine = [
    {
      name: 'Clean',
      description: 'Limpeza diária para remover oleosidade, suor e resíduos.',
      status: 'Em breve',
      icon: Droplet,
    },
    {
      name: 'Hydrate',
      description: 'Hidratação leve para manter o couro cabeludo confortável.',
      status: 'Em breve',
      icon: Wind,
    },
    {
      name: 'Protect',
      description: 'Proteção solar com toque seco para a rotina ao ar livre.',
      status: 'Em desenvolvimento',
      icon: Sun,
    },
    {
      name: 'Matte',
      description: 'Controle instantâneo de brilho para acabamento limpo.',
      status: 'Primeiro drop',
      icon: Sparkles,
    },
  ];

  const benefits = [
    'Controle de brilho excessivo',
    'Sensação limpa e confortável',
    'Rotina pensada para homens carecas',
    'Visual matte e cuidado diário',
  ];

  return (
    <>
      <Helmet>
        <title>Produtos BaldShield | Rotina Premium para Homens Carecas</title>
        <meta
          name="description"
          content="Conheça a BaldShield: a primeira rotina premium brasileira focada no cuidado do couro cabeludo de homens carecas."
        />
        <link rel="canonical" href="https://www.baldshield.com/products" />
      </Helmet>

      <div className="min-h-screen bg-black text-foreground overflow-hidden">
        <Header />

        {/* HERO PREMIUM */}
        <section className="relative min-h-[88vh] flex items-center bg-black border-b border-border/40 overflow-hidden after:absolute after:inset-0 after:bg-gradient-to-r after:from-black/35 after:to-transparent after:pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_28%,rgba(255,115,0,0.22),transparent_30%),radial-gradient(circle_at_12%_82%,rgba(255,115,0,0.10),transparent_34%),linear-gradient(to_bottom,#000,#050505_52%,#000)]" />
          <div className="absolute inset-0 opacity-[0.025] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:80px_80px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_28%,rgba(0,0,0,0.78)_100%)]" />

          <div className="absolute right-[-16%] top-[10%] w-[580px] h-[580px] rounded-full bg-primary/20 blur-[130px]" />
          <div className="absolute left-[-12%] bottom-[-22%] w-[460px] h-[460px] rounded-full bg-primary/10 blur-[130px]" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 w-full z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="max-w-[700px]">
                <motion.p
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  className="text-xs md:text-sm uppercase tracking-[0.55em] text-primary font-semibold mb-8"
                >
                  BaldShield Products
                </motion.p>

                <motion.h1
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="text-5xl md:text-6xl lg:text-7xl xl:text-7xl font-bold leading-[1.02] mb-8 text-white"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  Cuidar da careca nunca foi prioridade.
                  <span className="block mt-5 pb-2 bg-gradient-to-r from-orange-300 via-primary to-orange-600 bg-clip-text text-transparent drop-shadow-[0_0_34px_rgba(255,115,0,0.24)]">
                    Até agora.
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-lg md:text-2xl text-secondary max-w-2xl leading-relaxed"
                >
                  A BaldShield nasce para criar a primeira rotina premium de
                  cuidado para o couro cabeludo de homens carecas do Brasil —
                  com foco em controle de brilho, proteção, conforto e presença.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="flex flex-col sm:flex-row gap-4 mt-14"
                >
                  <a
                    href="#routine"
                    className="inline-flex items-center justify-center px-10 py-5 rounded-full bg-primary text-black font-semibold tracking-wide hover:bg-primary/90 hover:scale-[1.02] transition-all duration-300 shadow-[0_0_45px_rgba(255,115,0,0.28)]"
                  >
                    Conhecer a rotina
                  </a>

                  <a
                    href="/pre-launch"
                    className="inline-flex items-center justify-center px-10 py-5 rounded-full border border-primary/60 text-primary font-semibold tracking-wide hover:bg-primary/10 hover:border-primary/80 transition-all duration-300 shadow-[0_0_20px_rgba(255,115,0,0.10)]"
                  >
                    Entrar na lista VIP
                  </a>
                </motion.div>
              </div>

              {/* VISUAL SIDE */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.25 }}
                className="hidden lg:block relative -translate-y-3"
              >
                <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />

                <div className="relative min-h-[500px] rounded-[2.5rem] border border-primary/20 bg-gradient-to-br from-white/[0.08] via-white/[0.025] to-black/85 backdrop-blur-sm shadow-[0_30px_120px_rgba(0,0,0,0.72)] overflow-hidden before:absolute before:inset-0 before:bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent_38%)] before:pointer-events-none">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,115,0,0.18),transparent_40%)]" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(0,0,0,0.92),transparent_55%)]" />

                  <div className="absolute top-8 left-8 right-8 flex justify-between items-center z-10">
                    <span className="text-[10px] uppercase tracking-[0.28em] text-primary font-semibold">
                      First Drop
                    </span>
                    <img
                      src="/escudo.png"
                      alt="Escudo BaldShield"
                      className="w-9 h-9 object-contain drop-shadow-[0_0_18px_rgba(255,115,0,0.35)]"
                    />
                  </div>

                  <div className="relative h-full min-h-[500px] flex items-center justify-center p-12 z-10">
                    <div className="relative w-[280px] h-[390px] rounded-[2rem] bg-gradient-to-b from-zinc-900 via-black to-black border border-white/10 shadow-[28px_34px_80px_rgba(0,0,0,0.85)] flex flex-col items-center justify-center text-center px-8 rotate-[-2deg] hover:rotate-0 hover:scale-[1.015] transition-all duration-500 overflow-hidden">
                      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.10),transparent_32%,rgba(255,115,0,0.08)_100%)]" />
                      <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

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
                          Matte Wipes
                        </h3>

                        <p className="text-sm text-secondary leading-relaxed">
                          Controle instantâneo de brilho para o couro cabeludo.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-8 left-8 right-8 z-10">
                    <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent mb-5" />
                    <p className="text-sm text-muted-foreground text-center">
                      Sem brilho. Sem improviso. Mais presença.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* MANIFESTO */}
         <section className="pt-24 pb-20 bg-black">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-primary uppercase tracking-[0.35em] text-sm font-semibold mb-6">
              A verdade é simples
            </p>

            <h2
              className="text-4xl md:text-6xl font-bold mb-8 text-white"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Durante anos, homens carecas improvisaram.
            </h2>

            <p className="text-lg md:text-xl text-secondary leading-relaxed max-w-3xl mx-auto">
              Protetores oleosos. Produtos feitos para o rosto. Soluções
              genéricas. Nenhuma marca olhando de verdade para o couro cabeludo
              masculino. A BaldShield nasceu para mudar essa história.
            </p>
          </div>
        </section>

        {/* ROUTINE */}
        <section
          id="routine"
          className="pt-20 pb-28 scroll-mt-28 bg-gradient-to-b from-black to-card border-t border-border/20"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-16">
              <p className="text-primary uppercase tracking-[0.35em] text-sm font-semibold mb-5">
                The Bald Routine
              </p>

              <h2
                className="text-4xl md:text-6xl font-bold mb-6 text-white"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Uma rotina completa para quem assumiu a careca.
              </h2>

              <p className="text-lg text-secondary leading-relaxed">
                A BaldShield não nasce como um produto isolado. Nasce como um
                sistema de cuidado masculino para limpeza, hidratação, proteção
                e controle de brilho.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {routine.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="group bg-black/60 border border-border rounded-3xl p-7 hover:border-primary/50 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-8 group-hover:bg-primary/20 transition-all">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>

                  <div className="flex items-center justify-between gap-3 mb-4">
                    <h3
                      className="text-2xl font-bold text-white"
                      style={{ fontFamily: 'Playfair Display, serif' }}
                    >
                      {item.name}
                    </h3>

                    <span className="text-[10px] uppercase tracking-[0.2em] text-primary border border-primary/30 rounded-full px-3 py-1 whitespace-nowrap">
                      {item.status}
                    </span>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* VIP WAITLIST INTEGRADA */}
            <motion.div
              id="waitlist"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mt-20 scroll-mt-28 relative overflow-hidden rounded-[2rem] border border-primary/25 bg-gradient-to-br from-primary/15 via-black to-black p-8 md:p-12"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,115,0,0.22),transparent_38%)]" />
              <div className="absolute inset-0 opacity-[0.035] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:70px_70px]" />

              <div className="relative grid grid-cols-1 lg:grid-cols-[1.4fr_0.8fr] gap-10 items-center">
                <div>
                  <p className="text-primary uppercase tracking-[0.35em] text-xs font-semibold mb-5">
                    Lista VIP BaldShield
                  </p>

                  <h3
                    className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    Entre para o primeiro drop da BaldShield.
                  </h3>

                  <p className="text-secondary text-lg leading-relaxed max-w-2xl">
                    Receba acesso antecipado aos lançamentos, novidades e à
                    primeira rotina premium desenvolvida para homens carecas no
                    Brasil.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                    {[
                      'Acesso antecipado',
                      'Novidades exclusivas',
                      'Primeiros lançamentos',
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 text-sm text-secondary"
                      >
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex lg:justify-end">
                  <a
                    href="/pre-launch"
                    className="group inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-primary text-black font-semibold tracking-wide hover:bg-primary/90 hover:scale-[1.02] transition-all duration-300 shadow-[0_0_45px_rgba(255,115,0,0.28)]"
                  >
                    Quero entrar na lista VIP
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FEATURED PRODUCT */}
        <section id="products" className="py-28 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-primary uppercase tracking-[0.35em] text-sm font-semibold mb-5">
                  Primeiro Drop
                </p>

                <h2
                  className="text-4xl md:text-6xl font-bold mb-8 text-white"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  Controle de brilho instantâneo. Visual limpo. Presença forte.
                </h2>

                <p className="text-lg text-secondary leading-relaxed mb-8">
                  O primeiro lançamento da BaldShield será pensado para um dos
                  maiores incômodos de homens carecas: o brilho excessivo no
                  couro cabeludo ao longo do dia.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                  {benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-secondary">{benefit}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="/pre-launch"
                  className="inline-flex items-center justify-center px-10 py-5 rounded-full bg-primary text-black font-semibold tracking-wide hover:bg-primary/90 hover:scale-[1.02] transition-all duration-300"
                >
                  Quero acesso antecipado
                </a>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />

                <div className="relative bg-gradient-to-br from-card to-black border border-border rounded-[2rem] p-8 md:p-12 min-h-[520px] flex items-center justify-center overflow-hidden before:absolute before:inset-0 before:bg-[linear-gradient(135deg,rgba(255,255,255,0.06),transparent_40%)] before:pointer-events-none">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,115,0,0.12),transparent_45%)]" />

                  <div className="relative text-center">
                    <img
                      src="/escudo.png"
                      alt="Escudo BaldShield"
                      className="w-20 h-20 object-contain mx-auto mb-6 drop-shadow-[0_0_24px_rgba(255,115,0,0.30)]"
                    />

                    <p className="text-base uppercase tracking-[0.45em] text-primary font-semibold mb-8">
                      BALDSHIELD
                    </p>

                    <h3
                      className="text-4xl md:text-5xl font-bold mb-5 text-white"
                      style={{ fontFamily: 'Playfair Display, serif' }}
                    >
                      Matte Wipes
                    </h3>

                    <p className="text-secondary max-w-sm mx-auto">
                      O acabamento matte que faltava na rotina do homem careca.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PREMIUM BENEFITS */}
        <section className="py-28 bg-gradient-to-b from-black to-card border-t border-border/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-primary uppercase tracking-[0.35em] text-sm font-semibold mb-5">
                Performance diária
              </p>

              <h2
                className="text-4xl md:text-5xl font-bold mb-6 text-white"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Menos improviso. Mais cuidado. Mais confiança.
              </h2>

              <p className="text-lg text-secondary leading-relaxed">
                A BaldShield combina estética, proteção e funcionalidade para
                transformar o cuidado da careca em um hábito simples, premium e
                masculino.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Sparkles,
                  title: 'Acabamento matte',
                  description:
                    'Ajuda a reduzir a aparência de brilho excessivo no couro cabeludo.',
                },
                {
                  icon: Shield,
                  title: 'Cuidado específico',
                  description:
                    'Pensado para uma área frequentemente esquecida pela indústria cosmética.',
                },
                {
                  icon: Sun,
                  title: 'Rotina inteligente',
                  description:
                    'Produtos desenvolvidos para calor, exposição, suor e uso diário.',
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-black/60 border border-border rounded-3xl p-8 text-center hover:border-primary/50 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>

                  <h3
                    className="text-2xl font-semibold mb-4 text-white"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {item.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
        <Footer />
      </div>
    </>
  );
};

export default ProductsPage;