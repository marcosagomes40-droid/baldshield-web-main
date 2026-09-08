import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Header from "@/components/Header.jsx";
import Footer from "@/components/Footer.jsx";

const BlogPostAcidoHialuronico = () => {
  const canonicalUrl =
    "https://www.baldshield.com/blog/acido-hialuronico-couro-cabeludo-exposto";

  const heroImage =
    "https://www.baldshield.com/Blog/acido-hialuronico/acido-hialuronico-couro-cabeludo-exposto-baldshield.webp";

  const [openFaq, setOpenFaq] = useState(null);

  const faqItems = [
    {
      question: "O que é ácido hialurônico?",
      answer:
        "O ácido hialurônico é uma substância naturalmente presente no organismo e encontrada na matriz extracelular da pele. Na cosmética, ele e seus derivados são amplamente utilizados em formulações voltadas à hidratação e ao condicionamento da pele.",
    },
    {
      question: "Ácido hialurônico é um ácido esfoliante?",
      answer:
        "Não. Apesar do nome, o ácido hialurônico não deve ser confundido com ácidos esfoliantes utilizados no skincare. Suas propriedades e sua utilização cosmética são diferentes.",
    },
    {
      question: "Ácido hialurônico ajuda na hidratação da pele?",
      answer:
        "Formulações tópicas contendo ácido hialurônico são amplamente utilizadas em cosméticos destinados à hidratação. Estudos clínicos também observaram melhora em parâmetros de hidratação da pele em determinadas formulações e condições de uso.",
    },
    {
      question: "Todo ácido hialurônico é igual?",
      answer:
        "Não. Peso molecular, forma utilizada, concentração, veículo e a combinação com os demais componentes da fórmula podem influenciar o comportamento de uma formulação cosmética.",
    },
    {
      question:
        "Ácido hialurônico pode fazer parte do cuidado do couro cabeludo exposto?",
      answer:
        "O couro cabeludo é pele e continua apresentando necessidades de cuidado quando está exposto. Nesse contexto, ingredientes amplamente utilizados em formulações para hidratação da pele, como o ácido hialurônico, podem integrar produtos cosméticos desenvolvidos para o cuidado dessa região.",
    },
  ];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline:
      "Ácido hialurônico no couro cabeludo exposto: faz sentido?",
    description:
      "Entenda o que a ciência explica sobre ácido hialurônico, hidratação da pele, diferentes formas do ingrediente e sua aplicação no cuidado do couro cabeludo exposto.",
    image: heroImage,
    author: {
      "@type": "Organization",
      name: "BaldShield",
      url: "https://www.baldshield.com",
    },
    publisher: {
      "@type": "Organization",
      name: "BaldShield",
      url: "https://www.baldshield.com",
    },
    datePublished: "2026-09-07",
    dateModified: "2026-09-07",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
    inLanguage: "pt-BR",
    articleSection: "Scalp Care",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Início",
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
        name: "Ácido hialurônico no couro cabeludo exposto",
        item: canonicalUrl,
      },
    ],
  };

  return (
    <>
      <Helmet>
        <html lang="pt-BR" />

        <title>
          Ácido hialurônico no couro cabeludo exposto | BaldShield
        </title>

        <meta
          name="description"
          content="Ácido hialurônico no couro cabeludo exposto faz sentido? Entenda sua relação com hidratação da pele, formulação e scalp care."
        />

        <meta
          name="keywords"
          content="ácido hialurônico couro cabeludo, ácido hialurônico careca, hidratação couro cabeludo, couro cabeludo exposto, scalp care, hidratação careca, BaldShield"
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
          content="Ácido hialurônico no couro cabeludo exposto: faz sentido?"
        />

        <meta
          property="og:description"
          content="Um dos ativos mais conhecidos do skincare também pode fazer parte do cuidado do couro cabeludo exposto. Entenda o que existe por trás do ácido hialurônico."
        />

        <meta property="og:image" content={heroImage} />

        <meta
          property="og:image:alt"
          content="Aplicação cosmética sobre couro cabeludo exposto representando hidratação e ácido hialurônico"
        />

        <meta
          property="article:published_time"
          content="2026-09-07T12:00:00-03:00"
        />

        <meta
          property="article:modified_time"
          content="2026-09-07T12:00:00-03:00"
        />

        <meta property="article:section" content="Scalp Care" />

        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:title"
          content="Ácido hialurônico no couro cabeludo exposto | BaldShield"
        />

        <meta
          name="twitter:description"
          content="O que a ciência explica sobre ácido hialurônico, hidratação e cuidado do couro cabeludo exposto."
        />

        <meta name="twitter:image" content={heroImage} />

        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>

        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>

        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-black text-white">
        <Header />

        <main>
          <article className="px-6 py-12 md:px-12 lg:px-20">
            <div className="mx-auto max-w-4xl">

              {/* BREADCRUMB */}
              <nav
                aria-label="Breadcrumb"
                className="mb-8 text-sm text-zinc-500"
              >
                <a
                  href="/"
                  className="transition-colors hover:text-primary"
                >
                  Início
                </a>

                <span className="mx-2">/</span>

                <a
                  href="/blog"
                  className="transition-colors hover:text-primary"
                >
                  Blog
                </a>

                <span className="mx-2">/</span>

                <span className="text-zinc-400">
                  Ácido hialurônico
                </span>
              </nav>

              {/* HERO */}
              <header>
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-primary">
                  Ciência & Scalp Care
                </p>

                <h1
                  className="mb-8 text-4xl font-bold leading-tight md:text-6xl"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Ácido hialurônico no couro cabeludo exposto: faz sentido?
                </h1>

                <p className="mb-6 text-xl leading-8 text-zinc-300">
                  Um dos ativos mais conhecidos do skincare também pode fazer
                  parte do cuidado do couro cabeludo exposto. Entenda o que está
                  por trás do ácido hialurônico e por que a formulação importa
                  tanto quanto o ingrediente.
                </p>

                <div className="mb-12 flex flex-wrap gap-x-6 gap-y-2 text-sm text-zinc-500">
                  <span>07 set. 2026</span>
                  <span>•</span>
                  <span>7 minutos de leitura</span>
                  <span>•</span>
                  <span>Conteúdo educativo</span>
                </div>

                <img
                  src="/Blog/acido-hialuronico/acido-hialuronico-couro-cabeludo-exposto-baldshield.webp"
                  alt="Aplicação cosmética sobre couro cabeludo exposto representando hidratação e ácido hialurônico"
                  className="my-12 w-full rounded-[2rem] bg-black object-contain"
                  loading="eager"
                />
              </header>

              {/* INTRODUÇÃO */}
              <section>
                <p className="mb-6 text-[1.05rem] leading-8 text-zinc-300">
                  O ácido hialurônico virou quase sinônimo de hidratação no
                  universo do skincare.
                </p>

                <p className="mb-6 text-[1.05rem] leading-8 text-zinc-300">
                  Está presente em séruns, cremes e diferentes formulações
                  desenvolvidas para o cuidado da pele. Mas existe uma pergunta
                  que raramente aparece nessa conversa:
                </p>

                <div className="my-10 rounded-3xl border border-primary/30 bg-primary/10 p-8 text-center">
                  <p
                    className="text-2xl font-bold text-white md:text-3xl"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    E quando a pele que queremos cuidar é o couro cabeludo
                    exposto?
                  </p>
                </div>

                <p className="mb-10 text-[1.05rem] leading-8 text-zinc-300">
                  Para responder, primeiro precisamos entender o que o ácido
                  hialurônico realmente faz — e deixar de lado a ideia de que
                  um único ingrediente pode fazer tudo sozinho.
                </p>
              </section>

              {/* O QUE É */}
              <section className="mt-16">
                <h2 className="mb-6 text-3xl font-bold">
                  Primeiro: o que é o ácido hialurônico?
                </h2>

                <p className="mb-6 text-[1.05rem] leading-8 text-zinc-300">
                  Apesar do nome, o ácido hialurônico não deve ser imaginado
                  como um “ácido esfoliante”, como acontece com alguns
                  ingredientes conhecidos do skincare.
                </p>

                <p className="mb-6 text-[1.05rem] leading-8 text-zinc-300">
                  Ele é uma substância naturalmente encontrada no organismo e
                  faz parte da matriz extracelular da pele. Uma de suas
                  características mais conhecidas é sua relação com a água,
                  razão pela qual o ácido hialurônico e seus derivados se
                  tornaram ingredientes amplamente utilizados em formulações
                  cosméticas voltadas à hidratação e ao condicionamento da pele.
                </p>

                <p className="mb-10 text-[1.05rem] leading-8 text-zinc-300">
                  É justamente essa característica que ajuda a explicar sua
                  popularidade no universo do skincare.
                </p>
              </section>

              {/* NEM TODO HA É IGUAL */}
              <section className="mt-16">
                <h2 className="mb-6 text-3xl font-bold">
                  Nem todo ácido hialurônico é igual
                </h2>

                <p className="mb-6 text-[1.05rem] leading-8 text-zinc-300">
                  Quando um rótulo diz “ácido hialurônico”, existe muito mais
                  ciência por trás dessas duas palavras.
                </p>

                <p className="mb-6 text-[1.05rem] leading-8 text-zinc-300">
                  Peso molecular, forma utilizada, concentração, veículo e
                  combinação com outros componentes podem influenciar o
                  comportamento de uma formulação.
                </p>

                <p className="mb-10 text-[1.05rem] leading-8 text-zinc-300">
                  Estudos que comparam diferentes formas e pesos moleculares
                  ajudam a mostrar justamente isso: o ingrediente não deve ser
                  analisado isoladamente da tecnologia e da composição do
                  produto em que está inserido.
                </p>

                <div className="mb-14 rounded-[2rem] border border-primary/30 bg-zinc-950 p-8 text-center">
                  <div className="mb-3 flex justify-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                     Um ponto importante
                    </p>
                </div>

                  <p
                    className="text-2xl font-bold leading-tight text-white md:text-3xl"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    Falar em hidratação da pele é mais complexo do que procurar
                    um único ingrediente no rótulo.
                  </p>
                </div>
              </section>

              {/* IMAGEM 2 */}
              <img
                src="/Blog/acido-hialuronico/hidratacao-acido-hialuronico-pele-couro-cabeludo-baldshield.webp"
                alt="Representação editorial da hidratação da pele associada ao ácido hialurônico"
                className="my-14 w-full rounded-[2rem] bg-black object-contain"
                loading="lazy"
              />

              {/* HIDRATAÇÃO */}
              <section>
                <h2 className="mb-6 text-3xl font-bold">
                  Então, o que ele faz na pele?
                </h2>

                <p className="mb-6 text-[1.05rem] leading-8 text-zinc-300">
                  Uma das propriedades que tornam o ácido hialurônico
                  interessante para a cosmética é sua característica
                  higroscópica — sua capacidade de interagir com a água.
                </p>

                <p className="mb-6 text-[1.05rem] leading-8 text-zinc-300">
                  Estudos clínicos com formulações tópicas contendo diferentes
                  formas de ácido hialurônico observaram melhora em parâmetros
                  relacionados à hidratação da pele nas condições avaliadas.
                </p>

                <p className="mb-10 text-[1.05rem] leading-8 text-zinc-300">
                  Isso ajuda a entender por que o ingrediente ganhou tanto
                  espaço no skincare. Mas é importante não transformar essa
                  propriedade em uma promessa milagrosa: o resultado de um
                  cosmético depende da formulação como um todo.
                </p>
              </section>

              {/* COURO CABELUDO */}
              <section className="mt-16">
                <h2 className="mb-6 text-3xl font-bold">
                  E quando essa pele é o couro cabeludo exposto?
                </h2>

                <p className="mb-6 text-[1.05rem] leading-8 text-zinc-300">
                  Aqui começa uma conversa especialmente importante para quem
                  vive com pouca ou nenhuma cobertura capilar.
                </p>

                <p className="mb-6 text-[1.05rem] leading-8 text-zinc-300">
                  Por muito tempo, o couro cabeludo foi pensado principalmente
                  a partir dos cabelos: shampoo, condicionador, caspa,
                  oleosidade dos fios, queda e crescimento.
                </p>

                <p className="mb-6 text-[1.05rem] leading-8 text-zinc-300">
                  Quando uma região do couro cabeludo permanece exposta, seja
                  pela ausência de cabelos ou por uma cabeça raspada, existe ali
                  uma pele que passa a fazer parte diretamente da aparência e
                  da rotina cotidiana.
                </p>

                <div className="my-10 rounded-[2rem] border border-primary/30 bg-primary/10 p-8 text-center">
                  <p
                    className="text-2xl font-bold leading-tight text-white md:text-3xl"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    O cabelo pode não estar mais ali. A pele continua.
                  </p>
                </div>

                <p className="mb-6 text-[1.05rem] leading-8 text-zinc-300">
                  É nesse contexto que ingredientes já conhecidos no universo
                  do skincare, como o ácido hialurônico, também passam a ser
                  interessantes quando pensamos em formulações cosméticas
                  destinadas ao cuidado do couro cabeludo exposto.
                </p>

                <p className="mb-10 text-[1.05rem] leading-8 text-zinc-300">
                  Não porque o couro cabeludo tenha se transformado em pele.
                  <strong className="text-white"> Ele sempre foi pele.</strong>{" "}
                  O que mudou foi a forma como essa pele passou a viver — e como
                  começamos a olhar para ela.
                </p>
              </section>

              {/* IMAGEM 3 */}
              <img
                src="/Blog/acido-hialuronico/couro-cabeludo-exposto-pele-homem-mulher-baldshield.webp"
                alt="Homem e mulher representando o cuidado da pele do couro cabeludo exposto"
                className="my-14 w-full rounded-[2rem] bg-black object-contain"
                loading="lazy"
              />

              {/* FORMULAÇÃO */}
              <section>
                <h2 className="mb-6 text-3xl font-bold">
                  Um ingrediente não é uma fórmula
                </h2>

                <p className="mb-6 text-[1.05rem] leading-8 text-zinc-300">
                  A popularidade dos ativos criou um hábito interessante no
                  consumidor: procurar ingredientes específicos no rótulo.
                </p>

                <div className="my-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {[
                    "Ácido hialurônico",
                    "Vitamina E",
                    "Niacinamida",
                    "Ceramidas",
                  ].map((ingredient) => (
                    <div
                      key={ingredient}
                      className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 text-center"
                    >
                      <p className="text-lg font-bold text-white">
                        {ingredient}
                      </p>
                    </div>
                  ))}
                </div>

                <p className="mb-6 text-[1.05rem] leading-8 text-zinc-300">
                  Conhecer os ingredientes é positivo. Mas um cosmético não pode
                  ser compreendido apenas pela presença de um nome conhecido em
                  sua composição.
                </p>

                <p className="mb-6 text-[1.05rem] leading-8 text-zinc-300">
                  A forma do ingrediente, sua concentração, o veículo, a
                  interação com outros componentes e a proposta da formulação
                  fazem parte do resultado final.
                </p>

                <div className="my-10 rounded-[2rem] border border-primary/30 bg-zinc-950 p-8 text-center">
                 <div className="mb-3 flex justify-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                     Mude a pergunta
                </p>
                </div>

                  <p
                    className="text-2xl font-bold leading-tight text-white md:text-3xl"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    Em vez de apenas “tem ácido hialurônico?”, pergunte:
                    “como esse ingrediente participa da formulação e da proposta
                    de cuidado?”
                  </p>
                </div>
              </section>

              {/* IMAGEM 4 */}
              <img
                src="/Blog/acido-hialuronico/ciencia-formulacao-hidratacao-couro-cabeludo-baldshield.webp"
                alt="Composição editorial representando ciência, formulação cosmética e hidratação"
                className="my-14 w-full rounded-[2rem] bg-black object-contain"
                loading="lazy"
              />

              {/* PONTOS DE ATENÇÃO */}
              <section>
                <h2 className="mb-6 text-3xl font-bold">
                  E existe algum ponto de atenção?
                </h2>

                <p className="mb-6 text-[1.05rem] leading-8 text-zinc-300">
                  Sim — e falar sobre ciência também significa evitar absolutos.
                </p>

                <p className="mb-6 text-[1.05rem] leading-8 text-zinc-300">
                  Mais ácido hialurônico não significa automaticamente melhor
                  produto. Menor peso molecular não significa automaticamente
                  melhor formulação para qualquer objetivo. E a presença de um
                  ingrediente reconhecido não torna equivalentes todos os
                  produtos que o utilizam.
                </p>

                <p className="mb-10 text-[1.05rem] leading-8 text-zinc-300">
                  Da mesma forma, resultados observados com uma determinada
                  formulação não devem ser automaticamente atribuídos a qualquer
                  outro cosmético apenas porque ambos contêm ácido hialurônico.
                  Contexto importa. Formulação importa. Uso adequado importa.
                </p>
              </section>

              {/* BALDSHIELD */}
              <section className="mt-16">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                  Da ciência ao cuidado
                </p>

                <h2 className="mb-6 text-3xl font-bold">
                  Como esse conceito aparece na BaldShield
                </h2>

                <p className="mb-6 text-[1.05rem] leading-8 text-zinc-300">
                  É essa lógica que também orienta a maneira como pensamos o
                  cuidado na BaldShield.
                </p>

                <p className="mb-6 text-[1.05rem] leading-8 text-zinc-300">
                  O ácido hialurônico está presente nas formulações de{" "}
                  <strong className="text-white">BaldShield HYDRATE</strong> e{" "}
                  <strong className="text-white">BaldShield DEFENSE</strong>, ao
                  lado da vitamina E, dentro de propostas desenvolvidas para
                  diferentes momentos do cuidado do couro cabeludo exposto.
                </p>

                <p className="mb-6 text-[1.05rem] leading-8 text-zinc-300">
                  No HYDRATE, essa composição integra a proposta da etapa de
                  hidratação do Scalp Defense System™.
                </p>

                <p className="mb-6 text-[1.05rem] leading-8 text-zinc-300">
                  No DEFENSE, ácido hialurônico e vitamina E fazem parte de uma
                  formulação que também incorpora proteção solar FPS 70,
                  direcionada à etapa de defesa do couro cabeludo exposto.
                </p>

                <p className="mb-10 text-[1.05rem] leading-8 text-zinc-300">
                  A presença desses ingredientes deve ser entendida dentro da
                  formulação completa de cada produto — e não como se um único
                  ativo fosse responsável por tudo.
                </p>

                <div className="my-10 rounded-[2rem] border border-primary/30 bg-zinc-950 p-8 text-center">
                  <p
                    className="text-2xl font-bold leading-tight text-white md:text-3xl"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    Scalp care não deveria ser uma corrida pelo ingrediente da
                    moda. Deveria começar pela compreensão da pele que queremos
                    cuidar.
                  </p>
                </div>
              </section>

              {/* CONCLUSÃO */}
              <section className="mt-16">
                <h2 className="mb-6 text-3xl font-bold">
                  No fim, faz sentido?
                </h2>

                <p className="mb-6 text-[1.05rem] leading-8 text-zinc-300">
                  Sim, faz sentido considerar o ácido hialurônico dentro de
                  formulações destinadas ao cuidado e à hidratação da pele do
                  couro cabeludo exposto.
                </p>

                <p className="mb-6 text-[1.05rem] leading-8 text-zinc-300">
                  Sua utilização cosmética está associada principalmente às suas
                  propriedades relacionadas à hidratação, e diferentes formas do
                  ingrediente vêm sendo estudadas em formulações tópicas.
                </p>

                <p className="mb-6 text-[1.05rem] leading-8 text-zinc-300">
                  Mas talvez a principal conclusão seja outra:
                </p>

                <div className="my-10 rounded-[2rem] border border-primary/30 bg-primary/10 p-8 text-center">
                  <p
                    className="text-2xl font-bold leading-tight text-white md:text-3xl"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    Um bom cuidado não começa escolhendo um ingrediente. Começa
                    entendendo uma necessidade.
                  </p>
                </div>

                <p className="mb-6 text-[1.05rem] leading-8 text-zinc-300">
                  O ácido hialurônico pode fazer parte dessa resposta.
                </p>

                <p className="mb-10 text-[1.05rem] leading-8 text-zinc-300">
                  A formulação transforma o ingrediente em produto. E a rotina
                  transforma o produto em cuidado.
                </p>
              </section>

              {/* CONTINUE APRENDENDO */}
              <section className="mt-20">
                <h2 className="mb-6 text-3xl font-bold">
                  Continue aprendendo
                </h2>

                <p className="mb-8 text-[1.05rem] leading-8 text-zinc-300">
                  Outros conteúdos para aprofundar o cuidado do couro cabeludo
                  exposto:
                </p>

                <div className="space-y-4">
                  <a
                    href="/blog/por-que-homens-carecas-deveriam-hidratar-o-couro-cabeludo"
                    className="block rounded-2xl border border-zinc-800 bg-zinc-950 p-5 font-semibold text-primary transition hover:border-primary/50 hover:bg-zinc-900"
                  >
                    Por que homens carecas deveriam hidratar o couro cabeludo?
                  </a>

                  <a
                    href="/blog/couro-cabeludo-exposto-skincare-scalp-care"
                    className="block rounded-2xl border border-zinc-800 bg-zinc-950 p-5 font-semibold text-primary transition hover:border-primary/50 hover:bg-zinc-900"
                  >
                    O couro cabeludo exposto ainda cabe no skincare tradicional?
                  </a>

                  <a
                    href="/blog/protetor-solar-careca-couro-cabeludo"
                    className="block rounded-2xl border border-zinc-800 bg-zinc-950 p-5 font-semibold text-primary transition hover:border-primary/50 hover:bg-zinc-900"
                  >
                    Seu protetor solar termina na testa?
                  </a>
                </div>
              </section>

              {/* FAQ */}
              <section className="mt-20">
                <h2 className="mb-8 text-3xl font-bold">
                  Perguntas frequentes
                </h2>

                <div className="space-y-5">
                  {faqItems.map((item, index) => {
                    const isOpen = openFaq === index;

                    return (
                      <div
                        key={item.question}
                        className="rounded-2xl border border-zinc-800 bg-zinc-950"
                      >
                        <button
                          type="button"
                          onClick={() =>
                            setOpenFaq(isOpen ? null : index)
                          }
                          className="flex w-full items-center justify-between gap-4 p-6 text-left"
                          aria-expanded={isOpen}
                        >
                          <span className="text-lg font-semibold text-white">
                            {item.question}
                          </span>

                          <span
                            className={`text-2xl text-primary transition-transform ${
                              isOpen ? "rotate-45" : ""
                            }`}
                          >
                            +
                          </span>
                        </button>

                        {isOpen && (
                          <div className="px-6 pb-6">
                            <p className="leading-8 text-zinc-300">
                              {item.answer}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* REFERÊNCIAS */}
              <section className="mt-20">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                  Referências
                </p>

                <h2 className="mb-6 text-3xl font-bold">
                  Fontes para aprofundamento
                </h2>

                <div className="rounded-[2rem] border border-zinc-800 bg-zinc-950 p-8">
                  <ol className="space-y-5 text-sm leading-7 text-zinc-400">
                    <li>
                      1. Pavicic T, et al.{" "}
                      <em>
                        Efficacy of cream-based novel formulations of hyaluronic
                        acid of different molecular weights in anti-wrinkle
                        treatment.
                      </em>{" "}
                      <a
                        href="https://pubmed.ncbi.nlm.nih.gov/22052267/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-primary hover:underline"
                      >
                        Consultar no PubMed →
                      </a>
                    </li>

                    <li>
                      2. Revisão científica sobre ácido hialurônico tópico e suas
                      aplicações dermatológicas.{" "}
                      <a
                        href="https://pubmed.ncbi.nlm.nih.gov/41463312/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-primary hover:underline"
                      >
                        Consultar no PubMed →
                      </a>
                    </li>

                    <li>
                      3. Estudo clínico randomizado comparando ácido hialurônico
                      de diferentes pesos moleculares em pele seca.{" "}
                      <a
                        href="https://pubmed.ncbi.nlm.nih.gov/38829483/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-primary hover:underline"
                      >
                        Consultar no PubMed →
                      </a>
                    </li>

                    <li>
                      4. Cosmetic Ingredient Review.{" "}
                      <em>
                        Safety Assessment of Hyaluronates as Used in Cosmetics.
                      </em>{" "}
                      <a
                        href="https://www.cir-safety.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-primary hover:underline"
                      >
                        Consultar fonte →
                      </a>
                    </li>
                  </ol>
                </div>
              </section>

              {/* RESUMO */}
              <section className="my-20 rounded-[2rem] border border-primary/30 bg-primary/10 p-8">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                  Resumo
                </p>

                <h2 className="mb-6 text-3xl font-bold">
                  O que vale lembrar
                </h2>

                <div className="space-y-4 text-[1.05rem] leading-8 text-zinc-300">
                  <p>
                    <strong className="text-white">
                      O ácido hialurônico é conhecido por sua relação com a
                      hidratação:
                    </strong>{" "}
                    por isso se tornou um ingrediente amplamente utilizado no
                    skincare.
                  </p>

                  <p>
                    <strong className="text-white">
                      Nem todo ácido hialurônico é igual:
                    </strong>{" "}
                    peso molecular, forma, concentração e formulação importam.
                  </p>

                  <p>
                    <strong className="text-white">
                      O couro cabeludo continua sendo pele:
                    </strong>{" "}
                    quando exposto, merece uma rotina de cuidado pensada para
                    essa realidade.
                  </p>

                  <p>
                    <strong className="text-white">
                      Um ingrediente não trabalha sozinho:
                    </strong>{" "}
                    compreender a formulação completa é mais importante do que
                    procurar apenas um ativo conhecido no rótulo.
                  </p>
                </div>
              </section>

              {/* CTA */}
              <section className="my-24 rounded-[2rem] border border-primary/30 bg-gradient-to-br from-zinc-950 via-black to-zinc-950 p-10 text-center md:p-12">
             <div className="mb-3 flex justify-center">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                Scalp Care
                </p>
            </div>

                <h2
                  className="mb-6 text-4xl font-bold"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Ciência também é saber por que cuidamos.
                </h2>

                <p className="mx-auto mb-10 max-w-3xl text-xl leading-8 text-zinc-300">
                  Conhecer a pele, compreender os ingredientes e transformar
                  informação em uma rotina mais consciente para o couro
                  cabeludo exposto.
                </p>

                <a
                  href="/blog"
                  className="inline-flex rounded-full bg-primary px-10 py-4 text-lg font-semibold text-black transition duration-300 hover:scale-105"
                >
                  Continue explorando o Blog BaldShield
                </a>
              </section>

            </div>
          </article>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default BlogPostAcidoHialuronico;