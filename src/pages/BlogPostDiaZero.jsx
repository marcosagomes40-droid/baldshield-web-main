import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const BlogPostDiaZero = () => {
  return (
    <>
      <Helmet>
        <title>O Dia Zero | BaldShield</title>
        <meta
          name="description"
          content="O momento em que você para de esconder e assume o controle da sua imagem."
        />
      </Helmet>

      <div className="min-h-screen bg-black text-white">
        <Header />

        <article className="px-6 py-24 md:px-12 lg:px-20">
          <div className="mx-auto max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-primary">
              Identidade masculina
            </p>

            <h1
              className="mb-8 text-4xl font-bold md:text-6xl"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              O Dia Zero: o maior upgrade de confiança de um homem
            </h1>

            <img
              src="/Blog/dia-zero-espelho.png"
              alt="Homem careca refletindo no espelho"
              className="my-10 w-full rounded-[2rem] object-contain bg-black"
            />

            <p className="mb-6 text-gray-300">
              Muitos homens vivem a queda de cabelo como uma batalha silenciosa.
            </p>

            <p className="mb-10 text-gray-300">
              Até que chega um momento diferente. Um ponto de virada.
              Nós chamamos de Dia Zero.
            </p>

            <h2 className="mb-4 text-3xl font-bold">A psicologia da decisão</h2>

            <p className="mb-10 text-gray-300">
              Quando você raspa a cabeça, algo muda imediatamente:
              a narrativa deixa de ser passiva e passa a ser intencional.
            </p>

            <h2 className="mb-4 text-3xl font-bold">O novo padrão visual</h2>

            <p className="mb-10 text-gray-300">
              O rosto ganha protagonismo. O olhar fica mais direto.
            </p>

            <img
              src="/Blog/dia-zero-retrato.png"
              alt="Homem careca com postura confiante"
              className="my-10 w-full rounded-[2rem] object-contain bg-black"
            />

            <h2 className="mb-4 text-3xl font-bold">O início de um novo ritual</h2>

            <p className="mb-10 text-gray-300">
              O Dia Zero não termina na máquina. Ele começa ali.
            </p>

            <img
              src="/Blog/dia-zero-rotina.png"
              alt="Rotina de cuidado BaldShield"
              className="my-10 w-full rounded-[2rem] object-contain bg-black"
            />

            <div className="mt-14 rounded-[2rem] border border-primary/30 bg-primary/10 p-8 text-center">
              <h3 className="mb-4 text-3xl font-bold">
                Sem brilho. Sem improviso.
              </h3>

              <p className="mb-6 text-gray-300">
                Conheça BaldShield.
              </p>

              <a
                href="/pre-launch"
                className="inline-flex rounded-2xl bg-primary px-8 py-4 font-semibold text-black"
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

export default BlogPostDiaZero;