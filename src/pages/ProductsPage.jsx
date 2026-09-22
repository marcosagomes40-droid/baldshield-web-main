import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import {
  ArrowDown,
  ArrowRight,
  Droplet,
  Shield,
  Sparkles,
  Sun,
  Wind,
  Activity,
} from 'lucide-react';

import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const ProductsPage = () => {
  const steps = [
    {
      number: '01',
      name: 'CLEAN',
      verb: 'LIMPAR',
      role: 'Limpeza',
      description:
        'Limpa o couro cabeludo exposto e prepara a pele para as próximas etapas do cuidado.',
      icon: Sparkles,
      accent: '#FFB81C',
      textAccent: 'text-[#FFB81C]',
      border: 'border-[#FFB81C]/35',
      href: '/products/clean',
      status: 'DISPONÍVEL',
    },
    {
      number: '02',
      name: 'HYDRATE',
      verb: 'HIDRATAR',
      role: 'Hidratação',
      description:
        'Hidrata o couro cabeludo exposto como parte da rotina de cuidado.',
      icon: Droplet,
      accent: '#008FDA',
      textAccent: 'text-[#008FDA]',
      border: 'border-[#008FDA]/35',
      href: '/products/hydrate',
      status: 'DISPONÍVEL',
    },
    {
      number: '03',
      name: 'DEFENSE',
      verb: 'PROTEGER',
      role: 'Hidratação + proteção',
      description:
        'Combina hidratação e alta proteção para o couro cabeludo exposto.',
      icon: Shield,
      accent: '#B5BD00',
      textAccent: 'text-[#B5BD00]',
      border: 'border-[#B5BD00]/35',
      href: '/products/defense',
      status: 'DISPONÍVEL',
    },
    {
      number: '04',
      name: 'WIPES',
      verb: 'ACOMPANHAR',
      role: 'Cuidado ao longo do dia',
      description:
        'Uma etapa portátil para acompanhar o cuidado do couro cabeludo exposto durante o dia.',
      icon: Droplet,
      accent: '#D4D4D8',
      textAccent: 'text-zinc-300',
      border: 'border-white/15',
      href: null,
      status: 'EM BREVE',
    },
  ];

  const exposures = [
    {
      icon: Sun,
      label: 'SOL',
      text: 'Exposição direta',
    },
    {
      icon: Activity,
      label: 'SUOR',
      text: 'Parte da rotina',
    },
    {
      icon: Droplet,
      label: 'OLEOSIDADE',
      text: 'Equilíbrio diário',
    },
    {
      icon: Wind,
      label: 'RESSECAMENTO',
      text: 'Cuidado contínuo',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Scalp Defense System™ | Produtos BaldShield</title>

        <meta
          name="description"
          content="Conheça o Scalp Defense System™ da BaldShield: quatro etapas para organizar o cuidado do couro cabeludo exposto — CLEAN, HYDRATE, DEFENSE e WIPES."
        />

        <meta
          name="keywords"
          content="BaldShield, Scalp Defense System, couro cabeludo exposto, cuidado para careca, produtos para careca, CLEAN, HYDRATE, DEFENSE, WIPES"
        />

        <link
          rel="canonical"
          href="https://www.baldshield.com/products"
        />
      </Helmet>

      <div className="min-h-screen overflow-hidden bg-black text-foreground">
        <Header />

        {/* =========================================================
            HERO — PRESERVADO / EVOLUÍDO COM MICROINTERAÇÕES
        ========================================================= */}
        <section className="relative flex min-h-[82vh] items-center overflow-hidden border-b border-white/10 bg-black">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_30%,rgba(255,115,0,0.18),transparent_28%),radial-gradient(circle_at_15%_85%,rgba(255,115,0,0.07),transparent_30%)]" />

          <div className="absolute inset-0 opacity-[0.025] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:80px_80px]" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_25%,rgba(0,0,0,0.82)_100%)]" />

          <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 sm:px-8 lg:px-10">
            <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="max-w-3xl">
                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="mb-7 text-xs font-semibold uppercase tracking-[0.5em] text-primary md:text-sm"
                >
                  Scalp Defense System™
                </motion.p>

                <motion.h1
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.75, delay: 0.08 }}
                  className="text-5xl font-bold leading-[1.03] text-white md:text-6xl lg:text-7xl"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  Seu couro cabeludo
                  <span className="block text-primary">
                    está exposto.
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.75, delay: 0.16 }}
                  className="mt-8 max-w-2xl text-xl leading-relaxed text-white/70 md:text-2xl"
                >
                  Agora existe um sistema pensado para cuidar dele.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.75, delay: 0.25 }}
                  className="mt-5 text-sm uppercase tracking-[0.2em] text-white/40"
                >
                  Quatro etapas. Uma rotina. Um novo território de cuidado.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.32 }}
                  className="mt-10 flex flex-col gap-4 sm:flex-row"
                >
                  <a
                    href="#system"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-black transition duration-300 hover:scale-[1.02] hover:bg-primary/90"
                  >
                    Descobrir o sistema
                    <ArrowDown className="h-4 w-4" />
                  </a>

                  <a
                    href="https://loja.baldshield.com"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-8 py-4 text-sm font-semibold text-white transition duration-300 hover:border-primary hover:text-primary"
                  >
                    Ir para a loja
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </motion.div>
              </div>

              {/* THE SYSTEM */}
              <motion.div
                initial={{ opacity: 0, scale: 0.97, y: 24 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.85, delay: 0.2 }}
                className="relative hidden lg:block"
              >
                <div className="absolute inset-10 rounded-full bg-primary/15 blur-[100px]" />

                <div className="relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-gradient-to-br from-white/[0.07] via-white/[0.025] to-black p-8 shadow-[0_30px_120px_rgba(0,0,0,0.72)]">
                  <div className="mb-9 flex items-center justify-between">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-primary">
                        The System
                      </p>

                      <p className="mt-2 text-sm text-white/40">
                        Cuidado em quatro etapas
                      </p>
                    </div>

                    <img
                      src="/escudo.png"
                      alt="BaldShield"
                      className="h-10 w-10 object-contain"
                    />
                  </div>

                  <div className="space-y-3">
                    {steps.map((step, index) => {
                      const systemRow = (
                        <>
                          <span
                            className={`text-xs font-semibold ${step.textAccent}`}
                          >
                            {step.number}
                          </span>

                          <step.icon
                            className={`h-5 w-5 ${step.textAccent}`}
                          />

                          <div className="min-w-0 flex-1">
                            <p className="text-sm font-semibold tracking-[0.2em] text-white">
                              {step.name}
                            </p>

                            <p className="mt-1 text-xs text-white/40">
                              {step.role}
                            </p>
                          </div>

                          {step.href ? (
                            <ArrowRight
                              className={`h-4 w-4 ${step.textAccent} opacity-60 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100`}
                            />
                          ) : (
                            <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-white/25">
                              Em breve
                            </span>
                          )}
                        </>
                      );

                      return (
                        <motion.div
                          key={step.name}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.5,
                            delay: 0.35 + index * 0.1,
                          }}
                        >
                          {step.href ? (
                            <a
                              href={step.href}
                              aria-label={`Conhecer ${step.name}`}
                              className={`group flex items-center gap-5 rounded-2xl border ${step.border} bg-gradient-to-r from-white/[0.035] to-transparent px-5 py-4 transition duration-300 hover:-translate-y-0.5 hover:bg-white/[0.055]`}
                            >
                              {systemRow}
                            </a>
                          ) : (
                            <div
                              className={`flex items-center gap-5 rounded-2xl border ${step.border} bg-white/[0.02] px-5 py-4`}
                            >
                              {systemRow}
                            </div>
                          )}
                        </motion.div>
                      );
                    })}
                  </div>

                  <div className="mt-8 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

                  <p className="mt-6 text-center text-xs uppercase tracking-[0.28em] text-white/35">
                    Limpar · Hidratar · Proteger · Acompanhar
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* =========================================================
            MANIFESTO / PONTO DE PARTIDA
        ========================================================= */}
        <section className="relative overflow-hidden border-b border-white/5 bg-black py-24 md:py-32">
          <div className="absolute left-1/2 top-1/2 h-[450px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.045] blur-[130px]" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.75 }}
            className="relative mx-auto max-w-5xl px-6 text-center"
          >
            <div className="mb-6 flex w-full justify-center">
              <p className="m-0 text-center text-xs font-bold uppercase tracking-[0.45em] text-primary">
                O PONTO DE PARTIDA
              </p>
            </div>

            <h2
              className="text-4xl font-bold leading-[1.08] text-white md:text-6xl lg:text-7xl"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              O cabelo saiu de cena.
              <span className="mt-2 block text-white/40">
                O cuidado não pode sair junto.
              </span>
            </h2>

            <p className="mx-auto mt-9 max-w-3xl text-base leading-relaxed text-white/55 md:text-lg">
              Quando o couro cabeludo fica exposto, ele passa a fazer parte
              direta da rotina. Sol, calor, suor, oleosidade e ressecamento
              deixam de ser detalhes.
            </p>

            <div className="mx-auto mt-12 h-px max-w-xl bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

            <p className="mx-auto mt-10 max-w-3xl text-xl font-medium leading-relaxed text-white md:text-2xl">
              A BaldShield transforma essa realidade em uma
              <span className="text-primary"> lógica de cuidado.</span>
            </p>
          </motion.div>
        </section>

        {/* =========================================================
            EXPOSIÇÃO — NOVA SEÇÃO
        ========================================================= */}
        <section className="relative bg-[#080808] py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
            <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
              <motion.div
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65 }}
              >
                <p className="mb-5 text-xs font-semibold uppercase tracking-[0.4em] text-primary">
                  Exposição é rotina
                </p>

                <h2
                  className="text-4xl font-bold leading-tight text-white md:text-5xl"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  O ambiente muda.
                  <span className="block text-white/45">
                    A pele sente.
                  </span>
                </h2>
              </motion.div>

              <div className="grid grid-cols-2 gap-px overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 md:grid-cols-4">
                {exposures.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.08,
                    }}
                    className="group flex min-h-[190px] flex-col items-center justify-center bg-[#090909] p-6 text-center transition duration-300 hover:bg-white/[0.045] md:p-7"
                  >
                    <item.icon className="mb-6 h-5 w-5 text-primary transition duration-300 group-hover:scale-110" />

                    <p className="text-[10px] font-semibold tracking-[0.22em] text-white">
                      {item.label}
                    </p>

                    <p className="mt-2 text-xs text-white/35">
                      {item.text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            SYSTEM INTRO
        ========================================================= */}
        <section
          id="system"
          className="relative scroll-mt-24 overflow-hidden bg-black pt-28 md:pt-36"
        >
          <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mb-20 grid gap-8 lg:grid-cols-[1fr_0.75fr] lg:items-end"
            >
              <div>
                <p className="mb-6 text-xs font-semibold uppercase tracking-[0.45em] text-primary">
                  Scalp Defense System™
                </p>

                <h2
                  className="max-w-4xl text-5xl font-bold leading-[1.02] text-white md:text-7xl"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  Não são apenas produtos.
                  <span className="block text-white/35">
                    É uma sequência.
                  </span>
                </h2>
              </div>

              <p className="max-w-xl text-base leading-relaxed text-white/50 lg:pb-2">
                Cada etapa tem uma função dentro da rotina. A lógica é simples:
                limpar, hidratar, proteger e acompanhar o couro cabeludo
                exposto ao longo do dia.
              </p>
            </motion.div>
          </div>

          {/* =======================================================
              PRODUCT STORIES — NOVO
          ======================================================= */}
          <div>
            {steps.map((step, index) => {
              const isAvailable = Boolean(step.href);

              const content = (
                <div className="relative mx-auto grid min-h-[520px] max-w-7xl items-center gap-10 px-6 py-16 sm:px-8 md:py-20 lg:grid-cols-[0.72fr_1.28fr] lg:px-10">
                  <div className="relative z-10">
                    <div className="flex items-center gap-4">
                      <span
                        className={`text-xs font-bold tracking-[0.25em] ${step.textAccent}`}
                      >
                        STEP {step.number}
                      </span>

                      <span className="h-px w-12 bg-white/15" />

                      <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/30">
                        {step.status}
                      </span>
                    </div>

                    <div
                      className="mt-10 flex h-16 w-16 items-center justify-center rounded-2xl border"
                      style={{
                        borderColor: `${step.accent}45`,
                        background: `${step.accent}0D`,
                      }}
                    >
                      <step.icon
                        className="h-7 w-7"
                        style={{ color: step.accent }}
                      />
                    </div>

                    <p
                      className="mt-8 text-xs font-semibold uppercase tracking-[0.35em]"
                      style={{ color: step.accent }}
                    >
                      {step.verb}
                    </p>
                  </div>

                  <div className="relative z-10">
                    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-white/35">
                      {step.role}
                    </p>

                    <h3
                      className="text-6xl font-bold leading-none text-white sm:text-7xl md:text-8xl lg:text-[7rem]"
                      style={{ fontFamily: 'Playfair Display, serif' }}
                    >
                      {step.name}
                    </h3>

                    <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/55 md:text-xl">
                      {step.description}
                    </p>

                    {isAvailable ? (
                      <div className="mt-10 flex flex-wrap gap-4">
                        <span
                          className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.14em]"
                          style={{ color: step.accent }}
                        >
                          Conhecer {step.name}
                          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
                        </span>
                      </div>
                    ) : (
                      <div className="mt-10 inline-flex rounded-full border border-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/35">
                        Em desenvolvimento
                      </div>
                    )}
                  </div>

                  <div
                    className="pointer-events-none absolute -right-20 top-1/2 h-[360px] w-[360px] -translate-y-1/2 rounded-full opacity-10 blur-[110px]"
                    style={{ backgroundColor: step.accent }}
                  />

                  <div
                    className="pointer-events-none absolute -right-4 bottom-[-60px] select-none text-[15rem] font-bold leading-none opacity-[0.025] md:text-[22rem]"
                    style={{
                      fontFamily: 'Playfair Display, serif',
                      color: step.accent,
                    }}
                  >
                    {step.number}
                  </div>
                </div>
              );

              return (
                <motion.div
                  key={step.name}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.7 }}
                  className={`group relative overflow-hidden border-t ${step.border} ${
                    index === steps.length - 1
                      ? 'border-b border-b-white/10'
                      : ''
                  }`}
                  style={{
                    background: `linear-gradient(110deg, #050505 0%, #050505 55%, ${step.accent}0B 100%)`,
                  }}
                >
                  {isAvailable ? (
                    <a
                      href={step.href}
                      aria-label={`Conhecer ${step.name}`}
                      className="block transition duration-500 hover:bg-white/[0.012]"
                    >
                      {content}
                    </a>
                  ) : (
                    content
                  )}
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* =========================================================
            ROTINA — SYSTEM FLOW
        ========================================================= */}
        <section className="relative overflow-hidden bg-[#080808] py-28 md:py-36">
          <div className="absolute inset-0 opacity-[0.018] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:70px_70px]" />

          <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="mx-auto mb-16 max-w-4xl text-center"
            >
              <div className="mb-6 flex w-full justify-center">
                <p className="m-0 text-center text-xs font-semibold uppercase tracking-[0.45em] text-primary">
                  A ROTINA
                </p>
              </div>

              <h2
                className="text-4xl font-bold leading-tight text-white md:text-6xl"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Um sistema só funciona
                <span className="block text-primary">
                  quando cabe na vida real.
                </span>
              </h2>

              <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-white/50">
                Por isso, o Scalp Defense System™ organiza o cuidado em uma
                sequência fácil de entender e incorporar à rotina.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="overflow-hidden rounded-[2.5rem] border border-white/10 bg-black/80 shadow-[0_30px_100px_rgba(0,0,0,0.45)]"
            >
              <div className="border-b border-white/10 px-7 py-6 md:px-10">
                <div className="flex items-center justify-between">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-white/35">
                    Daily protocol
                  </p>

                  <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-primary">
                    SDS™
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-4">
                {steps.map((step, index) => (
                  <div
                    key={step.name}
                    className={`relative p-7 md:min-h-[270px] md:p-8 ${
                      index !== steps.length - 1
                        ? 'border-b border-white/10 md:border-b-0 md:border-r'
                        : ''
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className={`text-xs font-bold ${step.textAccent}`}
                      >
                        {step.number}
                      </span>

                      <step.icon
                        className={`h-5 w-5 ${step.textAccent}`}
                      />
                    </div>

                    <p className="mt-12 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/30">
                      {step.verb}
                    </p>

                    <p className="mt-3 text-xl font-bold tracking-[0.08em] text-white">
                      {step.name}
                    </p>

                    <p className="mt-3 text-sm leading-relaxed text-white/40">
                      {step.role}
                    </p>

                    {index < steps.length - 1 && (
                      <div className="absolute -right-3 top-1/2 z-10 hidden h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black md:flex">
                        <ArrowRight className="h-3 w-3 text-white/30" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

            <p className="mt-8 text-center text-xs uppercase tracking-[0.3em] text-white/25">
              CLEAN → HYDRATE → DEFENSE → WIPES
            </p>
          </div>
        </section>

        {/* =========================================================
            BRAND STATEMENT
        ========================================================= */}
        <section className="relative overflow-hidden border-y border-white/10 bg-black py-28 md:py-40">
          <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.07] blur-[150px]" />

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.75 }}
            className="relative mx-auto max-w-6xl px-6 text-center"
          >
            <img
              src="/escudo.png"
              alt=""
              aria-hidden="true"
              className="mx-auto mb-10 h-14 w-14 object-contain opacity-90"
            />

            <div className="mb-7 flex w-full justify-center">
              <p className="m-0 text-center text-xs font-semibold uppercase tracking-[0.5em] text-primary">
                UM NOVO TERRITÓRIO DE CUIDADO
              </p>
            </div>

            <h2
              className="text-5xl font-bold leading-[1.04] text-white md:text-7xl lg:text-8xl"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Não é sobre ter cabelo.
              <span className="mt-2 block text-white/35">
                É sobre cuidar da pele que ficou exposta.
              </span>
            </h2>
          </motion.div>
        </section>

        {/* =========================================================
            CTA FINAL — CUSTOM
        ========================================================= */}
        <section className="relative overflow-hidden bg-black py-28 md:py-36">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(255,115,0,0.14),transparent_38%)]" />

          <div className="relative mx-auto max-w-5xl px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="mb-6 flex w-full justify-center">
                <p className="m-0 text-center text-xs font-semibold uppercase tracking-[0.45em] text-primary">
                  SCALP DEFENSE SYSTEM™
                </p>
              </div>

              <h2
                className="text-5xl font-bold leading-tight text-white md:text-7xl"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Seu couro cabeludo
                <span className="block text-primary">
                  merece uma rotina própria.
                </span>
              </h2>

              <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-white/50">
                Conheça os produtos BaldShield e comece a construir uma nova
                forma de cuidar do couro cabeludo exposto.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href="https://loja.baldshield.com"
                   target="_blank"
                   rel="noopener noreferrer"
                  className="group inline-flex min-w-[220px] items-center justify-center gap-3 rounded-full bg-primary px-8 py-4 text-sm font-bold text-black transition duration-300 hover:scale-[1.03] hover:bg-primary/90"
                >
                  Ir para a loja
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>

                <a
                  href="#system"
                  className="inline-flex min-w-[220px] items-center justify-center gap-3 rounded-full border border-white/15 px-8 py-4 text-sm font-semibold text-white transition duration-300 hover:border-white/35"
                >
                  Rever o sistema
                  <ArrowDown className="h-4 w-4" />
                </a>
              </div>

              <div className="mx-auto mt-16 h-px max-w-sm bg-gradient-to-r from-transparent via-white/15 to-transparent" />

              <p className="mt-9 text-[10px] font-semibold uppercase tracking-[0.45em] text-white/25">
                Confidence for the bold
              </p>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default ProductsPage;