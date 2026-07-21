import React from "react";
import { Helmet } from "react-helmet";
import hydrateHero from "../assets/products/hydrate-hero.webp";
import "./HydrateLanding.css";

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
    status: "Você está aqui",
    active: true,
  },
  {
    step: "STEP 03",
    name: "PROTECT",
    action: "Defender",
    status: "Próximo passo",
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
      "Aplique sobre o couro cabeludo limpo e seco. Na rotina BaldShield, ele entra depois do STEP 01 CLEAN e antes do STEP 03 PROTECT.",
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
    question: "O HYDRATE possui fragrância?",
    answer:
      "Consulte o rótulo do BALDSHIELD HYDRATE para confirmar as características completas da formulação e as orientações de uso.",
  },
  {
    question: "Posso aplicar o protetor solar depois?",
    answer:
      "Sim. Aguarde a absorção do HYDRATE e continue a rotina com o STEP 03 PROTECT, seguindo as instruções de uso do protetor.",
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

export default function HydrateLanding() {
  return (
    <>
      <Helmet>
        <title>BALDSHIELD HYDRATE | Conteúdo exclusivo STEP 02</title>
        <meta
          name="description"
          content="Conteúdo exclusivo do BALDSHIELD HYDRATE: modo de uso, benefícios, ativos e sequência do Scalp Defense System™."
        />
        <link rel="canonical" href="https://www.baldshield.com/hydrate" />
        <meta property="og:title" content="BALDSHIELD HYDRATE | STEP 02" />
        <meta
          property="og:description"
          content="Descubra como usar o STEP 02 do Scalp Defense System™ e aproveite melhor sua rotina BaldShield."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.baldshield.com/hydrate" />
      </Helmet>

      <main className="hydrate-page">
        <section className="hydrate-hero" aria-labelledby="hydrate-title">
          <div className="hydrate-hero__grain" aria-hidden="true" />

          <div className="hydrate-hero__layout">
            <div className="hydrate-shell hydrate-hero__copy">
              <div className="hydrate-kicker">
                <span className="hydrate-kicker__dot" />
                CONTEÚDO EXCLUSIVO BALDSHIELD
              </div>

              <p className="hydrate-eyebrow">
                SCALP DEFENSE SYSTEM™ · STEP 02
              </p>

              <h1 id="hydrate-title">
                <span className="hydrate-hero__brand">
                  BALDSHIELD <em>HYDRATE.</em>
                </span>
                <span className="hydrate-hero__message">
                  O próximo passo do cuidado começa aqui.
                </span>
              </h1>

              <p className="hydrate-hero__lead">
                Você acaba de acessar o conteúdo exclusivo do STEP 02 do
                Scalp Defense System™.
              </p>

              <p className="hydrate-hero__support">
                Descubra como aproveitar melhor o seu BALDSHIELD HYDRATE e
                transformar a hidratação em um hábito diário.
              </p>

              <div className="hydrate-hero__actions">
                <a
                  className="hydrate-button hydrate-button--primary"
                  href="#como-usar"
                >
                  Ver modo de uso
                  <ArrowDownIcon />
                </a>

                <a
                  className="hydrate-button hydrate-button--ghost"
                  href="#formula"
                >
                  Conheça a fórmula
                </a>
              </div>

              <div className="hydrate-hero__microcopy">
                <span>
                  <CheckIcon /> Uso diário
                </span>
                <span>
                  <CheckIcon /> Toque seco
                </span>
                <span>
                  <CheckIcon /> Sem enxágue
                </span>
              </div>
            </div>

            <div
              className="hydrate-hero__visual"
              aria-label="Aplicação do BALDSHIELD HYDRATE"
            >
              <div className="hydrate-hero__halo" aria-hidden="true" />
              <div className="hydrate-hero__product-glow" aria-hidden="true" />

              <figure className="hydrate-lifestyle-card">
                <img
                  src={hydrateHero}
                  alt="Homem aplicando BALDSHIELD HYDRATE no couro cabeludo"
                  fetchPriority="high"
                />

                <figcaption className="hydrate-lifestyle-card__caption">
                  <div>
                    <span>STEP 02</span>
                    <strong>HYDRATE</strong>
                  </div>
                  <small>Hidratante diário · 60 ml</small>
                </figcaption>
              </figure>
            </div>
          </div>

          <a
            className="hydrate-scroll-cue"
            href="#como-usar"
            aria-label="Ir para o modo de uso"
          >
            <span>Comece por aqui</span>
            <ArrowDownIcon />
          </a>
        </section>

        <section
          className="hydrate-section hydrate-section--light"
          id="como-usar"
        >
          <div className="hydrate-shell">
            <header className="hydrate-section__heading hydrate-section__heading--dark">
              <p className="hydrate-section__eyebrow">PRIMEIRO USO</p>
              <h2>Como usar o seu HYDRATE</h2>
              <p>
                Uma etapa simples de hidratação para integrar à sua rotina
                diária de cuidado com o couro cabeludo exposto.
              </p>
            </header>

            <div className="hydrate-usage">
              {usageSteps.map((item, index) => (
                <article className="hydrate-usage__item" key={item.number}>
                  <div className="hydrate-usage__top">
                    <span className="hydrate-usage__number">{item.number}</span>
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

        <section className="hydrate-section hydrate-section--dark">
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
                <div className="hydrate-formula-product__glow" aria-hidden="true" />
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
                    Textura pensada para integrar cuidado, conforto e praticidade
                    à rotina diária.
                  </p>
                </div>
              </div>

              <div className="hydrate-formula-list">
                {actives.map((active, index) => (
                  <article className="hydrate-formula-item" key={active.title}>
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
                Você está no STEP 02. Depois de limpar, o HYDRATE ajuda a
                equilibrar a pele e prepara o couro cabeludo para a proteção.
              </p>
            </div>

            <div className="hydrate-system-timeline">
              {systemSteps.map((item, index) => (
                <article
                  className={`hydrate-timeline-step ${
                    item.active ? "hydrate-timeline-step--active" : ""
                  } ${
                    item.completed ? "hydrate-timeline-step--completed" : ""
                  }`}
                  key={item.step}
                >
                  <div className="hydrate-timeline-step__rail">
                    <span className="hydrate-timeline-step__dot">
                      {(item.active || item.completed) && <CheckIcon />}
                    </span>
                    {index < systemSteps.length - 1 && (
                      <span className="hydrate-timeline-step__line" aria-hidden="true" />
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

        <section className="hydrate-section hydrate-section--light" id="faq">
          <div className="hydrate-shell hydrate-faq-layout">
            <div className="hydrate-faq-layout__intro">
              <p className="hydrate-section__eyebrow">DÚVIDAS FREQUENTES</p>
              <h2>Hidratação sem complicação.</h2>
              <p>
                Respostas rápidas para ajudar você a aproveitar melhor a
                experiência com o BALDSHIELD HYDRATE.
              </p>
            </div>

            <div className="hydrate-faq">
              {faqs.map((faq, index) => (
                <details className="hydrate-faq__item" key={faq.question}>
                  <summary>
                    <span className="hydrate-faq__number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span>{faq.question}</span>
                    <span className="hydrate-faq__plus" aria-hidden="true">
                      +
                    </span>
                  </summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="hydrate-closing">
          <div className="hydrate-closing__glow" aria-hidden="true" />
          <div className="hydrate-shell hydrate-closing__content">
            <p className="hydrate-section__eyebrow">CUIDADO QUE GERA CONFIANÇA</p>
            <h2>
              Cuidar da sua careca é mais do que uma rotina.
              <br />
              É uma nova forma de sentir confiança todos os dias.
            </h2>
            <p>
              Você concluiu o STEP 02 do Scalp Defense System™. Agora sua pele
              está pronta para seguir para a etapa de proteção.
            </p>

            <a
              className="hydrate-button hydrate-button--primary"
              href="#como-usar"
            >
              Rever modo de uso
              <ArrowDownIcon />
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