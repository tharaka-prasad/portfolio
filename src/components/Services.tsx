const services = [
  {
    title: "Business Website Development",
    description:
      "Modern, responsive and SEO-friendly websites designed to build your business online presence and attract more customers.",
    icon: "🌐",
  },

  {
    title: "Custom Web Applications",
    description:
      "Tailor-made web applications developed according to your business requirements using Laravel and React.",
    icon: "💻",
  },

  {
    title: "POS & Inventory Systems",
    description:
      "Complete business management systems with sales, inventory, reports and user management features.",
    icon: "🛒",
  },

  {
    title: "ERP & CRM Solutions",
    description:
      "Enterprise solutions to manage business operations, customer relationships and workflow automation.",
    icon: "📊",
  },

  {
    title: "API Development & Integration",
    description:
      "Secure REST API development and third-party service integrations for web and mobile applications.",
    icon: "⚙️",
  },

  {
    title: "Server & Technical Support",
    description:
      "Linux server setup, deployment, database management and ongoing maintenance support.",
    icon: "🚀",
  },

];


const Services = () => {
  return (
    <section
      id="services"
      className="min-h-screen bg-slate-900 text-white px-6 py-20"
    >

      <div className="max-w-6xl mx-auto">


        <div className="text-center mb-12">

          <p className="text-blue-400">
            My Services
          </p>


          <h2 className="text-4xl font-bold mt-3">
            Solutions I Provide
          </h2>


          <p className="text-gray-400 mt-4">
            Helping businesses grow with modern technology solutions.
          </p>

        </div>



        <div className="grid md:grid-cols-3 gap-6">


          {services.map((service, index) => (

            <div
              key={index}
              className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:-translate-y-2 hover:border-blue-500 transition duration-300"
            >


              <div className="text-5xl mb-5">
                {service.icon}
              </div>


              <h3 className="text-xl font-semibold">
                {service.title}
              </h3>


              <p className="text-gray-400 mt-4 leading-7">
                {service.description}
              </p>


            </div>

          ))}


        </div>


      </div>

    </section>
  );
};


export default Services;