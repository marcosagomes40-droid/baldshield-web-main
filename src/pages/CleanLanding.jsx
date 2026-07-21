import React from "react";
import cleanBottle from "../assets/products/clean-bottle.webp";
import "./CleanLanding.css";

const usageSteps = [
  {
    number: "01",
    title: "Molhe",
    text: "Molhe completamente o couro cabeludo antes da aplicação.",
  },
  {
    number: "02",
    title: "Aplique",
    text: "Distribua 2 pumps do CLEAN sobre o couro cabeludo molhado.",
  },
  {
    number: "03",
    title: "Massageie",
    text: "Massageie suavemente por aproximadamente 2 minutos.",
  },
  {
    number: "04",
    title: "Enxágue",
    text: "Enxágue completamente. Para melhores resultados, use diariamente.",
  },
];

const benefits = [
  {
    title: "Limpeza suave",
    text: "Remove resíduos, suor e impurezas do dia a dia sem transformar o cuidado em uma etapa agressiva.",
  },
  {
    title: "Controle da oleosidade",
    text: "Ajuda a manter o couro cabeludo com aparência equilibrada e menos brilho excessivo.",
  },
  {
    title: "Sensação de conforto",
    text: "Uma rotina de limpeza pensada para deixar a pele limpa, fresca e confortável.",
  },
  {
    title: "Prepara a pele",
    text: "Cria a base ideal para os próximos passos do Scalp Defense System™.",
  },
];

const actives = [
  {
    tag: "B3",
    title: "Niacinamida",
    text: "Ativo reconhecido no cuidado cosmético da pele, associado ao equilíbrio e à manutenção da barreira cutânea.",
  },
  {
    tag: "Zn",
    title: "Zinco",
    text: "Componente selecionado para complementar a rotina de cuidado da pele com tendência à oleosidade.",
  },
  {
    tag: "AV",
    title: "Aloe Vera",
    text: "Ingrediente tradicionalmente utilizado em formulações voltadas ao conforto e à hidratação da pele.",
  },
  {
    tag: "pH",
    title: "Sistema de limpeza suave",
    text: "Combinação desenvolvida para promover uma limpeza eficiente e adequada ao uso diário.",
  },
];

const systemSteps = [
  { step: "STEP 01", name: "CLEAN", action: "Purificar", status: "Você está aqui", active: true },
  { step: "STEP 02", name: "HYDRATE", action: "Equilibrar", status: "Próximo passo" },
  { step: "STEP 03", name: "PROTECT", action: "Defender", status: "Em breve" },
  { step: "STEP 04", name: "WIPES", action: "Controlar", status: "Em breve" },
];

