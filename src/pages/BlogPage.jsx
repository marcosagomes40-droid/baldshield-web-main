import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const posts = [
  
  {
  slug: "/blog/por-que-homens-carecas-deveriam-proteger-o-couro-cabeludo",
  title: "Por que homens carecas deveriam proteger o couro cabeludo todos os dias?",
  excerpt:
    "Entenda por que proteger diariamente o couro cabeludo é um dos cuidados mais importantes para homens carecas.",
  category: "Proteção",
  date: "30 jun. 2026",
  isNew: true,
  image:
    "/Blog/protecao-couro-cabeludo/homem-careca-protecao-couro-cabeludo-baldshield.webp",
  },
  
  {
  slug: "/blog/por-que-homens-carecas-deveriam-hidratar-o-couro-cabeludo",
  title: "Por que homens carecas deveriam hidratar o couro cabeludo?",
  excerpt:
    "Descubra por que a hidratação é essencial para manter o couro cabeludo saudável, confortável e com melhor aparência.",
  category: "Hidratação",
  date: "23 jun. 2026",
  isNew: true,
  image:
    "/Blog/hidratacao-couro-cabeludo/homem-careca-hidratacao-couro-cabeludo-baldshield.webp",
  },
  
  
  {
  slug: "/blog/por-que-homens-carecas-deveriam-limpar-o-couro-cabeludo",
  title: "Por que homens carecas deveriam limpar o couro cabeludo?",
  excerpt:
  "Descubra por que a limpeza adequada é o primeiro passo para manter o couro cabeludo saudável, equilibrado e preparado para hidratação e proteção.",
  category: "Limpeza",
  date: "15 jun. 2026",
  isNew: true,
  image:
  "/Blog/limpeza-couro-cabeludo/homem-careca-limpeza-couro-cabeludo-baldshield.webp",
  },

  {
  slug: "/blog/por-que-minha-careca-brilha-na-camera",
  title: "Por que minha careca parece mais brilhante na câmera?",
  excerpt:
    "Entenda como iluminação, câmeras, telas e reflexos podem alterar a aparência do couro cabeludo em videoconferências.",
  category: "Aparência digital",
  date: "09 jun. 2026",
  isNew: true,
  },
  {
    slug: '/blog/o-que-e-scalp-defense-system',
    title: 'O que é o Scalp Defense System™?',
    excerpt:
      'Conheça o método criado pela BaldShield para cuidar do couro cabeludo exposto através dos pilares Clean, Hydrate, Protect e Control.',
    category: 'Scalp Defense System™',
    date: '05 jun. 2026',
    isNew: true,
  },
  {
    slug: '/blog/rotina-ideal-para-homens-carecas',
    title: 'A rotina ideal para homens carecas',
    excerpt:
      'Muito além da estética: por que o couro cabeludo exposto exige cuidados específicos no dia a dia.',
    category: 'Scalp care',
  },
  {
    slug: '/blog/o-segredo-do-carvao-de-bambu',
    title: 'O segredo por trás do carvão de bambu',
    excerpt:
      'Como os lenços anti-oleosidade ajudam a controlar o brilho da pele e do couro cabeludo.',
    category: 'Cuidados',
  },
  {
    slug: '/blog/risco-invisivel-no-couro-cabeludo',
    title: 'O risco invisível no couro cabeludo',
    excerpt:
      'Por que homens com pouco ou nenhum cabelo precisam redobrar o cuidado com o sol e a pele exposta.',
    category: 'Prevenção',
  },
  {
    slug: '/blog/dia-zero-careca-confianca',
    title: 'O Dia Zero: o maior upgrade de confiança de um homem',
    excerpt:
      'O momento em que você para de esconder e assume o controle.',
    category: 'Identidade',
  },
  {
    slug: '/blog/por-que-a-careca-brilha',
    title: 'Por que a careca brilha?',
    excerpt:
      'A ciência do couro cabeludo e o segredo do acabamento matte premium.',
    category: 'Scalp care',
  },
];

const BlogPage = () => {
  return (
    <>
      <Helmet>
        <title>Blog BaldShield | Cuidados para couro cabeludo</title>
        <meta
          name="description"
          content="Conteúdos sobre cuidado, proteção e controle de brilho para homens carecas."
        />
      </Helmet>

      <div className="min-h-screen bg-black text-white">
        <Header />

        <section className="px-6 py-24 md:px-12 lg:px-20">
          <div className="mx-auto max-w-6xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-primary">
              Blog BaldShield
            </p>

            <h1
              className="mb-6 max-w-4xl text-5xl font-bold leading-tight md:text-6xl"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Conteúdo para quem assumiu a careca.
            </h1>

            <p className="mb-12 max-w-2xl text-lg leading-relaxed text-gray-300">
              Dicas práticas sobre brilho, proteção solar, oleosidade e cuidado
              diário com o couro cabeludo exposto.
            </p>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  to={post.slug}
                  className="group rounded-[2rem] border border-white/10 bg-white/5 p-6 transition hover:border-primary/50 hover:bg-white/10"
                >
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                      {post.category}
                    </span>

                    {post.isNew && (
                      <span className="rounded-full border border-primary/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-primary">
                        Novo
                      </span>
                    )}
                  </div>

                  {post.date && (
                    <p className="mb-3 text-xs uppercase tracking-[0.18em] text-zinc-500">
                      {post.date}
                    </p>
                  )}

                  <h2
                    className="mb-4 text-2xl font-bold transition group-hover:text-primary"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {post.title}
                  </h2>

                  <p className="mb-6 text-gray-300">{post.excerpt}</p>

                  <span className="font-semibold text-primary">
                    Ler artigo →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default BlogPage;