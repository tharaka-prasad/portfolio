const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen bg-slate-900 text-white px-6 py-20"
    >
      <div className="max-w-5xl mx-auto">


        <div className="text-center mb-12">

          <p className="text-blue-400">
            Contact Me
          </p>


          <h2 className="text-4xl font-bold mt-3">
            Let's Build Something Together
          </h2>


          <p className="text-gray-400 mt-4">
            Have a website or software project idea?
            Let's discuss how I can help your business.
          </p>

        </div>



        <div className="grid md:grid-cols-2 gap-8">


          {/* Contact Information */}
          <div className="bg-slate-800 p-8 rounded-xl border border-slate-700">


            <h3 className="text-2xl font-semibold">
              Get In Touch
            </h3>



            <div className="mt-6 space-y-5 text-gray-300">


              <div>
                <p className="text-blue-400">
                  📧 Email
                </p>

                <p>
                  tharakaprasad04@gmail.com
                </p>
              </div>



              <div>
                <p className="text-blue-400">
                  📱 Phone / WhatsApp
                </p>

                <p>
                  0776468551
                </p>
              </div>



              <div>
                <p className="text-blue-400">
                  📍 Location
                </p>

                <p>
                  Udabadda Ella, Maliththa,
                  Bandarawela, Sri Lanka
                </p>
              </div>



              <div>
                <p className="text-blue-400">
                  🔗 Social
                </p>

                <div className="flex gap-4 mt-2">

                  <a
                    href="https://github.com/tharaka-prasad"
                    target="_blank"
                    className="hover:text-blue-400"
                  >
                    GitHub
                  </a>


                  <a
                    href="https://linkedin.com/in/tharaka-prasad-0408bb241/"
                    target="_blank"
                    className="hover:text-blue-400"
                  >
                    LinkedIn
                  </a>

                </div>

              </div>


            </div>


            <a
              href="https://wa.me/94776468551"
              target="_blank"
              className="inline-block mt-8 bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg transition"
            >
              Chat on WhatsApp
            </a>


          </div>




          {/* Contact Form */}
          <form
            className="bg-slate-800 p-8 rounded-xl border border-slate-700 space-y-5"
          >

            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-slate-900 border border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
            />



            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-slate-900 border border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
            />



            <input
              type="text"
              placeholder="Project Type (Website, System, App...)"
              className="w-full bg-slate-900 border border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
            />



            <textarea
              placeholder="Tell me about your project..."
              rows={5}
              className="w-full bg-slate-900 border border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
            />



            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg w-full transition"
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