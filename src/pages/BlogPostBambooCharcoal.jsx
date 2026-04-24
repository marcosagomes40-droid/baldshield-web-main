import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const BlogPostBambooCharcoal = () => {
  return (
    <>
      <Helmet>
        <title>O segredo por trás do carvão de bambu | BaldShield</title>
        <meta
          name="description"
          content="Entenda como o carvão de bambu ajuda a controlar o brilho e a oleosidade da pele e do couro cabeludo."
        />
      </Helmet>

      <div className="min-h-screen bg-black text-white">
        <Header />

        <article className="px-6 py-24 md:px-12 lg:px-20">
          <div className="mx-auto max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-primary">
              Cuidados masculinos
            </p>

            <h1
              className="mb-8 text-4xl font-bold leading-tight md:text-6xl"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              O segredo por trás do carvão de bambu: como eliminar o brilho sem esforço
            </h1>

            <img
              src="/Blog/bamboo-charcoal-hero.png"
              alt="Carvão de bambu ativado"
              className="my-10 w-full rounded-[2rem] object-contain bg-black"
            />

            <p className="mb-10 text-xl leading-relaxed text-gray-300">
              Você já se olhou no espelho no meio do dia e percebeu que sua pele — ou o couro cabeludo —
              está brilhando mais do que deveria?
            </p>

            <div className="space-y-10 text-lg leading-relaxed text-gray-300">
              <section>
                <h2 className="mb-4 text-3xl font-bold text-white">
                  O que é o carvão de bambu ativado?
                </h2>
                <p>
                  O carvão de bambu passa por um processo de ativação em altas temperaturas,
                  criando uma estrutura extremamente porosa, capaz de capturar óleo e impurezas.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-3xl font-bold text-white">
                  Como ele funciona?
                </h2>
                <p>
                  A tecnologia atua por adsorção: o excesso de oleosidade é atraído e retido
                  na estrutura do material, ajudando a reduzir o brilho sem espalhar a gordura.
                </p>
              </section>

              <img
                src="/Blog/bamboo-adsorcao.png"
                alt="Tecnologia de adsorção do carvão de bambu"
                className="my-10 w-full rounded-[2rem] object-contain bg-black"
              />

              <section>
                <h2 className="mb-4 text-3xl font-bold text-white">
                  Por que não lavar o rosto várias vezes?
                </h2>
                <p>
                  Lavar demais pode causar efeito rebote. A pele entende que está ressecada e
                  pode produzir ainda mais oleosidade ao longo do dia.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-3xl font-bold text-white">
                  Como usar corretamente
                </h2>
                <p>
                  Não esfregue. Pressione o lenço suavemente sobre a pele ou couro cabeludo por
                  3 a 5 segundos. O resultado é um acabamento mais seco e discreto.
                </p>
              </section>

              <img
                src="/Blog/baldshield-wipes-uso.png"
                alt="Homem usando BaldShield Wipes no couro cabeludo"
                className="my-10 w-full rounded-[2rem] object-contain bg-black"
              />
            </div>

            <div className="mt-14 rounded-[2rem] border border-primary/30 bg-primary/10 p-8 text-center">
              <h3 className="mb-4 text-3xl font-bold text-white">
                Controle o brilho em segundos.
              </h3>

              <p className="mb-6 text-gray-300">
                Conheça o BaldShield Wipes. Feito para quem assumiu a careca, mas não o brilho.
              </p>

              <a
                href="/pre-launch"
                className="inline-flex rounded-2xl bg-primary px-8 py-4 font-semibold text-black transition hover:scale-105 hover:bg-primary/90"
              >
                Quero acesso antecipado
              </a>
            </div>
          </div>
        </article>

        <Footer />
      </div>
    </>
  );
};

export default BlogPostBambooCharcoal;