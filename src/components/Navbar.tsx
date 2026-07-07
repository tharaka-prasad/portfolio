const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-slate-900/80 backdrop-blur-md">
            <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

                <h1 className="text-2xl font-bold text-white">
                    TP Digital Solutions
                </h1>

                <div className="hidden md:flex gap-8 text-gray-300">
                    <a href="#home" className="hover:text-blue-400">
                        Home
                    </a>

                    <a href="#services" className="hover:text-blue-400">
                        Services
                    </a>

                    <a href="#projects" className="hover:text-blue-400">
                        Projects
                    </a>

                    <a href="#contact" className="hover:text-blue-400">
                        Contact
                    </a>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;