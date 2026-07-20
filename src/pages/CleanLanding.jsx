import "./CleanLanding.css";
import cleanBottle from "../assets/products/clean-bottle.webp";

function CleanLanding() {
  return (
    <main className="clean-page">
      <section className="clean-hero">
        <div className="clean-hero__content">
          <span className="clean-step">STEP 01</span>

          <h1>CLEAN</h1>

          <h2>O primeiro passo do Scalp Defense System™</h2>

          <p className="clean-welcome">Parabéns pela sua escolha.</p>

          <p>
            Você acaba de iniciar uma rotina desenvolvida especialmente para o
            cuidado do couro cabeludo de homens carecas.
          </p>

          <a href="#como-usar" className="clean-button">
            Como usar
          </a>
        </div>

        <div className="clean-hero__image">
          <img
            src={cleanBottle}
            alt="BALDSHIELD CLEAN — emulsão de limpeza diária para o couro cabeludo exposto"
          />
        </div>
      </section>

      <section className="clean-benefits">
        <div className="clean-benefits__container">
          <span className="clean-section-label">CUIDADO DIÁRIO</span>

          <h2>Desenvolvido para o couro cabeludo exposto</h2>

          <p className="clean-benefits__intro">
            O BALDSHIELD CLEAN proporciona uma limpeza suave, ajudando a
            remover impurezas, controlar a oleosidade e preparar a pele para
            uma rotina completa de cuidados.
          </p>

          <div className="clean-benefits__grid">
            <article className="clean-benefit-card">
              <span className="clean-benefit-card__number">01</span>

              <h3>Limpeza suave</h3>

              <p>
                Remove suor, impurezas e resíduos acumulados durante o dia.
              </p>
            </article>

            <article className="clean-benefit-card">
              <span className="clean-benefit-card__number">02</span>

              <h3>Controle da oleosidade</h3>

              <p>
                Ajuda a reduzir o excesso de oleosidade e o brilho do couro
                cabeludo.
              </p>
            </article>

            <article className="clean-benefit-card">
              <span className="clean-benefit-card__number">03</span>

              <h3>Prepara a pele</h3>

              <p>
                Deixa o couro cabeludo preparado para os próximos passos da
                rotina.
              </p>
            </article>

            <article className="clean-benefit-card">
              <span className="clean-benefit-card__number">04</span>

              <h3>Sensação de conforto</h3>

              <p>
                Uma limpeza diária desenvolvida para cuidar sem agredir a
                pele.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="como-usar" className="clean-how-to">
        <div className="clean-how-to__container">
          <span className="clean-section-label">COMO USAR</span>

          <h2>Quatro passos para uma limpeza completa</h2>

          <p className="clean-how-to__intro">
            Utilize diariamente para manter o couro cabeludo limpo, equilibrado
            e preparado para as próximas etapas da rotina BaldShield.
          </p>

          <div className="clean-how-to__grid">
            <article className="clean-how-to__step">
              <span>01</span>

              <h3>Molhe</h3>

              <p>Molhe completamente o couro cabeludo.</p>
            </article>

            <article className="clean-how-to__step">
              <span>02</span>

              <h3>Aplique</h3>

              <p>Aplique duas bombeadas do BALDSHIELD CLEAN.</p>
            </article>

            <article className="clean-how-to__step">
              <span>03</span>

              <h3>Massageie</h3>

              <p>
                Massageie suavemente por aproximadamente dois minutos.
              </p>
            </article>

            <article className="clean-how-to__step">
              <span>04</span>

              <h3>Enxágue</h3>

              <p>Enxágue bem, removendo completamente o produto.</p>
            </article>
          </div>

          <p className="clean-how-to__note">
            Para melhores resultados, utilize diariamente.
          </p>
        </div>
      </section>
    </main>
  );
}

export default CleanLanding;