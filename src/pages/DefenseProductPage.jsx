import React from "react";
import { Helmet } from "react-helmet";
import Header from "../components/Header";

import protectHero from "../assets/products/baldshield-protect-hero.webp";
import protectExposure from "../assets/products/baldshield-protect-exposicao-solar.webp";
import protectApplication from "../assets/products/baldshield-protect-aplicacao.webp";

import "./ProtectLanding.css";

const STORE_URL = "https://loja.baldshield.com/protect/";

const proofItems = [
  {
    value: "FPS 70",
    label: "Alta proteção UVB",
  },
  {
    value: "FP-UVA 49,3",
    label: "Alta proteção UVA",
  },
  {
    value: "383 nm",
    label: "Amplo espectro",
  },
  {
    value: "DERMATOLOGICAMENTE TESTADO",
    label: "Segurança avaliada dermatologicamente",
  },
];

const careItems = [
  {
    index: "01",
    title: "Ácido Hialurônico",
    text: "Ingrediente associado à hidratação e ao cuidado da pele.",
  },
  {
    index: "02",
    title: "Vitamina E",
    text: "Ingrediente com ação antioxidante que complementa o cuidado cosmético diário.",
  },
  {
    index: "03",
    title: "Textura fluida",
    text: "Boa espalhabilidade e rápida absorção para integrar a proteção à rotina.",
  },
];

const usageSteps = [
  {
    number: "01",
    title: "Aplique",
    text: "Aplique abundantemente antes da exposição ao sol.",
  },
  {
    number: "02",
    title: "Espalhe",
    text: "Distribua uniformemente pelo couro cabeludo exposto.",
  },
  {
    number: "03",
    title: "Reaplique",
    text: "Reaplique para manter a efetividade da proteção.",
  },
];

const systemSteps = [
  {
    step: "STEP 01",
    name: "CLEAN",
    action: "Purificar",
  },
  {
    step: "STEP 02",
    name: "HYDRATE",
    action: "Equilibrar",
  },
  {
    step: "STEP 03",
    name: "DEFENSE",
    action: "Defender",
    active: true,
  },
  {
    step: "STEP 04",
    name: "WIPES",
    action: "Controlar",
  },
];

