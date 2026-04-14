import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Shield, Droplet, Sparkles, Award, ArrowRight } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import BenefitCard from '@/components/BenefitCard.jsx';
import CTASection from '@/components/CTASection.jsx';
import SectionHeader from '@/components/SectionHeader.jsx';


const HomePage = () => {
  const benefits = [
    {
      icon: Shield,
      title: 'Proteção UV',
      description:
        'Fórmula FPS 50+ que protege o couro cabeludo contra os raios UVA e UVB, ajudando a prevenir queimaduras e danos causados pela exposição solar.',
    },
    {
      icon: Droplet,
      title: 'Resistente à água',
      description:
        'Mantém a proteção mesmo durante atividades ao ar livre, suor intenso ou contato com água.',
    },
    {
      icon: Sparkles,
      title: 'Toque seco',
      description:
        'Textura leve, de rápida absorção, sem oleosidade e sem brilho excessivo no couro cabeludo.',
    },
    {
      icon: Award,
      title: 'Testado dermatologicamente',
      description:
        'Seguro para uso diário, inclusive em peles sensíveis.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Protetor Solar para Careca | BaldShield Brasil</title>
        <meta
          name="description"
          content="Proteja seu couro cabeludo com BaldShield. O primeiro protetor solar para carecas no Brasil, com FPS 50+, toque seco e resistência à água."
        />
        <meta
          name="keywords"
          content="protetor solar para careca, protetor solar couro cabeludo, proteção para cabeça careca, baldshield, saúde do careca, FPS 50 couro cabeludo"
        />
        <link rel="canonical" href="https://www.baldshield.com/" />
      </Helmet>

      <div className="min-h-screen bg-black">
        <Header />

{/* New Hero Section */}
<section className="relative overflow-hidden bg-black">
  <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-zinc-950" />

  <div className="relative mx-auto grid min-h-[90vh] max-w-7xl items-center gap-12 px-6 py-20 md:px-10 lg:grid-cols-2 lg:gap-16 lg:py-28">
    
    {/* TEXTO */}
<div className="max-w-2xl space-y-6">
  <span className="inline-block text-xs font-semibold uppercase tracking-[0.35em] text-primary">
    BaldShield
  </span>

  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
    Assumir a careca é estilo.
    <span className="block text-primary">
      Cuidar dela é o próximo passo.
    </span>
  </h1>

  <p className="text-lg text-zinc-300 max-w-xl">
    A primeira marca brasileira criada para cuidar do couro cabeludo de quem não tem cabelo.
  </p>

  <p className="text-sm uppercase tracking-[0.25em] text-zinc-400">
    Sem brilho. Sem queimadura. Sem improviso.
  </p>

  {/* CTA + Conversão */}
  <div className="pt-4">
    <div className="flex flex-col items-start gap-4 sm:flex-row">
      <Link
        to="/products"
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

    {/* IMAGEM */}
<div className="relative">
  <div className="absolute inset-0 bg-primary/10 blur-3xl" />

  <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
    <img
      src="/hero-careca-premium.png"
      alt="Homem careca estilo premium BaldShield"
      className="w-full h-[600px] object-cover object-[center_8%] brightness-105 contrast-110"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-white/15 pointer-events-none" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(255,120,0,0.12),transparent_60%)] pointer-events-none" />
  </div>
</div>

</div>
</section>

{/* Identificação / Dor */}

<section className="bg-black py-20">
  <div className="mx-auto max-w-4xl px-6 text-center">

    <SectionHeader
      title="Quem é careca sabe."
      subtitle="Poucos minutos no sol já incomodam."
    />
    <div className="mt-4 space-y-3 text-zinc-300 text-lg sm:text-xl text-center">
      <p className="text-primary font-medium">O brilho aparece rápido.</p>
      <p className="text-white/80">O desconforto faz parte da rotina.</p>
    </div>

  </div>
</section>

{/* Quebra de padrão */}
<section className="bg-black py-32">
  <div className="max-w-4xl mx-auto px-6 text-center">

    <SectionHeader
  label="A VERDADE É SIMPLES"
  
/>

    <h2
  className="text-4xl md:text-5xl font-bold leading-tight"
  style={{ fontFamily: 'Playfair Display, serif' }}
>
  Durante anos, ninguém pensou no cuidado do couro cabeludo de quem não tem cabelo.{" "}
  
  </h2>

    <p className="mt-8 text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
      Produtos existem para cabelo. Para barba. Para pele.
      Mas não para quem decidiu assumir a careca como estilo.
    </p>

    <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
      A BaldShield nasce para mudar isso.
    </p>

  </div>
</section>

        {/* Quem Somos Section */}
        <section className="py-28 bg-gradient-to-b from-black to-card">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-lg md:text-xl uppercase tracking-[0.7em] text-primary mb-10 text-center font-semibold">
              BALDSHIELD
            </p>

            <h2
              className="text-4xl md:text-5xl font-bold text-foreground mb-6"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Mais do que proteção. Uma nova forma de cuidar do couro cabeludo.
            </h2>

            <p className="text-lg md:text-xl text-secondary leading-relaxed max-w-3xl mx-auto mb-6">
              A BaldShield nasce como a primeira marca brasileira focada na saúde do couro cabeludo de quem assumiu a careca com estilo.
            </p>

            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              O couro cabeludo é uma das áreas mais expostas ao sol — e por muito tempo foi negligenciado. A BaldShield surge para mudar isso com foco em saúde, proteção e cuidado diário.
            </p>
          </div>
        </section>
        {/* Rotina BaldShield */}
<section className="bg-black py-32">
  <div className="mx-auto max-w-6xl px-6">

    {/* Header */}
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20">
      <p className="text-lg md:text-xl uppercase tracking-[0.7em] text-primary mb-10 font-semibold">
        BALDSHIELD
      </p>

      <h2
        className="text-4xl md:text-5xl font-bold text-white mb-6"
        style={{ fontFamily: 'Playfair Display, serif' }}
      >
        Uma rotina completa para o couro cabeludo.
      </h2>

      <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
        Estamos construindo uma linha pensada para quem assumiu a careca como estilo —
        com proteção, controle de brilho e cuidado diário.
      </p>
    </div>

    {/* Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

      {/* Card 1 */}
      <div className="rounded-2xl border border-primary/50 bg-gradient-to-b from-primary/10 to-transparent p-6 transition hover:bg-primary/10 shadow-[0_0_40px_rgba(255,115,0,0.12)]">
        <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4 font-semibold">
          Primeiro lançamento
        </p>
        <h3 className="text-xl font-semibold text-white mb-3">
          Proteção solar
        </h3>
        <p className="text-white/75 text-sm leading-relaxed">
          Proteção UVA/UVB com toque seco, pensada para o couro cabeludo exposto.
        </p>
      </div>

      {/* Card 2 */}
      <div className="rounded-2xl border border-white/10 p-6 bg-white/5 hover:bg-white/10 transition">
        <p className="text-xs uppercase tracking-[0.3em] text-white/40 mb-4">
          Em desenvolvimento
        </p>
        <h3 className="text-xl font-semibold text-white mb-3">
          Controle de brilho
        </h3>
        <p className="text-white/60 text-sm leading-relaxed">
          Lenços antibrilho para remover a oleosidade instantaneamente.
        </p>
      </div>

      {/* Card 3 */}
      <div className="rounded-2xl border border-white/10 p-6 bg-white/5 hover:bg-white/10 transition">
        <p className="text-xs uppercase tracking-[0.3em] text-white/40 mb-4">
          Em desenvolvimento
        </p>
        <h3 className="text-xl font-semibold text-white mb-3">
          Hidratação
        </h3>
        <p className="text-white/60 text-sm leading-relaxed">
          Hidratação leve para manter conforto, equilíbrio e saúde da pele.
        </p>
      </div>

      {/* Card 4 */}
      <div className="rounded-2xl border border-white/10 p-6 bg-white/5 hover:bg-white/10 transition">
        <p className="text-xs uppercase tracking-[0.3em] text-white/40 mb-4">
          Em desenvolvimento
        </p>
        <h3 className="text-xl font-semibold text-white mb-3">
          Limpeza e renovação
        </h3>
        <p className="text-white/60 text-sm leading-relaxed">
          Esfoliação suave para remover impurezas e renovar a pele.
        </p>
      </div>

    </div>

    {/* CTA opcional */}
    <div className="text-center mt-14">
      <Link
        to="/products"
        className="inline-flex items-center justify-center rounded-full border border-primary px-8 py-4 text-sm font-semibold text-primary transition hover:bg-primary hover:text-black"
      >
        Conhecer a linha BaldShield
      </Link>
    </div>

  </div>
</section>
        {/* Benefits Preview Section */}
        <section className="py-24 bg-gradient-to-b from-black to-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2
                className="text-4xl md:text-5xl font-bold text-foreground mb-6"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Por que escolher a BaldShield?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Desenvolvido especialmente para o couro cabeludo, com proteção avançada, conforto no uso diário e performance para a rotina ao ar livre.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
