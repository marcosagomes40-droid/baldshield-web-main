import React from "react";

import { Helmet } from "react-helmet";

import Header from "@/components/Header";

import Footer from "@/components/Footer";

const BlogPostExposedScalpCare = () => {
  const canonical =
    "https://www.baldshield.com/blog/exposed-scalp-care-couro-cabeludo-exposto";

  const heroImage =
    "https://www.baldshield.com/Blog/exposed-scalp-care/exposed-scalp-care-baldshield.webp";

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Exposed Scalp Care: o cuidado com o couro cabeludo exposto",
    description:
      "Entenda o conceito de Exposed Scalp Care e por que o couro cabeludo permanentemente exposto merece uma rotina própria de limpeza, hidratação e proteção.",
    image: [heroImage],
    datePublished: "2026-10-04",
    dateModified: "2026-10-04",
    author: {
      "@type": "Organization",
      name: "BaldShield",
      url: "https://www.baldshield.com/",
    },
    publisher: {
      "@type": "Organization",
      name: "BaldShield",
      url: "https://www.baldshield.com/",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonical,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "BaldShield",
        item: "https://www.baldshield.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://www.baldshield.com/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Exposed Scalp Care: o cuidado com o couro cabeludo exposto",
        item: canonical,
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>
          Exposed Scalp Care: cuidado do couro cabeludo exposto | BaldShield
        </title>

        <meta
          name="description"
          content="Entenda o conceito de Exposed Scalp Care e por que o couro cabeludo permanentemente exposto merece uma rotina própria de limpeza, hidratação e proteção."
        />

        <link rel="canonical" href={canonical} />

        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Exposed Scalp Care: o cuidado com o couro cabeludo exposto"
        />
        <meta
          property="og:description"
          content="Quando o cabelo deixa de cobrir o couro cabeludo, a condição de exposição muda. Conheça a abordagem BaldShield para o cuidado dessa pele."
        />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content={heroImage} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Exposed Scalp Care: o cuidado com o couro cabeludo exposto"
        />
        <meta
          name="twitter:description"
          content="Uma abordagem de cuidado dedicada às necessidades da pele do couro cabeludo que vive permanentemente exposta."
        />
        <meta name="twitter:image" content={heroImage} />

        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>

        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <Header />

      <main className="bg-black text-zinc-200">
        <article className="mx-auto max-w-5xl px-6 pb-24 pt-16 md:px-8 md:pt-24">
          <nav
            aria-label="Breadcrumb"
            className="mb-8 flex flex-wrap items-center gap-2 text-sm text-zinc-500"
          >
            <a
              href="/"
              className="transition-colors hover:text-primary"
            >
              Home
            </a>

            <span>/</span>

            <a
              href="/blog"
              className="transition-colors hover:text-primary"
            >
              Blog
            </a>

            <span>/</span>

            <span className="text-zinc-300">
              Exposed Scalp Care
            </span>
          </nav>

          <header className="mb-12 max-w-4xl text-left">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
              Scalp Care & BaldShield
            </p>

            <h1
              className="text-4xl font-bold leading-tight text-white md:text-6xl"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Exposed Scalp Care: o cuidado com o couro cabeludo exposto
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-zinc-300 md:text-xl">
              Quando o cabelo deixa de cobrir o couro cabeludo, uma parte da
              pele que sempre esteve ali passa a viver permanentemente
              exposta. Se a condição de exposição mudou, o cuidado também
              pode mudar.
            </p>

            <div className="mt-7 flex items-center gap-3 text-sm text-zinc-500">
              <span>04 out. 2026</span>
              <span>•</span>
              <span>6 min de leitura</span>
            </div>
          </header>

          <figure className="mb-14 overflow-hidden rounded-[2rem] border border-zinc-800 bg-zinc-950">
            <img
              src="/Blog/exposed-scalp-care/exposed-scalp-care-baldshield.webp"
              alt="Homem negro com couro cabeludo exposto representando o conceito Exposed Scalp Care da BaldShield"
              className="h-auto w-full"
              loading="eager"
            />
          </figure>

          <div className="mx-auto max-w-3xl text-lg leading-relaxed text-zinc-300">
            <h2
              className="mb-5 mt-14 text-left text-3xl font-bold text-white md:text-4xl"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Existe uma pele que aprendemos a não enxergar
            </h2>

            <p className="mb-6">
              Durante boa parte da vida, pensamos no couro cabeludo quase
              sempre a partir do cabelo.
            </p>

            <p className="mb-6">
              Shampoo. Condicionador. Caspa. Oleosidade. Queda. Crescimento.
            </p>

            <p className="mb-6">
              Faz sentido. Afinal, durante décadas, grande parte da indústria
              construiu a ideia de scalp care em torno da relação entre{" "}
              <strong className="text-white">
                couro cabeludo e cabelo.
              </strong>
            </p>

            <p className="mb-6">
              Mas existe outra realidade.
            </p>

            <p className="mb-6">
              Para milhões de pessoas, por escolha, genética ou diferentes
              formas de perda capilar, o couro cabeludo deixa de permanecer
              coberto e passa a ficar{" "}
              <strong className="text-white">
                permanentemente exposto.
              </strong>
            </p>

            <p className="mb-6">
              E quando isso acontece, algo importante muda:
            </p>

            <div className="my-10 rounded-[2rem] border border-primary/30 bg-zinc-950 px-8 py-10 text-center md:px-12">
              <p className="mx-auto max-w-2xl text-xl font-semibold leading-relaxed text-white md:text-2xl">
                O cabelo pode ter ido embora. A pele continua ali.
              </p>
            </div>

            <h2
              className="mb-5 mt-14 text-left text-3xl font-bold text-white md:text-4xl"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              O que muda quando o couro cabeludo fica exposto?
            </h2>

            <p className="mb-6">
              O cabelo não exerce apenas uma função estética. Ele também cria
              uma cobertura física sobre a pele do couro cabeludo.
            </p>

            <p className="mb-6">
              Estudos demonstram que os fios oferecem determinado grau de
              proteção contra a radiação ultravioleta, influenciado por fatores
              como densidade, espessura e pigmentação. Quando essa cobertura
              diminui, a pele fica mais diretamente exposta à radiação solar.
            </p>

            <p className="mb-6">
              É por isso que recomendações dermatológicas dão atenção especial
              à fotoproteção do couro cabeludo em pessoas calvas ou com
              rarefação capilar.
            </p>

            <p className="mb-6">
              Mas viver com o couro cabeludo exposto não significa lidar
              apenas com o sol.
            </p>

            <p className="mb-10">
              Essa pele participa diretamente da rotina: suor, calor, frio,
              contato com bonés e capacetes, produtos cosméticos e, para quem
              raspa a cabeça, o próprio barbear.
            </p>

            <div className="my-10 rounded-[2rem] border border-primary/30 bg-zinc-950 px-8 py-10 text-center md:px-12">
              <p className="mx-auto max-w-2xl text-xl font-semibold leading-relaxed text-white md:text-2xl">
                O couro cabeludo não deixou de ser couro cabeludo.
                <br />
                Ele simplesmente deixou de estar coberto.
              </p>
            </div>

            <figure className="my-12 overflow-hidden rounded-[2rem] border border-zinc-800 bg-zinc-950">
              <img
                src="/Blog/exposed-scalp-care/haircare-exposed-scalp-care-baldshield.webp"
                alt="Representação da transição de uma cabeça com cabelo para o couro cabeludo permanentemente exposto"
                className="h-auto w-full"
                loading="lazy"
              />
            </figure>

            <h2
              className="mb-5 mt-14 text-left text-3xl font-bold text-white md:text-4xl"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Haircare? Skincare? Ou algo que merece um olhar próprio?
            </h2>

            <p className="mb-6">
              É aqui que aparece uma lacuna interessante.
            </p>

            <p className="mb-6">
              O <strong className="text-white">haircare</strong> tradicional
              está fortemente associado aos cabelos e às necessidades
              relacionadas a eles.
            </p>

            <p className="mb-6">
              O <strong className="text-white">skincare</strong> consolidou
              hábitos de limpeza, hidratação e proteção principalmente para
              rosto e corpo.
            </p>

            <p className="mb-6">
              Mas quem vive com o couro cabeludo permanentemente exposto
              começa a conviver com questões muito próprias dessa região.
            </p>

            <p className="mb-4">
              Como limpar essa pele no dia a dia?
            </p>

            <p className="mb-4">
              Como hidratá-la considerando conforto e também o acabamento
              visual de uma cabeça sem cabelo?
            </p>

            <p className="mb-4">
              Como incorporar proteção solar à rotina?
            </p>

            <p className="mb-6">
              Como cuidar da pele submetida regularmente ao barbear?
            </p>

            <p className="mb-6">
              Não significa que o couro cabeludo tenha se transformado em uma
              “nova pele”.
            </p>

            <p className="mb-10">
              Significa que{" "}
              <strong className="text-white">
                uma região que antes tinha cobertura capilar passou a viver em
                outra condição de exposição.
              </strong>
            </p>

            <h2
              className="mb-5 mt-14 text-left text-3xl font-bold text-white md:text-4xl"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              O que é Exposed Scalp Care?
            </h2>

            <p className="mb-6">
              Na BaldShield, chamamos de{" "}
              <strong className="text-white">Exposed Scalp Care</strong> a
              abordagem de cuidado dedicada às necessidades da pele do couro
              cabeludo que vive permanentemente exposta.
            </p>

            <p className="mb-4">
              Não é sobre combater a calvície.
            </p>

            <p className="mb-4">
              Não é sobre estimular o crescimento dos cabelos.
            </p>

            <p className="mb-6">
              Não é uma proposta de diagnóstico ou tratamento dermatológico.
            </p>

            <p className="mb-10">
              É sobre reconhecer uma realidade muito mais simples:{" "}
              <strong className="text-white">
                quando o cabelo deixa de ser a cobertura permanente do couro
                cabeludo, aquela pele continua precisando ser limpa, hidratada
                e protegida.
              </strong>
            </p>

            <div className="my-10 rounded-[2rem] border border-primary/30 bg-zinc-950 px-8 py-10 text-center md:px-12">
              <p className="mx-auto max-w-2xl text-xl font-semibold leading-relaxed text-white md:text-2xl">
                Se a condição de exposição mudou, a rotina de cuidado também
                pode mudar.
              </p>
            </div>

            <h2
              className="mb-5 mt-14 text-left text-3xl font-bold text-white md:text-4xl"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Limpar. Hidratar. Proteger.
            </h2>

            <p className="mb-6">
              Para a BaldShield, o cuidado diário do couro cabeludo exposto
              pode começar por três fundamentos simples.
            </p>

            <p className="mb-3 font-bold uppercase tracking-[0.2em] text-primary">
              Limpar
            </p>

            <p className="mb-8">
              Remover suor, oleosidade, resíduos e impurezas acumulados ao
              longo do dia, respeitando a pele.
            </p>

            <p className="mb-3 font-bold uppercase tracking-[0.2em] text-primary">
              Hidratar
            </p>

            <p className="mb-8">
              Contribuir para conforto e equilíbrio da pele, considerando
              também uma característica especialmente perceptível quando não
              há cabelo: seu acabamento visual.
            </p>

            <p className="mb-3 font-bold uppercase tracking-[0.2em] text-primary">
              Proteger
            </p>

            <p className="mb-10">
              Reconhecer que uma região sem cobertura capilar está diretamente
              exposta ao ambiente e que a fotoproteção merece atenção
              especial.
            </p>

            <div className="my-10 rounded-[2rem] border border-primary/30 bg-zinc-950 px-8 py-10 text-center md:px-12">
              <p className="mx-auto max-w-2xl text-xl font-semibold leading-relaxed text-white md:text-2xl">
                Três necessidades simples. Uma região que por muito tempo
                recebeu pouca atenção específica.
              </p>
            </div>

            <figure className="my-12 overflow-hidden rounded-[2rem] border border-zinc-800 bg-zinc-950">
              <img
                src="/Blog/exposed-scalp-care/protecao-couro-cabeludo-exposto-baldshield.webp"
                alt="Homem com couro cabeludo exposto e representação visual de fatores ambientais como sol, vento, umidade e frio"
                className="h-auto w-full"
                loading="lazy"
              />
            </figure>

            <h2
              className="mb-5 mt-14 text-left text-3xl font-bold text-white md:text-4xl"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Onde a BaldShield entra nessa história?
            </h2>

            <p className="mb-6">
              A BaldShield nasceu justamente da percepção dessa lacuna.
            </p>

            <p className="mb-6">
              Em vez de olhar para uma cabeça sem cabelo como um problema a
              ser corrigido, escolhemos olhar para a pele que ficou exposta.
            </p>

            <p className="mb-6">
              É nesse território que estamos construindo a BaldShield.
            </p>

            <div className="my-10 rounded-[2rem] border border-primary/30 bg-zinc-950 px-8 py-10 text-center md:px-12">
              <p className="mx-auto max-w-2xl text-xl font-semibold leading-relaxed text-white md:text-2xl">
                Exposed Scalp Care representa o território de cuidado.
                <br /><br />
                BaldShield é a marca especializada nesse território.
                <br /><br />
                Scalp Defense System™ é a maneira como organizamos nossa
                abordagem de cuidado.
              </p>
            </div>

            <p className="mb-6 text-center text-xl font-semibold text-white md:text-2xl">
              CLEAN → HYDRATE → DEFENSE
            </p>

            <p className="mb-10 text-center text-primary">
              Limpar → Hidratar → Proteger
            </p>

            <p className="mb-6">
              Não para esconder a cabeça.
            </p>

            <p className="mb-6">
              Não para tentar recuperar aquilo que já não faz parte dela.
            </p>

            <p className="mb-10">
              Mas para cuidar melhor daquilo que está totalmente à vista.
            </p>

            <h2
              className="mb-5 mt-14 text-left text-3xl font-bold text-white md:text-4xl"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Tornar visível uma necessidade que sempre esteve ali
            </h2>

            <p className="mb-6">
              Talvez durante muito tempo tenhamos colocado o couro cabeludo
              exposto em uma espécie de território intermediário.
            </p>

            <p className="mb-6">
              Sem cabelo, ele deixa de ocupar o centro da lógica tradicional
              do haircare. Ao mesmo tempo, raramente recebe a mesma atenção
              cotidiana dedicada à pele do rosto.
            </p>

            <p className="mb-6">
              A BaldShield acredita que existe espaço para mudar essa
              percepção.
            </p>

            <p className="mb-6">
              <strong className="text-white">
                Exposed Scalp Care é, para nós, o cuidado dedicado às
                necessidades da pele do couro cabeludo permanentemente
                exposto.
              </strong>
            </p>

            <p className="mb-6">
              Mais do que reivindicar a criação de uma categoria, queremos
              ajudar a tornar essa necessidade visível.
            </p>

            <p className="mb-6">
              Porque uma cabeça sem cabelo não é uma cabeça sem cuidado.
            </p>

            <p className="mb-6 text-xl font-semibold text-white">
              É pele exposta.
            </p>

            <p className="mb-10">
              E é justamente aí que começa a nossa maneira de olhar para ela.
            </p>

            <p
              className="mb-14 text-2xl font-bold text-primary"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Confidence for the Bold.
            </p>

            <div className="border-t border-zinc-800 pt-10">
              <h2
                className="mb-5 text-2xl font-bold text-white"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Fontes e referências
              </h2>

              <ul className="space-y-4 text-sm leading-relaxed text-zinc-500">
                <li>
                  <a
                    href="https://pubmed.ncbi.nlm.nih.gov/18764896/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-primary"
                  >
                    Hair as a natural sun protection factor: a quantitative
                    study — PubMed
                  </a>
                </li>

                <li>
                  <a
                    href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4365470/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-primary"
                  >
                    Brazilian Consensus on Photoprotection — PubMed Central
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.aad.org/public/diseases/hair-loss/types/alopecia/self-care"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-primary"
                  >
                    Hair loss: tips for managing — American Academy of
                    Dermatology
                  </a>
                </li>
              </ul>

              <p className="mt-8 text-xs leading-relaxed text-zinc-600">
                Este conteúdo tem caráter exclusivamente informativo e
                educativo. Não substitui diagnóstico, orientação ou tratamento
                realizado por médico ou outro profissional de saúde
                habilitado.
              </p>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
};

export default BlogPostExposedScalpCare;