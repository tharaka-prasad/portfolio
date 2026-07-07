// Signature element: a dotted "connection path" with three nodes, echoing a
// traceroute / network topology line. Used between sections instead of a
// plain <hr>, so the page's own transitions read as part of the identity.

const NetworkDivider = () => {
  return (
    <div className="flex items-center justify-center gap-3 py-2" aria-hidden="true">
      <span className="h-1.5 w-1.5 rounded-full bg-[#35D07F]" />
      <span className="h-px w-16 bg-[#262E34]" style={{
        backgroundImage: "repeating-linear-gradient(90deg, #35D07F 0 4px, transparent 4px 9px)",
        opacity: 0.5,
      }} />
      <span className="h-1.5 w-1.5 rounded-full bg-[#262E34] border border-[#35D07F]/50" />
      <span className="h-px w-16 bg-[#262E34]" style={{
        backgroundImage: "repeating-linear-gradient(90deg, #35D07F 0 4px, transparent 4px 9px)",
        opacity: 0.5,
      }} />
      <span className="h-1.5 w-1.5 rounded-full bg-[#35D07F]" />
    </div>
  );
};

export default NetworkDivider;