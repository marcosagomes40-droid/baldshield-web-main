import React from "react";
import { Helmet } from "react-helmet";
import cleanHero from "../assets/products/clean-hero-desktop.webp";
import cleanBottle from "../assets/products/clean-bottle.webp";
import "./CleanLanding.css";

const usageSteps = [
  {
    number: "01",
    title: "Destrave",
    text: "No primeiro uso, gire a válvula no sentido anti-horário para destravar.",
  },
  {
    number: "02",
    title: "Aplique",
    text: "Aplique duas bombeadas do BALDSHIELD CLEAN sobre o couro cabeludo úmido.",
  },
  {
    number: "03",
    title: "Massageie",
    text: "Massageie suavemente por 2 minutos, espalhando o produto por toda a área exposta.",
  },
  {
    number: "04",
    title: "Enxágue",
    text: "Enxágue bem, removendo completamente o produto. Para melhores resultados, utilize diariamente.",
  },
];

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
    status: "Você está aqui",
    active: true,
  },
  {
    step: "STEP 02",
    name: "HYDRATE",
    action: "Equilibrar",
    status: "Próximo passo",
  },
  {
    step: "STEP 03",
    name: "PROTECT",
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
  {
    question: "O que fazer em caso de contato com os olhos?",
    answer:
      "Enxágue abundantemente com água. Se o desconforto persistir, procure orientação de um profissional de saúde.",
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

export default function CleanLanding() {
  return (
    <>
      <Helmet>
        <title>BALDSHIELD CLEAN | Conteúdo exclusivo STEP 01</title>
        <meta
          name="description"
          content="Conteúdo exclusivo do BALDSHIELD CLEAN: modo de uso, benefícios, fórmula e sequência do Scalp Defense System™."
        />
        <link rel="canonical" href="https://www.baldshield.com/clean" />
        <meta property="og:title" content="BALDSHIELD CLEAN | STEP 01" />
        <meta
          property="og:description"
          content="Descubra como usar o STEP 01 do Scalp Defense System™ e inicie sua rotina de cuidado com o couro cabeludo exposto."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.baldshield.com/clean" />
      </Helmet>

      <main className="clean-page">
        <section className="clean-hero" aria-labelledby="clean-title">
          <div className="clean-hero__grain" aria-hidden="true" />

          <div className="clean-hero__layout">
            <div className="clean-shell clean-hero__copy">
              <div className="clean-kicker">
                <span className="clean-kicker__dot" />
                CONTEÚDO EXCLUSIVO BALDSHIELD
              </div>

              <p className="clean-eyebrow">
                SCALP DEFENSE SYSTEM™ · STEP 01
              </p>

              <h1 id="clean-title">
                <span className="clean-hero__brand">
                  BALDSHIELD <em>CLEAN.</em>
                </span>
                <span className="clean-hero__message">
                  Toda grande rotina começa com uma limpeza inteligente.
                </span>
              </h1>

              <p className="clean-hero__lead">
                Você acaba de acessar o conteúdo exclusivo do primeiro passo do
                Scalp Defense System™.
              </p>

              <p className="clean-hero__support">
                Descubra como aproveitar melhor o seu BALDSHIELD CLEAN e
                transformar a limpeza do couro cabeludo em um hábito diário.
              </p>

              <div className="clean-hero__actions">
                <a
                  className="clean-button clean-button--primary"
                  href="#como-usar"
                >
                  Ver modo de uso
                  <ArrowDownIcon />
                </a>

                <a
                  className="clean-button clean-button--ghost"
                  href="#formula"
                >
                  Conheça a fórmula
                </a>
              </div>

              <div className="clean-hero__microcopy">
                <span>
                  <CheckIcon /> Uso diário
                </span>
                <span>
                  <CheckIcon /> Controle da oleosidade
                </span>
                <span>
                  <CheckIcon /> Enxágue
                </span>
              </div>
            </div>

            <div
              className="clean-hero__visual"
              aria-label="Homem utilizando o BALDSHIELD CLEAN durante o banho"
            >
              <div className="clean-hero__halo" aria-hidden="true" />
              <div className="clean-hero__product-glow" aria-hidden="true" />

              <figure className="clean-lifestyle-card">
                <img
                  src={cleanHero}
                  alt="Homem utilizando BALDSHIELD CLEAN no couro cabeludo durante o banho"
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
            href="#como-usar"
            aria-label="Ir para o modo de uso"
          >
            <span>Comece por aqui</span>
            <ArrowDownIcon />
          </a>
        </section>

        <section
          className="clean-section clean-section--light"
          id="como-usar"
        >
          <div className="clean-shell">
            <header className="clean-section__heading clean-section__heading--dark">
              <p className="clean-section__eyebrow">PRIMEIRO USO</p>
              <h2>Como usar o seu CLEAN</h2>
              <p>
                Uma etapa simples de limpeza para integrar à rotina diária de
                cuidado com o couro cabeludo exposto.
              </p>
            </header>

            <div className="clean-usage">
              {usageSteps.map((item, index) => (
                <article className="clean-usage__item" key={item.number}>
                  <div className="clean-usage__top">
                    <span className="clean-usage__number">{item.number}</span>
                    {index < usageSteps.length - 1 && (
                      <span
                        className="clean-usage__line"
                        aria-hidden="true"
                      />
                    )}
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>

            <div className="clean-tip">
              <span className="clean-tip__icon">BS</span>
              <div>
                <strong>Dica BaldShield</strong>
                <p>
                  Utilize as pontas dos dedos para massagear o couro cabeludo
                  durante aproximadamente 2 minutos. Evite utilizar as unhas ou
                  realizar fricção excessiva.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="clean-section clean-section--dark">
          <div className="clean-shell">
            <header className="clean-section__heading">
              <p className="clean-section__eyebrow">
                POR QUE LIMPAR O COURO CABELUDO?
              </p>
              <h2>
                Sem a proteção dos cabelos, a pele fica mais exposta à rotina.
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

        <section
          className="clean-section clean-section--formula"
          id="formula"
        >
          <div className="clean-shell">
            <header className="clean-section__heading clean-section__heading--formula">
              <p className="clean-section__eyebrow">
                CONHEÇA A FÓRMULA
              </p>
              <h2>Limpeza inteligente começa com uma fórmula equilibrada.</h2>
              <p>
                O BALDSHIELD CLEAN combina ativos selecionados para remover
                impurezas, auxiliar no controle da oleosidade e preservar o
                conforto do couro cabeludo exposto.
              </p>
            </header>

            <div className="clean-formula-experience">
              <div className="clean-formula-product">
                <div className="clean-formula-product__glow" aria-hidden="true" />

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
                  <article className="clean-formula-item" key={item.title}>
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

        <section className="clean-transition">
          <div className="clean-shell clean-transition__layout">
            <div className="clean-transition__copy">
              <p className="clean-section__eyebrow">ANTES DO PRÓXIMO PASSO</p>
              <h2>A limpeza prepara o terreno para a hidratação.</h2>
              <p>
                Depois de remover impurezas e excesso de oleosidade, o couro
                cabeludo está pronto para receber o STEP 02 HYDRATE e continuar
                a rotina de cuidado.
              </p>
              <a className="clean-button clean-button--ghost" href="/hydrate">
                Conheça o HYDRATE
              </a>
            </div>

            <div className="clean-transition__steps" aria-label="Transição do CLEAN para o HYDRATE">
              <div className="clean-transition__step clean-transition__step--active">
                <small>STEP 01</small>
                <strong>CLEAN</strong>
                <span>Purificar</span>
              </div>

              <div className="clean-transition__arrow" aria-hidden="true">
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
                Você está no STEP 01. O CLEAN inicia a rotina removendo
                impurezas e preparando o couro cabeludo para hidratação,
                proteção e controle ao longo do dia.
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

        <section className="clean-section clean-section--light" id="faq">
          <div className="clean-shell clean-faq-layout">
            <div className="clean-faq-layout__intro">
              <p className="clean-section__eyebrow">DÚVIDAS FREQUENTES</p>
              <h2>Limpeza sem complicação.</h2>
              <p>
                Respostas rápidas para ajudar você a aproveitar melhor a
                experiência com o BALDSHIELD CLEAN.
              </p>
            </div>

            <div className="clean-faq">
              {faqs.map((faq, index) => (
                <details className="clean-faq__item" key={faq.question}>
                  <summary>
                    <span className="clean-faq__number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span>{faq.question}</span>
                    <span className="clean-faq__plus" aria-hidden="true">
                      +
                    </span>
                  </summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="clean-closing">
          <div className="clean-closing__glow" aria-hidden="true" />

          <div className="clean-shell clean-closing__content">
            <p className="clean-section__eyebrow">CUIDADO QUE GERA CONFIANÇA</p>
            <h2>
              Toda grande rotina começa por uma limpeza inteligente.
              <br />
              Purificar. Equilibrar. Preparar.
            </h2>
            <p>
              Você concluiu o STEP 01 do Scalp Defense System™. Agora o couro
              cabeludo está pronto para seguir para a etapa de hidratação.
            </p>

            <a className="clean-button clean-button--primary" href="/hydrate">
              Conheça o STEP 02
              <ArrowDownIcon />
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