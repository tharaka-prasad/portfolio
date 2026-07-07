import StatusLabel from "./ui/StatusLabel";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen bg-[#0F1317] text-[#E6EAEC] px-6 py-20"
    >
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-12">
          <div className="flex justify-center">
            <StatusLabel>Contact me</StatusLabel>
          </div>
          <h2 className="text-4xl font-bold mt-3 font-['IBM_Plex_Mono',monospace]">
            Let's Build Something Together
          </h2>
          <p className="text-[#8B98A3] mt-4">
            Have a website or software project idea?
            Let's discuss how I can help your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Contact Information */}
          <div className="bg-[#1B2126] p-8 rounded-xl border border-[#262E34]">
            <h3 className="text-2xl font-semibold">Get In Touch</h3>

            <div className="mt-6 space-y-5 text-[#C7CFD4] font-['IBM_Plex_Mono',monospace] text-sm">
              <div>
                <p className="text-[#35D07F] text-xs tracking-widest uppercase mb-1">email</p>
                <p>tharakaprasad04@gmail.com</p>
              </div>

              <div>
                <p className="text-[#35D07F] text-xs tracking-widest uppercase mb-1">phone / whatsapp</p>
                <p>0776468551</p>
              </div>

              <div>
                <p className="text-[#35D07F] text-xs tracking-widest uppercase mb-1">location</p>
                <p>Udabadda Ella, Maliththa, Bandarawela, Sri Lanka</p>
              </div>

              <div>
                <p className="text-[#35D07F] text-xs tracking-widest uppercase mb-1">social</p>
                <div className="flex gap-4 mt-2">
                  <a
                    href="https://github.com/tharaka-prasad"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#35D07F] transition"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://linkedin.com/in/tharaka-prasad-0408bb241/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#35D07F] transition"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/94776468551"
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-8 bg-[#35D07F] text-[#12161A] font-semibold hover:bg-[#2ab86c] px-6 py-3 rounded-lg transition"
            >
              Chat on WhatsApp
            </a>
          </div>

          {/* Contact Form */}
          <form className="bg-[#1B2126] p-8 rounded-xl border border-[#262E34] space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-[#12161A] border border-[#262E34] rounded-lg px-4 py-3 outline-none focus:border-[#35D07F] transition"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-[#12161A] border border-[#262E34] rounded-lg px-4 py-3 outline-none focus:border-[#35D07F] transition"
            />

            <input
              type="text"
              placeholder="Project Type (Website, System, App...)"
              className="w-full bg-[#12161A] border border-[#262E34] rounded-lg px-4 py-3 outline-none focus:border-[#35D07F] transition"
            />

            <textarea
              placeholder="Tell me about your project..."
              rows={5}
              className="w-full bg-[#12161A] border border-[#262E34] rounded-lg px-4 py-3 outline-none focus:border-[#35D07F] transition"
            />

            <button
              type="submit"
              className="bg-[#35D07F] text-[#12161A] font-semibold hover:bg-[#2ab86c] px-6 py-3 rounded-lg w-full transition"
            >
              Send Message
            </button>
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;