import React from "react";
import { Helmet } from "react-helmet";
import Header from "../components/Header";
import hydrateHero from "../assets/products/hydrate-hero.webp";
import "./HydrateLanding.css";

const STORE_URL = "https://loja.baldshield.com/hydrate";

const usageSteps = [
  {
    number: "01",
    title: "Prepare",
    text: "Use o HYDRATE sobre o couro cabeludo limpo e seco, preferencialmente após o STEP 01 CLEAN.",
  },
  {
    number: "02",
    title: "Aplique",
    text: "Coloque uma pequena quantidade do produto nas pontas dos dedos.",
  },
  {
    number: "03",
    title: "Espalhe",
    text: "Distribua uniformemente sobre toda a região exposta do couro cabeludo.",
  },
  {
    number: "04",
    title: "Massageie",
    text: "Massageie suavemente até a completa absorção. Não é necessário enxaguar.",
  },
];

const benefits = [
  {
    title: "Hidrata sem pesar",
    text: "Ajuda a manter a pele hidratada e confortável, sem transformar o cuidado diário em uma etapa pesada.",
  },
  {
    title: "Rápida absorção",
    text: "Textura suave, pensada para espalhar com facilidade e integrar-se à rotina.",
  },
  {
    title: "Toque seco",
    text: "Contribui para uma sensação mais confortável, sem excesso de oleosidade após a aplicação.",
  },
  {
    title: "Cuidado diário",
    text: "O segundo passo do Scalp Defense System™ prepara a pele para a etapa de proteção.",
  },
];

const actives = [
  {
    tag: "AH",
    title: "Ácido Hialurônico",
    text: "Ativo umectante que auxilia na retenção de água, contribuindo para a hidratação e a maciez da pele.",
  },
  {
    tag: "UV",
    title: "Óleo de Semente de Uva",
    text: "Ingrediente emoliente selecionado para complementar a hidratação e a suavidade da pele.",
  },
  {
    tag: "VE",
    title: "Vitamina E",
    text: "Ingrediente com ação antioxidante e emoliente que complementa o cuidado cosmético diário.",
  },
  {
    tag: "OC",
    title: "Óleo de Copaíba",
    text: "Óleo vegetal presente na formulação, associado ao cuidado e ao conforto cosmético da pele.",
  },
];

const systemSteps = [
  {
    step: "STEP 01",
    name: "CLEAN",
    action: "Purificar",
    status: "Etapa anterior",
    completed: true,
  },
  {
    step: "STEP 02",
    name: "HYDRATE",
    action: "Equilibrar",
    status: "Hidratação",
    active: true,
  },
  {
    step: "STEP 03",
    name: "DEFENSE",
    action: "Defender",
    status: "Proteção diária",
  },
  {
    step: "STEP 04",
    name: "WIPES",
    action: "Controlar",
    status: "Cuidado ao longo do dia",
  },
];

const faqs = [
  {
    question: "Posso usar o HYDRATE todos os dias?",
    answer:
      "Sim. O HYDRATE foi desenvolvido para integrar a rotina diária de cuidado. Siga sempre o modo de uso e as orientações presentes no rótulo do produto.",
  },
  {
    question: "Qual é o melhor momento para aplicar?",
    answer:
      "Aplique sobre o couro cabeludo limpo e seco. Na rotina BaldShield, ele entra depois do STEP 01 CLEAN e antes do STEP 03 DEFENSE.",
  },
  {
    question: "Quanto produto devo usar?",
    answer:
      "Comece com uma pequena quantidade, suficiente para formar uma camada fina e uniforme. Ajuste gradualmente conforme a área exposta e a necessidade da sua pele.",
  },
  {
    question: "Preciso enxaguar depois da aplicação?",
    answer:
      "Não. Massageie suavemente até a completa absorção e deixe o produto permanecer sobre a pele.",
  },
  {
    question: "O HYDRATE possui perfume?",
    answer:
      "Não. O HYDRATE foi formulado sem perfume, uma escolha pensada para o cuidado diário do couro cabeludo exposto, evitando fragrâncias desnecessárias na rotina e sem competir com o perfume que você escolhe usar.",
  },
  {
    question: "Depois do HYDRATE, como proteger o couro cabeludo exposto?",
    answer:
      "Após a absorção do HYDRATE, utilize diariamente a Loção Multifuncional DEFENSE, STEP 03 do Scalp Defense System™, com FPS 70 e alta proteção UVA | UVB. Siga sempre o modo de uso indicado no rótulo do produto.",
  },
  {
    question: "O que fazer em caso de desconforto?",
    answer:
      "Suspenda o uso. Em caso de irritação persistente, procure orientação de um profissional de saúde. Evite contato direto com os olhos.",
  },
];

function ArrowDownIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 4v14m0 0 6-6m-6 6-6-6" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

export default function HydrateProductPage() {
  return (
    <>
      <Helmet>
        <title>
          BaldShield HYDRATE | Hidratação de Longa Duração
        </title>

        <meta
          name="description"
          content="Conheça BaldShield HYDRATE, STEP 02 do Scalp Defense System™: hidratação de longa duração para o couro cabeludo exposto, sem deixar oleosidade e brilho."
        />

        <link
          rel="canonical"
          href="https://www.baldshield.com/products/hydrate"
        />

        <meta
          property="og:title"
          content="BaldShield HYDRATE | Scalp Defense System™ STEP 02"
        />

        <meta
          property="og:description"
          content="Conheça o STEP 02 do Scalp Defense System™ e descubra a etapa de hidratação para o couro cabeludo exposto."
        />

        <meta property="og:type" content="website" />

        <meta
          property="og:url"
          content="https://www.baldshield.com/products/hydrate"
        />
      </Helmet>

      <Header />

      <main className="hydrate-page">
        {/* HERO */}
        <section
          className="hydrate-hero"
          aria-labelledby="hydrate-product-title"
        >
          <div className="hydrate-hero__grain" aria-hidden="true" />

          <div className="hydrate-hero__layout">
            <div className="hydrate-shell hydrate-hero__copy">
              <div className="hydrate-kicker">
                <span className="hydrate-kicker__dot" />
                SCALP DEFENSE SYSTEM™
              </div>

              <p className="hydrate-eyebrow">STEP 02 · EQUILIBRAR</p>

              <h1 id="hydrate-product-title">
                <span className="hydrate-hero__brand">
                  BALDSHIELD <em>HYDRATE.</em>
                </span>

                <span className="hydrate-hero__message">
                  Pele exposta também precisa de hidratação.
                </span>
              </h1>

              <p className="hydrate-hero__lead">
                HYDRATE é a etapa de hidratação do Scalp Defense System™.
              </p>

              <p className="hydrate-hero__support">
                Hidratação de longa duração para o couro cabeludo exposto, sem
                deixar oleosidade e brilho.
              </p>

              <div className="hydrate-hero__actions">
                <a
                  className="hydrate-button hydrate-button--primary"
                  href={STORE_URL}
                >
                  Comprar HYDRATE
                </a>

                <a
                  className="hydrate-button hydrate-button--ghost"
                  href="#sistema"
                >
                  Conhecer o sistema
                </a>
              </div>

              <div className="hydrate-hero__microcopy">
                <span>
                  <CheckIcon /> 60 g
                </span>

                <span>
                  <CheckIcon /> STEP 02
                </span>

                <span>
                  <CheckIcon /> Uso diário
                </span>
              </div>
            </div>

            <div
              className="hydrate-hero__visual"
              aria-label="BALDSHIELD HYDRATE integrado à rotina de cuidado do couro cabeludo exposto"
            >
              <div className="hydrate-hero__halo" aria-hidden="true" />

              <div
                className="hydrate-hero__product-glow"
                aria-hidden="true"
              />

              <figure className="hydrate-lifestyle-card">
                <img
                  src={hydrateHero}
                  alt="BALDSHIELD HYDRATE aplicado no couro cabeludo exposto"
                  fetchPriority="high"
                />

                <figcaption className="hydrate-lifestyle-card__caption">
                  <div>
                    <span>STEP 02</span>
                    <strong>HYDRATE</strong>
                  </div>

                  <small>Hidratação diária · 60 g</small>
                </figcaption>
              </figure>
            </div>
          </div>

          <a
            className="hydrate-scroll-cue"
            href="#por-que-hydrate"
            aria-label="Conhecer o BALDSHIELD HYDRATE"
          >
            <span>Conheça o HYDRATE</span>
            <ArrowDownIcon />
          </a>
        </section>

        {/* NECESSIDADE + BENEFÍCIOS */}
        <section
          className="hydrate-section hydrate-section--dark"
          id="por-que-hydrate"
        >
          <div className="hydrate-shell">
            <header className="hydrate-section__heading">
              <p className="hydrate-section__eyebrow">
                POR QUE HIDRATAR O COURO CABELUDO?
              </p>

              <h2>
                A ausência de cabelos não elimina as necessidades da pele.
              </h2>

              <p>
                Sol, vento, calor, ar-condicionado e banhos frequentes fazem
                parte da rotina do couro cabeludo exposto. O HYDRATE transforma
                a hidratação em um segundo passo consciente: repor conforto,
                favorecer a maciez e preparar a pele para a proteção.
              </p>
            </header>

            <div className="hydrate-benefits">
              {benefits.map((benefit, index) => (
                <article
                  className="hydrate-benefit-card"
                  key={benefit.title}
                >
                  <span className="hydrate-benefit-card__index">
                    0{index + 1}
                  </span>

                  <h3>{benefit.title}</h3>
                  <p>{benefit.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FÓRMULA */}
        <section
          className="hydrate-section hydrate-section--formula"
          id="formula"
        >
          <div className="hydrate-shell">
            <header className="hydrate-section__heading hydrate-section__heading--formula">
              <p className="hydrate-section__eyebrow">
                CONHEÇA A FÓRMULA
              </p>

              <h2>O cuidado começa na fórmula.</h2>

              <p>
                Cada componente foi selecionado para construir uma experiência
                de hidratação leve, confortável e adequada à rotina do couro
                cabeludo exposto.
              </p>
            </header>

            <div className="hydrate-formula-experience">
              <div className="hydrate-formula-product">
                <div
                  className="hydrate-formula-product__glow"
                  aria-hidden="true"
                />

                <div className="hydrate-formula-product__frame">
                  <img
                    src={hydrateHero}
                    alt="BALDSHIELD HYDRATE em destaque"
                    loading="lazy"
                  />
                </div>

                <div className="hydrate-formula-product__copy">
                  <span>STEP 02 · HYDRATE</span>
                  <strong>Hidratação sem pesar.</strong>

                  <p>
                    Textura pensada para integrar cuidado, conforto e
                    praticidade à rotina diária.
                  </p>
                </div>
              </div>

              <div className="hydrate-formula-list">
                {actives.map((active, index) => (
                  <article
                    className="hydrate-formula-item"
                    key={active.title}
                  >
                    <div className="hydrate-formula-item__meta">
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <small>{active.tag}</small>
                    </div>

                    <div>
                      <h3>{active.title}</h3>
                      <p>{active.text}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <p className="hydrate-disclaimer">
              As informações desta página apresentam a função cosmética dos
              componentes de forma educativa. Consulte sempre o rótulo do
              BALDSHIELD HYDRATE para composição, precauções e modo de uso
              completos.
            </p>
          </div>
        </section>

        {/* COMO INTEGRAR À ROTINA */}
        <section
          className="hydrate-section hydrate-section--light"
          id="como-usar"
        >
          <div className="hydrate-shell">
            <header className="hydrate-section__heading hydrate-section__heading--dark">
              <p className="hydrate-section__eyebrow">
                COMO INTEGRAR À ROTINA
              </p>

              <h2>Uma etapa simples de hidratação.</h2>

              <p>
                HYDRATE entra depois da limpeza e antes da etapa de proteção do
                Scalp Defense System™.
              </p>
            </header>

            <div className="hydrate-usage">
              {usageSteps.map((item, index) => (
                <article
                  className="hydrate-usage__item"
                  key={item.number}
                >
                  <div className="hydrate-usage__top">
                    <span className="hydrate-usage__number">
                      {item.number}
                    </span>

                    {index < usageSteps.length - 1 && (
                      <span
                        className="hydrate-usage__line"
                        aria-hidden="true"
                      />
                    )}
                  </div>

                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>

            <div className="hydrate-tip">
              <span className="hydrate-tip__icon">BS</span>

              <div>
                <strong>Dica BaldShield</strong>

                <p>
                  Comece com uma pequena quantidade. Espalhe em camada fina e
                  acrescente mais somente onde sentir necessidade.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SISTEMA */}
        <section
          className="hydrate-section hydrate-section--system"
          id="sistema"
        >
          <div className="hydrate-shell">
            <div className="hydrate-system-timeline__intro">
              <p className="hydrate-section__eyebrow">
                SCALP DEFENSE SYSTEM™
              </p>

              <h2>Uma rotina. Quatro movimentos essenciais.</h2>

              <p>
                HYDRATE ocupa o STEP 02 do Scalp Defense System™. Depois da
                limpeza, a hidratação integra a rotina antes da etapa de
                proteção.
              </p>
            </div>

            <div className="hydrate-system-timeline">
              {systemSteps.map((item, index) => (
                <article
                  className={`hydrate-timeline-step ${
                    item.active ? "hydrate-timeline-step--active" : ""
                  } ${
                    item.completed
                      ? "hydrate-timeline-step--completed"
                      : ""
                  }`}
                  key={item.step}
                >
                  <div className="hydrate-timeline-step__rail">
                    <span className="hydrate-timeline-step__dot">
                      {(item.active || item.completed) && <CheckIcon />}
                    </span>

                    {index < systemSteps.length - 1 && (
                      <span
                        className="hydrate-timeline-step__line"
                        aria-hidden="true"
                      />
                    )}
                  </div>

                  <div className="hydrate-timeline-step__content">
                    <div className="hydrate-timeline-step__top">
                      <span>{item.step}</span>
                      <small>{item.status}</small>
                    </div>

                    <strong>{item.name}</strong>
                    <p>{item.action}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section
          className="hydrate-section hydrate-section--light"
          id="faq"
        >
          <div className="hydrate-shell hydrate-faq-layout">
            <div className="hydrate-faq-layout__intro">
              <p className="hydrate-section__eyebrow">
                DÚVIDAS FREQUENTES
              </p>

              <h2>Antes de usar o seu HYDRATE.</h2>

              <p>
                Informações para entender como o BALDSHIELD HYDRATE se integra
                à rotina de cuidado do couro cabeludo exposto.
              </p>
            </div>

            <div className="hydrate-faq">
              {faqs.map((faq, index) => (
                <details
                  className="hydrate-faq__item"
                  key={faq.question}
                >
                  <summary>
                    <span className="hydrate-faq__number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span>{faq.question}</span>

                    <span
                      className="hydrate-faq__plus"
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </summary>

                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* FECHAMENTO */}
        <section className="hydrate-closing">
          <div className="hydrate-closing__glow" aria-hidden="true" />

          <div className="hydrate-shell hydrate-closing__content">
            <p className="hydrate-section__eyebrow">
              SCALP DEFENSE SYSTEM™ · STEP 02
            </p>

            <h2>
              Pele exposta também precisa
              <br />
              de hidratação.
            </h2>

            <p>
              Integre o HYDRATE à sua rotina diária e avance para o segundo
              passo do Scalp Defense System™.
            </p>

            <a
              className="hydrate-button hydrate-button--primary"
              href={STORE_URL}
            >
              Comprar HYDRATE
            </a>

            <div className="hydrate-closing__brand">
              <strong>
                BALD<span>SHIELD</span>
              </strong>

              <small>Confidence for the Bold</small>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}