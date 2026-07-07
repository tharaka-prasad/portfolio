const About = () => {
    return (
        <section
            id="about"
            className="min-h-screen bg-slate-900 text-white px-6 py-20"
        >
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                {/* Left Content */}
                <div>

                    <p className="text-blue-400">
                        About Me
                    </p>

                    <h2 className="text-4xl font-bold mt-3">
                        Full Stack Developer
                    </h2>


                    <p className="text-gray-400 mt-6 leading-8">
                        I'm Tharaka Prasad, a Full Stack Developer specializing
                        in Laravel, React, JavaScript, and MySQL. I build modern,
                        scalable and secure web applications that help businesses
                        improve their daily operations.
                    </p>


                    <p className="text-gray-400 mt-4 leading-8">
                        I have experience developing business systems including
                        POS, ERP, CRM applications, REST APIs and custom web
                        solutions. I also have experience in Linux server
                        management, cloud storage integration and IoT-based
                        applications.
                    </p>


                    <a
                        href="/Tharaka_Prasad_CV.pdf"
                        download
                        className="inline-block mt-8 bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 transition"
                    >
                        Download CV
                    </a> 

                </div>



                {/* Right Content */}
                <div className="bg-slate-800 rounded-xl p-8">

                    <div className="space-y-6">


                        <div>
                            <h3 className="font-semibold text-xl">
                                Experience
                            </h3>

                            <p className="text-gray-400 mt-2">
                                Full Stack Developer Associate
                                <br />
                                Sky Smart Technology Private Limited
                                <br />
                                January 2025 - July 2025
                            </p>

                        </div>



                        <div>
                            <h3 className="font-semibold text-xl">
                                Backend Development
                            </h3>

                            <p className="text-gray-400 mt-2">
                                Laravel, PHP, REST API Development,
                                MySQL Database Design and Optimization
                            </p>

                        </div>



                        <div>
                            <h3 className="font-semibold text-xl">
                                Frontend Development
                            </h3>

                            <p className="text-gray-400 mt-2">
                                React, TypeScript, JavaScript,
                                Tailwind CSS, Responsive UI Development
                            </p>

                        </div>



                        <div>
                            <h3 className="font-semibold text-xl">
                                Infrastructure & Others
                            </h3>

                            <p className="text-gray-400 mt-2">
                                Linux Server Management, Git,
                                Google Cloud Storage, IoT Systems,
                                Networking (CCNA)
                            </p>

                        </div>


                    </div>

                </div>


            </div>
        </section>
    );
};

export default About;