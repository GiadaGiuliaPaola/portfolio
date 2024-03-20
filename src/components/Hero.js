import React from "react";

export default function Hero() {
  return (
      <section
          id="hero"
          className="px-6 md:px-8 lg:px-12 xl:px-16 w-full flex flex-col lg:flex-row justify-center items-center align-center mt-20 lg:mt-10 mb-16 lg:mb-20 max-w-5xl mx-auto h-[80vh]"
      >
          <div className="flex-1 flex flex-col justify-center items-center lg:items-start gap-6">
              <div>
                  <h4 className="text-center lg:text-left text-2xl md:text-2xl lg:text-4xl xl:text-4xl font-mono text-emerald-500">
                  {'<'}HelloWorld /{'>'}
                  </h4>
                  <h2 className="text-center lg:text-left text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-emerald-500">
                      I am Giada!
                  </h2>
              </div>
              <p className="text-center lg:text-left text-gray-600 leading-relaxed">
                  Welcome to my portfolio! I'm a passionate FullStack Developer. Explore my projects and learn more about my skills and experiences.
              </p>
          </div>
          <div className="flex-1">
              <img
                  src={process.env.PUBLIC_URL + '/wanakame.jpg'}
                  alt="Author Foto"
                  className="w-64 h-64 md:w-80  md:h-80 lg:w-96 lg:h-96 rounded-full object-cover shadow-2xl"
              />
          </div>
      </section>
  );
}
