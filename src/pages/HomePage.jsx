import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Shield, Droplet, Sparkles, Award } from "lucide-react";

import Header from "@/components/Header.jsx";
import Footer from "@/components/Footer.jsx";
import BenefitCard from "@/components/BenefitCard.jsx";
import CTASection from "@/components/CTASection.jsx";
import SectionHeader from "@/components/SectionHeader.jsx";
import VipFloatingModal from "@/components/VipFloatingModal.jsx";

const HomePage = () => {
  const images = ["/hero-careca-premium.png", "/hero-careca-feminino.png"];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [images.length]);

  const benefits = [
    {
      icon: Shield,
      title: "Cuidado especializado",
      description:
        "Uma proposta dedicada às necessidades do couro cabeludo exposto, transformando uma área muitas vezes esquecida em parte da rotina de cuidado.",
    },
    {
      icon: Droplet,
      title: "Rotina, não improviso",
      description:
        "Uma lógica de cuidado pensada para limpar, hidratar, proteger e acompanhar o couro cabeludo exposto ao longo do dia.",
    },
    {
      icon: Sparkles,
      title: "Scalp Defense System™",
      description:
        "Um sistema que organiza o cuidado em quatro etapas complementares: CLEAN, HYDRATE, DEFENSE e WIPES.",
    },
    {
      icon: Award,
      title: "Feito para o couro cabeludo exposto",
      description:
        "A BaldShield nasce com foco nessa pele e em quem vive diariamente os efeitos de mantê-la exposta.",
    },
  ];

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.baldshield.com/#organization",
    name: "BaldShield",
    url: "https://www.baldshield.com/",
    logo: {
      "@type": "ImageObject",
      url: "https://www.baldshield.com/escudo.png",
    },
    description:
      "A primeira marca brasileira dedicada ao cuidado do couro cabeludo exposto.",
    sameAs: ["https://www.instagram.com/baldshield.br"],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.baldshield.com/#website",
    url: "https://www.baldshield.com/",
    name: "BaldShield",
    description:
      "Conteúdos, cuidados e soluções para o couro cabeludo exposto.",
    publisher: {
      "@id": "https://www.baldshield.com/#organization",
    },
    inLanguage: "pt-BR",
  };

  return (
    <>
      <Helmet>
        <title>BaldShield | Cuidado do Couro Cabeludo Exposto</title>

        <meta
          name="description"
          content="A primeira marca brasileira dedicada ao cuidado do couro cabeludo exposto. Conheça o Scalp Defense System™, uma rotina de limpeza, hidratação, proteção e cuidado ao longo do dia."
        />

        <meta
          name="keywords"
          content="BaldShield, couro cabeludo exposto, cuidado do couro cabeludo, careca, cuidados para careca, cuidados para homens carecas, scalp care, limpeza do couro cabeludo, hidratação do couro cabeludo, proteção do couro cabeludo, controle de oleosidade, Scalp Defense System"
        />

        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />

        <link rel="canonical" href="https://www.baldshield.com/" />

        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:site_name" content="BaldShield" />
        <meta
          property="og:title"
          content="BaldShield | Cuidado do Couro Cabeludo Exposto"
        />
        <meta
          property="og:description"
          content="A primeira marca brasileira dedicada ao cuidado do couro cabeludo exposto. Conheça o Scalp Defense System™."
        />
        <meta property="og:url" content="https://www.baldshield.com/" />
        <meta
          property="og:image"
          content="https://www.baldshield.com/produto1.png"
        />
        <meta
          property="og:image:secure_url"
          content="https://www.baldshield.com/produto1.png"
        />
        <meta property="og:image:type" content="image/png" />
        <meta
          property="og:image:alt"
          content="BaldShield — cuidado especializado para o couro cabeludo exposto"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="BaldShield | Cuidado do Couro Cabeludo Exposto"
        />
        <meta
          name="twitter:description"
          content="Conheça a primeira marca brasileira dedicada ao cuidado do couro cabeludo exposto."
        />
        <meta
          name="twitter:image"
          content="https://www.baldshield.com/produto1.png"
        />
        <meta
          name="twitter:image:alt"
          content="BaldShield — cuidado especializado para o couro cabeludo exposto"
        />

        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(websiteSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-black">
        <Header />
        <VipFloatingModal />

        {/* HERO */}
        <section className="relative overflow-hidden bg-black">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-zinc-950" />

          <div className="relative mx-auto grid min-h-[90vh] max-w-7xl items-center gap-12 px-6 py-20 md:px-10 lg:grid-cols-2 lg:gap-16 lg:py-28">
            <div className="max-w-2xl space-y-6">
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.35em] text-primary">
                BaldShield
              </span>

              <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-5xl">
              A primeira marca brasileira
              
              <span className="block text-primary">
              para o cuidado do couro cabeludo exposto.
              </span>
              
              </h1>

              <p className="max-w-xl text-lg text-zinc-300">
                  Cuidado especializado para o couro cabeludo exposto, pensado para
                  limpar, hidratar, proteger e acompanhar sua rotina.
              </p>

              <p className="text-sm uppercase tracking-[0.25em] text-zinc-400">
                Sem brilho. Sem improviso. Com presença.
              </p>
              <div className="pt-4">
                <div className="flex flex-col items-start gap-4 sm:flex-row">
              <Link
                to="/products"
                className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-sm font-semibold text-black hover:bg-primary/90"
              >
              Conhecer o sistema
              </Link>

              <a
              href="https://loja.baldshield.com"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-4 text-sm font-semibold text-white transition hover:border-primary hover:text-primary"
              >
              Ir para a loja
              </a>
              </div>
            </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-primary/10 blur-3xl" />

              <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
                <img
                  src={images[currentImage]}
                  alt="Homem careca representando a rotina premium de cuidados BaldShield para couro cabeludo masculino"
                  loading="eager"
                  className="h-[600px] w-full object-cover object-[center_8%] brightness-105 contrast-110 transition-opacity duration-700"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-white/15" />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(255,120,0,0.12),transparent_60%)]" />
              </div>
            </div>
          </div>
        </section>

        {/* IDENTIFICAÇÃO / DOR */}
        <section className="bg-black py-20">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <SectionHeader
              title="Quem é careca sabe."
              subtitle="Sem o cabelo como cobertura, o couro cabeludo fica mais exposto à rotina."
            />

            <div className="mt-4 space-y-3 text-center text-lg text-zinc-300 sm:text-xl">
              <p className="font-medium text-primary">
                O couro cabeludo fica exposto.
              </p>
              <p className="text-white/80">
                Sol, calor, suor, oleosidade e ressecamento passam a fazer parte do cuidado diário.
              </p>
              <p className="text-white/80">
                E durante anos, quem é careca precisou adaptar produtos pensados para outras áreas.
              </p>
              <p className="font-medium text-primary">
                Foi para cuidar dessa pele exposta que nasceu a BaldShield.
              </p>
            </div>
          </div>
        </section>

        {/* CATEGORIA / PONTE ENTRE CARECA E COURO CABELUDO EXPOSTO */}
        <section className="border-t border-white/5 bg-black py-28">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <span className="mb-6 inline-block text-sm font-semibold uppercase tracking-[0.28em] text-primary">
              Cuidado para careca
            </span>

            <h2
              className="text-4xl font-bold leading-tight text-white md:text-5xl"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Careca também é pele exposta — e precisa de cuidado.
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-white/70">
              Quando o cabelo deixa de funcionar como cobertura, o couro cabeludo
              fica diretamente exposto ao sol, ao calor, ao suor, à oleosidade e
              ao ressecamento. É uma pele com necessidades próprias de limpeza,
              hidratação, proteção e cuidado ao longo do dia.
            </p>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-white/70">
              O skincare cuida da pele. O hair care cuida do cabelo. Quando o couro
              cabeludo fica exposto, surge uma necessidade que ficou entre esses
              dois mundos.
            </p>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-white/70">
              É nesse espaço que a BaldShield existe: cuidado especializado para
              o couro cabeludo exposto, começando por quem vive essa realidade
              todos os dias — pessoas carecas.
            </p>
          </div>
        </section>

        {/* QUEM SOMOS */}
        <section className="bg-gradient-to-b from-black to-card py-28">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <p className="mb-10 text-center text-lg font-semibold uppercase tracking-[0.7em] text-primary md:text-xl">
              BALDSHIELD
            </p>

            <h2
              className="mb-6 text-4xl font-bold text-foreground md:text-5xl"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Mais do que produtos. Uma nova forma de cuidar do couro cabeludo exposto.
            </h2>

            <p className="mx-auto mb-6 max-w-3xl text-lg leading-relaxed text-secondary md:text-xl">
              A BaldShield é uma marca brasileira dedicada ao cuidado do couro
              cabeludo exposto — com ciência, qualidade e uma rotina pensada para
              essa pele.
            </p>

            <p className="mx-auto max-w-2xl text-base text-muted-foreground">
              Nosso ponto de partida é simples: limpar, hidratar, proteger e
              acompanhar o couro cabeludo ao longo do dia, transformando improviso
              em cuidado.
            </p>
          </div>
        </section>

        {/* SCALP DEFENSE SYSTEM */}
        <section className="relative overflow-hidden bg-black py-32">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,115,0,0.10),transparent_35%)]" />

          <div className="relative mx-auto max-w-6xl px-6">
            <div className="mx-auto mb-20 max-w-4xl text-center">
              <div className="mb-8 flex items-center justify-center gap-6">
                <span className="hidden h-px w-28 bg-gradient-to-r from-transparent via-primary to-primary md:block" />
                <span className="relative text-center text-sm font-semibold uppercase tracking-[0.55em] text-primary md:text-base">
                  Scalp Defense System™
                </span>
                <span className="hidden h-px w-28 bg-gradient-to-l from-transparent via-primary to-primary md:block" />
              </div>

              <h2
                className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Uma rotina completa
                <span className="block">para o couro cabeludo exposto.</span>
              </h2>

              <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/70">
                Quatro etapas que organizam o cuidado do couro cabeludo exposto:
                limpar, hidratar, proteger e acompanhar a rotina ao longo do dia.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl border border-primary/60 bg-gradient-to-b from-primary/10 to-transparent p-7 text-center shadow-[0_0_45px_rgba(255,115,0,0.14)] transition hover:bg-primary/10">
                <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-primary">
                  Passo 01
                </p>
                <p className="mb-6 text-xs font-semibold uppercase tracking-[0.35em] text-primary">
                  Clean
                </p>

                <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Sparkles size={26} />
                </div>

                <h3 className="mb-4 text-2xl font-semibold text-white">
                  Limpeza
                </h3>

                <p className="text-sm leading-relaxed text-white/70">
                  Limpa o couro cabeludo exposto e prepara a pele para as próximas
                  etapas do cuidado.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-7 text-center transition hover:border-primary/40 hover:bg-white/10">
                <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-white/50">
                  Passo 02
                </p>
                <p className="mb-6 text-xs uppercase tracking-[0.35em] text-white/50">
                  Hydrate
                </p>

                <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Droplet size={26} />
                </div>

                <h3 className="mb-4 text-2xl font-semibold text-white">
                  Hidratação
                </h3>

                <p className="text-sm leading-relaxed text-white/60">
                  Hidrata o couro cabeludo exposto como parte da rotina de cuidado.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-7 text-center transition hover:border-primary/40 hover:bg-white/10">
                <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-white/50">
                  Passo 03
                </p>
                <p className="mb-6 text-xs uppercase tracking-[0.35em] text-white/50">
                  Defense
                </p>

                <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Shield size={26} />
                </div>

                <h3 className="mb-4 text-2xl font-semibold text-white">
                  Hidratação + proteção
                </h3>

                <p className="text-sm leading-relaxed text-white/60">
                  Combina hidratação e alta proteção para o couro cabeludo exposto.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-7 text-center transition hover:border-primary/40 hover:bg-white/10">
                <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-white/50">
                  Passo 04
                </p>
                <p className="mb-6 text-xs uppercase tracking-[0.35em] text-white/50">
                  Wipes
                </p>

                <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Droplet size={26} />
                </div>

                <h3 className="mb-4 text-2xl font-semibold text-white">
                  Cuidado ao longo do dia
                </h3>

                <p className="text-sm leading-relaxed text-white/60">
                  Uma etapa portátil para acompanhar o cuidado do couro cabeludo
                  exposto durante o dia.
                </p>
              </div>
            </div>

            <div className="mt-14 text-center">
              <Link
                to="/products"
                className="inline-flex items-center justify-center rounded-full border border-primary px-8 py-4 text-sm font-semibold text-primary transition hover:bg-primary hover:text-black"
              >
                Conhecer o Scalp Defense System™
              </Link>
            </div>
          </div>
        </section>

        {/* BENEFÍCIOS */}
        <section className="bg-gradient-to-b from-black to-card py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16 text-center"
            >
              <h2
                className="mb-6 text-4xl font-bold text-foreground md:text-5xl"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Por que escolher a BaldShield?
              </h2>

              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                Porque o couro cabeludo exposto merece um cuidado pensado para a
                sua própria realidade — com método, rotina e propósito.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {benefits.map((benefit, index) => (
                <BenefitCard
                  key={index}
                  icon={benefit.icon}
                  title={benefit.title}
                  description={benefit.description}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        <CTASection />
        <Footer />
      </div>
    </>
  );
};

export default HomePage;