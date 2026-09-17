import React from "react";
import { Helmet } from "react-helmet";
import Header from "../components/Header";
import cleanHero from "../assets/products/clean-hero-desktop.webp";
import cleanBottle from "../assets/products/clean-bottle.webp";
import "./CleanLanding.css";


const STORE_URL = "https://loja.baldshield.com/clean/";

const benefits = [
  {
    title: "Purifica",
    text: "Remove resíduos, suor e impurezas acumuladas no couro cabeludo exposto.",
  },
  {
    title: "Controla",
    text: "Auxilia no equilíbrio da oleosidade e ajuda a reduzir o brilho excessivo.",
  },
  {
    title: "Equilibra",
    text: "Promove uma limpeza diária confortável, respeitando o equilíbrio natural da pele.",
  },
  {
    title: "Prepara",
    text: "Deixa o couro cabeludo pronto para receber hidratação e proteção nos próximos passos.",
  },
];

const formulaItems = [
  {
    tag: "NI",
    title: "Niacinamida",
    text: "Ativo cosmético que auxilia no controle da oleosidade e contribui para melhorar o aspecto geral da pele.",
  },
  {
    tag: "ZN",
    title: "Zinco",
    text: "Ingrediente selecionado para complementar o equilíbrio da oleosidade e o cuidado diário do couro cabeludo.",
  },
  {
    tag: "AV",
    title: "Aloe Vera",
    text: "Ingrediente conhecido por sua ação hidratante e calmante, contribuindo para uma sensação de conforto após a limpeza.",
  },
  {
    tag: "LS",
    title: "Sistema de limpeza suave",
    text: "Combinação de agentes de limpeza desenvolvida para remover impurezas e excesso de oleosidade sem tornar o cuidado diário agressivo.",
  },
];

