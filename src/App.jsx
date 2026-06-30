import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop.jsx';
import HomePage from './pages/HomePage.jsx';
import ProductsPage from './pages/ProductsPage.jsx';
import ProductDetailPage from './pages/ProductDetailPage.jsx';
import BenefitsPage from './pages/BenefitsPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import SuccessPage from './pages/SuccessPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import PreLaunchPage from './pages/PreLaunchPage.jsx';
import BlogPage from './pages/BlogPage.jsx';
import BlogPostBambooCharcoal from './pages/BlogPostBambooCharcoal.jsx';
import BlogPostScalpRisk from './pages/BlogPostScalpRisk.jsx';
import BlogPostDiaZero from './pages/BlogPostDiaZero.jsx';
import BlogPostCarecaBrilha from './pages/BlogPostCarecaBrilha.jsx';
import BlogPostRotinaHomensCarecas from '@/pages/blog/BlogPostRotinaHomensCarecas.jsx';
import BlogPostScalpDefenseSystem from '@/pages/blog/BlogPostScalpDefenseSystem.jsx';
import BlogPostCarecaBrilhaNaCamera from "@/pages/blog/BlogPostCarecaBrilhaNaCamera.jsx";
import BlogPostLimpezaCouroCabeludo from "@/pages/blog/BlogPostLimpezaCouroCabeludo.jsx";
import BlogPostHidratacaoCouroCabeludo from "@/pages/blog/BlogPostHidratacaoCouroCabeludo.jsx";
import BlogPostProtecaoCouroCabeludo from "@/pages/blog/BlogPostProtecaoCouroCabeludo";
import { Toaster } from '@/components/ui/toaster';
import { CartProvider } from '@/hooks/useCart.jsx';
import WhatsAppButton from "./components/WhatsAppButton";
import EmbaixadorPage from './pages/EmbaixadorPage.jsx';
import CosmetiquePage from '@/pages/CosmetiquePage.jsx';

function App() {
  return (
    <CartProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/benefits" element={<BenefitsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/success" element={<SuccessPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/embaixador" element={<EmbaixadorPage />} />
          <Route path="/pre-launch" element={<PreLaunchPage />} />
          <Route path="/cosmetique" element={<CosmetiquePage />} />    
          <Route path="/blog" element={<BlogPage />} />
          <Route
            path="/blog/o-segredo-do-carvao-de-bambu"
            element={<BlogPostBambooCharcoal />}
          />
          <Route
          path="/blog/risco-invisivel-no-couro-cabeludo"
          element={<BlogPostScalpRisk />}
          />
          <Route
          path="/blog/dia-zero-careca-confianca"
          element={<BlogPostDiaZero />}
          />
          <Route
          path="/blog/por-que-a-careca-brilha"
          element={<BlogPostCarecaBrilha />}
          />
          <Route
          path="/blog/rotina-ideal-para-homens-carecas"
          element={<BlogPostRotinaHomensCarecas />}
          />
          <Route
          path="/blog/o-que-e-scalp-defense-system"
          element={<BlogPostScalpDefenseSystem />}
          />
          <Route
          path="/blog/por-que-minha-careca-brilha-na-camera"
          element={<BlogPostCarecaBrilhaNaCamera />}
          />
          <Route
          path="/blog/por-que-homens-carecas-deveriam-limpar-o-couro-cabeludo"
          element={<BlogPostLimpezaCouroCabeludo />}
          />
          <Route
          path="/blog/por-que-homens-carecas-deveriam-hidratar-o-couro-cabeludo"
          element={<BlogPostHidratacaoCouroCabeludo />}
          />
          <Route
          path="/blog/por-que-homens-carecas-deveriam-proteger-o-couro-cabeludo"
          element={<BlogPostProtecaoCouroCabeludo />}
          />


          <Route
            path="*"
            element={
              <div className="min-h-screen bg-black flex items-center justify-center px-4">
                <div className="text-center">
                  <h1
                    className="text-6xl font-bold text-primary mb-4"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    404
                  </h1>
                  <p className="text-xl text-secondary mb-8">Page not found</p>
                  <a href="/" className="text-primary hover:text-primary/80 underline">
                    Back to home
                  </a>
                </div>
              </div>
            }
          />
          </Routes>
          <WhatsAppButton />
          <Toaster />
      </Router>
    
    </CartProvider>
  );
}

export default App;