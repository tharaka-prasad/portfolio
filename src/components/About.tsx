import StatusLabel from "./ui/StatusLabel";

const specs = [
  { key: "role", value: "Full Stack Developer Associate" },
  { key: "company", value: "Sky Smart Technology Private Limited" },
  { key: "tenure", value: "Jan 2025 — Jul 2025" },
  { key: "backend", value: "Laravel · PHP · REST API · MySQL" },
  { key: "frontend", value: "React · TypeScript · Tailwind CSS" },
  { key: "infra", value: "Linux · Git · GCS · IoT · CCNA" },
];

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-[#12161A] text-[#E6EAEC] px-6 py-20"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div>

          <StatusLabel>About me</StatusLabel>

          <h2 className="text-4xl font-bold mt-4 font-['IBM_Plex_Mono',monospace]">
            Full Stack Developer
          </h2>

          <p className="text-[#8B98A3] mt-6 leading-8">
            I'm Tharaka Prasad, a Full Stack Developer specializing
            in Laravel, React, JavaScript, and MySQL. I build modern,
            scalable and secure web applications that help businesses
            improve their daily operations.
          </p>

          <p className="text-[#8B98A3] mt-4 leading-8">
            I have experience developing business systems including
            POS, ERP, CRM applications, REST APIs and custom web
            solutions. My networking background — Linux server
            management, cloud storage integration, and IoT-based
            applications — shapes how I design systems end to end.
          </p>

          <a
            href="/Tharaka_Prasad_CV.pdf"
            download
            className="inline-block mt-8 bg-[#35D07F] text-[#12161A] font-semibold px-6 py-3 rounded-lg hover:bg-[#2ab86c] transition"
          >
            Download CV
          </a>

        </div>

        {/* Right Content — rendered like a "system info" readout */}
        <div className="bg-[#1B2126] border border-[#262E34] rounded-xl overflow-hidden">
          <div className="flex items-center gap-2 px-5 py-3 border-b border-[#262E34] bg-[#181D22]">
            <span className="h-2 w-2 rounded-full bg-[#35D07F]" />
            <span className="text-xs font-['IBM_Plex_Mono',monospace] text-[#8B98A3]">
              whoami --verbose
            </span>
          </div>

          <div className="p-6 space-y-4 font-['IBM_Plex_Mono',monospace] text-sm">
            {specs.map((spec, i) => (
              <div key={i} className="flex gap-4 border-b border-[#232A30] last:border-0 pb-3 last:pb-0">
                <span className="text-[#35D07F] w-24 shrink-0">{spec.key}:</span>
                <span className="text-[#C7CFD4]">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;