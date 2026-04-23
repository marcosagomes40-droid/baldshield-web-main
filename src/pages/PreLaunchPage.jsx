import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ContactForm from '@/components/ContactForm.jsx';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const PreLaunchPage = () => {
  return (
    <>
      <Helmet>
        <title>BaldShield | Pré-lançamento</title>
        <meta
          name="description"
          content="Entre para a lista da BaldShield e seja um dos primeiros a conhecer o lançamento."
        />
      </Helmet>

      <div className="min-h-screen bg-black text-white">
        <Header />

        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-b from-black to-card px-6 py-20 md:px-12 lg:px-20">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.6 }}
            >
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-primary">
                Pré-lançamento BaldShield
              </p>

              <h1
                className="mb-6 text-5xl font-bold leading-tight md:text-6xl"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Ninguém te ensinou
                <span className="block text-primary">
                  a cuidar disso.
                </span>
              </h1>

              <p className="mb-8 max-w-xl text-lg text-gray-300 leading-relaxed">
                O couro cabeludo de quem não tem cabelo é uma das áreas mais expostas do corpo.
                E quase ninguém trata isso como deveria.
              </p>

              <p className="mb-8 text-sm uppercase tracking-[0.25em] text-gray-400">
                Sem brilho. Sem improviso. Sem descuido.
              </p>

              <div className="mb-4 flex flex-wrap gap-4">
                <a
                  href="#lista"
                  className="rounded-2xl bg-primary px-8 py-4 font-semibold text-black transition hover:scale-105 hover:bg-primary/90"
                >
                  Quero acesso VIP
                </a>

                <a
                  href="#problema"
                  className="rounded-2xl border border-white/20 px-8 py-4 font-semibold text-white transition hover:border-primary hover:text-primary"
                >
                  Entender mais
                </a>
              </div>

              <p className="mb-10 text-sm text-gray-400">
                Seja um dos primeiros a conhecer a BaldShield.
              </p>

              <div className="grid max-w-xl gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm text-gray-400">Feito para</p>
                  <p className="mt-1 font-semibold">couro cabeludo</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm text-gray-400">Cuidado</p>
                  <p className="mt-1 font-semibold">simples e diário</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm text-gray-400">Acesso</p>
                  <p className="mt-1 font-semibold">antes do lançamento</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-primary/10 blur-3xl" />

              <div className="h-[90vh] flex items-center justify-center">
              <img
                src="/hero-wipes.png"
                className="w-full h-full object-cover object-center"
                style={{ objectPosition: "center 5%" }}
              />
            </div>
            </motion.div>
          </div>
        </section>

        {/* PROBLEMA */}
        <section id="problema" className="bg-black px-6 py-20 md:px-12 lg:px-20">
          <div className="mx-auto max-w-6xl">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <div className="flex w-full justify-center">
                <span className="mb-6 block text-base font-semibold uppercase tracking-[0.4em] text-primary text-center md:text-lg">
                  Quem não tem cabelo sabe
                </span>
              </div>

              <div className="flex w-full justify-center">
                <h2 className="max-w-4xl text-center text-4xl font-bold leading-tight md:text-5xl">
                  Existem situações que quase ninguém trata como problema.
                </h2>
              </div>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                'Sol forte e reflexo excessivo',
                'Calor e desconforto ao longo do dia',
                'Brilho que incomoda mais do que deveria',
                'Uma rotina sem cuidado específico',
              ].map((item, index) => (
                <motion.div
                  key={item}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center"
                >
                  <p className="text-lg font-medium text-white">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* EM BREVE */}
        <section className="bg-black px-6 pb-20 md:px-12 lg:px-20">
          <div className="mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-white/5 p-8 text-center md:p-12">
            <div className="flex w-full justify-center">
              <span className="mb-6 block text-base font-semibold uppercase tracking-[0.4em] text-primary text-center md:text-lg">
                Em breve
              </span>
            </div>

            <div className="flex w-full justify-center">
              <h2 className="mb-6 max-w-4xl text-center text-4xl font-bold leading-tight md:text-5xl">
                Uma solução simples para um cuidado que sempre foi ignorado.
              </h2>
            </div>

            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-300">
              Estamos finalizando os testes e preparando o lançamento.
              Entre para a lista e seja um dos primeiros a acompanhar essa nova etapa da BaldShield.
            </p>
          </div>
        </section>

        {/* LISTA */}
        <section id="lista" className="bg-black px-6 py-20 md:px-12 lg:px-20">
          <div className="mx-auto max-w-4xl rounded-[2rem] border border-primary/20 bg-card p-8 shadow-2xl md:p-12">
            <div className="mb-8">
              <div className="flex w-full justify-center">
                <span className="mb-6 block text-base font-semibold uppercase tracking-[0.4em] text-primary text-center md:text-lg">
                  Lista VIP
                </span>
              </div>

              <div className="flex w-full justify-center">
                <h2 className="mb-4 max-w-4xl text-center text-4xl font-bold leading-tight md:text-5xl">
                  Quero ser um dos primeiros
                </h2>
              </div>

              <p className="text-center text-gray-300">
                Preencha abaixo para receber novidades, prioridade e acesso ao lançamento.
              </p>
            </div>

            <ContactForm />
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default PreLaunchPage;