import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import { Link } from "react-router-dom";

const VipFloatingModal = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Para teste, deixe false.
    // Depois de publicar, troque para:
    // const alreadySeen = localStorage.getItem("baldshield_vip_modal_seen");
    const alreadySeen = false;

    if (alreadySeen) return;

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 7000);

    return () => clearTimeout(timer);
  }, []);

  const closeModal = () => {
    localStorage.setItem("baldshield_vip_modal_seen", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm">
      <div className="relative w-full max-w-xl overflow-hidden rounded-[2rem] border border-primary/30 bg-[#050505] p-8 text-center shadow-[0_0_80px_rgba(255,115,0,0.20)] md:p-10">
        <button
          onClick={closeModal}
          className="absolute right-5 top-5 rounded-full border border-white/10 p-2 text-white/60 transition hover:border-primary hover:text-primary"
          aria-label="Fechar"
        >
          <X size={18} />
        </button>

        <div className="mb-4 flex justify-center">
          <img
             src="/baldshield-logo.png"
            alt="BaldShield"
            className="h-36 w-auto object-contain drop-shadow-[0_0_25px_rgba(255,115,0,0.35)]"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        </div>

        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.40em] text-primary">
          LISTA VIP
        </p>

        <h2
          className="mb-6 text-4xl font-bold leading-tight text-white"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          Bem-vindo à BaldShield.
        </h2>

        <p className="mb-5 text-lg leading-relaxed text-white/75">
          Você acaba de descobrir a primeira marca brasileira dedicada à saúde e ao cuidado do couro cabeludo exposto.
        </p>

        <p className="mb-8 text-lg leading-relaxed text-white/75">
          Entre para a Lista VIP e acompanhe o lançamento do
          <span className="font-medium text-primary">
            {" "}
            Scalp Defense System™
          </span>
          .
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to="/pre-launch?scroll=lista"
            onClick={closeModal}
            className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-base font-semibold text-black transition hover:scale-105 hover:bg-primary/90"
          >
            Entrar para Lista VIP
          </Link>

          <button
            onClick={closeModal}
            className="inline-flex items-center justify-center rounded-full border border-white/15 px-8 py-4 text-base font-semibold text-white/70 transition hover:border-primary hover:text-primary"
          >
            Agora não
          </button>
        </div>
      </div>
    </div>
  );
};

export default VipFloatingModal;