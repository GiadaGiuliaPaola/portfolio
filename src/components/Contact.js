export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = 'mailto:giadatamassia@gmail.com';
  };

  return (
          <section id="contact" className="relative">
            <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
              <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                <iframe
                  width="100%"
                  height="100%"
                  title="map"
                  className="absolute inset-0"
                  frameBorder={0}
                  marginHeight={0}
                  marginWidth={0}
                  style={{ filter: "opacity(0.7)" }}
                  src="https://www.google.com/maps/embed/v1/place?q=Javastraat,+Amsterdam,+Netherlands&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                />
                <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
                  <div className="lg:w-1/2 px-6">
                    <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                      ADDRESS
                    </h2>
                    <p className="mt-1 text-white">
                      57 Javastraat <br />
                      Amsterdam, 1094 HA
                    </p>
                  </div>
                  <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                    <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                      EMAIL
                    </h2>
                    <p className="text-indigo-400 leading-relaxed">
                      giadatamassia@gmail.com
                    </p>
                    <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                      PHONE
                    </h2>
                    <p className="leading-relaxed text-white">+31 6 27130355</p>
                  </div>
                </div>
              </div>
              <form onSubmit={handleSubmit}
                netlify
                name="contact"
                className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                <h2 className= "text-center lg:text-left text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-emerald-500">
                  Contact Me
                </h2>
                <p className="leading-10 lg:text-left text-gray-600">
                  Want to have a chat?
                </p>
                <div className="relative mb-4">
                  <label htmlFor="name" className="leading-7 lg:text-left text-gray-600">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-green-300 rounded border border-green-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div className="relative mb-4">
                  <label htmlFor="email" className="leading-7 lg:text-left text-gray-600">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-green-300 rounded border border-green-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <button
                  type="submit"
                  className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded text-lg">
                  Send Me an Email!
                </button>
                <a
                  href="/Resume Giada Tamassia.pdf"
                  download="public/Giada Tamassia Full-Stack Developer.pdf"
                  className="text-white bg-indigo-500 border-0 py-2 mt-3 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded text-lg flex justify-center items-center"
                  style={{ textDecoration: "none" }}
                >
                  Download CV
                </a>
              </form>
            </div>
          </section>
        );
      }
