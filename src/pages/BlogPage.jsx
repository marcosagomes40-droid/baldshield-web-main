import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const posts = [
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
              Dicas práticas sobre brilho, proteção solar, oleosidade e cuidado diário
              com o couro cabeludo exposto.
            </p>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  to={post.slug}
                  className="group rounded-[2rem] border border-white/10 bg-white/5 p-6 transition hover:border-primary/50 hover:bg-white/10"
                >
                  <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                    {post.category}
                  </span>

                  <h2 className="mb-4 text-2xl font-bold transition group-hover:text-primary">
                    {post.title}
                  </h2>

                  <p className="mb-6 text-gray-300">
                    {post.excerpt}
                  </p>

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