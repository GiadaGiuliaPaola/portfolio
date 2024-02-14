import React from "react";

export default function About() {
    return (
        <section
            id="about"
            className="px-10 w-full flex flex-col lg:flex-row py-20 align-center bg-emerald-200 max-w-5xl mx-auto"
        >
            <div className="flex-1">
                <img
                    src={process.env.PUBLIC_URL + '/myImage.jpg'}
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
                    Ciao amici! 👋 I'm your full-stack developer straight from the heart of Italy, now exploring the canals in the charming city of Amsterdam! 🌷
                </p>
                <p className="text-center lg:text-left text-gray-600 leading-relaxed">
                    Outside the tech world, you can catch me striking a pose in a yoga studio or finding my Zen under a tree of Amsterdam's picturesque parks. Who says you can't balance coding and downward dog? I have a deep passion for turning complex problems into elegant solutions, and I am a proud connoisseur of the finest pasta and gelato - because life is too short for bad food! Join me on this coding adventure as I master my Dutch and Javascript, debug the twists and turns of code, and find my center in the dynamic dance of life. Namaste and happy coding! 🧘‍♂️💻
                </p>
            </div>
        </section>
    );
}