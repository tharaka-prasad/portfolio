import StatusLabel from "./ui/StatusLabel";

const skillCategories = [
  {
    title: "Frontend Development",
    skills: ["React", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
    tag: "UI",
  },
  {
    title: "Backend Development",
    skills: ["Laravel", "PHP", "REST API", "MySQL", "Database Design"],
    tag: "API",
  },
  {
    title: "DevOps & Tools",
    skills: ["Git", "Linux Server Management", "Google Cloud Storage", "Cloud Deployment"],
    tag: "OPS",
  },
  {
    title: "Networking & IoT",
    skills: ["CCNA", "Cisco Packet Tracer", "IoT", "ESP32", "Network Configuration"],
    tag: "NET",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-[#12161A] text-[#E6EAEC] px-6 py-20">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-12">
          <div className="flex justify-center">
            <StatusLabel>Technologies</StatusLabel>
          </div>
          <h2 className="text-4xl font-bold mt-3 font-['IBM_Plex_Mono',monospace]">
            My Skills
          </h2>
          <p className="text-[#8B98A3] mt-4">
            Technologies and tools I use to build modern software solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-[#1B2126] rounded-xl p-6 border border-[#262E34] hover:border-[#35D07F]/50 transition duration-300"
            >
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-xl font-semibold">{category.title}</h3>
                <span className="text-xs font-['IBM_Plex_Mono',monospace] text-[#35D07F] border border-[#35D07F]/40 rounded px-2 py-1">
                  {category.tag}
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="border border-[#262E34] text-[#C7CFD4] px-3 py-1.5 rounded-md text-sm font-['IBM_Plex_Mono',monospace] hover:border-[#35D07F]/60 hover:text-[#35D07F] transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;