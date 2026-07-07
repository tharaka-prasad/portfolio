import profileImage from "../assets/profile.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-slate-950 text-white px-6"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* Left Content */}
        <div>

          <p className="text-blue-400 text-lg mb-4">
            Hello, I'm
          </p>


          <h1 className="text-5xl md:text-6xl font-bold leading-tight">

            Tharaka

            <span className="text-blue-500">
              {" "}Prasad
            </span>

            <br />

            Full Stack

            <span className="text-purple-500">
              {" "}Developer
            </span>

          </h1>



          <p className="mt-6 text-gray-400 text-lg leading-8">

            I build modern web applications and business solutions
            using Laravel, React, TypeScript and MySQL.

            <br />

            Helping businesses transform their ideas into
            secure, scalable and user-friendly digital solutions.

          </p>



          <div className="mt-8 flex flex-wrap gap-4">


            <a
              href="#contact"
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition"
            >
              Hire Me
            </a>



            <a
              href="#projects"
              className="border border-gray-600 hover:border-blue-500 px-6 py-3 rounded-lg transition"
            >
              View Projects
            </a>


          </div>



          {/* Quick Info */}
          <div className="mt-10 flex gap-8">


            <div>
              <h3 className="text-3xl font-bold text-blue-400">
                1+
              </h3>

              <p className="text-gray-400">
                Years Experience
              </p>
            </div>



            <div>
              <h3 className="text-3xl font-bold text-blue-400">
                10+
              </h3>

              <p className="text-gray-400">
                Projects
              </p>
            </div>



            <div>
              <h3 className="text-3xl font-bold text-blue-400">
                100%
              </h3>

              <p className="text-gray-400">
                Commitment
              </p>
            </div>


          </div>


        </div>





        
        <div className="flex justify-center">


          <div
            className="
            w-72 h-72 
            md:w-96 md:h-96
            rounded-full
            bg-linear-to-r 
            from-blue-600 
            to-purple-600
            p-2
            animate-pulse
            "
          >


            <div
              className="
              w-full
              h-full
              rounded-full
              overflow-hidden
              bg-slate-900
              border-4
              border-slate-800
              "
            >


              <img
                src={profileImage}
                alt="Tharaka Prasad - Full Stack Developer"
                className="
                w-full
                h-full
                object-cover
                "
              />


            </div>


          </div>


        </div>


      </div>
    </section>
  );
};


export default Hero;