import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const whatsappUrl =
    "https://wa.me/5511939441361?text=Olá,%20quero%20saber%20mais%20sobre%20a%20BaldShield.";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale com a BaldShield no WhatsApp"
      className="fixed bottom-8 right-6 z-50 flex items-center gap-3 rounded-full border border-white/10 bg-black/80 backdrop-blur-md px-5 py-3 text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:border-primary hover:bg-primary hover:text-black"
    >
      <MessageCircle size={22} />
      <span className="hidden text-sm font-semibold md:inline">
        Fale com a BaldShield
      </span>
    </a>
  );
};

export default WhatsAppButton;