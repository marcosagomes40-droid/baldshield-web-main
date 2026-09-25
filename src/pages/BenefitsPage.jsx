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

      {/* HERO V2 */}
      <section className="relative min-h-[calc(100vh-72px)] overflow-hidden border-b border-white/10 bg-black">
        {/* Imagem */}
        <div className="absolute inset-0">
          <img
            src="/baldshield-benefits-hero-v2.webp"
            alt="Pessoas com couro cabeludo exposto representando confiança e presença BaldShield"
            className="h-full w-full object-cover object-[62%_center]"
          />

          {/* Camadas para leitura */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/5" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/20" />
        </div>

        {/* Conteúdo */}
        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-72px)] w-full max-w-[1400px] items-center px-6 py-20 lg:px-10">
          <div className="max-w-[650px]">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65 }}
              className="mb-7 text-xs font-bold uppercase tracking-[0.38em] text-primary md:text-sm"
            >
              BENEFÍCIOS BALDSHIELD
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.08 }}
              className="text-5xl font-bold leading-[0.98] tracking-[-0.035em] text-white md:text-6xl lg:text-7xl"
            >
              Quando o cabelo
              <br />
              não está lá,
              <span className="mt-2 block text-primary">
                você não precisa
                <br />
                esconder nada.
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.18 }}
              className="mt-8"
            >
              <p className="text-xl font-semibold leading-snug text-white md:text-2xl">
                Cuide da pele.
                <br />
                Assuma sua presença.
              </p>

              <p className="mt-6 max-w-[600px] text-base leading-relaxed text-white/70 md:text-lg">
                Cuidar do couro cabeludo exposto é transformar proteção, conforto e
                bem-estar em confiança para viver do seu jeito. Porque uma pele bem
                cuidada não muda quem você é. Ela dá liberdade para você ser ainda
                mais você.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.28 }}
              className="mt-9"
            >
              <a
                href="#benefits"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-bold uppercase tracking-[0.12em] text-black transition duration-300 hover:scale-[1.02] hover:bg-primary"
              >
                Descubra os benefícios
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-10 text-[10px] font-semibold uppercase tracking-[0.38em] text-white/50 md:text-xs"
            >
              CONFIDENCE FOR THE BOLD.
            </motion.p>
          </div>
        </div>
      </section>

        {/* EXPOSURE — BLOCO 2 */}
        <section className="relative overflow-hidden border-b border-white/10 bg-black pb-24 pt-16 md:pb-32 md:pt-24">
          <div className="mx-auto w-full max-w-[1400px] px-6 lg:px-10">

            {/* Introdução */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7 }}
              className="mx-auto mb-16 max-w-4xl text-center"
            >
              <div className="mb-6 flex w-full justify-center">
                <p className="m-0 text-center text-xs font-bold uppercase tracking-[0.38em] text-primary md:text-sm">
                  O QUE MUDA QUANDO A PELE FICA EXPOSTA
                </p>
              </div>

              <h2
                className="text-4xl font-bold leading-[1.02] tracking-[-0.03em] text-white md:text-6xl lg:text-7xl"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                A pele sempre esteve ali.
                <span className="mt-2 block text-primary">
                  O cuidado é que ainda não.
                </span>
              </h2>

              <p className="mx-auto mt-8 max-w-3xl text-base leading-relaxed text-white/65 md:text-lg">
                Quando o cabelo deixa de fazer parte da proteção natural do couro
                cabeludo, essa pele passa a viver a rotina de outra forma. Sol, calor,
                suor, oleosidade e o ambiente chegam mais perto.
              </p>

              <p className="mx-auto mt-4 max-w-2xl text-base font-medium leading-relaxed text-white/85 md:text-lg">
                Reconhecer essa diferença é o primeiro passo para cuidar melhor.
              </p>
            </motion.div>

            {/* Imagem */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
              className="relative overflow-hidden rounded-[2rem] border border-white/10"
            >
              <img
                src="/baldshield-benefits-exposure-v2.webp"
                alt="Couro cabeludo exposto representado sob diferentes condições da rotina"
                className="h-[420px] w-full object-cover md:h-[560px] lg:h-[620px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

              {/* Fatores */}
              <div className="absolute inset-x-0 bottom-0 z-10 px-6 pb-7 md:px-10 md:pb-9">
                <div className="grid grid-cols-2 gap-x-6 gap-y-5 md:grid-cols-5">
                  {[
                    ['SOL', 'Mais atenção à proteção.'],
                    ['CALOR', 'Conforto e equilíbrio.'],
                    ['OLEOSIDADE', 'Aparência mais equilibrada.'],
                    ['AMBIENTE', 'Contato direto com impurezas.'],
                    ['ROTINA', 'Cuidado que acompanha o dia.'],
                  ].map(([title, text]) => (
                    <div
                      key={title}
                      className="border-t border-white/30 pt-4"
                    >
                      <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">
                        {title}
                      </p>

                      <p className="mt-2 text-sm leading-snug text-white/75">
                        {text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Fechamento */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mx-auto mt-16 max-w-4xl text-center md:mt-20"
            >
              <p
                className="text-3xl font-bold leading-tight text-white md:text-5xl"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Uma área antes ignorada
                <span className="block text-primary">
                  agora tem uma rotina própria.
                </span>
              </p>
            </motion.div>

          </div>
        </section>
        
        {/* BENEFITS V2 — BLOCO 3 */}
        <section
          id="benefits"
          className="relative overflow-hidden border-b border-white/10 bg-[#080808] py-24 md:py-32"
        >
          <div className="mx-auto w-full max-w-[1400px] px-6 lg:px-10">

            {/* Cabeçalho */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7 }}
              className="mx-auto mb-16 max-w-5xl text-center"
            >
              <div className="mb-6 flex w-full justify-center">
                <p className="m-0 text-center text-xs font-bold uppercase tracking-[0.38em] text-primary md:text-sm">
                  BENEFÍCIOS QUE VOCÊ SENTE
                </p>
              </div>

              <h2
                className="text-4xl font-bold leading-[1.02] tracking-[-0.03em] text-white md:text-6xl lg:text-7xl"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Cuidar da pele muda
                <span className="mt-2 block text-primary">
                  mais do que a aparência.
                </span>
              </h2>
            </motion.div>

            {/* Imagem + benefícios */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.8 }}
              className="relative overflow-hidden rounded-[2rem] border border-white/10"
            >
              <img
                src="/baldshield-benefits-benefits-v2.webp"
                alt="Momentos que representam conforto, proteção, aparência e confiança"
                className="h-[640px] w-full object-cover md:h-[720px] lg:h-[760px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/15 to-transparent" />

              {/* Benefícios */}
              <div className="absolute inset-x-0 bottom-0 z-10 px-6 pb-8 md:px-10 md:pb-10">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {[
                    ['01', 'CONFORTO', 'Uma pele que você sente menos.'],
                    ['02', 'PROTEÇÃO', 'Mais cuidado entre você e o mundo.'],
                    ['03', 'APARÊNCIA', 'Menos distração. Mais presença.'],
                    ['04', 'CONFIANÇA', 'Esquecer a careca. Lembrar de você.'],
                  ].map(([number, title, text]) => (
                    <div
                      key={number}
                      className="border-t border-white/35 pt-4"
                    >
                      <p className="text-[10px] font-bold tracking-[0.24em] text-white/45">
                        {number}
                      </p>

                      <p className="mt-2 text-xs font-bold uppercase tracking-[0.22em] text-primary">
                        {title}
                      </p>

                      <p className="mt-3 max-w-[240px] text-sm leading-relaxed text-white/80 md:text-base">
                        {text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Fechamento */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mx-auto mt-16 max-w-5xl text-center md:mt-20"
            >
              <p
                className="text-3xl font-bold leading-tight text-white md:text-5xl lg:text-6xl"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Não é sobre parecer diferente.
                <span className="mt-2 block text-primary">
                  É sobre se sentir bem sendo você.
                </span>
              </p>
            </motion.div>

          </div>
        </section>

        {/* LIFESTYLE — BLOCO 4 */}
        <section className="relative overflow-hidden border-b border-white/10 bg-black pb-24 pt-16 md:pb-32 md:pt-24">
          <div className="mx-auto w-full max-w-[1400px] px-6 lg:px-10">

           <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.65fr] lg:gap-16">

              {/* Mensagem */}
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.75 }}
              >
                <p className="mb-6 text-xs font-bold uppercase tracking-[0.38em] text-primary md:text-sm">
                  O CUIDADO ACOMPANHA VOCÊ
                </p>

                <h2
                  className="text-4xl font-bold leading-[1.02] tracking-[-0.03em] text-white md:text-5xl lg:text-6xl"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  Benefício de verdade
                  <span className="mt-2 block text-primary">
                    é aquele que cabe na vida.
                  </span>
                </h2>

                <p className="mt-8 max-w-xl text-base leading-relaxed text-white/65 md:text-lg">
                  Trabalho. Movimento. Sol. Viagem. Encontros. Vida.
                  O cuidado não deve pedir que você pare. Deve acompanhar você.
                </p>

                <p className="mt-5 max-w-xl text-lg font-semibold leading-relaxed text-white">
                  Porque a melhor rotina é aquela que deixa você livre para viver a sua.
                </p>
              </motion.div>

              {/* Imagem */}
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8 }}
                className="relative overflow-hidden rounded-[2rem] border border-white/10"
              >
                <img
                  src="/baldshield-benefits-lifestyle-v2.webp"
                  alt="Rotina ativa com trabalho, movimento, lazer e vida ao ar livre"
                  className="h-[500px] w-full object-cover md:h-[540px] lg:h-[560px]"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </motion.div>

            </div>

            {/* SDS */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mt-20 border-t border-white/10 pt-12 md:mt-24 md:pt-16"
            >
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

            <div className="max-w-4xl">
              <p className="text-xs font-bold uppercase tracking-[0.38em] text-primary">
                SCALP DEFENSE SYSTEM™
              </p>

              <p
                className="mt-5 text-3xl font-bold leading-tight text-white md:text-5xl"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Uma rotina pensada para acompanhar
                <span className="text-primary"> a pele exposta ao longo do dia.</span>
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-[10px] font-bold uppercase tracking-[0.28em] text-white/55 md:text-xs">
                <span>LIMPAR</span>
                <span className="text-primary">·</span>
                <span>HIDRATAR</span>
                <span className="text-primary">·</span>
                <span>PROTEGER</span>
                <span className="text-primary">·</span>
                <span>CONTROLAR</span>
              </div>
            </div>

            <a
              href="/products"
              className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-full border border-white/25 px-7 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white transition hover:border-primary hover:text-primary"
            >
              Conhecer o sistema
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

          </div>  
            </motion.div>

          </div>
        </section>

        {/* FECHAMENTO — BLOCO 5 */}
        <section className="relative overflow-hidden border-t border-white/10 bg-black py-20 md:py-28">
          <div className="mx-auto w-full max-w-[1400px] px-6 lg:px-10">

            <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_1.35fr] lg:gap-16">

              {/* Mensagem */}
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.75 }}
              >
                <p className="mb-6 text-xs font-bold uppercase tracking-[0.38em] text-primary md:text-sm">
                  CONFIDENCE FOR THE BOLD
                </p>

                <h2
                  className="text-4xl font-bold leading-[1.02] tracking-[-0.03em] text-white md:text-5xl lg:text-6xl"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  Sua pele está exposta.
                  <span className="mt-2 block text-primary">
                    Sua confiança também pode estar.
                  </span>
                </h2>

                <p className="mt-8 max-w-xl text-base leading-relaxed text-white/65 md:text-lg">
                  Cuidar do couro cabeludo é uma escolha de quem decidiu não esconder,
                  não improvisar e não deixar uma parte de si sem cuidado.
                </p>

                <p className="mt-5 max-w-xl text-lg font-semibold leading-relaxed text-white">
                  É cuidado. É atitude. É presença.
                </p>

                <p
                  className="mt-7 text-3xl font-bold text-white md:text-4xl"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  É BaldShield.
                </p>

                <a
                  href="/"
                  className="group mt-8 inline-flex items-center justify-center gap-3 rounded-full border border-white/25 px-7 py-4 text-xs font-bold uppercase tracking-[0.16em] text-white transition-all duration-300 hover:border-primary hover:text-primary"
                >
                  Conhecer a BaldShield
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </motion.div>

              {/* Imagem */}
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8 }}
                className="relative overflow-hidden rounded-[2rem] border border-white/10"
              >
                <img
                  src="/baldshield-benefits-belonging-v2.webp"
                  alt="Pessoas com couro cabeludo exposto em um momento de convivência e confiança"
                  className="h-[430px] w-full object-cover md:h-[500px] lg:h-[540px]"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </motion.div>

            </div>

            {/* Assinatura */}
            <div className="mt-20 flex w-full justify-center border-t border-white/10 pt-10">
              <p className="text-center text-xs font-bold uppercase tracking-[0.38em] text-white/45">
                CONFIDENCE FOR THE BOLD.
              </p>
            </div>

          </div>
        </section>
        
        <Footer />
      </div>
    </>
  );
};

export default BenefitsPage;