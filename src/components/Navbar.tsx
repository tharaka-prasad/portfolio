import { useState } from "react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#12161A]/85 backdrop-blur-md border-b border-[#262E34]">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

        <a
          href="#home"
          className="text-xl font-bold text-[#E6EAEC] font-['IBM_Plex_Mono',monospace] flex items-center gap-2"
        >
          <span className="h-2 w-2 rounded-full bg-[#35D07F] animate-pulse" />
          tp<span className="text-[#35D07F]">@</span>digital
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex gap-8 text-[#8B98A3] font-['IBM_Plex_Mono',monospace] text-sm">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative hover:text-[#35D07F] transition group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#35D07F] group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="md:hidden flex flex-col gap-1.5 w-8 h-8 items-center justify-center"
        >
          <span
            className={`block h-0.5 w-6 bg-[#35D07F] transition-transform ${
              open ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-[#35D07F] transition-opacity ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-[#35D07F] transition-transform ${
              open ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#12161A] border-t border-[#262E34] px-6 py-4 flex flex-col gap-4 font-['IBM_Plex_Mono',monospace] text-sm">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-[#8B98A3] hover:text-[#35D07F] transition"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;