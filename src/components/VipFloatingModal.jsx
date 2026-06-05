import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import { Link } from "react-router-dom";

const VipFloatingModal = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const alreadySeen = localStorage.getItem(
      "baldshield_vip_modal_seen"
    );

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
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 px-4 py-6 backdrop-blur-sm sm:py-8">
      <div className="relative w-full max-w-xl max-h-[92vh] overflow-y-auto rounded-[2rem] border border-primary/30 bg-[#050505] p-6 text-center shadow-[0_0_80px_rgba(255,115,0,0.20)] sm:p-8 md:p-10">
        <button
          onClick={closeModal}
          className="absolute right-4 top-4 z-10 rounded-full border border-white/10 bg-black/40 p-2 text-white/60 transition hover:border-primary hover:text-primary"
          aria-label="Fechar"
        >
          <X size={18} />
        </button>

        <div className="mb-4 flex justify-center">
          <img
            src="/baldshield-logo.png"
            alt="BaldShield"
            className="h-24 w-auto object-contain drop-shadow-[0_0_25px_rgba(255,115,0,0.35)] sm:h-28 md:h-32"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        </div>

        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.40em] text-primary">
          LISTA VIP
        </p>

        <h2
          className="mb-5 text-3xl font-bold leading-tight text-white sm:text-4xl"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          Bem-vindo à BaldShield.
        </h2>

        <p className="mb-4 text-base leading-relaxed text-white/75 sm:text-lg">
          Você acaba de descobrir a primeira marca brasileira dedicada à saúde e
          ao cuidado do couro cabeludo exposto.
        </p>

        <p className="mb-7 text-base leading-relaxed text-white/75 sm:text-lg">
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
            className="inline-flex w-full items-center justify-center rounded-full bg-primary px-7 py-4 text-base font-semibold text-black transition hover:scale-105 hover:bg-primary/90 sm:w-auto sm:px-8"
          >
            Entrar para Lista VIP
          </Link>

          <button
            onClick={closeModal}
            className="inline-flex w-full items-center justify-center rounded-full border border-white/15 px-7 py-4 text-base font-semibold text-white/70 transition hover:border-primary hover:text-primary sm:w-auto sm:px-8"
          >
            Agora não
          </button>
        </div>
      </div>
    </div>
  );
};

export default VipFloatingModal;