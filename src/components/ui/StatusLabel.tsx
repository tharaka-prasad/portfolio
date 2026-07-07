// Small reusable "system status" label used as the eyebrow across sections.
// Ties every section back to the networking/CCNA identity — reads like a
// router's status LED next to a terminal-style comment.

const StatusLabel = ({ children }: { children: string }) => {
  return (
    <p className="flex items-center gap-2 text-sm tracking-[0.2em] uppercase text-[#35D07F] font-['IBM_Plex_Mono',monospace]">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full rounded-full bg-[#35D07F] opacity-60 animate-ping" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-[#35D07F]" />
      </span>
      {children}
    </p>
  );
};

export default StatusLabel;