const faqs = [
  {
    question: "Posso usar o CLEAN todos os dias?",
    answer:
      "Sim. O modo de uso do produto indica aplicação diária. Use 2 pumps no couro cabeludo molhado, massageie por aproximadamente 2 minutos e enxágue completamente.",
  },
  {
    question: "Por que aplicar no couro cabeludo molhado?",
    answer:
      "A água ajuda a distribuir a emulsão pela superfície da pele e favorece uma massagem mais uniforme durante a limpeza.",
  },
  {
    question: "Preciso usar outro produto depois?",
    answer:
      "O CLEAN é o STEP 01 do Scalp Defense System™. Após a limpeza, a rotina pode continuar com hidratação e proteção, conforme a necessidade da sua pele e a disponibilidade dos próximos passos.",
  },
  {
    question: "O CLEAN substitui shampoo?",
    answer:
      "O CLEAN foi desenvolvido para a limpeza cosmética do couro cabeludo exposto. Use-o conforme as instruções da embalagem e evite contato com os olhos.",
  },
  {
    question: "O que fazer em caso de desconforto?",
    answer:
      "Suspenda o uso e enxágue a área. Em caso de irritação persistente, procure orientação de um profissional de saúde.",
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
    <main className="clean-page">
      <section className="clean-hero" aria-labelledby="clean-title">
        <div className="clean-hero__grain" aria-hidden="true" />
        <div className="clean-shell clean-hero__layout">
          <div className="clean-hero__copy">
            <div className="clean-kicker">
              <span className="clean-kicker__dot" />
              CONTEÚDO EXCLUSIVO BALDSHIELD
            </div>

            <p className="clean-eyebrow">SCALP DEFENSE SYSTEM™ · STEP 01</p>

            <h1 id="clean-title">
              Bem-vindo ao
              <span>BALDSHIELD CLEAN.</span>
            </h1>

            <p className="clean-hero__lead">
              Você acaba de dar o primeiro passo de uma rotina desenvolvida
              especialmente para o couro cabeludo exposto.
            </p>

            <p className="clean-hero__support">
              Purifique. Equilibre. Prepare a pele para os próximos passos.
            </p>

            <div className="clean-hero__actions">
              <a className="clean-button clean-button--primary" href="#como-usar">
                Como usar
                <ArrowDownIcon />
              </a>
              <a className="clean-button clean-button--ghost" href="#formula">
                Conheça a fórmula
              </a>
            </div>

            <div className="clean-hero__microcopy">
              <span><CheckIcon /> Uso diário</span>
              <span><CheckIcon /> 2 pumps</span>
              <span><CheckIcon /> 2 minutos</span>
            </div>
          </div>

          <div className="clean-hero__visual" aria-label="BALDSHIELD CLEAN">
            <div className="clean-hero__halo" aria-hidden="true" />
            <div className="clean-product-card">
              <span className="clean-product-card__step">STEP 01</span>
              <img
                src={cleanBottle}
                alt="BALDSHIELD CLEAN — emulsão de limpeza diária para o couro cabeludo exposto"
              />
              <div className="clean-product-card__caption">
                <strong>CLEAN</strong>
                <span>Emulsão de limpeza diária · 120 ml</span>
              </div>
            </div>
          </div>
        </div>

        <a className="clean-scroll-cue" href="#como-usar" aria-label="Ir para como usar">
          <span>Comece por aqui</span>
          <ArrowDownIcon />
        </a>
      </section>

      <section className="clean-section clean-section--light" id="como-usar">
        <div className="clean-shell">
          <header className="clean-section__heading clean-section__heading--dark">
            <p className="clean-section__eyebrow">PRIMEIRO USO</p>
            <h2>Como usar o seu CLEAN</h2>
            <p>
              Um ritual simples, pensado para fazer parte da sua rotina diária.
            </p>
          </header>

          <div className="clean-usage">
            {usageSteps.map((item, index) => (
              <article className="clean-usage__item" key={item.number}>
                <div className="clean-usage__top">
                  <span className="clean-usage__number">{item.number}</span>
                  {index < usageSteps.length - 1 && (
                    <span className="clean-usage__line" aria-hidden="true" />
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
                Faça movimentos suaves com as pontas dos dedos. Evite usar as
                unhas e enxágue completamente ao final.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="clean-section clean-section--dark">
        <div className="clean-shell">
          <header className="clean-section__heading">
            <p className="clean-section__eyebrow">POR QUE COMEÇAR PELA LIMPEZA?</p>
            <h2>O couro cabeludo exposto vive o dia inteiro em contato com o mundo.</h2>
            <p>
              Oleosidade, suor, poluição e resíduos podem se acumular sobre a
              pele. O CLEAN transforma a limpeza em um primeiro passo
              consciente: remover o excesso, recuperar a sensação de frescor e
              preparar o couro cabeludo para continuar a rotina.
            </p>
          </header>

          <div className="clean-benefits">
            {benefits.map((benefit, index) => (
              <article className="clean-benefit-card" key={benefit.title}>
                <span className="clean-benefit-card__index">0{index + 1}</span>
                <h3>{benefit.title}</h3>
                <p>{benefit.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="clean-section clean-section--formula" id="formula">
        <div className="clean-shell">
          <header className="clean-section__heading">
            <p className="clean-section__eyebrow">DESCUBRA O QUE VOCÊ ESTÁ APLICANDO</p>
            <h2>Ativos escolhidos para uma limpeza inteligente.</h2>
            <p>
              Uma combinação que une limpeza, equilíbrio e conforto em uma
              experiência criada para o uso diário.
            </p>
          </header>

          <div className="clean-actives">
            {actives.map((active) => (
              <article className="clean-active-card" key={active.title}>
                <span className="clean-active-card__tag">{active.tag}</span>
                <h3>{active.title}</h3>
                <p>{active.text}</p>
              </article>
            ))}
          </div>

          <p className="clean-disclaimer">
            As informações desta página apresentam a função cosmética dos
            componentes de forma educativa. Consulte sempre o rótulo do produto
            para composição, precauções e modo de uso completos.
          </p>
        </div>
      </section>

      <section className="clean-section clean-section--system" id="sistema">
        <div className="clean-shell clean-system">
          <div className="clean-system__intro">
            <p className="clean-section__eyebrow">SCALP DEFENSE SYSTEM™</p>
            <h2>Uma rotina. Quatro movimentos essenciais.</h2>
            <p>
              O CLEAN não é um produto isolado. Ele inaugura uma jornada de
              cuidado criada para acompanhar as necessidades do couro cabeludo
              exposto.
            </p>
          </div>

          <div className="clean-system__steps">
            {systemSteps.map((item, index) => (
              <React.Fragment key={item.step}>
                <article
                  className={`clean-system-card ${
                    item.active ? "clean-system-card--active" : ""
                  }`}
                >
                  <div className="clean-system-card__top">
                    <span>{item.step}</span>
                    {item.active && <CheckIcon />}
                  </div>
                  <strong>{item.name}</strong>
                  <p>{item.action}</p>
                  <small>{item.status}</small>
                </article>
                {index < systemSteps.length - 1 && (
                  <span className="clean-system__connector" aria-hidden="true">
                    →
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      <section className="clean-section clean-section--light" id="faq">
        <div className="clean-shell clean-faq-layout">
          <div className="clean-faq-layout__intro">
            <p className="clean-section__eyebrow">DÚVIDAS FREQUENTES</p>
            <h2>Seu primeiro passo, sem complicação.</h2>
            <p>
              Reunimos respostas rápidas para ajudar você a aproveitar melhor a
              experiência com o CLEAN.
            </p>
          </div>

          <div className="clean-faq">
            {faqs.map((faq, index) => (
              <details className="clean-faq__item" key={faq.question}>
                <summary>
                  <span className="clean-faq__number">0{index + 1}</span>
                  <span>{faq.question}</span>
                  <span className="clean-faq__plus" aria-hidden="true">+</span>
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
          <p className="clean-section__eyebrow">VOCÊ JÁ COMEÇOU</p>
          <h2>Assumir a careca é estilo.<br />Cuidar dela é o próximo passo.</h2>
          <p>
            Continue descobrindo uma nova forma de cuidar do couro cabeludo
            exposto.
          </p>
          <a className="clean-button clean-button--primary" href="#como-usar">
            Rever modo de uso
            <ArrowDownIcon />
          </a>
          <div className="clean-closing__brand">
            <strong>BALD<span>SHIELD</span></strong>
            <small>Confidence for the Bold</small>
          </div>
        </div>
      </section>
    </main>
  );
}