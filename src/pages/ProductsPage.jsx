import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight, Droplet, Shield, Sparkles, Sun } from 'lucide-react';

import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import CTASection from '@/components/CTASection.jsx';

const ProductsPage = () => {
  const steps = [
    {
      number: '01',
      name: 'CLEAN',
      role: 'Limpeza',
      description: 'Limpa o couro cabeludo exposto e prepara a pele para as próximas etapas do cuidado.',
      icon: Sparkles,
      accent: 'text-[#FFB81C]',
      border: 'border-[#FFB81C]/40',
      glow: 'from-[#FFB81C]/15',
    },
    {
      number: '02',
      name: 'HYDRATE',
      role: 'Hidratação',
      description: 'Hidrata o couro cabeludo exposto como parte da rotina de cuidado.',
      icon: Droplet,
      accent: 'text-[#008FDA]',
      border: 'border-[#008FDA]/40',
      glow: 'from-[#008FDA]/15',
    },
    {
      number: '03',
      name: 'DEFENSE',
      role: 'Hidratação + proteção',
      description: 'Combina hidratação e alta proteção para o couro cabeludo exposto.',
      icon: Shield,
      accent: 'text-[#B5BD00]',
      border: 'border-[#B5BD00]/40',
      glow: 'from-[#B5BD00]/15',
    },
    {
      number: '04',
      name: 'WIPES',
      role: 'Cuidado ao longo do dia',
      description: 'Uma etapa portátil para acompanhar o cuidado do couro cabeludo exposto durante o dia.',
      icon: Droplet,
      accent: 'text-zinc-300',
      border: 'border-white/15',
      glow: 'from-white/[0.05]',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Scalp Defense System™ | Produtos BaldShield</title>
        <meta name="description" content="Conheça o Scalp Defense System™ da BaldShield: quatro etapas para organizar o cuidado do couro cabeludo exposto — CLEAN, HYDRATE, DEFENSE e WIPES." />
        <meta name="keywords" content="BaldShield, Scalp Defense System, couro cabeludo exposto, cuidado para careca, produtos para careca, CLEAN, HYDRATE, DEFENSE, WIPES" />
        <link rel="canonical" href="https://www.baldshield.com/products" />
      </Helmet>

      <div className="min-h-screen overflow-hidden bg-black text-foreground">
        <Header />

        <section className="relative flex min-h-[82vh] items-center overflow-hidden border-b border-white/10 bg-black">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_30%,rgba(255,115,0,0.18),transparent_28%),radial-gradient(circle_at_15%_85%,rgba(255,115,0,0.07),transparent_30%)]" />
          <div className="absolute inset-0 opacity-[0.025] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:80px_80px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_25%,rgba(0,0,0,0.82)_100%)]" />

          <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 sm:px-8 lg:px-10">
            <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="max-w-3xl">
                <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-7 text-xs font-semibold uppercase tracking-[0.5em] text-primary md:text-sm">
                  Scalp Defense System™
                </motion.p>
                <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.08 }} className="text-5xl font-bold leading-[1.03] text-white md:text-6xl lg:text-7xl" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Seu couro cabeludo
                  <span className="block text-primary">está exposto.</span>
                </motion.h1>
                <motion.p initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.16 }} className="mt-8 max-w-2xl text-xl leading-relaxed text-white/70 md:text-2xl">
                  Agora existe um sistema pensado para cuidar dele.
                </motion.p>
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.75, delay: 0.25 }} className="mt-5 text-sm uppercase tracking-[0.2em] text-white/40">
                  Quatro etapas. Uma rotina. Um novo território de cuidado.
                </motion.p>
                <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.32 }} className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <a href="#system" className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-black transition hover:bg-primary/90">
                    Descobrir o sistema <ArrowDown className="h-4 w-4" />
                  </a>
                  <a href="https://loja.baldshield.com" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-8 py-4 text-sm font-semibold text-white transition hover:border-primary hover:text-primary">
                    Ir para a loja <ArrowRight className="h-4 w-4" />
                  </a>
                </motion.div>
              </div>

              <motion.div initial={{ opacity: 0, scale: 0.97, y: 24 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.85, delay: 0.2 }} className="relative hidden lg:block">
                <div className="absolute inset-10 rounded-full bg-primary/15 blur-[100px]" />
                <div className="relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-gradient-to-br from-white/[0.07] via-white/[0.025] to-black p-8 shadow-[0_30px_120px_rgba(0,0,0,0.72)]">
                  <div className="mb-9 flex items-center justify-between">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-primary">The System</p>
                      <p className="mt-2 text-sm text-white/40">Cuidado em quatro etapas</p>
                    </div>
                    <img src="/escudo.png" alt="BaldShield" className="h-10 w-10 object-contain" />
                  </div>
                  <div className="space-y-3">
                    {steps.map((step, index) => (
                      <motion.div key={step.name} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.35 + index * 0.1 }} className={`group flex items-center gap-5 rounded-2xl border ${step.border} bg-gradient-to-r ${step.glow} to-transparent px-5 py-4`}>
                        <span className={`text-xs font-semibold ${step.accent}`}>{step.number}</span>
                        <step.icon className={`h-5 w-5 ${step.accent}`} />
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-semibold tracking-[0.2em] text-white">{step.name}</p>
                          <p className="mt-1 text-xs text-white/40">{step.role}</p>
                        </div>
                        {index < steps.length - 1 && <span className="text-xs text-white/20">↓</span>}
                      </motion.div>
                    ))}
                  </div>
                  <div className="mt-8 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
                  <p className="mt-6 text-center text-xs uppercase tracking-[0.28em] text-white/35">Limpar · Hidratar · Proteger · Acompanhar</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="border-b border-white/5 bg-black py-16 md:py-20">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }} className="mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
            <p className="mb-5 w-full text-center text-xs font-semibold uppercase tracking-[0.4em] text-primary">O ponto de partida</p>
            <h2 className="text-3xl font-bold leading-tight text-white md:text-5xl" style={{ fontFamily: 'Playfair Display, serif' }}>
              Quando o cabelo deixa de ser cobertura,
              <span className="block text-white/55">o couro cabeludo passa a viver exposto.</span>
            </h2>
            <p className="mx-auto mt-7 max-w-3xl text-base leading-relaxed text-white/60 md:text-lg">
              Sol, calor, suor, oleosidade e ressecamento entram na rotina. Quem é careca conhece essa realidade. A BaldShield organiza esse cuidado em um sistema simples, específico e contínuo.
            </p>
          </motion.div>
        </section>

        <section id="system" className="scroll-mt-24 bg-gradient-to-b from-black via-zinc-950 to-black py-24 md:py-28">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
            <div className="mb-14 max-w-3xl">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.4em] text-primary">Scalp Defense System™</p>
              <h2 className="text-4xl font-bold text-white md:text-6xl" style={{ fontFamily: 'Playfair Display, serif' }}>
                Quatro passos.
                <span className="block text-white/50">Uma lógica de cuidado.</span>
              </h2>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {steps.map((step, index) => (
                <motion.article key={step.name} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: index * 0.07 }} className={`group relative overflow-hidden rounded-[2rem] border ${step.border} bg-gradient-to-b ${step.glow} via-black/70 to-black p-7 transition duration-300 hover:-translate-y-1`}>
                  <div className="absolute right-5 top-2 text-[5rem] font-bold leading-none text-white/[0.035]">{step.number}</div>
                  <div className="relative">
                    <div className="mb-10 flex items-center justify-between">
                      <span className={`text-xs font-semibold tracking-[0.25em] ${step.accent}`}>{step.number}</span>
                      <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/50">
                        <step.icon className={`h-5 w-5 ${step.accent}`} />
                      </div>
                    </div>
                    <p className={`mb-3 flex min-h-[2.5rem] items-center text-xs font-semibold uppercase tracking-[0.22em] ${step.accent}`}>{step.role}</p>
                    <h3 className="text-3xl font-bold text-white" style={{ fontFamily: 'Playfair Display, serif' }}>{step.name}</h3>
                    <p className="mt-5 text-sm leading-relaxed text-white/55">{step.description}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-white/5 bg-black py-20 md:py-24">
          <div className="mx-auto max-w-6xl px-6 sm:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <p className="mb-5 text-xs font-semibold uppercase tracking-[0.4em] text-primary">A rotina</p>
                <h2 className="text-4xl font-bold leading-tight text-white md:text-5xl" style={{ fontFamily: 'Playfair Display, serif' }}>
                  O sistema precisa ser
                  <span className="block text-primary">fácil de entender.</span>
                </h2>
                <p className="mt-6 max-w-lg text-base leading-relaxed text-white/55">
                  Cada etapa tem uma função. Juntas, elas transformam improviso em uma rotina organizada de cuidado.
                </p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }} className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 md:p-8">
                <div className="border-b border-white/10 pb-7">
                  <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.35em] text-white/35">Comece o dia</p>
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                    {steps.slice(0, 3).map((step, index) => (
                      <React.Fragment key={step.name}>
                        <div className="flex flex-1 items-center gap-3 rounded-xl border border-white/10 bg-black/50 px-4 py-4">
                          <span className={`text-xs font-semibold ${step.accent}`}>{step.number}</span>
                          <span className="text-sm font-semibold tracking-[0.15em] text-white">{step.name}</span>
                        </div>
                        {index < 2 && <ArrowRight className="hidden h-4 w-4 flex-shrink-0 text-primary/50 sm:block" />}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
                <div className="pt-7">
                  <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.35em] text-white/35">Ao longo do dia</p>
                  <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/50 px-4 py-4 sm:max-w-[260px]">
                    <span className="text-xs font-semibold text-white/60">04</span>
                    <span className="text-sm font-semibold tracking-[0.15em] text-white">WIPES</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <CTASection
          buttonText="Ir para a loja"
          buttonTo="https://loja.baldshield.com"
          external
        />
        <Footer />
      </div>
    </>
  );
};

export default ProductsPage;
