const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      "React",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
    ],
    icon: "🎨",
  },

  {
    title: "Backend Development",
    skills: [
      "Laravel",
      "PHP",
      "REST API",
      "MySQL",
      "Database Design",
    ],
    icon: "⚙️",
  },

  {
    title: "DevOps & Tools",
    skills: [
      "Git",
      "Linux Server Management",
      "Google Cloud Storage",
      "API Integration",
      "Cloud Deployment",
    ],
    icon: "🚀",
  },

  {
    title: "Networking & IoT",
    skills: [
      "CCNA",
      "Cisco Packet Tracer",
      "IoT",
      "ESP32",
      "Network Configuration",
    ],
    icon: "🌐",
  },

];


const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-slate-950 text-white px-6 py-20"
    >

      <div className="max-w-6xl mx-auto">


        <div className="text-center mb-12">

          <p className="text-blue-400">
            Technologies
          </p>

          <h2 className="text-4xl font-bold mt-3">
            My Skills
          </h2>

          <p className="text-gray-400 mt-4">
            Technologies and tools I use to build modern software solutions.
          </p>

        </div>



        <div className="grid md:grid-cols-2 gap-8">


          {skillCategories.map((category, index) => (

            <div
              key={index}
              className="bg-slate-800 rounded-xl p-6 hover:-translate-y-2 transition duration-300 border border-slate-700"
            >


              <div className="text-4xl mb-4">
                {category.icon}
              </div>


              <h3 className="text-2xl font-semibold mb-5">
                {category.title}
              </h3>



              <div className="flex flex-wrap gap-3">

                {category.skills.map((skill, i) => (

                  <span
                    key={i}
                    className="bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full text-sm"
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