import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const BlogPostScalpRisk = () => {
  return (
    <>
      <Helmet>
        <title>O risco invisível no couro cabeludo | BaldShield</title>
        <meta
          name="description"
          content="Entenda por que homens carecas precisam cuidar melhor do couro cabeludo e como criar uma rotina simples de prevenção."
        />
      </Helmet>

      <div className="min-h-screen bg-black text-white">
        <Header />

        <article className="px-6 py-24 md:px-12 lg:px-20">
          <div className="mx-auto max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-primary">
              Saúde do couro cabeludo
            </p>

            <h1
              className="mb-8 text-4xl font-bold leading-tight md:text-6xl"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              O alerta que muitos homens ignoram: o risco invisível no couro cabeludo
            </h1>

            <p className="mb-10 text-xl leading-relaxed text-gray-300">
              Você pode cuidar do rosto, usar produtos, manter a aparência em dia…
              Mas existe uma área que a maioria dos homens simplesmente ignora:
              o couro cabeludo.
            </p>

            {/* IMAGEM 1 */}
            <img
              src="/Blog/scalp-sun-exposure.png"
              alt="Couro cabeludo exposto ao sol"
              className="my-10 w-full rounded-[2rem] object-contain bg-black"
            />

            <div className="space-y-10 text-lg leading-relaxed text-gray-300">
              <section>
                <h2 className="mb-4 text-3xl font-bold text-white">
                  O risco é silencioso e acumulativo
                </h2>
                <p>
                  A exposição contínua aos raios UV pode causar danos progressivos à pele.
                  Um dos principais exemplos é o carcinoma basocelular, o tipo mais comum
                  de câncer de pele. Apesar das altas taxas de cura quando identificado cedo,
                  ele funciona como um alerta: os danos vão se acumulando ao longo do tempo.
                </p>
              </section>

              {/* IMAGEM 2 */}
              <img
                src="/Blog/scalp-closeup.png"
                alt="Close do couro cabeludo exposto"
                className="my-10 w-full rounded-[2rem] object-contain bg-black"
              />

              <section>
                <h2 className="mb-4 text-3xl font-bold text-white">
                  Por que o couro cabeludo é negligenciado?
                </h2>
                <p>
                  Simples: porque ninguém ensinou a cuidar dele. Muitos homens acreditam que
                  boné resolve, evitam protetor solar por causa do brilho ou ignoram sinais
                  iniciais da pele. O resultado é exposição diária sem proteção real.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-3xl font-bold text-white">
                  O erro mais comum
                </h2>
                <p>
                  Lavar o rosto várias vezes, ignorar o topo da cabeça ou aceitar o brilho
                  como “normal” são tentativas comuns, mas não resolvem a causa. O brilho
                  excessivo não é só estética: é um sinal de que a pele precisa de mais cuidado.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-3xl font-bold text-white">
                  Cuidado não precisa ser complicado
                </h2>
                <p>
                  A prevenção começa com algo simples: controle, rotina e consistência.
                  Reduzir a oleosidade ao longo do dia, manter a pele equilibrada e evitar
                  agressões desnecessárias já muda a forma como você cuida da cabeça.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-3xl font-bold text-white">
                  A nova rotina para quem é careca
                </h2>
                <p>
                  Cuidar do couro cabeludo não é vaidade. É manutenção básica. Durante o dia,
                  controle o brilho. Em exposição ao sol, redobre a atenção. No fim do dia,
                  permita que a pele se recupere. Pequenos hábitos geram grande impacto no longo prazo.
                </p>
              </section>
            </div>

            {/* IMAGEM 3 */}
            <img
              src="/Blog/baldshield-confiante.png"
              alt="Homem confiante usando BaldShield"
              className="my-10 w-full rounded-[2rem] object-contain bg-black"
            />

            <div className="mt-14 rounded-[2rem] border border-primary/30 bg-primary/10 p-8 text-center">
              <h3 className="mb-4 text-3xl font-bold text-white">
                O problema não é ser careca.
              </h3>

              <p className="mb-6 text-gray-300">
                É ignorar o cuidado com a pele. Conheça o BaldShield Wipes:
                efeito matte imediato, uso em qualquer lugar e desenvolvido para couro cabeludo.
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

export default BlogPostScalpRisk;