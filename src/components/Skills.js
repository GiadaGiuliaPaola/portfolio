import Marquee from "react-fast-marquee";

export default function Skills() {
    const skills = ["Python", "HTML", "CSS", "Javascript", "React", "Node.Js", "Typescript", "Flask", "MySQL", "Git", "Github"];

    return (
        <section id="skills" className="px-4 sm:px-6 lg:px-10 w-full my-40 max-w-5xl mx-auto">
            <h2 className="text-center text-6xl text-emerald-500 font-bold">
                My Skills
            </h2>
            <div className="skillsContainer">
                <Marquee
                    gradient={false}
                    speed={80}
                    pauseOnHover={true}
                    pauseOnClick={true}
                    delay={0}
                    play={true}
                    direction="left"
                >
                    <div className="mt-10 flex gap-5 justify-start items-center overflow-x-auto max-w-full">
                        {skills.map((skill, index) => (
                            <div key={index} className="cursor-pointer px-8 py-6 rounded-lg bg-gradient-to-r from-emerald-300 to-emerald-500 text-white text-base sm:text-lg lg:text-xl flex items-center justify-center font-semibold hover:shadow-md transform hover:scale-105 transition duration-300">
                                {skill}
                            </div>
                        ))}
                    <div className="px-8"></div>
                    </div>
                </Marquee>
            </div>
        </section>
    );
}
