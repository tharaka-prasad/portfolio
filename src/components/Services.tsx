import StatusLabel from "./ui/StatusLabel";

const services = [
  {
    title: "Business Website Development",
    description:
      "Modern, responsive and SEO-friendly websites designed to build your business online presence and attract more customers.",
    id: "01",
  },
  {
    title: "Custom Web Applications",
    description:
      "Tailor-made web applications developed according to your business requirements using Laravel and React.",
    id: "02",
  },
  {
    title: "POS & Inventory Systems",
    description:
      "Complete business management systems with sales, inventory, reports and user management features.",
    id: "03",
  },
  {
    title: "ERP & CRM Solutions",
    description:
      "Enterprise solutions to manage business operations, customer relationships and workflow automation.",
    id: "04",
  },
  {
    title: "API Development & Integration",
    description:
      "Secure REST API development and third-party service integrations for web and mobile applications.",
    id: "05",
  },
  {
    title: "Server & Technical Support",
    description:
      "Linux server setup, deployment, database management and ongoing maintenance support.",
    id: "06",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="min-h-screen bg-[#0F1317] text-[#E6EAEC] px-6 py-20"
    >
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-12">
          <div className="flex justify-center">
            <StatusLabel>My services</StatusLabel>
          </div>
          <h2 className="text-4xl font-bold mt-3 font-['IBM_Plex_Mono',monospace]">
            Solutions I Provide
          </h2>
          <p className="text-[#8B98A3] mt-4">
            Helping businesses grow with modern technology solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative bg-[#1B2126] p-6 rounded-xl border border-[#262E34] hover:border-[#35D07F]/60 hover:-translate-y-1.5 transition duration-300 group"
            >
              <span className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-[#262E34] group-hover:border-[#35D07F] transition" />

              <span className="text-xs font-['IBM_Plex_Mono',monospace] text-[#35D07F]">
                {service.id}
              </span>

              <h3 className="text-xl font-semibold mt-3">{service.title}</h3>

              <p className="text-[#8B98A3] mt-4 leading-7">
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