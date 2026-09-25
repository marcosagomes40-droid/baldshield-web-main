import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import {
  ArrowDown,
  ArrowRight,
  Droplet,
  Shield,
  Sparkles,
  
} from 'lucide-react';

import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const ProductsPage = () => {
  const steps = [
    {
      number: '01',
      name: 'CLEAN',
      verb: 'LIMPAR',
      icon: Sparkles,
      accent: '#FFB81C',
      textAccent: 'text-[#FFB81C]',
      href: '/products/clean',
      
    },
    {
      number: '02',
      name: 'HYDRATE',
      verb: 'HIDRATAR',
      role: 'Hidratação',
      icon: Droplet,
      accent: '#008FDA',
      textAccent: 'text-[#008FDA]',
      href: '/products/hydrate',
    },
    {
      number: '03',
      name: 'DEFENSE',
      verb: 'PROTEGER',
      role: 'Hidratação + proteção',
      icon: Shield,
      accent: '#B5BD00',
      textAccent: 'text-[#B5BD00]',
      href: '/products/defense',     
    },
    {
      number: '04',
      name: 'WIPES',
      verb: 'ACOMPANHAR',
      icon: Droplet,
      accent: '#D4D4D8',
      textAccent: 'text-zinc-300',
      href: null,
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
            HERO V2 — MOCKUP PRODUCTS APROVADO
        ========================================================= */}
        <section className="relative min-h-[820px] overflow-hidden border-b border-white/10 bg-black lg:min-h-[calc(100vh-72px)]">
          {/* Atmosfera */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_42%,rgba(255,115,0,0.12),transparent_27%),radial-gradient(circle_at_12%_78%,rgba(255,115,0,0.06),transparent_28%)]" />

          <div className="absolute inset-0 opacity-[0.022] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:80px_80px]" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_18%,rgba(0,0,0,0.88)_100%)]" />

          {/* Imagem central */}
          <motion.div
            initial={{ opacity: 0, scale: 1.035 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.15, ease: 'easeOut' }}
            className="pointer-events-none absolute inset-x-0 bottom-0 top-[34%] z-[1] md:top-[20%] lg:left-[22%] lg:right-[27%] lg:top-[5%] lg:bottom-0"
          >
            <img
              src="/baldshield-products-hero-man-v2.webp"
              alt="Homem com couro cabeludo exposto representando o universo BaldShield"
              className="h-full w-full object-contain object-[52%_center] opacity-75 sm:object-[55%_center] lg:object-contain lg:object-center lg:opacity-90"
              style={{
                WebkitMaskImage:
                  'linear-gradient(to right, black 0%, black 82%, transparent 100%)',
                maskImage:
                  'linear-gradient(to right, black 0%, black 82%, transparent 100%)',
              }}
            />

            {/* Fusão da fotografia com o fundo */}
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/15 to-black/75 lg:from-black lg:via-transparent lg:to-black" />

            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black" />

            <div className="absolute inset-y-0 left-0 w-[38%] bg-gradient-to-r from-black to-transparent" />

            <div className="absolute inset-y-0 right-0 w-[3%] bg-gradient-to-l from-black to-transparent" />
          </motion.div>

          {/* brilho no personagem */}
          <div className="pointer-events-none absolute left-[48%] top-[25%] z-[2] hidden h-[420px] w-[420px] rounded-full bg-primary/[0.06] blur-[120px] lg:block" />

          {/* Conteúdo principal */}
          <div className="relative z-10 mx-auto flex min-h-[900px] w-full max-w-[1500px] items-center px-6 pb-20 pt-28 sm:px-8 lg:min-h-[calc(100vh-72px)] lg:px-12 xl:px-16">
            <div className="grid w-full items-center gap-16 lg:grid-cols-[0.92fr_0.78fr_1fr] xl:grid-cols-[0.9fr_0.82fr_1.08fr]">

              {/* =====================================================
                  COLUNA ESQUERDA — POSICIONAMENTO
              ===================================================== */}
              <motion.div
                initial={{ opacity: 0, x: -28 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.75, delay: 0.12 }}
                className="relative z-20 max-w-xl"
              >
                <p className="mb-7 text-[10px] font-bold uppercase tracking-[0.5em] text-primary sm:text-xs">
                  SCALP DEFENSE SYSTEM™
                </p>

                <h1
                  className="text-[3.15rem] font-bold leading-[0.98] text-white sm:text-6xl lg:text-[4.2rem] xl:text-[4.75rem]"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  Seu couro cabeludo
                  <span className="mt-1 block text-primary">
                    está exposto.
                  </span>
                </h1>

                <p className="mt-8 max-w-lg text-lg leading-relaxed text-white/70 md:text-xl">
                  Agora existe um sistema pensado para cuidar dele.
                </p>

                <p className="mt-5 max-w-md text-xs font-medium uppercase leading-relaxed tracking-[0.22em] text-white/35">
                  Quatro etapas. Uma rotina.
                  <span className="block">
                    Um novo território de cuidado.
                  </span>
                </p>

                <div className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4">
                  <a
                    href="#system"
                    className="group inline-flex h-[58px] w-full sm:w-auto sm:min-w-[220px] items-center justify-between gap-5 whitespace-nowrap rounded-full bg-primary px-7 text-[10px] font-bold uppercase tracking-[0.12em] text-black transition duration-300 hover:scale-[1.02] hover:bg-primary/90"
                  >
                    <span>DESCOBRIR O SISTEMA</span>
                    <ArrowDown className="h-3.5 w-3.5 shrink-0 transition-transform duration-300 group-hover:translate-y-1" />
                  </a>

                  <a
                    href="https://loja.baldshield.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex h-[58px] w-full sm:w-auto sm:min-w-[190px] items-center justify-between gap-5 whitespace-nowrap rounded-full border border-white/25 px-7 text-[10px] font-bold uppercase tracking-[0.12em] text-white transition duration-300 hover:border-primary/70 hover:text-primary"
                  >
                    <span>IR PARA A LOJA</span>
                    <ArrowRight className="h-3.5 w-3.5 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </div>

                <div className="mt-12 flex items-center gap-4">
                  <div className="h-px w-10 bg-primary/60" />

                  <p className="text-[9px] font-semibold uppercase tracking-[0.38em] text-white/30">
                    Confidence for the Bold
                  </p>
                </div>
              </motion.div>

              {/* Coluna física do personagem.
                  A fotografia está em position absolute para permitir
                  integração cinematográfica sem quebrar o grid. */}
              <div
                className="pointer-events-none hidden min-h-[620px] lg:block"
                aria-hidden="true"
              />

              {/* =====================================================
                  COLUNA DIREITA — SDS ORBITAL
              ===================================================== */}
              <motion.div
                initial={{ opacity: 0, x: 30, scale: 0.96 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.9, delay: 0.28 }}
                className="relative z-20 mx-auto w-full max-w-[520px]"
              >
                

                {/* MOBILE/TABLET — fluxo linear premium */}
                <div className="grid gap-3 lg:hidden">
                  {steps.map((step, index) => (
                    <div
                      key={step.name}
                      className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/65 px-5 py-4 backdrop-blur-md"
                    >
                      <div
                        className="absolute inset-y-0 left-0 w-[2px]"
                        style={{ backgroundColor: step.accent }}
                      />

                      <div className="flex items-center gap-4">
                        <span
                          className="text-xs font-bold"
                          style={{ color: step.accent }}
                        >
                          {step.number}
                        </span>

                        <div
                          className="flex h-9 w-9 items-center justify-center rounded-full border"
                          style={{
                            borderColor: `${step.accent}55`,
                            backgroundColor: `${step.accent}12`,
                          }}
                        >
                          <step.icon
                            className="h-4 w-4"
                            style={{ color: step.accent }}
                          />
                        </div>

                        <div className="min-w-0 flex-1">
                          <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-white/35">
                            {step.verb}
                          </p>

                          <p className="mt-1 text-sm font-bold tracking-[0.14em] text-white">
                            {step.name}
                          </p>
                        </div>

                        {step.href ? (
                          <a
                            href={step.href}
                            aria-label={`Conhecer ${step.name}`}
                            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/50 transition hover:border-white/25 hover:text-white"
                          >
                            <ArrowRight className="h-4 w-4" />
                          </a>
                        ) : (
                          <span className="text-[8px] font-bold uppercase tracking-[0.14em] text-white/25">
                            Em breve
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* DESKTOP — SISTEMA ORBITAL */}
               <div className="relative mx-auto hidden aspect-square w-full max-w-[420px] lg:translate-x-10 lg:-translate-y-10 lg:block">

                  {/* halos */}
                  <div className="absolute inset-[7%] rounded-full border border-white/[0.06]" />

                  <div className="absolute inset-[18%] rounded-full border border-primary/20 shadow-[0_0_80px_rgba(255,115,0,0.05)]" />

                  <div className="absolute inset-[30%] rounded-full border border-white/[0.07]" />

                  {/* linhas do sistema */}
                  <div className="absolute left-1/2 top-[15%] h-[70%] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/10 to-transparent" />

                  <div className="absolute left-[15%] top-1/2 h-px w-[70%] -translate-y-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                  {/* glow central */}
                  <div className="absolute left-1/2 top-1/2 h-[210px] w-[210px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.11] blur-[70px]" />

                  {/* NÚCLEO BALDSHIELD */}
                  <div className="absolute left-1/2 top-1/2 z-20 flex h-[150px] w-[150px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-primary/30 bg-black/80 shadow-[0_0_70px_rgba(255,115,0,0.13)] backdrop-blur-xl">
                    <div className="absolute inset-3 rounded-full border border-white/[0.07]" />

                    <img
                      src="/escudo.png"
                      alt="BaldShield"
                      className="relative z-10 h-[82px] w-[82px] object-contain drop-shadow-[0_0_20px_rgba(255,115,0,0.18)]"
                    />
                  </div>

                  {/* 01 — CLEAN */}
                  <a
                    href="/products/clean"
                    aria-label="Conhecer CLEAN"
                    className="group absolute left-[2%] top-[9%] z-30 w-[150px]"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#FFB81C]/40 bg-[#FFB81C]/10 text-[#FFB81C] transition duration-300 group-hover:scale-110 group-hover:bg-[#FFB81C]/15">
                        <Sparkles className="h-4 w-4" />
                      </div>

                      <div>
                        <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#FFB81C]">
                          01 · LIMPAR
                        </p>

                        <p className="mt-1 text-sm font-bold tracking-[0.16em] text-white">
                          CLEAN
                        </p>
                      </div>
                    </div>
                  </a>

                  {/* 02 — HYDRATE */}
                  <a
                    href="/products/hydrate"
                    aria-label="Conhecer HYDRATE"
                    className="group absolute right-[0%] top-[12%] z-30 w-[165px]"
                  >
                    <div className="flex items-center justify-end gap-3 text-right">
                      <div>
                        <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#008FDA]">
                          02 · HIDRATAR
                        </p>

                        <p className="mt-1 text-sm font-bold tracking-[0.16em] text-white">
                          HYDRATE
                        </p>
                      </div>

                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#008FDA]/40 bg-[#008FDA]/10 text-[#008FDA] transition duration-300 group-hover:scale-110 group-hover:bg-[#008FDA]/15">
                        <Droplet className="h-4 w-4" />
                      </div>
                    </div>
                  </a>

                  {/* 03 — DEFENSE */}
                  <a
                    href="/products/defense"
                    aria-label="Conhecer DEFENSE"
                    className="group absolute bottom-[10%] right-[0%] z-30 w-[170px]"
                  >
                    <div className="flex items-center justify-end gap-3 text-right">
                      <div>
                        <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#B5BD00]">
                          03 · PROTEGER
                        </p>

                        <p className="mt-1 text-sm font-bold tracking-[0.16em] text-white">
                          DEFENSE
                        </p>
                      </div>

                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#B5BD00]/40 bg-[#B5BD00]/10 text-[#B5BD00] transition duration-300 group-hover:scale-110 group-hover:bg-[#B5BD00]/15">
                        <Shield className="h-4 w-4" />
                      </div>
                    </div>
                  </a>

                  {/* 04 — WIPES */}
                  <div className="absolute bottom-[10%] left-[1%] z-30 w-[175px]">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-zinc-300/20 bg-white/[0.04] text-zinc-300">
                        <Droplet className="h-4 w-4" />
                      </div>

                      <div>
                        <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-zinc-400">
                          04 · ACOMPANHAR
                        </p>

                        <p className="mt-1 text-sm font-bold tracking-[0.16em] text-white">
                          WIPES
                        </p>

                        <p className="mt-1 text-[8px] font-semibold uppercase tracking-[0.16em] text-white/25">
                          Em breve
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* pontos orbitais decorativos */}
                  <div className="absolute left-[22%] top-[23%] h-1.5 w-1.5 rounded-full bg-[#FFB81C] shadow-[0_0_12px_#FFB81C]" />

                  <div className="absolute right-[22%] top-[25%] h-1.5 w-1.5 rounded-full bg-[#008FDA] shadow-[0_0_12px_#008FDA]" />

                  <div className="absolute bottom-[23%] right-[23%] h-1.5 w-1.5 rounded-full bg-[#B5BD00] shadow-[0_0_12px_#B5BD00]" />

                  <div className="absolute bottom-[23%] left-[23%] h-1.5 w-1.5 rounded-full bg-zinc-300 shadow-[0_0_10px_rgba(255,255,255,0.45)]" />
                </div>

                <p className="mt-7 text-center text-[9px] font-semibold uppercase tracking-[0.32em] text-white/25 lg:text-right">
                  LIMPAR · HIDRATAR · PROTEGER · ACOMPANHAR
                </p>
              </motion.div>
            </div>
          </div>

          {/* scroll cue */}
          <motion.a
            href="#system"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="absolute bottom-7 left-1/2 z-30 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/25 transition hover:text-primary md:flex"
            aria-label="Explorar Scalp Defense System"
          >
            <span className="text-[8px] font-semibold uppercase tracking-[0.32em]">
              Explorar
            </span>

            <ArrowDown className="h-4 w-4 animate-bounce" />
          </motion.a>
        </section>
        
        {/* =========================================================
              PRODUTOS — SCALP DEFENSE SYSTEM
          ========================================================= */}
          <section className="relative overflow-hidden bg-black py-8 md:py-12">
              <div className="mx-auto grid w-full max-w-[1360px] grid-cols-1 overflow-hidden border border-white/10 md:grid-cols-2 lg:grid-cols-4">

              {/* CLEAN */}
              <a
                href="/products/clean"
                className="group relative min-h-[620px] lg:min-h-[620px] lg:aspect-auto overflow-hidden border-b border-white/10 md:border-r lg:border-b-0"
              >
                <img
                  src="/baldshield-products-clean-v2.webp"
                  alt="BaldShield CLEAN"
                  className="absolute inset-x-0 top-0 h-full w-full object-cover object-[center_55%] transition duration-700 group-hover:scale-[1.03] lg:h-[580px]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 from-0% via-32% to-transparent to-58%" />

                <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col justify-end bg-gradient-to-t from-black via-black/90 to-transparent px-2 pb-3 pt-24">
                  <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#FFB81C]">
                    01 / LIMPAR
                  </p>

                  <h3 className="mt-2 text-3xl font-bold uppercase tracking-tight text-white">
                    CLEAN
                  </h3>

                  <p className="mt-2 max-w-[260px] text-sm leading-relaxed text-white/70">
                    Limpa e prepara o couro cabeludo exposto.
                  </p>

                  <div className="mt-5 flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-2 rounded-full border border-primary/70 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-white transition group-hover:border-primary">
                    Conhecer CLEAN
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>

                  <a
                    href="https://loja.baldshield.com/clean/"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center rounded-full bg-primary px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-black transition hover:brightness-110"
                  >
                    Comprar
                  </a>
                </div>
                </div>
              </a>

              {/* HYDRATE */}
              <a
                href="/products/hydrate"
                className="group relative min-h-[620px] lg:min-h-[620px] lg:aspect-auto overflow-hidden border-b border-white/10 lg:border-b-0 lg:border-r"
              >
                <img
                  src="/baldshield-products-hydrate-v2.webp"
                  alt="BaldShield HYDRATE"
                  className="absolute inset-x-0 top-0 h-full w-full object-cover object-[center_55%] transition duration-700 group-hover:scale-[1.03] lg:h-[580px]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 from-0% via-32% to-transparent to-58%" />

                <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col justify-end bg-gradient-to-t from-black via-black/90 to-transparent px-2 pb-3 pt-24">
                  <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#00AEEF]">
                    02 / HIDRATAR
                  </p>

                  <h3 className="mt-2 text-3xl font-bold uppercase tracking-tight text-white">
                    HYDRATE
                  </h3>

                  <p className="mt-2 max-w-[260px] text-sm leading-relaxed text-white/70">
                    Hidrata e equilibra a pele exposta.
                  </p>

                  <div className="mt-5 flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-2 rounded-full border border-primary/70 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-white transition group-hover:border-primary">
                    Conhecer HYDRATE
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>

                  <a
                    href="https://loja.baldshield.com/hydrate"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center rounded-full bg-primary px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-black transition hover:brightness-110"
                  >
                    Comprar
                  </a>
                </div>
                </div>
              </a>

              {/* DEFENSE */}
              <a
                href="/products/defense"
                className="group relative min-h-[620px] lg:min-h-[620px] lg:aspect-auto overflow-hidden border-b border-white/10 md:border-r lg:border-b-0"
              >
                <img
                  src="/baldshield-products-defense-v2.webp"
                  alt="BaldShield DEFENSE"
                  className="absolute inset-x-0 top-0 h-full w-full object-cover object-[center_55%] transition duration-700 group-hover:scale-[1.03] lg:h-[580px]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 from-0% via-32% to-transparent to-58%" />

                <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col justify-end bg-gradient-to-t from-black via-black/90 to-transparent px-2 pb-3 pt-24">
                  <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#B5D900]">
                    03 / PROTEGER
                  </p>

                  <h3 className="mt-2 text-3xl font-bold uppercase tracking-tight text-white">
                    DEFENSE
                  </h3>

                  <p className="mt-2 max-w-[260px] text-sm leading-relaxed text-white/70">
                    Hidrata e protege o couro cabeludo exposto.
                  </p>

                  <div className="mt-5 flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-2 rounded-full border border-primary/70 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-white transition group-hover:border-primary">
                    Conhecer DEFENSE
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>

                  <a
                    href="https://loja.baldshield.com/protect/"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center rounded-full bg-primary px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-black transition hover:brightness-110"
                  >
                    Comprar
                  </a>
                </div>
                </div>
              </a>

              {/* WIPES */}
              <div className="group relative min-h-[620px] lg:min-h-[620px] lg:aspect-auto overflow-hidden">
                <img
                  src="/baldshield-products-wipes-v2.webp"
                  alt="BaldShield WIPES"
                  className="absolute inset-x-0 top-0 h-full w-full object-cover object-[center_55%] transition duration-700 group-hover:scale-[1.03] lg:h-[580px]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 from-0% via-32% to-transparent to-58%" />

                <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col justify-end bg-gradient-to-t from-black via-black/90 to-transparent px-2 pb-3 pt-24">
                  <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-white/60">
                    04 / CONTROLAR
                  </p>

                  <h3 className="mt-2 text-3xl font-bold uppercase tracking-tight text-white">
                    WIPES
                  </h3>

                  <p className="mt-2 max-w-[260px] text-sm leading-relaxed text-white/70">
                    Cuida ao longo do dia e ajuda no controle do brilho.
                  </p>

                  <div className="mt-5 inline-flex rounded-full border border-white/30 px-5 py-2 text-[10px] font-bold uppercase tracking-[0.22em] text-white/65">
                    Em breve
                  </div>
                </div>
              </div>

            </div>
          </section>


       {/* =========================================================
            4 PRODUTOS? NÃO. 1 SISTEMA.
        ========================================================= */}
        <section
          id="system"
          className="relative overflow-hidden border-b border-white/5 bg-black py-20 md:py-24"
        >
          {/* atmosfera */}
          <div className="absolute left-1/2 top-1/2 h-[420px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.045] blur-[140px]" />

          <div className="absolute inset-0 opacity-[0.018] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:80px_80px]" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75 }}
            className="relative mx-auto w-full max-w-[1400px] px-6 lg:px-10"
          >
            {/* CABEÇALHO */}
            
              <div className="relative w-full">

                {/* Eyebrow — independente, como no mockup */}
                <div className="mb-5 flex w-full justify-center">
                  <p className="m-0 text-center text-[10px] font-bold uppercase tracking-[0.45em] text-white/55 md:text-xs">
                    SCALP DEFENSE SYSTEM™
                  </p>
                </div>

                {/* Título — centralização independente */}
                <div className="flex w-full flex-col items-center text-center">
                  <h2
                    className="m-0 text-center text-4xl font-bold uppercase leading-[0.94] tracking-[-0.035em] text-white md:text-6xl lg:text-7xl"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    <span className="block">4 PRODUTOS?</span>

                    <span className="mt-2 block">
                      <span className="text-primary">NÃO.</span>{' '}
                      <span className="text-white">1 SISTEMA.</span>
                    </span>
                  </h2>

                  <p className="mt-6 text-center text-sm uppercase tracking-[0.20em] text-white/55 md:text-base">
                    Uma lógica para cada momento da pele exposta.
                  </p>
                </div>

              </div>

              {/* DESKTOP — JORNADA DO SISTEMA */}
              <div className="relative mx-auto mt-12 hidden max-w-[1200px] md:block">
                {/* linha conectora */}
                <div className="absolute left-[10%] right-[10%] top-[28px] h-px bg-gradient-to-r from-[#FFB81C]/50 via-[#00AEEF]/50 via-50% to-[#B5D900]/50" />

                <div className="relative z-10 grid grid-cols-4 gap-6">
                  {/* 01 */}
                  <div className="text-center">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#FFB81C]/60 bg-black text-lg font-bold text-[#FFB81C] shadow-[0_0_30px_rgba(255,184,28,0.08)]">
                      01
                    </div>

                    <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.25em] text-white/45">
                      LIMPAR
                    </p>

                    <p className="mt-1 text-lg font-black uppercase tracking-[0.08em] text-[#FFB81C]">
                      CLEAN
                    </p>

                    <p className="mx-auto mt-3 max-w-[190px] text-sm leading-relaxed text-white/45">
                      Limpa e prepara.
                    </p>
                  </div>

                  {/* 02 */}
                  <div className="text-center">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#00AEEF]/60 bg-black text-lg font-bold text-[#00AEEF] shadow-[0_0_30px_rgba(0,174,239,0.08)]">
                      02
                    </div>

                    <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.25em] text-white/45">
                      HIDRATAR
                    </p>

                    <p className="mt-1 text-lg font-black uppercase tracking-[0.08em] text-[#00AEEF]">
                      HYDRATE
                    </p>

                    <p className="mx-auto mt-3 max-w-[190px] text-sm leading-relaxed text-white/45">
                      Hidrata e equilibra.
                    </p>
                  </div>

                  {/* 03 */}
                  <div className="text-center">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#B5D900]/60 bg-black text-lg font-bold text-[#B5D900] shadow-[0_0_30px_rgba(181,217,0,0.08)]">
                      03
                    </div>

                    <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.25em] text-white/45">
                      PROTEGER
                    </p>

                    <p className="mt-1 text-lg font-black uppercase tracking-[0.08em] text-[#B5D900]">
                      DEFENSE
                    </p>

                    <p className="mx-auto mt-3 max-w-[190px] text-sm leading-relaxed text-white/45">
                      Hidrata e protege.
                    </p>
                  </div>

                  {/* 04 */}
                  <div className="text-center">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-white/35 bg-black text-lg font-bold text-white/80">
                      04
                    </div>

                    <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.25em] text-white/45">
                      CONTROLAR
                    </p>

                    <p className="mt-1 text-lg font-black uppercase tracking-[0.08em] text-white/75">
                      WIPES
                    </p>

                    <p className="mx-auto mt-3 max-w-[190px] text-sm leading-relaxed text-white/45">
                      Cuida ao longo do dia.
                    </p>
                  </div>
                </div>
              </div>

              {/* MOBILE — JORNADA COMPACTA */}
              <div className="mx-auto mt-12 grid max-w-md gap-3 md:hidden">
                {[
                  ['01', 'LIMPAR', 'CLEAN', '#FFB81C'],
                  ['02', 'HIDRATAR', 'HYDRATE', '#00AEEF'],
                  ['03', 'PROTEGER', 'DEFENSE', '#B5D900'],
                  ['04', 'CONTROLAR', 'WIPES', '#D4D4D8'],
                ].map(([number, verb, product, color]) => (
                  <div
                    key={number}
                    className="flex items-center rounded-2xl border border-white/10 bg-white/[0.025] px-5 py-4"
                  >
                    <span
                      className="w-12 text-lg font-black"
                      style={{ color }}
                    >
                      {number}
                    </span>

                    <div className="h-8 w-px bg-white/10" />

                    <div className="ml-5">
                      <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/35">
                        {verb}
                      </p>

                      <p
                        className="mt-1 text-base font-black uppercase tracking-[0.08em]"
                        style={{ color }}
                      >
                        {product}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
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