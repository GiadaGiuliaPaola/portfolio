import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="px-10 w-full flex flex-col lg:flex-row py-20 align-center bg-emerald-200 max-w-5xl mx-auto"
    >
      <div className="flex-1">
        <img
          src={process.env.PUBLIC_URL + "/myImage.jpg"}
          alt="About"
          className="w-full h-full rounded bg-cover"
        />
      </div>
      <div className="flex-1 flex flex-col justify-center items-center lg:items-start gap-5 px-6">
        <div>
          <h2 className="text-center lg:text-left text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-emerald-500">
            About Me
          </h2>
        </div>
        <p className="text-center lg:text-left text-gray-600 leading-relaxed">
          Ciao! 🇮🇹 Calling from the canals of Amsterdam! 🌷 I'm a full-stack
          developer who loves crafting innovative solutions and exploring new
          cities. Wanna chat tech or travel? Hit me up!
        </p>
        <p className="text-center lg:text-left text-gray-600 leading-relaxed">
          Beyond the code, you'll find me practicing yoga flows or embracing the
          serenity of Amsterdam's parks. Who says you can't balance coding and a
          mindful lifestyle? I'm passionate about crafting elegant solutions to
          complex problems, and a firm believer in life's simple pleasures, like
          delicious food (because life is best enjoyed that way!). Join me on
          this journey as I code, master Dutch, and find my balance in life's
          ever-evolving dance. Namaste and happy coding!
        </p>
      </div>
    </section>
  );
}
