const projects = [
  {
    title: "Sustainability Web Application",
    description:
      "A web-based sustainability management system developed to manage environmental data, analytics and reporting. Built with Laravel backend, React frontend and MySQL database.",
    tech: ["Laravel", "React", "MySQL", "REST API"],
    image: "🌱",
  },

  {
    title: "Production Tracking System",
    description:
      "Enterprise production tracking solution developed to monitor production processes, manage records and improve operational efficiency.",
    tech: ["Laravel", "React", "MySQL", "Linux Server"],
    image: "🏭",
  },

  {
    title: "AI Geeks Web App",
    description:
      "Freelance full-stack web application developed with modern technologies, focusing on responsive UI and backend functionality.",
    tech: ["Laravel", "React", "Tailwind CSS", "MySQL"],
    image: "🤖",
  },

  {
    title: "IoT-Based Environmental Control System",
    description:
      "IoT solution for Rose Flower Tunnel monitoring temperature, humidity, soil moisture, light and gas levels using ESP32. Developed Laravel dashboard for real-time monitoring.",
    tech: ["ESP32", "IoT", "Laravel", "MySQL", "ThingSpeak"],
    image: "🌹",
  },

  {
    title: "CCNA Network Projects",
    description:
      "Designed and configured network simulations including VLAN, Router, Switch configurations and network security concepts using Cisco Packet Tracer.",
    tech: ["Cisco Packet Tracer", "Networking", "CCNA"],
    image: "🌐",
  },

];


const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen bg-slate-950 text-white px-6 py-20"
    >

      <div className="max-w-6xl mx-auto">


        <div className="text-center mb-12">

          <p className="text-blue-400">
            My Portfolio
          </p>


          <h2 className="text-4xl font-bold mt-3">
            Featured Projects
          </h2>


          <p className="text-gray-400 mt-4">
            Real-world applications and software solutions I have developed.
          </p>

        </div>



        <div className="grid md:grid-cols-2 gap-8">


          {projects.map((project, index) => (

            <div
              key={index}
              className="bg-slate-800 rounded-xl p-6 hover:-translate-y-2 transition duration-300 border border-slate-700"
            >


              <div className="text-6xl mb-5">
                {project.image}
              </div>



              <h3 className="text-2xl font-semibold">
                {project.title}
              </h3>



              <p className="text-gray-400 mt-3 leading-7">
                {project.description}
              </p>



              <div className="flex flex-wrap gap-2 mt-5">

                {project.tech.map((item, i) => (

                  <span
                    key={i}
                    className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm"
                  >
                    {item}
                  </span>

                ))}

              </div>



              <button
                className="mt-6 border border-blue-500 px-5 py-2 rounded-lg hover:bg-blue-600 transition"
              >
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