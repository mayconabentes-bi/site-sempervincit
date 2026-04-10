import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";

const WhatsAppButton = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!dismissed) setShowTooltip(true);
    }, 6000);
    return () => clearTimeout(timer);
  }, [dismissed]);

  const handleDismiss = () => {
    setDismissed(true);
    setShowTooltip(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Tooltip contextual */}
      {showTooltip && (
        <div className="bg-white rounded-2xl shadow-2xl border border-border/50 p-4 max-w-[260px] animate-fade-in relative">
          <button
            onClick={handleDismiss}
            className="absolute top-2.5 right-2.5 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Fechar"
          >
            <X size={14} />
          </button>
          <p className="text-sm font-semibold text-foreground pr-5 leading-relaxed">
            Precisa de uma solução urgente para sua empresa no Amazonas? 🚀
          </p>
          <p className="text-xs text-muted-foreground mt-1">Resposta em menos de 2h</p>
          <div className="absolute -bottom-2 right-7 w-4 h-4 bg-white border-r border-b border-border/50 rotate-45" />
        </div>
      )}

      {/* Botão flutuante */}
      <a
        href="https://wa.me/5592985759589?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20da%20Semper%20Vincit."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale conosco pelo WhatsApp"
        className="bg-[#25D366] hover:bg-[#1ebe5d] text-white w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center group relative"
      >
        <MessageCircle size={26} className="group-hover:rotate-12 transition-transform duration-300" />
        {/* Ping indicator */}
        <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-red-500 rounded-full border-2 border-white animate-pulse" />
      </a>
    </div>
  );
};

export default WhatsAppButton;
