import StatusLabel from "./ui/StatusLabel";

const projects = [
  {
    title: "Sustainability Web Application",
    description:
      "A web-based sustainability management system developed to manage environmental data, analytics and reporting. Built with Laravel backend, React frontend and MySQL database.",
    tech: ["Laravel", "React", "MySQL", "REST API"],
    id: "10.0.0.1",
  },
  {
    title: "Production Tracking System",
    description:
      "Enterprise production tracking solution developed to monitor production processes, manage records and improve operational efficiency.",
    tech: ["Laravel", "React", "MySQL", "Linux Server"],
    id: "10.0.0.2",
  },
  {
    title: "AI Geeks Web App",
    description:
      "Freelance full-stack web application developed with modern technologies, focusing on responsive UI and backend functionality.",
    tech: ["Laravel", "React", "Tailwind CSS", "MySQL"],
    id: "10.0.0.3",
  },
  {
    title: "IoT-Based Environmental Control System",
    description:
      "IoT solution for Rose Flower Tunnel monitoring temperature, humidity, soil moisture, light and gas levels using ESP32. Developed Laravel dashboard for real-time monitoring.",
    tech: ["ESP32", "IoT", "Laravel", "MySQL", "ThingSpeak"],
    id: "10.0.0.4",
  },
  {
    title: "CCNA Network Projects",
    description:
      "Designed and configured network simulations including VLAN, Router, Switch configurations and network security concepts using Cisco Packet Tracer.",
    tech: ["Cisco Packet Tracer", "Networking", "CCNA"],
    id: "10.0.0.5",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen bg-[#12161A] text-[#E6EAEC] px-6 py-20"
    >
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-12">
          <div className="flex justify-center">
            <StatusLabel>My portfolio</StatusLabel>
          </div>
          <h2 className="text-4xl font-bold mt-3 font-['IBM_Plex_Mono',monospace]">
            Featured Projects
          </h2>
          <p className="text-[#8B98A3] mt-4">
            Real-world applications and software solutions I have developed.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative bg-[#1B2126] rounded-xl p-6 border border-[#262E34] hover:border-[#35D07F]/60 hover:-translate-y-1.5 transition duration-300 group"
            >
              <span className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-[#262E34] group-hover:border-[#35D07F] transition" />

              <span className="inline-block text-xs font-['IBM_Plex_Mono',monospace] text-[#35D07F] border border-[#35D07F]/40 rounded px-2 py-1">
                {project.id}
              </span>

              <h3 className="text-2xl font-semibold mt-4">{project.title}</h3>

              <p className="text-[#8B98A3] mt-3 leading-7">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-5">
                {project.tech.map((item, i) => (
                  <span
                    key={i}
                    className="border border-[#262E34] text-[#C7CFD4] px-3 py-1 rounded-md text-xs font-['IBM_Plex_Mono',monospace]"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <button className="mt-6 border border-[#35D07F]/50 text-[#35D07F] px-5 py-2 rounded-lg hover:bg-[#35D07F] hover:text-[#12161A] transition">
                View Details
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;