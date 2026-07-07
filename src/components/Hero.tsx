import profileImage from "../assets/profile.jpg";
import StatusLabel from "./ui/StatusLabel";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-[#12161A] text-[#E6EAEC] px-6 relative overflow-hidden"
    >
      {/* Faint circuit-grid backdrop — subtle, not a gradient blob */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.06] pointer-events-none"
        aria-hidden="true"
      >
        <defs>
          <pattern id="grid" width="42" height="42" patternUnits="userSpaceOnUse">
            <path d="M42 0H0V42" fill="none" stroke="#35D07F" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center relative z-10">

        {/* Left Content */}
        <div>

          <StatusLabel>Available for new projects</StatusLabel>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight mt-5 font-['IBM_Plex_Mono',monospace]">
            Tharaka
            <span className="text-[#35D07F]">{" "}Prasad</span>
            <br />
            <span className="text-3xl md:text-4xl text-[#8B98A3] font-normal">
              Full Stack Developer
            </span>
          </h1>

          {/* Terminal card — the hero's signature element */}
          <div className="mt-7 bg-[#1B2126] border border-[#262E34] rounded-lg overflow-hidden max-w-md">
            <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-[#262E34] bg-[#181D22]">
              <span className="h-2.5 w-2.5 rounded-full bg-[#3A4147]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#3A4147]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#35D07F]" />
              <span className="ml-2 text-xs text-[#8B98A3] font-['IBM_Plex_Mono',monospace]">
                tharaka@devbox
              </span>
            </div>
            <div className="px-4 py-4 font-['IBM_Plex_Mono',monospace] text-sm leading-7">
              <p className="text-[#8B98A3]">
                <span className="text-[#35D07F]">$</span> stack --list
              </p>
              <p className="text-[#E6EAEC]">
                Laravel · React · TypeScript · MySQL
              </p>
              <p className="text-[#8B98A3] mt-2">
                <span className="text-[#35D07F]">$</span> uptime --focus
              </p>
              <p className="text-[#E6EAEC]">
                building secure, scalable business systems
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="bg-[#35D07F] text-[#12161A] font-semibold hover:bg-[#2ab86c] px-6 py-3 rounded-lg transition"
            >
              Hire Me
            </a>
            <a
              href="#projects"
              className="border border-[#262E34] hover:border-[#35D07F] hover:text-[#35D07F] px-6 py-3 rounded-lg transition"
            >
              View Projects
            </a>
          </div>

          {/* Quick Info */}
          <div className="mt-10 flex gap-8 font-['IBM_Plex_Mono',monospace]">
            <div>
              <h3 className="text-3xl font-bold text-[#35D07F]">1+</h3>
              <p className="text-[#8B98A3] text-sm mt-1">Years Experience</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-[#35D07F]">10+</h3>
              <p className="text-[#8B98A3] text-sm mt-1">Projects</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-[#35D07F]">100%</h3>
              <p className="text-[#8B98A3] text-sm mt-1">Commitment</p>
            </div>
          </div>

        </div>

        {/* Right Content — portrait framed like a hardware unit, not a gradient circle */}
        <div className="flex justify-center">
          <div className="relative w-72 md:w-96">

            {/* Corner brackets — network-diagram node marks */}
            <span className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-[#35D07F]" />
            <span className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-[#35D07F]" />
            <span className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-[#35D07F]" />
            <span className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-[#35D07F]" />

            <div className="bg-[#1B2126] border border-[#262E34] rounded-xl overflow-hidden">
              <div className="flex items-center justify-between px-4 py-2 border-b border-[#262E34]">
                <span className="text-xs font-['IBM_Plex_Mono',monospace] text-[#8B98A3]">
                  NODE-01
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#35D07F] animate-pulse" />
                  <span className="text-xs font-['IBM_Plex_Mono',monospace] text-[#35D07F]">
                    online
                  </span>
                </span>
              </div>
              <img
                src={profileImage}
                alt="Tharaka Prasad - Full Stack Developer"
                className="w-full aspect-square object-cover grayscale-15"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;