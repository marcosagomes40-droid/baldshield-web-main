import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <main>
       <section className="relative min-h-[720px] overflow-hidden border-b border-white/10 lg:min-h-[calc(100vh-72px)]">
        {/* Imagem */}
        <img
          src="/baldshield-why-hero-v2.webp"
          alt="BaldShield — Confidence for the Bold"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        {/* Gradiente para leitura */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/55 to-transparent" />

        {/* Conteúdo original */}
        <div className="relative z-10 mx-auto flex min-h-[720px] w-full max-w-6xl items-center px-6 md:px-12 lg:min-h-[calc(100vh-72px)]">
          <div className="max-w-[620px]">
            <p className="mb-6 text-sm uppercase tracking-[0.25em] text-orange-500">
              Por que a BaldShield existe
            </p>

            <h1
            className="text-4xl font-bold leading-[0.98] tracking-[-0.035em] md:text-6xl lg:text-7xl"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            <span className="block text-white">
              Cuidado e proteção
            </span>
            <span className="block text-white">
              para o couro
            </span>
            <span className="block text-primary">
              cabeludo exposto.
            </span>
          </h1>

            <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/80 md:text-xl">
              A BaldShield nasceu para colocar luz sobre um problema real e pouco falado:
              a exposição diária do couro cabeludo ao sol, ao calor e ao envelhecimento precoce.
            </p>
          </div>
        </div>
      </section>

        <section className="py-20 px-6 md:px-12">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-orange-500 uppercase tracking-[0.2em] text-sm mb-4">
                O problema
              </p>
              <h2
              className="text-3xl font-bold leading-[0.98] tracking-[-0.035em] md:text-5xl lg:text-5xl"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              <span className="block text-white">
                Mais do que
              </span>
              <span className="block text-white">
                proteção solar.
              </span>
              <span className="block text-primary">
                Uma nova categoria
              </span>
              <span className="block text-primary">
                de cuidado para
              </span>
              <span className="block text-primary">
                quem não tem cabelo.
              </span>
            </h2>
            </div>

            <div>
              <p className="text-white/75 text-lg leading-relaxed mb-6">
                O rosto recebe atenção. O corpo recebe proteção. Mas o couro cabeludo,
                que fica completamente exposto, quase sempre é esquecido.
              </p>

              <p className="text-white/75 text-lg leading-relaxed">
                Queimaduras, manchas, sensibilidade e desconforto fazem parte da rotina de
                muitos pessoas carecas no Brasil. E mesmo assim, quase não existem soluções
                pensadas especificamente para isso.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 md:px-12 bg-white/[0.03]">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-orange-500 uppercase tracking-[0.2em] text-sm mb-4">
                Nossa visão
              </p>
              <h2
              className="text-3xl md:text-4xl font-bold leading-tight mb-6"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              <span className="block text-white">
                Não é sobre estética.
              </span>
              <span className="block text-primary">
                É sobre saúde, proteção e cuidado.
              </span>
            </h2>
            </div>

            <div>
             <p className="text-white/75 text-lg leading-relaxed mb-6">
              A BaldShield nasceu para desenvolver um cuidado específico para o couro
              cabeludo exposto — unindo inovação, performance, praticidade e uma rotina
              pensada para as necessidades dessa pele.
            </p>

            <p className="text-white/75 text-lg leading-relaxed">
              Cada produto é desenvolvido com atenção à formulação, segurança,
              regulamentação e aos testes aplicáveis, porque confiança também se
              constrói com responsabilidade em cada etapa do cuidado.
            </p>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border border-white/10 rounded-2xl p-8 bg-white/[0.02]">
                <h3 className="text-xl font-semibold mb-4 text-orange-500">Missão</h3>
                <p className="text-white/75 leading-relaxed">
                  Criar uma nova referência em cuidado do couro cabeludo exposto,
                  com soluções específicas que integrem limpeza, hidratação, proteção
                  e cuidado ao longo da rotina.
                </p>
              </div>

              <div className="border border-white/10 rounded-2xl p-8 bg-white/[0.02]">
                <h3 className="text-xl font-semibold mb-4 text-orange-500">Visão</h3>
                <p className="text-white/75 leading-relaxed">
                  Ser reconhecida como referência brasileira em cuidado do couro
                  cabeludo exposto e contribuir para consolidar uma nova categoria
                  de cuidado.
                </p>
              </div>

              <div className="border border-white/10 rounded-2xl p-8 bg-white/[0.02]">
                <h3 className="text-xl font-semibold mb-4 text-orange-500">Valores</h3>
                <p className="text-white/75 leading-relaxed">
                  Cuidado, inovação, responsabilidade, confiança e autenticidade
                  em cada produto, escolha e experiência BaldShield.
                </p>
              </div>
            </div>
          </div>
        </section>

     <section className="py-24 px-6 md:px-12 border-t border-white/10">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-primary uppercase tracking-[0.3em] text-lg md:text-xl font-semibold mb-6">
          BALDSHIELD
        </p>

        <h2
          className="text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.05] mb-6"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          <span className="block text-white">
            Mais do que produtos.
          </span>
          <span className="block text-primary">
            Uma nova forma de cuidar do couro cabeludo exposto.
          </span>
        </h2>

        <p className="text-white/75 text-lg leading-relaxed mb-7">
          Criamos a BaldShield para transformar uma necessidade pouco atendida
          em cuidado especializado, confiança e uma rotina pensada para a pele exposta.
        </p>

        <div className="mb-10 flex w-full justify-center">
          <p className="m-0 text-center text-xs font-semibold uppercase tracking-[0.35em] text-white/50">
            Confidence for the Bold.
          </p>
        </div>

        <Link
          to="/products"
          className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-black font-semibold px-8 py-4 rounded-xl transition-all duration-200"
        >
          Conhecer o sistema
        </Link>
      </div>
    </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
