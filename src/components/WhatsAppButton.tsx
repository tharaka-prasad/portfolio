const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/94776468551"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 group flex items-center"
    >
      <span className="absolute inset-0 rounded-full bg-[#35D07F] opacity-40 animate-ping" />
      <span className="relative bg-[#35D07F] text-[#12161A] w-14 h-14 rounded-full flex items-center justify-center text-2xl shadow-lg shadow-[#35D07F]/20 group-hover:scale-110 transition">
        💬
      </span>
      <span className="absolute right-16 bg-[#1B2126] border border-[#262E34] text-[#E6EAEC] text-xs font-['IBM_Plex_Mono',monospace] px-3 py-1.5 rounded-md opacity-0 group-hover:opacity-100 whitespace-nowrap transition pointer-events-none">
        chat on whatsapp
      </span>
    </a>
  );
};

export default WhatsAppButton;