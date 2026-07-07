const Footer = () => {
  return (
    <footer className="bg-[#0F1317] text-[#8B98A3] border-t border-[#262E34] py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

        <p className="font-['IBM_Plex_Mono',monospace] text-sm">
          © {new Date().getFullYear()} TP Digital Solutions. All rights reserved.
        </p>

        <p className="flex items-center gap-2 text-xs font-['IBM_Plex_Mono',monospace] text-[#35D07F]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#35D07F] animate-pulse" />
          systems operational
        </p>

      </div>
    </footer>
  );
};

export default Footer;