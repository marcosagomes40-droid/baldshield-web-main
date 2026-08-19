import React from "react";
import { Helmet } from "react-helmet";

import protectHero from "../assets/products/baldshield-protect-hero.webp";
import protectExposure from "../assets/products/baldshield-protect-exposicao-solar.webp";
import protectApplication from "../assets/products/baldshield-protect-aplicacao.webp";

import "./ProtectLanding.css";

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
    action: "Limpar",
    href: "/clean",
    completed: true,
  },
  {
    step: "STEP 02",
    name: "HYDRATE",
    action: "Hidratar",
    href: "/hydrate",
    completed: true,
  },
  {
    step: "STEP 03",
    name: "PROTECT",
    action: "Proteger",
    href: "/protect",
    active: true,
  },
  {
    step: "STEP 04",
    name: "WIPES",
    action: "Cuidado prático",
    href: "#",
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

export default function ProtectLanding() {
  return (
    <>
      <Helmet>
        <title>BALDSHIELD PROTECT | Conteúdo exclusivo STEP 03</title>

        <meta
          name="description"
          content="Conteúdo exclusivo do BALDSHIELD PROTECT: proteção solar, modo de uso, tecnologia de fotoproteção e STEP 03 do Scalp Defense System™."
        />

        <link rel="canonical" href="https://www.baldshield.com/protect" />

        <meta
          property="og:title"
          content="BALDSHIELD PROTECT | STEP 03"
        />

        <meta
          property="og:description"
          content="Conheça o STEP 03 do Scalp Defense System™ e integre a proteção solar ao cuidado diário do couro cabeludo exposto."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.baldshield.com/protect" />
      </Helmet>

      <main className="protect-page">
        {/* =====================================================
            01 — HERO
        ====================================================== */}
        <section className="protect-hero" aria-labelledby="protect-title">
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
              CONTEÚDO EXCLUSIVO BALDSHIELD
            </div>

            <p className="protect-eyebrow">
              SCALP DEFENSE SYSTEM™ · STEP 03
            </p>

            <h1 id="protect-title">
              <span className="protect-hero__brand">
                BALDSHIELD <em>PROTECT.</em>
              </span>

              <span className="protect-hero__message">
                Seu couro cabeludo está exposto.
                <strong>Sua proteção não precisa estar.</strong>
              </span>
            </h1>

            <p className="protect-hero__lead">
              Você acaba de acessar o conteúdo exclusivo do STEP 03 do
              Scalp Defense System™.
            </p>

            <p className="protect-hero__support">
              Proteção solar de alto desempenho para integrar o cuidado diário
              do couro cabeludo exposto.
            </p>

            <div className="protect-hero__actions">
              <a
                className="protect-button protect-button--primary"
                href="#como-usar"
              >
                Ver modo de uso
                <ArrowDownIcon />
              </a>

              <a
                className="protect-button protect-button--ghost"
                href="#protecao-comprovada"
              >
                Conheça a proteção
              </a>
            </div>
          </div>

          <a
            className="protect-scroll-cue"
            href="#exposicao"
            aria-label="Ir para a próxima seção"
          >
            <span>Continue</span>
            <ArrowDownIcon />
          </a>
        </section>

        {/* =====================================================
            02 — EXPOSIÇÃO
        ====================================================== */}
        <section
          className="protect-section protect-section--exposure"
          id="exposicao"
        >
          <div className="protect-shell protect-split">
            <figure className="protect-media-card">
              <img
                src={protectExposure}
                alt="Mulher careca em ambiente urbano com luz solar sobre o couro cabeludo"
                loading="lazy"
              />
            </figure>

            <div className="protect-split__copy">
              <p className="protect-section__eyebrow">EXPOSIÇÃO SOLAR</p>

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

        {/* =====================================================
            03 — PROTEÇÃO COMPROVADA
        ====================================================== */}
        <section
          className="protect-section protect-section--proof"
          id="protecao-comprovada"
        >
          <div className="protect-shell">
            <header className="protect-section__heading">
              <p className="protect-section__eyebrow">PROTEÇÃO COMPROVADA</p>

              <h2>Proteção que vai além do número.</h2>

              <p>
                O BALDSHIELD PROTECT combina alta proteção UVB com proteção UVA
                de amplo espectro, comprovada por ensaios específicos de
                fotoproteção.
              </p>
            </header>

            <div className="protect-proof-grid">
              {proofItems.map((item) => (
                <article className="protect-proof-card" key={item.value}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </article>
              ))}
            </div>

            <p className="protect-disclaimer">
              Resultados baseados em estudos de eficácia e segurança realizados
              sobre a formulação do PROTECT.
            </p>
          </div>
        </section>

        {/* =====================================================
            04 — PROTEÇÃO + CUIDADO
        ====================================================== */}
        <section
          className="protect-section protect-section--care"
          id="cuidado"
        >
          <div className="protect-shell protect-care-layout">
            <div className="protect-care-copy">
              <p className="protect-section__eyebrow">PROTEÇÃO + CUIDADO</p>

              <h2>Proteção solar. Cuidado na mesma rotina.</h2>

              <p className="protect-care-copy__intro">
                Uma fórmula fluida pensada para tornar a proteção mais
                confortável no dia a dia, combinando fotoproteção com
                ingredientes associados ao cuidado da pele.
              </p>

              <div className="protect-care-list">
                {careItems.map((item) => (
                  <article className="protect-care-item" key={item.title}>
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
                alt="Homem aplicando produto no couro cabeludo diante do espelho"
                loading="lazy"
              />
            </figure>
          </div>
        </section>

        {/* =====================================================
            05 — MODO DE USO
        ====================================================== */}
        <section
          className="protect-section protect-section--usage"
          id="como-usar"
        >
          <div className="protect-shell">
            <header className="protect-section__heading protect-section__heading--light">
              <p className="protect-section__eyebrow">MODO DE USO</p>

              <h2>Proteja. Reaplique. Siga o dia.</h2>

              <p>
                Uma rotina simples para integrar a proteção solar ao cuidado
                diário do couro cabeludo exposto.
              </p>
            </header>

            <div className="protect-usage">
              {usageSteps.map((item, index) => (
                <article className="protect-usage__item" key={item.number}>
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

        {/* =====================================================
            06 — SCALP DEFENSE SYSTEM
        ====================================================== */}
        <section
          className="protect-section protect-section--system"
          id="sistema"
        >
          <div className="protect-shell">
            <div className="protect-system__intro">
              <p className="protect-section__eyebrow">
                SCALP DEFENSE SYSTEM™
              </p>

              <h2>PROTECT é parte de algo maior.</h2>

              <p>
                O cuidado do couro cabeludo exposto não termina em uma única
                etapa. O Scalp Defense System™ organiza a rotina BaldShield em
                quatro passos complementares.
              </p>
            </div>

            <div className="protect-system">
              {systemSteps.map((item, index) => (
                <React.Fragment key={item.step}>
                  <a
                    className={`protect-system-card ${
                      item.active ? "protect-system-card--active" : ""
                    } ${
                      item.completed ? "protect-system-card--completed" : ""
                    }`}
                    href={item.href}
                  >
                    <div className="protect-system-card__top">
                      <span>{item.step}</span>

                      {(item.active || item.completed) && (
                        <CheckIcon />
                      )}
                    </div>

                    <strong>{item.name}</strong>
                    <p>{item.action}</p>

                    {item.active && <small>Você está aqui</small>}
                  </a>

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

            <div className="protect-closing">
              <p className="protect-section__eyebrow">O RITUAL BALDSHIELD</p>

              <h2>
                CLEAN. HYDRATE. <span>PROTECT.</span>
              </h2>

              <p>
                Um ritual criado para o couro cabeludo exposto.
              </p>

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