const faqs = [
  {
    question: "O que é o BALDSHIELD DEFENSE?",
    answer:
      "DEFENSE é o STEP 03 do Scalp Defense System™. Uma loção multifuncional que integra hidratação + proteção à rotina de cuidado do couro cabeludo exposto, com FPS 70 e alta proteção UVA | UVB.",
  },
  {
    question: "Qual é a proteção oferecida pelo DEFENSE?",
    answer:
      "O DEFENSE possui FPS 70, FP-UVA 49,3 e comprimento de onda crítico de 383 nm, resultados baseados em estudos de eficácia realizados sobre a formulação.",
  },
  {
    question: "O DEFENSE também hidrata o couro cabeludo?",
    answer:
      "Sim. A formulação combina fotoproteção com ingredientes associados ao cuidado da pele, como Ácido Hialurônico e Vitamina E.",
  },
  {
    question: "Devo usar o DEFENSE todos os dias?",
    answer:
        "Sim. O DEFENSE foi desenvolvido para integrar a rotina diária de cuidado do couro cabeludo exposto. Aplique abundantemente antes da exposição ao sol e reaplique para manter a efetividade da proteção. No Scalp Defense System™, ele ocupa o STEP 03, depois de CLEAN e HYDRATE.",
  },
  {
    question: "Preciso reaplicar o DEFENSE?",
    answer:
      "Sim. A reaplicação é necessária para manter a efetividade da proteção. Siga sempre o modo de uso e as orientações completas presentes no rótulo do produto.",
  },
  {
    question: "Como aplicar no couro cabeludo exposto?",
    answer:
      "Distribua o produto uniformemente sobre toda a região exposta do couro cabeludo, seguindo a quantidade, frequência de aplicação e demais orientações indicadas no rótulo.",
  },
  {
    question: "O DEFENSE foi dermatologicamente testado?",
    answer:
      "Sim. A formulação do DEFENSE foi dermatologicamente testada. Consulte o rótulo do produto para informações, precauções e orientações completas de uso.",
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

export default function DefenseProductPage() {
  return (
    <>
      <Helmet>
        <title>
          BaldShield DEFENSE | Hidratação + Proteção FPS 70
        </title>

        <meta
          name="description"
          content="BaldShield DEFENSE é o STEP 03 do Scalp Defense System™: hidratação + proteção para o couro cabeludo exposto, com FPS 70 e alta proteção UVA | UVB."
        />

        <link
          rel="canonical"
          href="https://www.baldshield.com/products/defense"
        />

        <meta
          property="og:title"
          content="BaldShield DEFENSE | Hidratação + Proteção FPS 70"
        />

        <meta
          property="og:description"
          content="Conheça o STEP 03 do Scalp Defense System™: hidratação + proteção para o couro cabeludo exposto, com FPS 70 e alta proteção UVA | UVB."
        />

        <meta property="og:type" content="website" />

        <meta
          property="og:url"
          content="https://www.baldshield.com/products/defense"
        />
      </Helmet>

      <Header />

      <main className="protect-page">
        {/* HERO */}
        <section
          className="protect-hero"
          aria-labelledby="defense-product-title"
        >
          <img
            className="protect-hero__image"
            src={protectHero}
            alt=""
            aria-hidden="true"
            fetchPriority="high"
          />

          <div className="protect-hero__overlay" aria-hidden="true" />
          <div className="protect-hero__grain" aria-hidden="true" />

          <div className="protect-shell protect-hero__content">
            <div className="protect-kicker">
              <span className="protect-kicker__dot" />
              SCALP DEFENSE SYSTEM™
            </div>

            <p className="protect-eyebrow">
              STEP 03 · DEFENDER
            </p>

            <h1 id="defense-product-title">
              <span className="protect-hero__brand">
                BALDSHIELD <em>DEFENSE.</em>
              </span>

              <span className="protect-hero__message">
                Seu couro cabeludo está exposto.
                <strong>Sua proteção não precisa estar.</strong>
              </span>
            </h1>

            <p className="protect-hero__lead">
              Hidratação + proteção para o couro cabeludo exposto.
            </p>

            <p className="protect-hero__support">
              FPS 70 e alta proteção UVA | UVB integrados ao STEP 03 do
              Scalp Defense System™.
            </p>

            <div className="protect-hero__actions">
              <a
                className="protect-button protect-button--primary"
                href={STORE_URL}
              >
                Comprar DEFENSE
              </a>

              <a
                className="protect-button protect-button--ghost"
                href="#sistema"
              >
                Conhecer o sistema
              </a>
            </div>
          </div>

          <a
            className="protect-scroll-cue"
            href="#exposicao"
            aria-label="Conhecer o BALDSHIELD DEFENSE"
          >
            <span>Conheça o DEFENSE</span>
            <ArrowDownIcon />
          </a>
        </section>

        {/* EXPOSIÇÃO */}
        <section
          className="protect-section protect-section--exposure"
          id="exposicao"
        >
          <div className="protect-shell protect-split">
            <figure className="protect-media-card">
              <img
                src={protectExposure}
                alt="Pessoa com couro cabeludo exposto em ambiente urbano sob luz solar"
                loading="lazy"
              />
            </figure>

            <div className="protect-split__copy">
              <p className="protect-section__eyebrow">
                EXPOSIÇÃO SOLAR
              </p>

              <h2>Sem cabelo, a exposição é direta.</h2>

              <p>
                O couro cabeludo exposto recebe diretamente a radiação solar.
                Por isso, protegê-lo deve fazer parte da rotina diária de
                cuidado — assim como limpar e hidratar.
              </p>

              <div className="protect-radiation">
                <span>UVA</span>
                <span>+</span>
                <span>UVB</span>
              </div>
            </div>
          </div>
        </section>

        {/* PROTEÇÃO COMPROVADA */}
        <section
          className="protect-section protect-section--proof"
          id="protecao-comprovada"
        >
          <div className="protect-shell">
            <header className="protect-section__heading">
              <p className="protect-section__eyebrow">
                PROTEÇÃO COMPROVADA
              </p>

              <h2>Proteção que vai além do número.</h2>

              <p>
                O BALDSHIELD DEFENSE combina alta proteção UVB com UVA
                de amplo espectro, comprovada por ensaios específicos de
                fotoproteção.
              </p>
            </header>

            <div className="protect-proof-grid">
              {proofItems.map((item) => (
                <article
                  className="protect-proof-card"
                  key={item.value}
                >
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </article>
              ))}
            </div>

            <p className="protect-disclaimer">
              Resultados baseados em estudos de eficácia e segurança
              realizados sobre a formulação do DEFENSE.
            </p>
          </div>
        </section>

        {/* HIDRATAÇÃO + PROTEÇÃO */}
        <section
          className="protect-section protect-section--care"
          id="cuidado"
        >
          <div className="protect-shell protect-care-layout">
            <div className="protect-care-copy">
              <p className="protect-section__eyebrow">
                HIDRATAÇÃO + PROTEÇÃO
              </p>

              <h2>
                Hidratação e proteção. Cuidado na mesma rotina.
              </h2>

              <p className="protect-care-copy__intro">
                Uma fórmula fluida pensada para tornar a hidratação e
                proteção mais confortável no dia a dia, combinando
                fotoproteção com ingredientes associados ao cuidado da pele.
              </p>

              <div className="protect-care-list">
                {careItems.map((item) => (
                  <article
                    className="protect-care-item"
                    key={item.title}
                  >
                    <span>{item.index}</span>

                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <figure className="protect-application-card">
              <img
                src={protectApplication}
                alt="Aplicação do BALDSHIELD DEFENSE no couro cabeludo exposto"
                loading="lazy"
              />
            </figure>
          </div>
        </section>

        {/* COMO INTEGRAR À ROTINA */}
        <section
          className="protect-section protect-section--usage"
          id="como-usar"
        >
          <div className="protect-shell">
            <header className="protect-section__heading protect-section__heading--light">
              <p className="protect-section__eyebrow">
                COMO INTEGRAR À ROTINA
              </p>

              <h2>Proteja. Reaplique. Siga o dia.</h2>

              <p>
                DEFENSE ocupa o STEP 03 do Scalp Defense System™ e integra
                hidratação + proteção ao cuidado diário do couro cabeludo
                exposto.
              </p>
            </header>

            <div className="protect-usage">
              {usageSteps.map((item, index) => (
                <article
                  className="protect-usage__item"
                  key={item.number}
                >
                  <div className="protect-usage__top">
                    <span className="protect-usage__number">
                      {item.number}
                    </span>

                    {index < usageSteps.length - 1 && (
                      <span
                        className="protect-usage__line"
                        aria-hidden="true"
                      />
                    )}
                  </div>

                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SCALP DEFENSE SYSTEM */}
        <section
          className="protect-section protect-section--system"
          id="sistema"
        >
          <div className="protect-shell">
            <div className="protect-system__intro">
              <p className="protect-section__eyebrow">
                SCALP DEFENSE SYSTEM™
              </p>

              <h2>DEFENSE é parte de algo maior.</h2>

              <p>
                DEFENSE ocupa o STEP 03 do Scalp Defense System™. Depois de
                purificar e equilibrar, a rotina avança para a etapa de
                hidratação + proteção do couro cabeludo exposto.
              </p>
            </div>

            <div className="protect-system">
              {systemSteps.map((item, index) => (
                <React.Fragment key={item.step}>
                  <article
                    className={`protect-system-card ${
                      item.active
                        ? "protect-system-card--active"
                        : ""
                    }`}
                  >
                    <div className="protect-system-card__top">
                      <span>{item.step}</span>

                      {item.active && <CheckIcon />}
                    </div>

                    <strong>{item.name}</strong>
                    <p>{item.action}</p>

                    {item.active && (
                      <small>Hidratação + Proteção</small>
                    )}
                  </article>

                  {index < systemSteps.length - 1 && (
                    <span
                      className="protect-system__connector"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section
          className="protect-section protect-section--faq"
          id="faq"
        >
          <div className="protect-shell">
            <div className="protect-faq-layout">
              <div className="protect-faq-layout__intro">
                <p className="protect-section__eyebrow">
                  DÚVIDAS FREQUENTES
                </p>

                <h2>Antes de usar o seu DEFENSE.</h2>

                <p>
                  Informações para entender como o BALDSHIELD DEFENSE
                  se integra à rotina de cuidado do couro cabeludo exposto.
                </p>
              </div>

              <div className="protect-faq">
                {faqs.map((faq, index) => (
                  <details
                    className="protect-faq__item"
                    key={faq.question}
                  >
                    <summary>
                      <span className="protect-faq__number">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span>{faq.question}</span>

                      <span
                        className="protect-faq__plus"
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
          </div>
        </section>

        {/* FECHAMENTO */}
        <section className="protect-section protect-section--system">
          <div className="protect-shell">
            <div className="protect-closing">
              <p className="protect-section__eyebrow">
                SCALP DEFENSE SYSTEM™ · STEP 03
              </p>

              <h2>
                CLEAN. HYDRATE. <span>DEFENSE.</span>
              </h2>

              <p>
                Hidratação + proteção para o couro cabeludo exposto,
                com FPS 70 e alta proteção UVA | UVB.
              </p>

              <a
                className="protect-button protect-button--primary"
                href={STORE_URL}
              >
                Comprar DEFENSE
              </a>

              <div className="protect-closing__brand">
                <strong>
                  BALD<span>SHIELD</span>
                </strong>

                <small>Confidence for the Bold</small>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}