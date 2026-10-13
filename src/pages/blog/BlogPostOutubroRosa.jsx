import React from "react";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const BlogPostOutubroRosa = () => {
  const canonical = "https://www.baldshield.com/blog/outubro-rosa-cuidado-couro-cabeludo";
  const heroImage = "https://www.baldshield.com/Blog/outubro-rosa-2026/outubro-rosa-cuidado-couro-cabeludo-baldshield.webp";
  const title = "Outubro Rosa: quando o cabelo cai, o cuidado com a pele continua";
  const description = "Uma conversa acolhedora sobre perda de cabelo durante o tratamento do câncer de mama, cuidado com o couro cabeludo exposto e respeito às escolhas de cada mulher.";
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    image: [heroImage],
    datePublished: "2026-10-12",
    dateModified: "2026-10-12",
    author: { "@type": "Organization", name: "BaldShield", url: "https://www.baldshield.com/" },
    publisher: { "@type": "Organization", name: "BaldShield", url: "https://www.baldshield.com/" },
    mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "BaldShield", item: "https://www.baldshield.com/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.baldshield.com/blog" },
      { "@type": "ListItem", position: 3, name: title, item: canonical },
    ],
  };
  const headingClass = "mb-5 mt-14 text-left text-3xl font-bold text-white md:text-4xl";
  const headingStyle = { fontFamily: "Playfair Display, serif" };
  const paragraphClass = "mb-6";
  const imageClass = "my-12 overflow-hidden rounded-[2rem] border border-zinc-800 bg-zinc-950";

  return (
    <>
      <Helmet>
        <title>Outubro Rosa: cuidado com o couro cabeludo | BaldShield</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content={heroImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={heroImage} />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <Header />
      <main className="bg-black text-zinc-200">
        <article className="mx-auto max-w-5xl px-6 pb-24 pt-16 md:px-8 md:pt-24">
          <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-2 text-sm text-zinc-500">
            <a href="/" className="transition-colors hover:text-primary">Home</a>
            <span>/</span>
            <a href="/blog" className="transition-colors hover:text-primary">Blog</a>
            <span>/</span>
            <span className="text-zinc-300">Outubro Rosa</span>
          </nav>

          <header className="mb-12 max-w-4xl text-left">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-primary">Outubro Rosa | Cuidado e conscientização</p>
            <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl" style={headingStyle}>{title}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-zinc-300 md:text-xl">
              Entre as transformações que podem acompanhar o tratamento do câncer de mama, a perda dos cabelos é uma experiência profundamente pessoal. Um olhar sobre identidade, sensibilidade e a importância de cuidar de quem está por trás de cada história.
            </p>
            <div className="mt-7 flex items-center gap-3 text-sm text-zinc-500">
              <span>12 out. 2026</span><span>•</span><span>5 min de leitura</span>
            </div>
          </header>

          <figure className="mb-14 overflow-hidden rounded-[2rem] border border-zinc-800 bg-zinc-950">
            <img src="/Blog/outubro-rosa-2026/outubro-rosa-cuidado-couro-cabeludo-baldshield.webp" alt="Mulher sem cabelos em retrato sereno, representando o cuidado e a conscientização no Outubro Rosa" className="h-auto w-full" loading="eager" />
          </figure>

          <div className="mx-auto max-w-3xl text-lg leading-relaxed text-zinc-300">
            <h2 className={headingClass} style={headingStyle}>Há mudanças que vão além do espelho</h2>
            <p className={paragraphClass}>O cabelo acompanha muitos momentos da nossa vida. Faz parte de lembranças, escolhas, hábitos e da maneira como nos reconhecemos.</p>
            <p className={paragraphClass}>Para algumas mulheres que enfrentam o câncer de mama, perdê-lo durante o tratamento pode ser uma das mudanças mais difíceis desse percurso.</p>
            <p className={paragraphClass}>Não apenas pela aparência, mas por tudo o que essa transformação pode representar.</p>
            <p className={paragraphClass}>Há quem decida raspar a cabeça antes da queda. Quem prefira esperar. Quem encontre conforto em um lenço, em uma peruca ou simplesmente em deixar a cabeça descoberta.</p>
            <p className={paragraphClass}>E há dias em que nenhuma dessas escolhas parece fácil.</p>
            <p className={paragraphClass}>Cada mulher vive esse momento à sua maneira. Sem obrigação de parecer forte, de sorrir para uma fotografia ou de encontrar um significado positivo em tudo o que acontece.</p>
            <p className="mb-10">Às vezes, o que ela mais precisa é continuar sendo vista como a pessoa que sempre foi.</p>

            <h2 className={headingClass} style={headingStyle}>Uma pele que também precisa de atenção</h2>
            <p className={paragraphClass}>Alguns tratamentos oncológicos podem provocar a queda parcial ou total dos cabelos. Quando isso acontece, o couro cabeludo, antes protegido em parte pelos fios, passa a ficar mais exposto ao ambiente.</p>
            <p className={paragraphClass}>É uma mudança que pode trazer necessidades até então pouco percebidas.</p>
            <p className={paragraphClass}>A sensação do sol diretamente sobre a cabeça. O contato de um tecido com a pele. O desconforto de um couro cabeludo ressecado ou sensibilizado.</p>
            <p className={paragraphClass}>Pequenos detalhes do cotidiano podem ganhar outra importância.</p>
            <p className={paragraphClass}>Nesse período, a pele também pode apresentar alterações relacionadas ao próprio tratamento, o que exige atenção individualizada.</p>
            <p className={paragraphClass}>Cuidados delicados de higiene, conforto e proteção podem contribuir para o bem-estar, sempre de acordo com as orientações da equipe médica. A escolha de cosméticos e produtos para a pele deve considerar a sensibilidade de cada pessoa e as recomendações dos profissionais que acompanham seu tratamento.</p>
            <p className={paragraphClass}>Não se trata de criar mais uma obrigação em uma rotina que já exige tanto.</p>
            <div className="my-10 rounded-[2rem] border border-primary/30 bg-zinc-950 px-8 py-10 text-center md:px-12">
              <p className="mx-auto max-w-2xl text-xl font-semibold leading-relaxed text-white md:text-2xl">Trata-se de perceber que o conforto também mora nos pequenos cuidados.</p>
            </div>
            <figure className={imageClass}>
              <img src="/Blog/outubro-rosa-2026/outubro-rosa-cuidados-couro-cabeludo-exposto-baldshield.webp" alt="Mulher sem cabelos em momento de autocuidado, tocando delicadamente o couro cabeludo" className="h-auto w-full" loading="lazy" />
            </figure>

            <h2 className={headingClass} style={headingStyle}>Por trás de cada escolha, existe uma história</h2>
            <p className={paragraphClass}>Uma mulher pode escolher uma peruca porque gosta de se reconhecer com cabelos.</p>
            <p className={paragraphClass}>Outra pode preferir um lenço porque se sente confortável.</p>
            <p className={paragraphClass}>E outra pode sair de cabeça descoberta simplesmente porque é assim que deseja estar.</p>
            <p className={paragraphClass}>Nenhuma dessas decisões precisa carregar um significado maior.</p>
            <p className={paragraphClass}>Nem toda mulher quer ser chamada de guerreira. Nem toda experiência precisa se transformar em uma história de superação.</p>
            <p className={paragraphClass}>Existem momentos de coragem, mas também de cansaço, medo, esperança e silêncio.</p>
            <p className={paragraphClass}>E tudo isso faz parte da vida.</p>
            <p className="mb-10">Talvez uma das formas mais genuínas de acolher seja justamente não exigir uma reação específica. Estar presente, ouvir e respeitar o espaço de cada pessoa.</p>
            <figure className={imageClass}>
              <img src="/Blog/outubro-rosa-2026/outubro-rosa-acolhimento-apoio-mulheres-baldshield.webp" alt="Duas mulheres sem cabelos compartilham um abraço afetuoso, simbolizando acolhimento e apoio" className="h-auto w-full" loading="lazy" />
            </figure>

            <h2 className={headingClass} style={headingStyle}>O cuidado também está na maneira como olhamos</h2>
            <p className={paragraphClass}>Na BaldShield, nosso olhar sempre esteve voltado para uma região do corpo que, muitas vezes, recebe pouca atenção: o couro cabeludo exposto.</p>
            <p className={paragraphClass}>Mas falar sobre cuidado é também reconhecer que existem histórias muito diferentes por trás de uma cabeça sem cabelos.</p>
            <p className={paragraphClass}>Algumas pessoas convivem naturalmente com a calvície. Outras chegam a essa condição por circunstâncias que não escolheram.</p>
            <p className={paragraphClass}>As necessidades, os sentimentos e as experiências não são os mesmos.</p>
            <p className={paragraphClass}>Por isso, neste Outubro Rosa, queremos que nossa contribuição seja, antes de tudo, uma mensagem de atenção e respeito.</p>
            <p className="mb-10">Porque cuidar não é apenas falar sobre a pele. É lembrar que existe uma pessoa, com sua história, seus sentimentos e suas escolhas.</p>

            <h2 className={headingClass} style={headingStyle}>Outubro Rosa: um olhar que permanece</h2>
            <p className={paragraphClass}>O Outubro Rosa nos lembra da importância da informação, da detecção precoce do câncer de mama e do acesso à saúde.</p>
            <p className={paragraphClass}>Também nos convida a olhar com mais sensibilidade para quem está vivendo o tratamento e para as mudanças que podem acompanhá-lo.</p>
            <p className={paragraphClass}>Um gesto de carinho. Uma conversa sem julgamentos. A disposição de ouvir.</p>
            <p className={paragraphClass}>Nem sempre podemos mudar o que alguém está enfrentando. Mas podemos fazer com que essa pessoa se sinta acolhida.</p>
            <div className="my-10 rounded-[2rem] border border-primary/30 bg-zinc-950 px-8 py-10 text-center md:px-12">
              <p className="mx-auto max-w-2xl text-xl font-semibold leading-relaxed text-white md:text-2xl">Quando o cabelo cai, o cuidado com a pele continua. E o cuidado com a pessoa nunca deveria faltar.</p>
            </div>
            <p className={paragraphClass}>Neste Outubro Rosa, essa é a mensagem que queremos compartilhar.</p>
            <p className="mb-14 text-2xl font-bold text-primary" style={headingStyle}>BaldShield — O cuidado começa pelo olhar.</p>

            <div className="border-t border-zinc-800 pt-10">
              <h2 className="mb-5 text-2xl font-bold text-white" style={headingStyle}>Fontes e referências</h2>
              <ul className="space-y-4 text-sm leading-relaxed text-zinc-500">
                <li><a href="https://www.gov.br/inca/pt-br" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-primary">Instituto Nacional de Câncer (INCA) — informação e conscientização sobre o câncer</a></li>
                <li><a href="https://www.cancer.gov/about-cancer/treatment/side-effects/hair-loss" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-primary">National Cancer Institute — Hair Loss (Alopecia) and Cancer Treatment</a></li>
                <li><a href="https://www.cancer.org/cancer/managing-cancer/side-effects.html" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-primary">American Cancer Society — Managing Cancer Side Effects</a></li>
              </ul>
              <p className="mt-8 text-xs leading-relaxed text-zinc-600">Este conteúdo tem caráter exclusivamente informativo e educativo e não substitui diagnóstico, orientação ou tratamento realizado por profissionais de saúde. Durante o tratamento oncológico, os cuidados com a pele e o couro cabeludo devem seguir as recomendações da equipe médica.</p>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default BlogPostOutubroRosa;
