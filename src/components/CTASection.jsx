import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Shield } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
            <Shield className="w-8 h-8 text-primary" />
          </div>

          <h2
            className="text-4xl md:text-5xl font-bold text-foreground mb-6"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Seu couro cabeludo já está exposto.
            <span className="block text-primary mt-2">
              O cuidado não precisa ser improvisado.
            </span>
          </h2>

          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Conheça uma rotina pensada para limpar, hidratar, proteger e acompanhar
            o couro cabeludo exposto ao longo do dia.
          </p>

      <Button
      asChild
      size="lg"
      className="bg-primary hover:bg-primary/90 text-black font-semibold
                text-base sm:text-lg
                w-full sm:w-auto max-w-[360px]
                px-5 sm:px-12 py-5 sm:py-6 h-auto
                whitespace-normal
                transition-all duration-200 active:scale-[0.98]"
      >
      <Link
        to="/products"
        className="flex w-full items-center justify-center text-center leading-snug whitespace-normal"
      >
        <span>
          Conhecer o Scalp Defense
          <span className="block sm:inline"> System™</span>
        </span>
      </Link>
</Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