const systemSteps = [
  {
    step: "STEP 01",
    name: "CLEAN",
    action: "Purificar",
    status: "Primeiro passo",
    active: true,
  },
  {
    step: "STEP 02",
    name: "HYDRATE",
    action: "Equilibrar",
    status: "Hidratação",
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
    question: "Posso usar o CLEAN todos os dias?",
    answer:
      "Sim. Para melhores resultados, o modo de uso recomenda a utilização diária do BALDSHIELD CLEAN.",
  },
  {
    question: "O CLEAN ajuda no controle da oleosidade?",
    answer:
      "A formulação auxilia no equilíbrio da oleosidade e na redução do brilho excessivo, especialmente quando utilizada de forma regular dentro da rotina BaldShield.",
  },
  {
    question: "O produto pode ressecar o couro cabeludo?",
    answer:
      "A proposta do CLEAN é realizar uma limpeza eficiente e confortável. A resposta da pele pode variar, por isso observe sua experiência de uso e continue a rotina com o STEP 02 HYDRATE.",
  },
  {
    question: "Quanto produto devo usar?",
    answer:
      "Aplique duas bombeadas do BALDSHIELD CLEAN sobre o couro cabeludo úmido, conforme indicado no modo de uso do produto.",
  },
  {
    question: "Preciso enxaguar depois da aplicação?",
    answer:
      "Sim. Massageie suavemente por 2 minutos e enxágue bem, removendo completamente o produto.",
  },
  {
    question: "Posso usar depois de raspar a cabeça?",
    answer:
      "Pode ser incorporado à rotina, mas a pele recém-raspada pode estar mais sensível. Evite aplicar sobre áreas lesionadas ou irritadas e suspenda o uso em caso de desconforto.",
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

export default function CleanProductPage() {
  return (
    <>
      <Helmet>
        <title>
          BaldShield CLEAN | Emulsão de Limpeza para Couro Cabeludo Exposto
        </title>

        <meta
          name="description"
          content="Conheça BaldShield CLEAN, STEP 01 do Scalp Defense System™: emulsão de limpeza diária para o couro cabeludo exposto, com controle da oleosidade e brilho."
        />

        <link
          rel="canonical"
          href="https://www.baldshield.com/products/clean"
        />

        <meta
          property="og:title"
          content="BaldShield CLEAN | Scalp Defense System™ STEP 01"
        />

        <meta
          property="og:description"
          content="Conheça o STEP 01 do Scalp Defense System™ e descubra uma nova lógica de cuidado para o couro cabeludo exposto."
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.baldshield.com/products/clean"
        />
      </Helmet>

    <Header />
      <main className="clean-page">
        {/* HERO */}
        <section className="clean-hero" aria-labelledby="clean-product-title">
          <div className="clean-hero__grain" aria-hidden="true" />

          <div className="clean-hero__layout">
            <div className="clean-shell clean-hero__copy">
              <div className="clean-kicker">
                <span className="clean-kicker__dot" />
                SCALP DEFENSE SYSTEM™
              </div>

              <p className="clean-eyebrow">STEP 01 · PURIFICAR</p>

              <h1 id="clean-product-title">
                <span className="clean-hero__brand">
                  BALDSHIELD <em>CLEAN.</em>
                </span>

                <span className="clean-hero__message">
                  Pele exposta pede uma nova lógica de cuidado.
                </span>
              </h1>

              <p className="clean-hero__lead">
                CLEAN é a etapa de purificação do Scalp Defense System™.
              </p>

              <p className="clean-hero__support">
                Uma emulsão de limpeza desenvolvida para integrar o cuidado
                diário do couro cabeludo exposto.
              </p>

              <div className="clean-hero__actions">
                <a
                  className="clean-button clean-button--primary"
                  href={STORE_URL}
                >
                  Comprar CLEAN
                </a>

                <a
                  className="clean-button clean-button--ghost"
                  href="#sistema"
                >
                  Conhecer o sistema
                </a>
              </div>

              <div className="clean-hero__microcopy">
                <span>
                  <CheckIcon /> 120 ml
                </span>
                <span>
                  <CheckIcon /> STEP 01
                </span>
                <span>
                  <CheckIcon /> Uso diário
                </span>
              </div>
            </div>

            <div
              className="clean-hero__visual"
              aria-label="BALDSHIELD CLEAN integrado à rotina de cuidado do couro cabeludo exposto"
            >
              <div className="clean-hero__halo" aria-hidden="true" />
              <div
                className="clean-hero__product-glow"
                aria-hidden="true"
              />

              <figure className="clean-lifestyle-card">
                <img
                  src={cleanHero}
                  alt="BALDSHIELD CLEAN sendo aplicado no couro cabeludo exposto"
                  fetchPriority="high"
                />

                <figcaption className="clean-lifestyle-card__caption">
                  <div>
                    <span>STEP 01</span>
                    <strong>CLEAN</strong>
                  </div>

                  <small>Emulsão de limpeza diária · 120 ml</small>
                </figcaption>
              </figure>
            </div>
          </div>

          <a
            className="clean-scroll-cue"
            href="#por-que-clean"
            aria-label="Conhecer o BALDSHIELD CLEAN"
          >
            <span>Conheça o CLEAN</span>
            <ArrowDownIcon />
          </a>
        </section>

        {/* NECESSIDADE + BENEFÍCIOS */}
        <section
          className="clean-section clean-section--dark"
          id="por-que-clean"
        >
          <div className="clean-shell">
            <header className="clean-section__heading">
              <p className="clean-section__eyebrow">
                POR QUE LIMPAR O COURO CABELUDO?
              </p>

              <h2>
                Exposto todos os dias. Cuidado desde o primeiro passo.
              </h2>

              <p>
                Suor, poluição, oleosidade, resíduos de produtos e exposição
                diária se acumulam diretamente sobre o couro cabeludo. O CLEAN
                transforma a limpeza em um primeiro passo consciente: purificar,
                equilibrar e preparar a pele para as próximas etapas.
              </p>
            </header>

            <div className="clean-benefits">
              {benefits.map((benefit, index) => (
                <article
                  className="clean-benefit-card"
                  key={benefit.title}
                >
                  <span className="clean-benefit-card__index">
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
          className="clean-section clean-section--formula"
          id="formula"
        >
          <div className="clean-shell">
            <header className="clean-section__heading clean-section__heading--formula">
              <p className="clean-section__eyebrow">CONHEÇA A FÓRMULA</p>

              <h2>
                Limpeza inteligente começa com uma fórmula equilibrada.
              </h2>

              <p>
                O BALDSHIELD CLEAN combina ativos selecionados para remover
                impurezas, auxiliar no controle da oleosidade e preservar o
                conforto do couro cabeludo exposto.
              </p>
            </header>

            <div className="clean-formula-experience">
              <div className="clean-formula-product">
                <div
                  className="clean-formula-product__glow"
                  aria-hidden="true"
                />

                <div className="clean-formula-product__frame">
                  <img
                    src={cleanBottle}
                    alt="Frasco BALDSHIELD CLEAN"
                    loading="lazy"
                  />
                </div>

                <div className="clean-formula-product__copy">
                  <span>STEP 01 · CLEAN</span>
                  <strong>Limpeza eficaz sem agressão.</strong>
                  <p>
                    Uma emulsão pensada para integrar purificação, equilíbrio e
                    conforto à rotina diária.
                  </p>
                </div>
              </div>

              <div className="clean-formula-list">
                {formulaItems.map((item, index) => (
                  <article
                    className="clean-formula-item"
                    key={item.title}
                  >
                    <div className="clean-formula-item__meta">
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <small>{item.tag}</small>
                    </div>

                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <p className="clean-disclaimer">
              As informações desta página apresentam a função cosmética dos
              componentes de forma educativa. Consulte sempre o rótulo do
              BALDSHIELD CLEAN para composição, precauções e modo de uso
              completos.
            </p>
          </div>
        </section>

        {/* TRANSIÇÃO CLEAN → HYDRATE */}
        <section className="clean-transition">
          <div className="clean-shell clean-transition__layout">
            <div className="clean-transition__copy">
              <p className="clean-section__eyebrow">
                UMA ETAPA DENTRO DE UM SISTEMA
              </p>

              <h2>A limpeza prepara o terreno para a hidratação.</h2>

              <p>
                Depois da etapa de limpeza, o Scalp Defense System™ segue com
                HYDRATE, DEFENSE e WIPES para organizar o cuidado do couro
                cabeludo exposto em uma rotina completa.
              </p>

              <a
                className="clean-button clean-button--ghost"
                href="#sistema"
              >
                Ver o Scalp Defense System™
              </a>
            </div>

            <div
              className="clean-transition__steps"
              aria-label="Transição do CLEAN para o HYDRATE"
            >
              <div className="clean-transition__step clean-transition__step--active">
                <small>STEP 01</small>
                <strong>CLEAN</strong>
                <span>Purificar</span>
              </div>

              <div
                className="clean-transition__arrow"
                aria-hidden="true"
              >
                →
              </div>

              <div className="clean-transition__step">
                <small>STEP 02</small>
                <strong>HYDRATE</strong>
                <span>Equilibrar</span>
              </div>
            </div>
          </div>
        </section>

        {/* SISTEMA */}
        <section
          className="clean-section clean-section--system"
          id="sistema"
        >
          <div className="clean-shell">
            <div className="clean-system-timeline__intro">
              <p className="clean-section__eyebrow">
                SCALP DEFENSE SYSTEM™
              </p>

              <h2>Uma rotina. Quatro movimentos essenciais.</h2>

              <p>
                CLEAN ocupa o STEP 01 do Scalp Defense System™: a etapa que
                purifica e prepara o couro cabeludo exposto para hidratação,
                proteção e cuidado ao longo do dia.
              </p>
            </div>

            <div className="clean-system-timeline">
              {systemSteps.map((item, index) => (
                <article
                  className={`clean-timeline-step ${
                    item.active ? "clean-timeline-step--active" : ""
                  }`}
                  key={item.step}
                >
                  <div className="clean-timeline-step__rail">
                    <span className="clean-timeline-step__dot">
                      {item.active && <CheckIcon />}
                    </span>

                    {index < systemSteps.length - 1 && (
                      <span
                        className="clean-timeline-step__line"
                        aria-hidden="true"
                      />
                    )}
                  </div>

                  <div className="clean-timeline-step__content">
                    <div className="clean-timeline-step__top">
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
          className="clean-section clean-section--light"
          id="faq"
        >
          <div className="clean-shell clean-faq-layout">
            <div className="clean-faq-layout__intro">
              <p className="clean-section__eyebrow">
                DÚVIDAS FREQUENTES
              </p>

              <h2>Antes de usar o seu CLEAN.</h2>

              <p>
                Informações para entender como o BALDSHIELD CLEAN se integra à
                rotina de cuidado do couro cabeludo exposto.
              </p>
            </div>

            <div className="clean-faq">
              {faqs.map((faq, index) => (
                <details
                  className="clean-faq__item"
                  key={faq.question}
                >
                  <summary>
                    <span className="clean-faq__number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span>{faq.question}</span>

                    <span
                      className="clean-faq__plus"
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

        {/* FECHAMENTO / COMPRA */}
        <section className="clean-closing">
          <div className="clean-closing__glow" aria-hidden="true" />

          <div className="clean-shell clean-closing__content">
            <p className="clean-section__eyebrow">
              SCALP DEFENSE SYSTEM™ · STEP 01
            </p>

            <h2>
              Pele exposta.
              <br />
              Uma nova lógica de cuidado começa com CLEAN.
            </h2>

            <p>
              Conheça o primeiro passo do Scalp Defense System™ e integre a
              limpeza do couro cabeludo exposto à sua rotina diária.
            </p>

            <a
              className="clean-button clean-button--primary"
              href={STORE_URL}
            >
              Comprar CLEAN
            </a>

            <div className="clean-closing__brand">
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