// BLOG BALDSHIELD
// TEMA: OLEOSIDADE DO COURO CABELUDO
// STATUS: EM DESENVOLVIMENTO
// REVISADO PARA LINGUAGEM EDUCATIVA E BASEADA EM EVIDÊNCIAS

import React from "react";
import { Helmet } from "react-helmet";
import Header from "@/components/Header.jsx";
import Footer from "@/components/Footer.jsx";

const BlogPostOleosidadeCouroCabeludo = () => {
  const canonicalUrl =
    "https://www.baldshield.com/blog/por-que-minha-careca-fica-oleosa-tao-rapido";

  const heroImage =
    "https://www.baldshield.com/Blog/oleosidade-couro-cabeludo/homem-careca-oleosidade-couro-cabeludo-baldshield.webp";

  return (
    <>
      <Helmet>
        <html lang="pt-BR" />

        <title>
          Por que minha careca fica oleosa tão rápido? | BaldShield
        </title>

        <meta
          name="description"
          content="Entenda por que o couro cabeludo continua produzindo oleosidade mesmo sem cabelos, o que torna o brilho mais visível e como cuidar da pele sem agredi-la."
        />

        <meta
          name="keywords"
          content="careca oleosa, couro cabeludo oleoso, oleosidade na careca, brilho na careca, glândulas sebáceas, sebo, niacinamida, cuidado couro cabeludo, scalp care, BaldShield"
        />

        <meta name="author" content="BaldShield" />
        <meta name="robots" content="index, follow" />

        <link rel="canonical" href={canonicalUrl} />

        <meta property="og:locale" content="pt_BR" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="BaldShield" />
        <meta property="og:url" content={canonicalUrl} />

        <meta
          property="og:title"
          content="Por que minha careca fica oleosa tão rápido?"
        />

        <meta
          property="og:description"
          content="Descubra por que a oleosidade continua presente no couro cabeludo sem cabelos e como manter a pele equilibrada sem comprometer sua barreira natural."
        />

        <meta property="og:image" content={heroImage} />
        <meta
          property="og:image:alt"
          content="Homem careca observando a oleosidade do couro cabeludo"
        />

        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:title"
          content="Por que minha careca fica oleosa tão rápido?"
        />

        <meta
          name="twitter:description"
          content="Entenda a produção de sebo, a diferença entre oleosidade e hidratação e o que a ciência mostra sobre a niacinamida."
        />

        <meta name="twitter:image" content={heroImage} />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: "Por que minha careca fica oleosa tão rápido?",
            description:
              "Entenda por que o couro cabeludo continua produzindo oleosidade mesmo sem cabelos e como cuidar da pele sem agredi-la.",
            image: heroImage,
            author: {
              "@type": "Organization",
              name: "BaldShield",
            },
            publisher: {
              "@type": "Organization",
              name: "BaldShield",
              url: "https://www.baldshield.com",
            },
            datePublished: "2026-07-16",
            dateModified: "2026-07-16",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": canonicalUrl,
            },
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-black text-white">
        <Header />

        <article className="px-6 py-12 md:px-12 lg:px-20">
          <div className="mx-auto max-w-3xl">
            {/* HERO */}
            <header>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-primary">
                Oleosidade
              </p>

              <h1
                className="mb-8 text-4xl font-bold leading-tight md:text-6xl"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Por que minha careca fica oleosa tão rápido?
              </h1>

              <p className="mb-8 text-xl leading-8 text-zinc-300">
                Entenda por que o couro cabeludo continua produzindo
                oleosidade mesmo sem cabelos, o que torna o brilho mais
                visível e como manter a pele equilibrada sem comprometer sua
                hidratação.
              </p>

              <div className="mb-10 rounded-2xl border border-zinc-800 bg-zinc-950 p-5">
                <p className="text-sm leading-6 text-zinc-400">
                  Conteúdo educativo elaborado com base em literatura
                  científica dermatológica e traduzido para uma linguagem
                  acessível. Este artigo não substitui a avaliação de um
                  dermatologista.
                </p>
              </div>

              <img
                src="/Blog/oleosidade-couro-cabeludo/homem-careca-oleosidade-couro-cabeludo-baldshield.webp"
                alt="Homem careca observando a oleosidade e o brilho do couro cabeludo"
                className="my-14 w-full rounded-[2rem] bg-black object-contain"
                loading="eager"
                fetchPriority="high"
              />
            </header>

            {/* INTRODUÇÃO */}
            <section>
              <p className="mb-6 text-[1.05rem] leading-8 text-zinc-300">
                Você lava o couro cabeludo pela manhã e, poucas horas depois,
                percebe que o brilho já começou a aparecer novamente?
              </p>

              <p className="mb-6 text-[1.05rem] leading-8 text-zinc-300">
                Essa é uma experiência comum entre homens carecas. Muitas
                pessoas imaginam que a ausência dos fios deveria diminuir a
                oleosidade, mas as estruturas responsáveis pela produção de
                sebo continuam presentes e ativas na pele.
              </p>

              <p className="mb-10 text-[1.05rem] leading-8 text-zinc-300">
                Além disso, sem os cabelos para distribuir parte dessa
                oleosidade, o sebo permanece diretamente sobre a superfície
                do couro cabeludo. Isso deixa sua presença e a reflexão da luz
                muito mais evidentes.
              </p>
            </section>

            {/* PRODUÇÃO DE OLEOSIDADE */}
            <section>
              <h2 className="mb-4 text-3xl font-bold">
                A oleosidade não desaparece quando o cabelo cai
              </h2>

              <p className="mb-6 text-[1.05rem] leading-8 text-zinc-300">
                A produção de oleosidade é uma função natural da pele. Ela
                acontece nas <strong className="text-white">glândulas sebáceas</strong>,
                estruturas que produzem uma mistura de lipídios conhecida
                como <strong className="text-white">sebo</strong>.
              </p>

              <p className="mb-6 text-[1.05rem] leading-8 text-zinc-300">
                O sebo não deve ser tratado como um inimigo. Em quantidade
                equilibrada, ele participa da proteção da superfície da pele
                e ajuda a limitar a perda de água.
              </p>

              <ul className="mb-10 space-y-4 text-[1.05rem] leading-8 text-zinc-300">
                <li>
                  <strong className="text-white">
                    Contribui para a barreira cutânea:
                  </strong>{" "}
                  ajuda a compor a camada lipídica que recobre a pele.
                </li>

                <li>
                  <strong className="text-white">
                    Reduz a perda de água:
                  </strong>{" "}
                  participa da proteção contra o ressecamento excessivo.
                </li>

                <li>
                  <strong className="text-white">
                    Favorece a flexibilidade da superfície:
                  </strong>{" "}
                  evita que a pele fique excessivamente áspera.
                </li>

                <li>
                  <strong className="text-white">
                    Atua como parte da defesa externa:
                  </strong>{" "}
                  integra o sistema de proteção natural da pele.
                </li>
              </ul>

              <img
                src="/Blog/oleosidade-couro-cabeludo/glandula-sebacea-couro-cabeludo-oleosidade.webp"
                alt="Representação educativa de uma glândula sebácea produzindo sebo"
                className="my-14 w-full rounded-[2rem] bg-black object-contain"
                loading="lazy"
              />

              <div className="mb-12 rounded-3xl border border-primary/30 bg-primary/10 p-7">
                <p className="text-[1.05rem] leading-8 text-zinc-200">
                  <strong className="text-white">Em resumo:</strong> a careca
                  não necessariamente produz mais sebo por não possuir
                  cabelos. O que muda é a maneira como essa oleosidade se
                  distribui e se torna visível.
                </p>
              </div>
            </section>

            {/* BRILHO */}
            <section>
              <h2 className="mb-4 text-3xl font-bold">
                Por que a careca parece mais oleosa?
              </h2>

              <p className="mb-6 text-[1.05rem] leading-8 text-zinc-300">
                Quando existem cabelos, parte do sebo se distribui pelos fios.
                No couro cabeludo exposto, ele permanece sobre uma superfície
                contínua e sem cobertura.
              </p>

              <p className="mb-6 text-[1.05rem] leading-8 text-zinc-300">
                Essa superfície reflete a luz com mais facilidade. Por isso, o
                brilho pode parecer ainda mais intenso sob o sol, iluminação
                artificial, flashes, telas e câmeras.
              </p>

              <p className="mb-10 text-[1.05rem] leading-8 text-zinc-300">
                Esse efeito visual também é explicado no artigo{" "}
                <a
                  href="/blog/por-que-minha-careca-brilha-na-camera"
                  className="font-semibold text-primary hover:underline"
                >
                  Por que minha careca parece mais brilhante na câmera do que
                  no espelho?
                </a>
              </p>
            </section>

            {/* OLEOSIDADE X HIDRATAÇÃO */}
            <section>
              <h2 className="mb-4 text-3xl font-bold">
                Mito ou verdade: pele oleosa já está hidratada?
              </h2>

              <p className="mb-6 text-[1.05rem] leading-8 text-zinc-300">
                <strong className="text-white">Mito.</strong>
              </p>

              <p className="mb-6 text-[1.05rem] leading-8 text-zinc-300">
                Oleosidade e hidratação são processos diferentes. A
                oleosidade está relacionada aos lipídios presentes na
                superfície; a hidratação depende da disponibilidade de água
                nas camadas mais externas e da capacidade da barreira cutânea
                de retê-la.
              </p>

              <p className="mb-6 text-[1.05rem] leading-8 text-zinc-300">
                Por isso, uma pele pode estar oleosa e, ao mesmo tempo,
                apresentar desidratação, sensibilidade ou desconforto.
              </p>

              <p className="mb-10 text-[1.05rem] leading-8 text-zinc-300">
                Tentar remover completamente o sebo com lavagens agressivas
                pode comprometer a barreira da pele. O objetivo de uma rotina
                adequada não é deixar o couro cabeludo sem qualquer
                oleosidade, mas mantê-lo limpo, confortável e equilibrado.
              </p>

              <p className="mb-10 text-[1.05rem] leading-8 text-zinc-300">
                Para compreender melhor essa diferença, leia também{" "}
                <a
                  href="/blog/por-que-homens-carecas-deveriam-hidratar-o-couro-cabeludo"
                  className="font-semibold text-primary hover:underline"
                >
                  Por que homens carecas deveriam hidratar o couro cabeludo?
                </a>
              </p>
            </section>

            {/* NIACINAMIDA */}
            <section>
              <h2 className="mb-4 text-3xl font-bold">
                O que a ciência sabe sobre a niacinamida?
              </h2>

              <p className="mb-6 text-[1.05rem] leading-8 text-zinc-300">
                A <strong className="text-white">niacinamida</strong>, também
                chamada nicotinamida, é uma forma da vitamina B3 amplamente
                estudada em dermatologia e utilizada em formulações tópicas.
              </p>

              <p className="mb-6 text-[1.05rem] leading-8 text-zinc-300">
                Um estudo clínico com niacinamida tópica a 2% observou
                alterações em medidas de produção de sebo facial. Esse
                resultado é relevante, mas deve ser interpretado com cautela:
                o estudo foi realizado na face e não permite concluir,
                isoladamente, que o mesmo efeito ocorrerá de forma idêntica no
                couro cabeludo de todas as pessoas.
              </p>

              <p className="mb-10 text-[1.05rem] leading-8 text-zinc-300">
                A evidência é mais consistente quando avaliamos sua
                contribuição para a barreira cutânea. Estudos experimentais e
                revisões descrevem aumento de ceramidas e outros lipídios do
                estrato córneo, além de redução da perda de água
                transepidérmica em determinados contextos.
              </p>

              <img
                src="/Blog/oleosidade-couro-cabeludo/niacinamida-equilibrio-oleosidade-couro-cabeludo.webp"
                alt="Infográfico educativo sobre niacinamida, oleosidade e barreira cutânea"
                className="my-14 w-full rounded-[2rem] bg-black object-contain"
                loading="lazy"
              />

              <div className="my-10 rounded-3xl border border-primary/30 bg-zinc-950 p-8">
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-primary">
                  Evidência científica
                </p>

                <h3 className="mb-5 text-2xl font-bold">
                  O que podemos afirmar com responsabilidade
                </h3>

                <ul className="space-y-4 text-[1.05rem] leading-8 text-zinc-300">
                  <li>
                    <strong className="text-white">
                      Barreira cutânea:
                    </strong>{" "}
                    estudos indicam que a niacinamida pode favorecer a síntese
                    de ceramidas e outros componentes lipídicos.
                  </li>

                  <li>
                    <strong className="text-white">
                      Perda de água:
                    </strong>{" "}
                    há evidências de redução da perda de água
                    transepidérmica em determinadas condições.
                  </li>

                  <li>
                    <strong className="text-white">
                      Produção de sebo:
                    </strong>{" "}
                    existe evidência clínica facial sugerindo benefício, mas
                    os dados não devem ser extrapolados como uma garantia
                    específica para o couro cabeludo.
                  </li>

                  <li>
                    <strong className="text-white">
                      Resposta individual:
                    </strong>{" "}
                    os efeitos dependem da concentração, do veículo, da
                    formulação e das características de cada pele.
                  </li>
                </ul>
              </div>
            </section>

            {/* FATORES DO DIA A DIA */}
            <section>
              <h2 className="mb-4 text-3xl font-bold">
                O que pode deixar a oleosidade mais perceptível?
              </h2>

              <p className="mb-6 text-[1.05rem] leading-8 text-zinc-300">
                A quantidade de sebo e sua percepção visual podem variar de
                acordo com fatores individuais e ambientais.
              </p>

              <ul className="mb-10 space-y-4 text-[1.05rem] leading-8 text-zinc-300">
                <li>
                  <strong className="text-white">Calor e transpiração:</strong>{" "}
                  podem deixar a superfície mais úmida e brilhante.
                </li>

                <li>
                  <strong className="text-white">
                    Atividades físicas:
                  </strong>{" "}
                  aumentam o suor e a percepção de oleosidade ao longo do dia.
                </li>

                <li>
                  <strong className="text-white">
                    Bonés e capacetes:
                  </strong>{" "}
                  criam um ambiente mais quente e abafado; isso não significa
                  necessariamente que as glândulas passaram a produzir mais
                  sebo.
                </li>

                <li>
                  <strong className="text-white">
                    Resíduos de cosméticos:
                  </strong>{" "}
                  podem se acumular quando a limpeza não é adequada.
                </li>

                <li>
                  <strong className="text-white">
                    Produtos muito agressivos:
                  </strong>{" "}
                  podem comprometer a barreira cutânea e aumentar o desconforto.
                </li>

                <li>
                  <strong className="text-white">
                    Características individuais:
                  </strong>{" "}
                  genética, hormônios e tipo de pele influenciam a produção de
                  sebo.
                </li>
              </ul>
            </section>

            {/* ROTINA PRÁTICA */}
            <section>
              <h2 className="mb-4 text-3xl font-bold">
                Como cuidar da oleosidade sem agredir a pele?
              </h2>

              <p className="mb-6 text-[1.05rem] leading-8 text-zinc-300">
                Não existe uma solução universal. Ainda assim, uma rotina
                simples e consistente tende a ser mais adequada do que
                intervenções agressivas ou lavagens repetidas sem necessidade.
              </p>

              <img
                src="/Blog/oleosidade-couro-cabeludo/rotina-cuidados-couro-cabeludo-oleosidade.webp"
                alt="Rotina educativa de limpeza, hidratação e proteção do couro cabeludo"
                className="my-14 w-full rounded-[2rem] bg-black object-contain"
                loading="lazy"
              />

              <h3 className="mb-3 text-2xl font-bold">
                1. Faça uma limpeza equilibrada
              </h3>

              <p className="mb-8 text-[1.05rem] leading-8 text-zinc-300">
                Remova suor, poluição, resíduos e o excesso de oleosidade sem
                buscar uma sensação extrema de ressecamento. Pele muito
                repuxada após a lavagem pode ser um sinal de limpeza
                excessivamente agressiva.
              </p>

              <h3 className="mb-3 text-2xl font-bold">
                2. Não abandone a hidratação
              </h3>

              <p className="mb-8 text-[1.05rem] leading-8 text-zinc-300">
                Uma pele oleosa também pode precisar de hidratação. O produto e
                a textura devem ser compatíveis com as características do
                couro cabeludo e com o conforto do usuário.
              </p>

              <h3 className="mb-3 text-2xl font-bold">
                3. Mantenha a proteção diária
              </h3>

              <p className="mb-8 text-[1.05rem] leading-8 text-zinc-300">
                A ausência dos cabelos deixa a pele diretamente exposta à
                radiação solar. A fotoproteção deve fazer parte da rotina,
                independentemente da presença de oleosidade.
              </p>

              <h3 className="mb-3 text-2xl font-bold">
                4. Observe como sua pele responde
              </h3>

              <p className="mb-10 text-[1.05rem] leading-8 text-zinc-300">
                Ardor persistente, vermelhidão, descamação intensa, feridas,
                coceira importante ou mudança súbita da oleosidade justificam
                uma avaliação dermatológica.
              </p>

              <p className="mb-10 text-[1.05rem] leading-8 text-zinc-300">
                Conheça também o artigo{" "}
                <a
                  href="/blog/por-que-homens-carecas-deveriam-limpar-o-couro-cabeludo"
                  className="font-semibold text-primary hover:underline"
                >
                  Por que homens carecas deveriam limpar o couro cabeludo?
                </a>
              </p>
            </section>

            {/* SCALP DEFENSE SYSTEM */}
            <section>
              <h2 className="mb-4 text-3xl font-bold">
                Como isso se encaixa no Scalp Defense System™?
              </h2>

              <p className="mb-6 text-[1.05rem] leading-8 text-zinc-300">
                Uma rotina de cuidados não deve ser construída apenas para
                remover o brilho. O couro cabeludo também precisa de
                hidratação, proteção e cuidados que respeitem sua barreira.
              </p>

              <p className="mb-10 text-[1.05rem] leading-8 text-zinc-300">
                O{" "}
                <a
                  href="/blog/o-que-e-scalp-defense-system"
                  className="font-semibold text-primary hover:underline"
                >
                  Scalp Defense System™
                </a>{" "}
                organiza esses cuidados em quatro etapas complementares:
                limpar, hidratar, proteger e controlar a aparência ao longo do
                dia.
              </p>

              <img
                src="/Blog/oleosidade-couro-cabeludo/scalp-defense-system-controle-oleosidade.webp"
                alt="Scalp Defense System da BaldShield com quatro etapas de cuidado"
                className="my-14 w-full rounded-[2rem] bg-black object-contain"
                loading="lazy"
              />

              <p className="mb-10 text-[1.05rem] leading-8 text-zinc-300">
                Mais do que indicar uma solução isolada, o método reforça que
                consistência e equilíbrio são fundamentais para o cuidado
                diário do couro cabeludo exposto.
              </p>
            </section>

            {/* FAQ */}
            <section>
              <h2 className="mb-8 text-3xl font-bold">
                Perguntas frequentes
              </h2>

              <div className="space-y-10">
                <div>
                  <h3 className="mb-3 text-2xl font-bold">
                    Homens carecas produzem mais oleosidade?
                  </h3>

                  <p className="text-[1.05rem] leading-8 text-zinc-300">
                    Não necessariamente. A ausência dos cabelos torna o sebo
                    mais visível sobre a superfície, mas isso não significa,
                    por si só, que as glândulas estejam produzindo uma
                    quantidade maior.
                  </p>
                </div>

                <div>
                  <h3 className="mb-3 text-2xl font-bold">
                    Lavar a cabeça várias vezes ao dia resolve?
                  </h3>

                  <p className="text-[1.05rem] leading-8 text-zinc-300">
                    Nem sempre. A frequência adequada depende da pele, da
                    rotina e do produto utilizado. Lavagens agressivas ou
                    desnecessárias podem aumentar ressecamento, sensibilidade
                    e desconforto.
                  </p>
                </div>

                <div>
                  <h3 className="mb-3 text-2xl font-bold">
                    Pele oleosa precisa de hidratante?
                  </h3>

                  <p className="text-[1.05rem] leading-8 text-zinc-300">
                    Pode precisar. Oleosidade está relacionada aos lipídios da
                    superfície, enquanto hidratação está relacionada à água e
                    à integridade da barreira cutânea.
                  </p>
                </div>

                <div>
                  <h3 className="mb-3 text-2xl font-bold">
                    Boné aumenta a produção de sebo?
                  </h3>

                  <p className="text-[1.05rem] leading-8 text-zinc-300">
                    Não é correto afirmar isso de forma geral. Bonés e
                    capacetes podem aumentar calor, suor e abafamento,
                    tornando a oleosidade e o desconforto mais perceptíveis.
                  </p>
                </div>

                <div>
                  <h3 className="mb-3 text-2xl font-bold">
                    Niacinamida controla a oleosidade da careca?
                  </h3>

                  <p className="text-[1.05rem] leading-8 text-zinc-300">
                    Há estudos faciais sugerindo benefício da niacinamida
                    tópica sobre parâmetros relacionados ao sebo. Entretanto,
                    ainda não devemos tratar esse resultado como uma garantia
                    específica para o couro cabeludo. Sua contribuição à
                    barreira cutânea possui suporte científico mais amplo.
                  </p>
                </div>

                <div>
                  <h3 className="mb-3 text-2xl font-bold">
                    Quando devo procurar um dermatologista?
                  </h3>

                  <p className="text-[1.05rem] leading-8 text-zinc-300">
                    Procure avaliação diante de coceira persistente,
                    descamação intensa, feridas, inflamação, dor, manchas,
                    lesões que não cicatrizam ou alterações súbitas na pele.
                  </p>
                </div>
              </div>
            </section>

            {/* CONCLUSÃO */}
            <section className="mt-14">
              <h2 className="mb-4 text-3xl font-bold">Conclusão</h2>

              <p className="mb-6 text-[1.05rem] leading-8 text-zinc-300">
                A oleosidade é um processo natural e necessário. O problema
                não é a existência do sebo, mas o desconforto, o acúmulo de
                resíduos ou o desequilíbrio que pode surgir em determinadas
                rotinas e tipos de pele.
              </p>

              <p className="mb-6 text-[1.05rem] leading-8 text-zinc-300">
                A ausência dos cabelos torna o brilho mais aparente, mas não
                significa automaticamente que o couro cabeludo esteja sujo ou
                produzindo mais óleo.
              </p>

              <p className="mb-10 text-[1.05rem] leading-8 text-zinc-300">
                Entender essa diferença permite substituir a tentativa de
                eliminar toda a oleosidade por uma rotina mais inteligente:
                limpar sem agredir, hidratar quando necessário, proteger e
                observar as necessidades reais da pele.
              </p>
            </section>

            {/* REFERÊNCIAS */}
            <section className="mt-14 rounded-[2rem] border border-zinc-800 bg-zinc-950 p-8">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-primary">
                Referências científicas
              </p>

              <h2 className="mb-6 text-2xl font-bold">
                Fontes utilizadas na elaboração deste conteúdo
              </h2>

              <ol className="space-y-5 text-sm leading-7 text-zinc-400">
                <li>
                  1. Draelos ZD, Matsubara A, Smiles K.{" "}
                  <em>
                    The effect of 2% niacinamide on facial sebum production.
                  </em>{" "}
                  Journal of Cosmetic and Laser Therapy. 2006.{" "}
                  <a
                    href="https://pubmed.ncbi.nlm.nih.gov/16766489/"
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-primary hover:underline"
                  >
                    Consultar no PubMed
                  </a>
                  .
                </li>

                <li>
                  2. Tanno O, Ota Y, Kitamura N, Katsube T, Inoue S.{" "}
                  <em>
                    Nicotinamide increases biosynthesis of ceramides as well
                    as other stratum corneum lipids to improve the epidermal
                    permeability barrier.
                  </em>{" "}
                  British Journal of Dermatology. 2000.{" "}
                  <a
                    href="https://pubmed.ncbi.nlm.nih.gov/10971324/"
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-primary hover:underline"
                  >
                    Consultar no PubMed
                  </a>
                  .
                </li>

                <li>
                  3. Gehring W.{" "}
                  <em>Nicotinic acid/niacinamide and the skin.</em> Journal of
                  Cosmetic Dermatology. 2004.{" "}
                  <a
                    href="https://pubmed.ncbi.nlm.nih.gov/17147561/"
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-primary hover:underline"
                  >
                    Consultar no PubMed
                  </a>
                  .
                </li>

                <li>
                  4. Marques C, et al.{" "}
                  <em>
                    Mechanistic insights into the multiple functions of
                    niacinamide.
                  </em>{" "}
                  2024.{" "}
                  <a
                    href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11047333/"
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-primary hover:underline"
                  >
                    Consultar no PubMed Central
                  </a>
                  .
                </li>

                <li>
                  5. Wohlrab J, Kreft D.{" "}
                  <em>
                    Niacinamide: mechanisms of action and its topical use in
                    dermatology.
                  </em>{" "}
                  Skin Pharmacology and Physiology. 2014.{" "}
                  <a
                    href="https://pubmed.ncbi.nlm.nih.gov/24993939/"
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-primary hover:underline"
                  >
                    Consultar no PubMed
                  </a>
                  .
                </li>
              </ol>

              <p className="mt-7 text-sm leading-6 text-zinc-500">
                Nota editorial: parte importante das evidências sobre
                niacinamida e oleosidade foi produzida em pele facial. O artigo
                evita extrapolar esses resultados como uma comprovação
                específica para o couro cabeludo.
              </p>
            </section>

            {/* CTA */}
            <div className="mt-14 rounded-[2rem] border border-primary/30 bg-primary/10 p-8 text-center">
              <h2 className="mb-4 text-3xl font-bold">
                Ciência. Cuidado. Confiança.
              </h2>

              <p className="mb-6 text-[1.05rem] leading-8 text-zinc-300">
                Conheça o Scalp Defense System™ e descubra uma abordagem
                completa para o cuidado diário do couro cabeludo exposto.
              </p>

              <a
                href="/blog/o-que-e-scalp-defense-system"
                className="inline-flex rounded-2xl bg-primary px-8 py-4 font-semibold text-black transition-transform hover:scale-[1.02]"
              >
                Conhecer o Scalp Defense System™
              </a>
            </div>
          </div>
        </article>

        <Footer />
      </div>
    </>
  );
};

export default BlogPostOleosidadeCouroCabeludo;