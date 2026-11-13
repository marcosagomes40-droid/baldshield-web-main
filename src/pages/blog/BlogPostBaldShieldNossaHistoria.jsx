import React from "react";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const BlogPostBaldShieldNossaHistoria = () => {
  const canonical = "https://www.baldshield.com/blog/baldshield-nossa-historia-finalmente-ser-visto";
  const imageBase = "/Blog/lancamento-baldshield-2026/";
  const images = {
    hero: `${imageBase}blog-baldshield-capa-finalmente-ser-visto.webp`,
    community: `${imageBase}blog-baldshield-pertencimento-representatividade.webp`,
    development: `${imageBase}blog-baldshield-bastidores-desenvolvimento.webp`,
    birth: `${imageBase}blog-baldshield-nascimento-9-meses-produtos-v2.webp`,
    future: `${imageBase}blog-baldshield-futuro-confianca-pertencimento.webp`,
  };
  const title = "BaldShield: não é sobre ter cabelo. É sobre finalmente ser visto.";
  const description = "Nove meses de sonhos, escolhas e dedicação. Conheça a história da BaldShield, marca brasileira criada para quem tem o couro cabeludo exposto.";
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    image: [`https://www.baldshield.com${images.hero}`],
    datePublished: "2026-11-13",
    dateModified: "2026-11-13",
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
  const paragraphClass = "mb-6";
  const imageClass = "my-12 overflow-hidden rounded-[2rem] border border-zinc-800 bg-zinc-950";
  const headingStyle = { fontFamily: "Playfair Display, serif" };
  const Photo = ({ src, alt }) => (
    <figure className={imageClass}>
      <img src={src} alt={alt} className="h-auto w-full" loading="lazy" />
    </figure>
  );
  return (
    <>
      <Helmet>
        <title>BaldShield: nossa história e nascimento | BaldShield</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content={`https://www.baldshield.com${images.hero}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`https://www.baldshield.com${images.hero}`} />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>
      <Header />
      <main className="bg-black text-zinc-200">
        <article className="mx-auto max-w-5xl px-6 pb-24 pt-16 md:px-8 md:pt-24">
          <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-2 text-sm text-zinc-500">
            <a href="/" className="transition-colors hover:text-primary">Home</a><span>/</span>
            <a href="/blog" className="transition-colors hover:text-primary">Blog</a><span>/</span>
            <span className="text-zinc-300">Nossa História</span>
          </nav>
          <header className="mb-12 max-w-4xl text-left">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-primary">Nossa História · Edição especial de lançamento</p>
            <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl" style={headingStyle}>{title}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-zinc-300 md:text-xl">Como uma ideia se transformou em propósito, reuniu pessoas, escolhas e cuidados e deu origem a uma marca brasileira criada para quem sempre mereceu mais atenção.</p>
            <div className="mt-7 flex items-center gap-3 text-sm text-zinc-500"><span>13 nov. 2026</span><span>•</span><span>12 min de leitura</span></div>
          </header>
          <figure className="mb-14 overflow-hidden rounded-[2rem] border border-zinc-800 bg-zinc-950">
            <img src={images.hero} alt="BaldShield: confiança e orgulho de quem tem o couro cabeludo exposto" className="h-auto w-full" loading="eager" fetchPriority="high" />
          </figure>
          <div className="mx-auto max-w-3xl text-lg leading-relaxed text-zinc-300">
            <h2 className={headingClass} style={headingStyle}>Tudo começa quando alguém percebe o que estava faltando.</h2>
            <p className={paragraphClass}>Existem ideias que nascem de uma oportunidade de mercado.</p>
            <p className={paragraphClass}>Outras surgem de uma tendência, de uma pesquisa, de um produto que está fazendo sucesso em algum lugar do mundo.</p>
            <p className={paragraphClass}>E existem aquelas que nascem de uma pergunta aparentemente simples:</p>
            <p className={paragraphClass}><strong className="text-white">Por que ninguém pensou nisso antes?</strong></p>
            <p className={paragraphClass}>Foi dessa inquietação que começou a nascer a BaldShield.</p>
            <p className={paragraphClass}>Não porque faltassem produtos de cuidados pessoais. Pelo contrário. Vivemos cercados por marcas que prometem cuidar da pele, dos cabelos, da barba, do corpo e de praticamente cada detalhe da nossa aparência.</p>
            <p className={paragraphClass}>Mas havia algo curioso nessa abundância.</p>
            <p className={paragraphClass}>Para quem tem o couro cabeludo exposto, muitas vezes o cuidado precisava ser improvisado.</p>
            <p className={paragraphClass}>Um produto pensado para o rosto. Outro desenvolvido para o corpo. Uma solução emprestada de uma categoria diferente.</p>
            <p className={paragraphClass}>Como se aquela parte tão visível da nossa identidade não merecesse atenção própria.</p>
            <p className={paragraphClass}>Como se ser careca fosse apenas não ter cabelo.</p>
            <p className={paragraphClass}><strong className="text-white">Mas quem vive essa realidade sabe que existe muito mais nessa história.</strong></p>
            <p className={paragraphClass}>Existe o sol que incide diretamente sobre a cabeça. O brilho que aparece em uma fotografia. A sensação de ressecamento. O desconforto depois de um dia inteiro. A vontade de se sentir bem, de se cuidar, de sair de casa com confiança.</p>
            <p className={paragraphClass}>E existe algo ainda mais importante.</p>
            <p className={paragraphClass}>A sensação de ser lembrado.</p>
            <p className={paragraphClass}>Foi aí que uma pergunta começou a se transformar em propósito.</p>
            <p className={paragraphClass}><em className="text-white">E se existisse uma marca criada, desde o primeiro dia, para essas pessoas?</em></p>

            <h2 className={headingClass} style={headingStyle}>Não queríamos apenas criar produtos. Queríamos criar pertencimento.</h2>
            <Photo src={images.community} alt="Comunidade BaldShield: uma mulher e dois homens carecas compartilham um momento de amizade" />
            <p className={paragraphClass}>Durante muito tempo, a careca foi tratada como algo a esconder, disfarçar ou corrigir.</p>
            <p className={paragraphClass}>A publicidade frequentemente apresentou soluções para recuperar o que havia sido perdido.</p>
            <p className={paragraphClass}>Mas e quem não queria recuperar nada?</p>
            <p className={paragraphClass}>E quem já havia feito as pazes com o espelho?</p>
            <p className={paragraphClass}>E quem descobriu na própria aparência uma expressão de personalidade, liberdade e estilo?</p>
            <p className={paragraphClass}><strong className="text-white">Essas pessoas não precisavam de uma marca que lhes dissesse como deveriam ser. Precisavam de uma marca que respeitasse quem já eram.</strong></p>
            <p className={paragraphClass}>Foi com esse olhar que a BaldShield começou a ganhar identidade.</p>
            <p className={paragraphClass}>Uma marca que não vende a ideia de que falta alguma coisa em você.</p>
            <p className={paragraphClass}>Uma marca que acredita que autoestima não depende de quantidade de cabelo.</p>
            <p className={paragraphClass}>Que cuidado não é vaidade excessiva.</p>
            <p className={paragraphClass}>Que masculinidade não exige descuido.</p>
            <p className={paragraphClass}>E que confiança não precisa de explicação.</p>
            <p className={paragraphClass}>A BaldShield nasceu para olhar para o couro cabeludo exposto não como uma ausência, mas como uma característica que merece atenção específica.</p>
            <p className={paragraphClass}>Um espaço que até então encontrava poucas soluções dedicadas, especialmente no mercado brasileiro.</p>
            <p className={paragraphClass}>Foi assim que encontramos uma expressão para representar essa visão:</p>
            <p className="mb-6 text-2xl font-bold text-primary" style={headingStyle}>Exposed Scalp Care.</p>
            <p className={paragraphClass}>Mais do que um nome para uma categoria de cuidados, uma maneira de dizer que o couro cabeludo exposto merece ser reconhecido, compreendido e cuidado.</p>

            <h2 className={headingClass} style={headingStyle}>Por trás de cada embalagem, houve uma escolha.</h2>
            <Photo src={images.development} alt="Bastidores conceituais do desenvolvimento dos produtos BaldShield" />
            <p className={paragraphClass}>Uma marca pode nascer rapidamente no papel.</p>
            <p className={paragraphClass}>Mas transformar uma ideia em algo que alguém vai colocar sobre a própria pele exige outro tipo de compromisso.</p>
            <p className={paragraphClass}>Exige perguntas.</p>
            <p className={paragraphClass}>Muitas perguntas.</p>
            <p className={paragraphClass}>Quem vai desenvolver nossas fórmulas?</p>
            <p className={paragraphClass}>Quais características realmente importam para o couro cabeludo exposto?</p>
            <p className={paragraphClass}>Como equilibrar a experiência de uso, a praticidade e a proposta de cuidado?</p>
            <p className={paragraphClass}>Como escolher embalagens que façam sentido?</p>
            <p className={paragraphClass}>Como construir uma operação responsável, mesmo começando pequena?</p>
            <p className={paragraphClass}>Ao longo dessa jornada, cada resposta abriu espaço para novas decisões.</p>
            <p className={paragraphClass}>Conversamos com fornecedores. Avaliamos possibilidades. Buscamos parceiros de desenvolvimento e fabricação. Trabalhamos em apresentações, rótulos, embalagens, identidade visual e detalhes que, muitas vezes, ninguém verá.</p>
            <p className={paragraphClass}>Mas que fazem parte da experiência que queremos entregar.</p>
            <p className={paragraphClass}>Nessa construção, contamos com parceiros especializados, entre eles a Euamoestampa, Grafix, bepack, Biozenthi e a MWM Cosméticos, envolvidos no desenvolvimento e na fabricação de produtos do nosso portfólio.</p>
            <p className={paragraphClass}>A escolha de parceiros não foi apenas uma questão de colocar um produto no mercado.</p>
            <p className={paragraphClass}>Era também uma questão de confiança.</p>
            <p className={paragraphClass}><strong className="text-white">Porque quando alguém escolhe a BaldShield, está confiando em decisões tomadas muito antes de abrir a embalagem.</strong></p>
            <p className={paragraphClass}>E essa responsabilidade nunca nos pareceu pequena.</p>
            <p className={paragraphClass}>Não vamos dizer que tudo foi simples.</p>
            <p className={paragraphClass}>Houve ajustes. Esperas. Revisões. Custos que precisaram ser reavaliados. Decisões que exigiram paciência.</p>
            <p className={paragraphClass}>Houve momentos em que o caminho mais rápido parecia tentador.</p>
            <p className={paragraphClass}>Mas aprendemos que construir uma marca com propósito também significa saber respeitar o tempo necessário para fazer escolhas melhores.</p>
            <p className={paragraphClass}>Não buscamos uma história perfeita.</p>
            <p className={paragraphClass}>Buscamos construir uma história verdadeira.</p>

            <h2 className={headingClass} style={headingStyle}>Quatro produtos. Uma ideia de cuidado que faz sentido.</h2>
            <p className={paragraphClass}>Aos poucos, aquela ideia começou a tomar forma.</p>
            <p className={paragraphClass}>Não como uma coleção de produtos desconectados, mas como uma proposta de cuidado organizada, simples de compreender e possível de incorporar à rotina.</p>
            <p className={paragraphClass}>Assim nasceu o <strong className="text-white">Scalp Defense System™</strong>, nosso sistema de cuidados dedicado ao couro cabeludo exposto.</p>
            <div className="my-10 space-y-4">
              {[
                ["01", "CLEAN", "O começo de tudo: limpar.", "Um cuidado pensado para transformar um gesto cotidiano em uma rotina de atenção ao couro cabeludo exposto."],
                ["02", "HYDRATE", "O conforto de cuidar.", "Porque a hidratação não deveria ser esquecida justamente em uma região tão exposta às condições do dia a dia."],
                ["03", "DEFENSE", "Proteção também é cuidado.", "Nosso protetor solar FPS 70 nasceu para colocar a proteção contra a radiação solar no centro dessa rotina."],
                ["04", "WIPES", "Praticidade para acompanhar a vida real.", "Uma proposta de cuidado portátil, desenvolvida para complementar a experiência de quem está sempre em movimento."],
              ].map(([number, name, lead, detail]) => (
                <div key={number} className="flex gap-5 rounded-2xl border border-zinc-800 bg-zinc-950 p-5">
                  <span className="text-2xl font-bold text-primary">{number}</span>
                  <div><h3 className="mb-1 font-bold text-white">{name} — {lead}</h3><p className="text-base leading-relaxed">{detail}</p></div>
                </div>
              ))}
            </div>
            <p className={paragraphClass}>Cada produto tem sua função.</p>
            <p className={paragraphClass}>Mas o que os conecta é uma ideia maior:</p>
            <p className={paragraphClass}><strong className="text-white">Você não precisa adaptar sua identidade aos produtos que existem. Os produtos é que deveriam considerar quem você é.</strong></p>
            <p className={paragraphClass}>E essa filosofia não termina nos primeiros lançamentos.</p>
            <p className={paragraphClass}>Seguimos estudando novas possibilidades, como o controle de brilho com acabamento natural, porque entendemos que o cuidado também envolve conforto, preferência pessoal e a liberdade de escolher como queremos nos apresentar ao mundo.</p>
            <p className={paragraphClass}>A BaldShield não nasceu para encerrar uma conversa.</p>
            <p className={paragraphClass}>Nasceu para começar uma.</p>

            <h2 className={headingClass} style={headingStyle}>O cuidado está também naquilo que não aparece nas fotografias.</h2>
            <p className={paragraphClass}>Existe uma parte da construção de uma marca que raramente ganha espaço nas redes sociais.</p>
            <p className={paragraphClass}>É o trabalho silencioso.</p>
            <p className={paragraphClass}>A conferência de uma embalagem.</p>
            <p className={paragraphClass}>A revisão de um rótulo.</p>
            <p className={paragraphClass}>A organização de um estoque.</p>
            <p className={paragraphClass}>A preparação de uma etiqueta.</p>
            <p className={paragraphClass}>O teste de um pedido.</p>
            <p className={paragraphClass}>A preocupação com a entrega.</p>
            <p className={paragraphClass}>O cuidado para que uma informação esteja correta.</p>
            <p className={paragraphClass}>São tarefas que não costumam render grandes histórias.</p>
            <p className={paragraphClass}>Mas, para nós, são parte essencial desta.</p>
            <p className={paragraphClass}>Porque não queremos apenas que alguém compre um produto BaldShield.</p>
            <p className={paragraphClass}>Queremos que essa pessoa perceba, desde o primeiro contato, que existe atenção por trás daquela escolha.</p>
            <p className={paragraphClass}>Que o pedido foi preparado com respeito.</p>
            <p className={paragraphClass}>Que a embalagem foi pensada para oferecer uma experiência agradável.</p>
            <p className={paragraphClass}>Que existe uma marca de verdade, com pessoas reais, trabalhando para merecer a confiança de quem chega.</p>
            <p className={paragraphClass}><strong className="text-white">Ser pequeno no começo não significa pensar pequeno.</strong></p>
            <p className={paragraphClass}>Significa ter a oportunidade de construir cada detalhe com proximidade.</p>
            <p className={paragraphClass}>E talvez essa seja uma das partes mais bonitas de começar.</p>

            <h2 className={headingClass} style={headingStyle}>Uma marca nasce de pessoas. E é para pessoas que ela existe.</h2>
            <p className={paragraphClass}>Por trás da BaldShield não existe uma grande estrutura tentando inventar uma necessidade.</p>
            <p className={paragraphClass}>Existe uma convicção.</p>
            <p className={paragraphClass}>A de que pessoas que passaram anos sendo pouco lembradas pelas categorias tradicionais de beleza e cuidados pessoais merecem uma experiência desenvolvida especialmente para elas.</p>
            <p className={paragraphClass}>Mas existe também algo profundamente humano nessa jornada.</p>
            <p className={paragraphClass}>A dúvida de quem está começando.</p>
            <p className={paragraphClass}>A ansiedade pela chegada dos primeiros produtos.</p>
            <p className={paragraphClass}>A alegria de ver uma embalagem pronta.</p>
            <p className={paragraphClass}>A satisfação de encontrar parceiros que ajudam a transformar ideias em realidade.</p>
            <p className={paragraphClass}>O receio natural de colocar no mundo algo em que se acredita tanto.</p>
            <p className={paragraphClass}>E, acima de tudo, a esperança de que alguém, em algum lugar, encontre nessa marca um pouco de si.</p>
            <p className={paragraphClass}>Talvez seja um homem que assumiu a careca há muitos anos.</p>
            <p className={paragraphClass}>Talvez alguém que acabou de raspar a cabeça pela primeira vez.</p>
            <p className={paragraphClass}>Talvez uma mulher que usa o cabelo raspado como expressão de estilo.</p>
            <p className={paragraphClass}>Talvez uma pessoa que perdeu os cabelos por razões que não escolheu.</p>
            <p className={paragraphClass}>Cada história é diferente.</p>
            <p className={paragraphClass}>Cada relação com a própria imagem também.</p>
            <p className={paragraphClass}>Não queremos falar por todas essas pessoas.</p>
            <p className={paragraphClass}><strong className="text-white">Queremos que todas saibam que são bem-vindas.</strong></p>
            <p className={paragraphClass}>Porque uma marca verdadeiramente próxima não começa dizendo às pessoas o que elas precisam sentir.</p>
            <p className={paragraphClass}>Começa ouvindo.</p>

            <h2 className={headingClass} style={headingStyle}>Nove meses. E chegou a hora de nascer.</h2>
            <Photo src={images.birth} alt="Nascimento da BaldShield após nove meses de dedicação, com os produtos CLEAN, HYDRATE e DEFENSE" />
            <p className={paragraphClass}>Existe um detalhe nessa história que torna este momento ainda mais especial.</p>
            <p className={paragraphClass}>No dia 13 de novembro, a BaldShield completa exatamente nove meses.</p>
            <p className={paragraphClass}>O tempo de uma gestação.</p>
            <p className={paragraphClass}>E talvez não exista maneira mais bonita de descrever o que vivemos até aqui.</p>
            <p className={paragraphClass}>Durante esses meses, cuidamos dessa ideia como quem espera a chegada de um filho. Com carinho, dedicação, ansiedade, algumas noites mal dormidas e aquela mistura inexplicável de medo e felicidade que acompanha os grandes sonhos.</p>
            <p className={paragraphClass}>Cada pequena conquista foi celebrada. Cada dificuldade nos ensinou alguma coisa.</p>
            <p className={paragraphClass}>E agora, depois de nove meses, chegou a hora de apresentar ao mundo aquilo que construímos com tanto amor.</p>
            <p className={paragraphClass}><strong className="text-white">A BaldShield nasce.</strong></p>
            <p className={paragraphClass}>Ainda pequena, com muito a aprender e um mundo inteiro pela frente.</p>
            <p className={paragraphClass}>Mas já carregando algo que nenhuma embalagem consegue traduzir por completo: <strong className="text-white">o coração de quem acreditou nela desde o primeiro dia.</strong></p>

            <h2 className={headingClass} style={headingStyle}>13 de novembro. O primeiro dia de uma nova história.</h2>
            <p className={paragraphClass}>Uma data que, para muita gente, será apenas mais uma sexta-feira.</p>
            <p className={paragraphClass}>Para nós, representa um marco.</p>
            <p className={paragraphClass}>O momento em que meses de planejamento, conversas, decisões, testes e expectativas começam a encontrar seu verdadeiro significado.</p>
            <p className={paragraphClass}>Porque uma marca não se completa quando seu primeiro produto fica pronto.</p>
            <p className={paragraphClass}>Ela começa a ganhar vida quando encontra as pessoas para quem foi criada.</p>
            <p className={paragraphClass}>Quando alguém visita nossa loja.</p>
            <p className={paragraphClass}>Quando alguém faz uma pergunta.</p>
            <p className={paragraphClass}>Quando chega o primeiro pedido.</p>
            <p className={paragraphClass}>Quando uma embalagem é aberta.</p>
            <p className={paragraphClass}>Quando recebemos uma opinião sincera.</p>
            <p className={paragraphClass}>Quando descobrimos o que acertamos e o que ainda precisamos melhorar.</p>
            <p className={paragraphClass}>Não esperamos que tudo seja perfeito desde o primeiro dia.</p>
            <p className={paragraphClass}>Esperamos ter humildade para aprender, disposição para evoluir e coragem para continuar.</p>
            <p className={paragraphClass}>E queremos construir esse caminho ao lado de quem acreditar nessa proposta.</p>
            <p className={paragraphClass}>A BaldShield chega ao mercado com uma identidade própria, um portfólio inicial e muitos planos.</p>
            <p className={paragraphClass}>Mas o que mais nos entusiasma não cabe em uma embalagem.</p>
            <p className={paragraphClass}>É a possibilidade de criar uma comunidade em torno de uma ideia simples e poderosa:</p>
            <p className={paragraphClass}><strong className="text-white">Ninguém deveria se sentir invisível quando o assunto é cuidar de si.</strong></p>

            <h2 className={headingClass} style={headingStyle}>Para quem chegou até aqui.</h2>
            <p className={paragraphClass}>Se você acompanhou algum pedaço dessa jornada, nosso obrigado.</p>
            <p className={paragraphClass}>Se compartilhou uma ideia, deu uma opinião, apresentou um contato, participou de uma conversa ou simplesmente demonstrou interesse, você também faz parte desta história.</p>
            <p className={paragraphClass}>Se está conhecendo a BaldShield agora, seja muito bem-vindo.</p>
            <p className={paragraphClass}>Não queremos que você encontre aqui apenas produtos.</p>
            <p className={paragraphClass}>Queremos que encontre respeito pela sua identidade, atenção às suas necessidades e uma marca que tenha orgulho de caminhar ao seu lado.</p>
            <p className={paragraphClass}>E se você já se perguntou por que não existiam mais opções pensadas para o couro cabeludo exposto, esperamos que hoje encontre pelo menos o começo de uma resposta.</p>
            <p className={paragraphClass}>Ainda temos muito a aprender.</p>
            <p className={paragraphClass}>Muito a construir.</p>
            <p className={paragraphClass}>E muitas histórias para conhecer.</p>
            <p className={paragraphClass}>Mas há algo de que temos certeza desde o primeiro dia:</p>
            <p className={paragraphClass}><strong className="text-white">Não é sobre ter cabelo.</strong></p>
            <p className={paragraphClass}><strong className="text-white">É sobre ter identidade.</strong></p>
            <p className={paragraphClass}><strong className="text-white">É sobre ter atitude.</strong></p>
            <p className={paragraphClass}><strong className="text-white">É sobre finalmente ser visto.</strong></p>
            <p className={paragraphClass}>E, acima de tudo, é sobre reconhecer que você merece cuidado de verdade.</p>
            <Photo src={images.future} alt="BaldShield: confiança, autoestima, pertencimento e esperança para o futuro" />
            <div className="my-10 rounded-[2rem] border border-primary/30 bg-zinc-950 px-8 py-10 text-center md:px-12">
              <p className="text-2xl font-bold text-white md:text-3xl" style={headingStyle}>Bem-vindo à BaldShield.</p>
              <p className="mt-3 text-xl font-semibold text-primary">Confidence for the Bold.</p>
              <p className="mt-4 text-base text-zinc-300">Uma nova história de cuidado começa aqui.</p>
              <a href="https://www.baldshield.com" className="mt-5 inline-block font-semibold text-primary underline underline-offset-4">Conheça a BaldShield</a>
            </div>
            <div className="border-t border-zinc-800 pt-10">
              <h2 className="mb-5 text-2xl font-bold text-white" style={headingStyle}>Continue acompanhando nossa história</h2>
              <p className={paragraphClass}>Explore conteúdos sobre bem-estar, proteção e cuidados com o couro cabeludo exposto na <a href="/blog" className="font-semibold text-primary underline underline-offset-4">biblioteca de artigos BaldShield</a>.</p>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default BlogPostBaldShieldNossaHistoria;
