import React from "react";
import { Helmet } from "react-helmet";
import Header from "@/components/Header.jsx";
import Footer from "@/components/Footer.jsx";

const BlogPostCouroCabeludoSensivel = () => {
  const canonicalUrl =
    "https://www.baldshield.com/blog/couro-cabeludo-sensivel-por-que-ele-pode-ficar-irritado";

  const heroImage =
    "https://www.baldshield.com/Blog/couro-cabeludo-sensivel/couro-cabeludo-sensivel-irritacao-baldshield.webp";

  const faqItems = [
    {
      question: "Por que minha cabeça fica vermelha depois de raspar?",
      answer:
        "A passagem da lâmina pode provocar atrito e pequenas agressões na superfície da pele. A pressão excessiva, a repetição de movimentos e o uso de uma lâmina inadequada podem aumentar a vermelhidão, o ardor e a sensibilidade temporária.",
    },
    {
      question: "O frio pode irritar o couro cabeludo?",
      answer:
        "Temperaturas baixas, vento e ambientes secos podem favorecer a perda de hidratação e aumentar a sensação de ressecamento, repuxamento e desconforto.",
    },
    {
      question: "Coçar piora a irritação?",
      answer:
        "Sim. Coçar repetidamente aumenta o atrito e pode provocar pequenas lesões, intensificar a vermelhidão e prolongar o desconforto.",
    },
    {
      question: "Banhos muito quentes podem prejudicar a pele?",
      answer:
        "A exposição frequente à água muito quente pode contribuir para a remoção de lipídios da superfície e aumentar o ressecamento. Prefira água morna e uma limpeza suave.",
    },
    {
      question: "Raspar a cabeça todos os dias faz mal?",
      answer:
        "Não necessariamente. A resposta depende da técnica, da lâmina, da preparação da pele e da sensibilidade individual. Irritação recorrente indica que a rotina ou a frequência deve ser reavaliada.",
    },
    {
      question: "Quando devo procurar um dermatologista?",
      answer:
        "Procure avaliação diante de ardor persistente, coceira intensa, descamação importante, feridas, secreção, dor, manchas, lesões que não cicatrizam ou piora progressiva.",
    },
  ];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline:
      "Couro cabeludo sensível: por que ele pode ficar irritado mesmo sem cabelos?",
    description:
      "Entenda por que o couro cabeludo pode ficar sensível, quais fatores provocam irritação e como proteger sua barreira cutânea.",
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
    datePublished: "2026-07-24",
    dateModified: "2026-07-24",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
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

  return (
    <>
      <Helmet>
        <html lang="pt-BR" />

        <title>
          Couro cabeludo sensível: causas e cuidados | BaldShield
        </title>

        <meta
          name="description"
          content="Entenda por que o couro cabeludo pode ficar sensível, quais fatores provocam irritação e como proteger a barreira cutânea no dia a dia."
        />

        <meta
          name="keywords"
          content="couro cabeludo sensível, couro cabeludo irritado, vermelhidão na careca, coceira no couro cabeludo, barreira cutânea, irritação após raspar a cabeça, scalp care, BaldShield"
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
          content="Couro cabeludo sensível: por que ele pode ficar irritado mesmo sem cabelos?"
        />

        <meta
          property="og:description"
          content="Conheça as causas da sensibilidade e os cuidados que ajudam a proteger a barreira natural do couro cabeludo."
        />

        <meta property="og:image" content={heroImage} />

        <meta
          property="og:image:alt"
          content="Homem careca tocando o couro cabeludo sensibilizado"
        />

        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:title"
          content="Couro cabeludo sensível: causas e cuidados"
        />

        <meta
          name="twitter:description"
          content="Entenda por que o couro cabeludo fica irritado e como proteger sua barreira natural."
        />

        <meta name="twitter:image" content={heroImage} />

        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>

        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-black text-white">
        <Header />

        <article className="px-6 py-12 md:px-12 lg:px-20">
          <div className="mx-auto max-w-3xl">
            {/* HERO */}
            <header>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-primary">
                Saúde do couro cabeludo
              </p>

              <h1
                className="mb-8 text-4xl font-bold leading-tight md:text-6xl"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Couro cabeludo sensível: por que ele pode ficar irritado mesmo
                sem cabelos?
              </h1>

              <p className="mb-6 text-xl leading-8 text-zinc-300">
                O couro cabeludo continua sendo uma das regiões mais expostas
                do corpo. Entenda o que pode provocar sensibilidade e como
                proteger a barreira natural da pele no dia a dia.
              </p>

              <div className="mb-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-zinc-500">
                <span>24 jul. 2026</span>
                <span>•</span>
                <span>7 minutos de leitura</span>
              </div>

              <div className="mb-10 rounded-2xl border border-zinc-800 bg-zinc-950 p-5">
                <p className="text-sm leading-6 text-zinc-400">
                  Este conteúdo foi elaborado com base em literatura científica
                  e referências dermatológicas, utilizando linguagem acessível.
                  Não substitui a avaliação de um profissional de saúde.
                </p>
              </div>

              <img
                src="/Blog/couro-cabeludo-sensivel/couro-cabeludo-sensivel-irritacao-baldshield.webp"
                alt="Homem careca tocando o couro cabeludo com sensação de desconforto"
                className="my-14 w-full rounded-[2rem] bg-black object-contain"
                loading="eager"
                fetchPriority="high"
              />
            </header>

            {/* INTRODUÇÃO */}
            <section>
              <p className="mb-6 text-[1.05rem] leading-8 text-zinc-300">
                Ardor, coceira, vermelhidão, sensação de repuxamento ou
                desconforto depois de raspar a cabeça são sinais que muitas
                pessoas carecas conhecem bem.
              </p>

              <p className="mb-6 text-[1.05rem] leading-8 text-zinc-300">
                A ausência dos fios não torna o couro cabeludo menos sensível.
                Pelo contrário: sem a cobertura dos cabelos, a pele fica
                diretamente exposta ao sol, ao vento, às mudanças de
                temperatura, à poluição e ao atrito diário.
              </p>

              <p className="mb-10 text-[1.05rem] leading-8 text-zinc-300">
                A sensibilidade não é uma doença específica. É uma condição em
                que a pele reage com mais facilidade a estímulos externos ou a
                determinados hábitos. Para compreender esse processo, é
                importante conhecer primeiro a função da barreira cutânea.
              </p>
            </section>

            {/* COURO CABELUDO É PELE */}
            <section>
              <h2 className="mb-4 text-3xl font-bold">
                O couro cabeludo continua sendo pele
              </h2>

              <p className="mb-6 text-[1.05rem] leading-8 text-zinc-300">
                O couro cabeludo possui epiderme, derme, vasos sanguíneos,
                terminações nervosas, glândulas e estruturas de defesa. Essas
                camadas trabalham em conjunto para proteger o organismo e
                manter o equilíbrio da pele.
              </p>

              <p className="mb-6 text-[1.05rem] leading-8 text-zinc-300">
                A camada mais externa da epiderme é chamada{" "}
                <strong className="text-white">estrato córneo</strong>. Ela é
                formada por células organizadas e lipídios que ajudam a limitar
                a perda de água e dificultam a entrada de substâncias
                potencialmente irritantes.
              </p>

              <p className="mb-10 text-[1.05rem] leading-8 text-zinc-300">
                Essa estrutura é conhecida como{" "}
                <strong className="text-white">barreira cutânea</strong>. Quando
                está preservada, a pele tende a manter melhor sua hidratação e
                sua resistência. Quando é comprometida, pode ficar mais seca,
                reativa e desconfortável.
              </p>

              <img
                src="/Blog/couro-cabeludo-sensivel/barreira-cutanea-couro-cabeludo-baldshield.webp"
                alt="Infográfico mostrando as camadas da pele e a barreira cutânea"
                className="my-14 w-full rounded-[2rem] bg-black object-contain"
                loading="lazy"
              />

              <div className="mb-12 rounded-3xl border border-primary/30 bg-primary/10 p-7">
                <p className="text-[1.05rem] leading-8 text-zinc-200">
                  <strong className="text-white">Em resumo:</strong> ser careca
                  não elimina as funções da pele. O couro cabeludo continua
                  precisando preservar hidratação, proteção e capacidade de
                  recuperação.
                </p>
              </div>
            </section>

            {/* SENSIBILIDADE */}
            <section>
              <h2 className="mb-4 text-3xl font-bold">
                O que significa ter o couro cabeludo sensível?
              </h2>

              <p className="mb-6 text-[1.05rem] leading-8 text-zinc-300">
                Uma pele sensível reage de forma mais intensa a estímulos que
                normalmente seriam bem tolerados. Essa reação pode ser
                percebida como ardor, coceira, calor, repuxamento ou
                sensibilidade ao toque.
              </p>

              <p className="mb-10 text-[1.05rem] leading-8 text-zinc-300">
                Em alguns casos, a pele também apresenta sinais visíveis, como
                vermelhidão, descamação ou pequenas áreas inflamadas. A
                intensidade varia conforme o tipo de pele, os hábitos, o clima
                e a presença de alguma condição dermatológica.
              </p>
            </section>

            {/* CAUSAS */}
            <section>
              <h2 className="mb-4 text-3xl font-bold">
                O que pode deixar o couro cabeludo sensível?
              </h2>

              <p className="mb-10 text-[1.05rem] leading-8 text-zinc-300">
                A sensibilidade costuma resultar da combinação de fatores. Nem
                todas as pessoas reagem da mesma maneira, mas alguns
                desencadeadores são especialmente frequentes.
              </p>

              <img
                src="/Blog/couro-cabeludo-sensivel/causas-couro-cabeludo-sensivel-baldshield.webp"
                alt="Principais fatores que podem deixar o couro cabeludo sensível"
                className="my-14 w-full rounded-[2rem] bg-black object-contain"
                loading="lazy"
              />

              <h3 className="mb-3 text-2xl font-bold">
                Exposição solar sem proteção
              </h3>

              <p className="mb-8 text-[1.05rem] leading-8 text-zinc-300">
                Sem os cabelos, a radiação ultravioleta atinge diretamente a
                pele. Exposição excessiva pode causar vermelhidão, ressecamento,
                desconforto e danos cumulativos.
              </p>

              <h3 className="mb-3 text-2xl font-bold">Frio, vento e ar seco</h3>

              <p className="mb-8 text-[1.05rem] leading-8 text-zinc-300">
                Temperaturas baixas, vento e ambientes com pouca umidade podem
                favorecer a perda de água e aumentar a sensação de pele seca ou
                repuxada.
              </p>

              <h3 className="mb-3 text-2xl font-bold">
                Banhos muito quentes e prolongados
              </h3>

              <p className="mb-8 text-[1.05rem] leading-8 text-zinc-300">
                A exposição frequente à água muito quente pode remover parte
                dos lipídios presentes na superfície e contribuir para o
                ressecamento. Água morna costuma ser uma escolha mais
                equilibrada.
              </p>

              <h3 className="mb-3 text-2xl font-bold">
                Limpeza excessiva ou produtos agressivos
              </h3>

              <p className="mb-8 text-[1.05rem] leading-8 text-zinc-300">
                Fórmulas inadequadas, excesso de detergência, álcool ou
                fragrâncias podem causar desconforto em pessoas predispostas.
                A frequência de lavagem também deve respeitar a resposta da
                pele.
              </p>

              <h3 className="mb-3 text-2xl font-bold">
                Raspar a cabeça com frequência
              </h3>

              <p className="mb-8 text-[1.05rem] leading-8 text-zinc-300">
                O contato repetido da lâmina com a pele gera atrito. Pressão
                excessiva, lâmina sem corte adequado e várias passagens sobre a
                mesma região podem favorecer microlesões e irritação.
              </p>

              <h3 className="mb-3 text-2xl font-bold">Coçar constantemente</h3>

              <p className="mb-8 text-[1.05rem] leading-8 text-zinc-300">
                Coçar proporciona alívio momentâneo, mas aumenta o atrito e pode
                intensificar pequenas lesões, vermelhidão e inflamação.
              </p>

              <h3 className="mb-3 text-2xl font-bold">
                Predisposição individual
              </h3>

              <p className="mb-10 text-[1.05rem] leading-8 text-zinc-300">
                Algumas pessoas apresentam uma pele naturalmente mais reativa.
                Dermatite seborreica, dermatite de contato, psoríase e outras
                condições também podem provocar sintomas no couro cabeludo e
                exigem avaliação profissional.
              </p>
            </section>

            {/* COMO PROTEGER */}
            <section>
              <h2 className="mb-4 text-3xl font-bold">
                Como proteger a barreira cutânea
              </h2>

              <p className="mb-10 text-[1.05rem] leading-8 text-zinc-300">
                O objetivo de uma rotina adequada não é tornar a pele
                “resistente a tudo”, mas reduzir agressões desnecessárias e
                oferecer condições para que sua barreira permaneça equilibrada.
              </p>

              <img
                src="/Blog/couro-cabeludo-sensivel/protecao-barreira-cutanea-baldshield.webp"
                alt="Rotina para proteger a barreira cutânea do couro cabeludo"
                className="my-14 w-full rounded-[2rem] bg-black object-contain"
                loading="lazy"
              />

              <h3 className="mb-3 text-2xl font-bold">
                1. Faça uma limpeza suave
              </h3>

              <p className="mb-8 text-[1.05rem] leading-8 text-zinc-300">
                A limpeza deve remover suor, oleosidade, poluição e resíduos sem
                produzir ressecamento intenso. Sensação de repuxamento ou ardor
                após lavar pode indicar que a rotina precisa ser revista.
              </p>

              <h3 className="mb-3 text-2xl font-bold">
                2. Preserve a hidratação
              </h3>

              <p className="mb-8 text-[1.05rem] leading-8 text-zinc-300">
                A hidratação ajuda a manter o conforto e a função da barreira.
                Texturas leves e compatíveis com o couro cabeludo podem ser
                mais agradáveis para quem também apresenta oleosidade.
              </p>

              <h3 className="mb-3 text-2xl font-bold">
                3. Proteja a pele da radiação solar
              </h3>

              <p className="mb-8 text-[1.05rem] leading-8 text-zinc-300">
                A proteção solar é essencial no couro cabeludo exposto. Além do
                fotoprotetor adequado, chapéus e bonés podem complementar a
                proteção quando usados corretamente.
              </p>

              <h3 className="mb-3 text-2xl font-bold">
                4. Evite agressões repetidas
              </h3>

              <p className="mb-8 text-[1.05rem] leading-8 text-zinc-300">
                Evite água excessivamente quente, coçar a pele, utilizar lâmina
                desgastada e repetir muitas passagens durante o barbear.
              </p>

              <h3 className="mb-3 text-2xl font-bold">
                5. Introduza novos produtos gradualmente
              </h3>

              <p className="mb-10 text-[1.05rem] leading-8 text-zinc-300">
                Ao testar uma fórmula nova, observe a resposta da pele. Ardor,
                coceira ou vermelhidão persistente indicam que o uso deve ser
                interrompido e, quando necessário, avaliado por um
                dermatologista.
              </p>
            </section>

            {/* CIÊNCIA */}
            <section>
              <h2 className="mb-4 text-3xl font-bold">
                A ciência por trás de uma barreira saudável
              </h2>

              <p className="mb-6 text-[1.05rem] leading-8 text-zinc-300">
                A barreira cutânea costuma ser comparada a uma parede. Os
                corneócitos funcionam como os “tijolos”, enquanto ceramidas,
                colesterol e ácidos graxos formam a estrutura lipídica que
                ocupa os espaços entre essas células.
              </p>

              <p className="mb-6 text-[1.05rem] leading-8 text-zinc-300">
                Quando essa organização está preservada, a pele limita melhor
                a perda de água e fica menos vulnerável à entrada de agentes
                externos. Uma barreira alterada costuma apresentar aumento da
                perda de água transepidérmica, conhecida pela sigla{" "}
                <strong className="text-white">TEWL</strong>.
              </p>

              <p className="mb-10 text-[1.05rem] leading-8 text-zinc-300">
                Alguns ingredientes são estudados por sua contribuição à
                hidratação e à manutenção da barreira, entre eles niacinamida,
                ceramidas, glicerina e pantenol. O benefício final depende da
                formulação completa, da concentração, da frequência de uso e
                das características individuais da pele.
              </p>

              <img
                src="/Blog/couro-cabeludo-sensivel/ciencia-barreira-cutanea-baldshield.webp"
                alt="Infográfico científico sobre lipídios, corneócitos e barreira cutânea"
                className="my-14 w-full rounded-[2rem] bg-black object-contain"
                loading="lazy"
              />

              <div className="my-10 rounded-3xl border border-primary/30 bg-zinc-950 p-8">
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-primary">
                  Evidência científica
                </p>

                <h3 className="mb-5 text-2xl font-bold">
                  O que a literatura demonstra
                </h3>

                <ul className="space-y-4 text-[1.05rem] leading-8 text-zinc-300">
                  <li>
                    <strong className="text-white">
                      A TEWL ajuda a avaliar a barreira:
                    </strong>{" "}
                    valores mais altos geralmente estão associados a maior
                    comprometimento da função de proteção.
                  </li>

                  <li>
                    <strong className="text-white">
                      Os lipídios são fundamentais:
                    </strong>{" "}
                    ceramidas, colesterol e ácidos graxos participam da
                    organização do estrato córneo.
                  </li>

                  <li>
                    <strong className="text-white">
                      A niacinamida pode favorecer a barreira:
                    </strong>{" "}
                    estudos descrevem estímulo à síntese de ceramidas e redução
                    da perda de água em determinados contextos.
                  </li>

                  <li>
                    <strong className="text-white">
                      O pantenol apresenta ação hidratante:
                    </strong>{" "}
                    pesquisas demonstram melhora da hidratação e suporte à
                    recuperação da barreira cutânea.
                  </li>
                </ul>
              </div>
            </section>

            {/* ROTINA E LINKS */}
            <section>
              <h2 className="mb-4 text-3xl font-bold">
                Uma rotina simples pode fazer diferença
              </h2>

              <p className="mb-6 text-[1.05rem] leading-8 text-zinc-300">
                Proteger o couro cabeludo não depende de uma intervenção
                isolada. Limpeza equilibrada, hidratação, proteção e atenção à
                resposta da pele formam uma rotina mais consistente.
              </p>

              <p className="mb-6 text-[1.05rem] leading-8 text-zinc-300">
                Para aprofundar cada etapa, leia também:
              </p>

              <div className="mb-12 space-y-4">
                <a
                  href="/blog/por-que-homens-carecas-deveriam-limpar-o-couro-cabeludo"
                  className="block rounded-2xl border border-zinc-800 bg-zinc-950 p-5 font-semibold text-primary transition hover:border-primary/50 hover:bg-zinc-900"
                >
                  Por que homens carecas deveriam limpar o couro cabeludo?
                </a>

                <a
                  href="/blog/por-que-homens-carecas-deveriam-hidratar-o-couro-cabeludo"
                  className="block rounded-2xl border border-zinc-800 bg-zinc-950 p-5 font-semibold text-primary transition hover:border-primary/50 hover:bg-zinc-900"
                >
                  Por que homens carecas deveriam hidratar o couro cabeludo?
                </a>

                <a
                  href="/blog/por-que-homens-carecas-deveriam-proteger-o-couro-cabeludo"
                  className="block rounded-2xl border border-zinc-800 bg-zinc-950 p-5 font-semibold text-primary transition hover:border-primary/50 hover:bg-zinc-900"
                >
                  Por que homens carecas deveriam proteger o couro cabeludo
                  todos os dias?
                </a>

                <a
                  href="/blog/por-que-minha-careca-fica-oleosa-tao-rapido"
                  className="block rounded-2xl border border-zinc-800 bg-zinc-950 p-5 font-semibold text-primary transition hover:border-primary/50 hover:bg-zinc-900"
                >
                  Por que minha careca fica oleosa tão rápido?
                </a>
              </div>
            </section>

            {/* FAQ */}
            <section>
              <h2 className="mb-8 text-3xl font-bold">
                Perguntas frequentes
              </h2>

              <div className="space-y-5">
                {faqItems.map((item) => (
                  <details
                    key={item.question}
                    className="group rounded-2xl border border-zinc-800 bg-zinc-950 p-6"
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold">
                      <span>{item.question}</span>

                      <span
                        className="text-2xl text-primary transition-transform group-open:rotate-45"
                        aria-hidden="true"
                      >
                        +
                      </span>
                    </summary>

                    <p className="mt-5 leading-8 text-zinc-300">
                      {item.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* CONCLUSÃO */}
            <section className="mt-14">
              <h2 className="mb-4 text-3xl font-bold">Conclusão</h2>

              <p className="mb-6 text-[1.05rem] leading-8 text-zinc-300">
                O couro cabeludo continua sendo pele, mesmo quando não há
                cabelos. Ele mantém suas funções de proteção e permanece
                sujeito à exposição solar, ao clima, ao atrito e às escolhas da
                rotina diária.
              </p>

              <p className="mb-6 text-[1.05rem] leading-8 text-zinc-300">
                Sensibilidade, vermelhidão ou ardor não devem ser vistos apenas
                como uma questão estética. São sinais de que a pele pode estar
                reagindo a algum fator e precisa de uma abordagem mais
                equilibrada.
              </p>

              <p className="mb-10 text-[1.05rem] leading-8 text-zinc-300">
                Limpar sem agredir, preservar a hidratação, proteger contra o
                sol e reduzir agressões repetidas são medidas simples que
                ajudam a construir uma rotina mais consciente. Sintomas
                persistentes ou intensos devem ser avaliados por um
                dermatologista.
              </p>
            </section>

            {/* PRINCIPAIS APRENDIZADOS */}
            <section className="mt-14 rounded-[2rem] border border-primary/30 bg-primary/10 p-8">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-primary">
                Resumo
              </p>

              <h2 className="mb-6 text-3xl font-bold">
                Principais aprendizados
              </h2>

              <ul className="space-y-4 text-[1.05rem] leading-8 text-zinc-300">
                <li>
                  <strong className="text-white">
                    O couro cabeludo continua sendo pele:
                  </strong>{" "}
                  a ausência dos fios não elimina sua necessidade de cuidado.
                </li>

                <li>
                  <strong className="text-white">
                    A barreira cutânea limita a perda de água:
                  </strong>{" "}
                  sua integridade contribui para hidratação, proteção e
                  conforto.
                </li>

                <li>
                  <strong className="text-white">
                    Diferentes fatores podem provocar sensibilidade:
                  </strong>{" "}
                  sol, frio, água quente, atrito e produtos inadequados são
                  alguns exemplos.
                </li>

                <li>
                  <strong className="text-white">
                    Uma rotina equilibrada ajuda:
                  </strong>{" "}
                  limpeza suave, hidratação e proteção reduzem agressões
                  desnecessárias.
                </li>

                <li>
                  <strong className="text-white">
                    Sintomas persistentes exigem avaliação:
                  </strong>{" "}
                  irritação recorrente pode estar associada a uma condição
                  dermatológica.
                </li>
              </ul>
            </section>

            {/* REFERÊNCIAS */}
            <section className="mt-14 rounded-[2rem] border border-zinc-800 bg-zinc-950 p-8">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-primary">
                Referências científicas
              </p>

              <h2 className="mb-6 text-2xl font-bold">
                Fontes utilizadas na elaboração do conteúdo
              </h2>

              <ol className="space-y-5 text-sm leading-7 text-zinc-400">
                <li>
                  1. Akdeniz M, et al.{" "}
                  <em>
                    Transepidermal water loss in healthy adults: a systematic
                    review and meta-analysis.
                  </em>{" "}
                  2018.{" "}
                  <a
                    href="https://pubmed.ncbi.nlm.nih.gov/30022486/"
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-primary hover:underline"
                  >
                    Consultar no PubMed
                  </a>
                  .
                </li>

                <li>
                  2. Alexander H, et al.{" "}
                  <em>
                    Transepidermal water loss measurement as a research tool.
                  </em>{" "}
                  2018.{" "}
                  <a
                    href="https://pubmed.ncbi.nlm.nih.gov/30348333/"
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-primary hover:underline"
                  >
                    Consultar no PubMed
                  </a>
                  .
                </li>

                <li>
                  3. Tanno O, et al.{" "}
                  <em>
                    Nicotinamide increases biosynthesis of ceramides and other
                    stratum corneum lipids.
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
                  4. Gehring W.{" "}
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
                  5. Proksch E, et al.{" "}
                  <em>
                    Dexpanthenol enhances skin barrier repair and reduces
                    inflammation after irritation.
                  </em>{" "}
                  2002.{" "}
                  <a
                    href="https://pubmed.ncbi.nlm.nih.gov/19753737/"
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-primary hover:underline"
                  >
                    Consultar no PubMed
                  </a>
                  .
                </li>

                <li>
                  6. Stettler H, et al.{" "}
                  <em>
                    Panthenol-containing emollient: skin moisturization and
                    barrier restoration potential.
                  </em>{" "}
                  2017.{" "}
                  <a
                    href="https://pubmed.ncbi.nlm.nih.gov/27425824/"
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-primary hover:underline"
                  >
                    Consultar no PubMed
                  </a>
                  .
                </li>

                <li>
                  7. Voegeli D.{" "}
                  <em>
                    The effect of washing and drying practices on skin barrier
                    function.
                  </em>{" "}
                  2008.{" "}
                  <a
                    href="https://pubmed.ncbi.nlm.nih.gov/18199943/"
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-primary hover:underline"
                  >
                    Consultar no PubMed
                  </a>
                  .
                </li>
              </ol>
            </section>

            {/* CTA */}
            <div className="mt-14 rounded-[2rem] border border-primary/30 bg-primary/10 p-8 text-center">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-primary">
                Scalp Defense System™
              </p>

              <h2 className="mb-4 text-3xl font-bold">
                Cuidar da barreira é cuidar do couro cabeludo por inteiro.
              </h2>

              <p className="mb-7 text-[1.05rem] leading-8 text-zinc-300">
                Conheça uma abordagem estruturada em limpeza, hidratação,
                proteção e cuidado diário do couro cabeludo exposto.
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

export default BlogPostCouroCabeludoSensivel;