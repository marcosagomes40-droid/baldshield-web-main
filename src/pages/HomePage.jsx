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
      title: "Proteção diária",
      description:
        "Cuidado pensado para o couro cabeludo exposto, ajudando a proteger a pele contra agressões externas do dia a dia.",
    },
    {
      icon: Droplet,
      title: "Resistência e conforto",
      description:
        "Desenvolvido para acompanhar a rotina masculina, inclusive em dias quentes, atividades ao ar livre e momentos de maior exposição.",
    },
    {
      icon: Sparkles,
      title: "Acabamento matte",
      description:
        "Textura leve, sensação confortável e visual mais seco, ajudando a reduzir o aspecto de brilho excessivo no couro cabeludo.",
    },
    {
      icon: Award,
      title: "Cuidado premium",
      description:
        "Uma proposta de scalp care criada para homens que assumiram a careca com estilo, presença e confiança.",
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
      "A primeira marca brasileira especializada no cuidado do couro cabeludo de homens carecas.",
    sameAs: ["https://www.instagram.com/baldshield.br"],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.baldshield.com/#website",
    url: "https://www.baldshield.com/",
    name: "BaldShield",
    description:
      "Conteúdos e soluções para o cuidado do couro cabeludo de homens carecas.",
    publisher: {
      "@id": "https://www.baldshield.com/#organization",
    },
    inLanguage: "pt-BR",
  };

  return (
    <>
      <Helmet>
        <title>BaldShield | Cuidado do Couro Cabeludo de Homens Carecas</title>

        <meta
          name="description"
          content="A primeira marca brasileira especializada no cuidado do couro cabeludo de homens carecas. Conheça o Scalp Defense System™, uma rotina completa de limpeza, hidratação, proteção e controle da oleosidade."
        />

        <meta
          name="keywords"
          content="BaldShield, cuidado do couro cabeludo, couro cabeludo de homens carecas, cuidados para homens carecas, scalp care masculino, limpeza do couro cabeludo, hidratação do couro cabeludo, proteção do couro cabeludo, controle de oleosidade, Scalp Defense System"
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
          content="BaldShield | Cuidado do Couro Cabeludo de Homens Carecas"
        />
        <meta
          property="og:description"
          content="A primeira marca brasileira especializada no cuidado do couro cabeludo de homens carecas. Conheça o Scalp Defense System™."
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
          content="BaldShield — cuidado premium para o couro cabeludo de homens carecas"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="BaldShield | Cuidado do Couro Cabeludo de Homens Carecas"
        />
        <meta
          name="twitter:description"
          content="Conheça a primeira marca brasileira especializada no cuidado do couro cabeludo de homens carecas."
        />
        <meta
          name="twitter:image"
          content="https://www.baldshield.com/produto1.png"
        />
        <meta
          name="twitter:image:alt"
          content="BaldShield — cuidado premium para o couro cabeludo de homens carecas"
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

              <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                A primeira marca brasileira
                <span className="block text-primary">
                  para o cuidado da careca.
                </span>
              </h1>

              <p className="max-w-xl text-lg text-zinc-300">
                Proteção, controle de brilho e cuidado diário para quem assumiu
                a careca com confiança.
              </p>

              <p className="text-sm uppercase tracking-[0.25em] text-zinc-400">
                Sem brilho. Sem improviso. Com presença.
              </p>

              <div className="pt-4">
                <div className="flex flex-col items-start gap-4 sm:flex-row">
                  <Link
                    to="/pre-launch?scroll=lista"
                    className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-sm font-semibold text-black hover:bg-primary/90"
                  >
                    Garantir acesso antecipado
                  </Link>

                  <Link
                    to="/benefits"
                    className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-4 text-sm font-semibold text-white transition hover:border-primary hover:text-primary"
                  >
                    Conhecer a proposta
                  </Link>
                </div>

                <p className="mt-4 text-sm text-white/40">
                  Seja um dos primeiros a conhecer a BaldShield.
                </p>

                <p className="mt-2 text-xs text-primary">
                  Acesso antecipado ao primeiro lançamento
                </p>
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
              subtitle="Poucos minutos no sol já incomodam."
            />

            <div className="mt-4 space-y-3 text-center text-lg text-zinc-300 sm:text-xl">
              <p className="font-medium text-primary">
                O brilho aparece rápido.
              </p>
              <p className="text-white/80">O couro cabeludo fica exposto.</p>
              <p className="text-white/80">
                E durante anos, ninguém criou uma rotina pensada para isso.
              </p>
              <p className="font-medium text-primary">
                Foi por isso que nasceu a BaldShield.
              </p>
            </div>
          </div>
        </section>

        {/* SEO PREMIUM SECTION */}
        <section className="border-t border-white/5 bg-black py-28">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <span className="mb-6 inline-block text-sm font-semibold uppercase tracking-[0.28em] text-primary">
              Cuidado da careca
            </span>

            <h2
              className="text-4xl font-bold leading-tight text-white md:text-5xl"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Por que homens carecas precisam de cuidados específicos?
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-white/70">
              O couro cabeludo masculino está entre as áreas mais expostas ao
              sol, ao calor, à oleosidade e ao brilho excessivo. Mesmo assim,
              durante anos, homens carecas precisaram improvisar com produtos
              feitos para o rosto, para o corpo ou para quem ainda tem cabelo.
            </p>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-white/70">
              A BaldShield nasceu para mudar isso: um conceito premium de scalp
              care focado em proteção, controle visual, equilíbrio e cuidado
              diário para homens carecas.
            </p>
          </div>
        </section>

        {/* QUEBRA DE PADRÃO */}
        <section className="bg-black py-32">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <SectionHeader label="A VERDADE É SIMPLES" />

            <h2
              className="text-4xl font-bold leading-tight text-white md:text-5xl"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Durante anos, ninguém pensou no cuidado do couro cabeludo de quem
              não tem cabelo.
            </h2>

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/70">
              Produtos existem para cabelo. Para barba. Para pele. Mas não para
              quem decidiu assumir a careca como estilo.
            </p>

            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-white/70">
              A BaldShield nasce para mudar isso.
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
              Mais do que proteção. Uma nova forma de cuidar do couro cabeludo.
            </h2>

            <p className="mx-auto mb-6 max-w-3xl text-lg leading-relaxed text-secondary md:text-xl">
              A BaldShield nasce como a primeira marca brasileira focada na
              saúde do couro cabeludo de quem assumiu a careca com estilo.
            </p>

            <p className="mx-auto max-w-2xl text-base text-muted-foreground">
              O couro cabeludo é uma das áreas mais expostas do corpo — e por
              muito tempo foi negligenciado. A BaldShield surge para mudar isso
              com foco em saúde, proteção, controle e cuidado diário.
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
                <span className="block">para o couro cabeludo.</span>
              </h2>

              <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/70">
                Estamos construindo um sistema pensado para quem assumiu a
                careca como estilo — com proteção, controle de brilho, equilíbrio
                e cuidado diário.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl border border-primary/60 bg-gradient-to-b from-primary/10 to-transparent p-7 text-center shadow-[0_0_45px_rgba(255,115,0,0.14)] transition hover:bg-primary/10">
                <p className="mb-6 text-xs font-semibold uppercase tracking-[0.35em] text-primary">
                  Protect
                </p>

                <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Shield size={26} />
                </div>

                <h3 className="mb-4 text-2xl font-semibold text-white">
                  Proteção diária
                </h3>

                <p className="text-sm leading-relaxed text-white/70">
                  Cuidado pensado para ajudar a proteger o couro cabeludo
                  exposto na rotina diária.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-7 text-center transition hover:border-primary/40 hover:bg-white/10">
                <p className="mb-6 text-xs uppercase tracking-[0.35em] text-white/50">
                  Control
                </p>

                <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Droplet size={26} />
                </div>

                <h3 className="mb-4 text-2xl font-semibold text-white">
                  Controle de brilho
                </h3>

                <p className="text-sm leading-relaxed text-white/60">
                  Controle visual da oleosidade e do brilho excessivo ao longo
                  do dia.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-7 text-center transition hover:border-primary/40 hover:bg-white/10">
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
                  Conforto, equilíbrio e hidratação leve para o couro cabeludo.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-7 text-center transition hover:border-primary/40 hover:bg-white/10">
                <p className="mb-6 text-xs uppercase tracking-[0.35em] text-white/50">
                  Clean
                </p>

                <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Sparkles size={26} />
                </div>

                <h3 className="mb-4 text-2xl font-semibold text-white">
                  Limpeza e renovação
                </h3>

                <p className="text-sm leading-relaxed text-white/60">
                  Limpeza suave para remover impurezas e preparar a pele para o
                  cuidado diário.
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
                Desenvolvida especialmente para o couro cabeludo masculino, com
                uma proposta premium de proteção, conforto, controle visual e
                cuidado diário.
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