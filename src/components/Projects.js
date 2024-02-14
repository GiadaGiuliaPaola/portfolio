export default function Projects() { 
    return ( 
        <section id="projects"
                 className="my-20 w-full flex flex-col gap-5 align-center max-w-5xl mx-auto"> 
            <h2 className= "text-center lg:text-left text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-emerald-500"> 
                Apps I've Build 
            </h2> 
            <div className="p-10 bg-emerald-200 flex flex-col justify-center items-center 
                            gap-5 lg:flex-row max-w-5xl mx-auto shadow transition  
                            hover:shadow-xl hover:scale-[102%] w-full"> 
                <div className="w-80 rounded"> 
                    <a 
                    rel="noreferrer"
                    target="_blank"
                    href= "https://cerulean-wisp-402b3e.netlify.app" 
                        className="w-full h-full"> 
                        <img src= {process.env.PUBLIC_URL + '/wincRecipeApp.png'}
                             alt="Project 1"
                             className="w-full h-full bg-cover rounded"/> 
                    </a> 
                </div> 
                <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1"> 
                    <h2 className="font-bold text-3xl text-center text-gray-600 leading-relaxed"> 
                        <a className="hover:underline"
                           rel="noreferrer"
                           target="_blank"
                           href= "https://cerulean-wisp-402b3e.netlify.app" > 
                            Winc Recipe Checker 
                        </a> 
                    </h2> 
                    <p className="text-center lg:text-left text-gray-600 leading-relaxed"> 
                        This is a project built on react which allow you to search a recipe. 
                    </p> 
                </div> 
            </div> 

            <div className="p-10 bg-emerald-200 flex flex-col justify-center items-center gap-5  
                            lg:flex-row-reverse max-w-5xl mx-auto shadow transition hover:shadow-xl  
                            hover:scale-[102%] w-full"> 
                <div className="w-80 rounded"> 
                    <a 
                    rel="noreferrer"
                    target="_blank"href="https://phenomenal-belekoy-71e2eb.netlify.app"
                       className="w-full h-full"> 
                        <img src= {process.env.PUBLIC_URL + 'csswebsite.png'}
                             alt="Project CSS"
                             className="w-full h-full bg-cover rounded" /> 
                    </a> 
                </div> 
                <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1"> 
                    <h2 className="font-bold text-3xl text-center text-gray-600 leading-relaxed"> 
                        <a className="hover:underline" 
                        rel="noreferrer"
                        target="_blank"
                        href= "https://phenomenal-belekoy-71e2eb.netlify.app"> 
                           App Website 
                        </a> 
                    </h2> 
                    <p className="text-center lg:text-left text-gray-600 leading-relaxed"> 
                    This is a project built on HTML/ CSS which shows a responsive Website. 
                    </p> 
                </div> 
            </div> 

            {/* superpyproject */}
            <div className="p-10 bg-emerald-200 flex flex-col justify-center items-center 
                            gap-5 lg:flex-row max-w-5xl mx-auto shadow transition  
                            hover:shadow-xl hover:scale-[102%] w-full"> 
                <div className="w-80 rounded"> 
                    <a 
                    rel="noreferrer"
                    target="_blank"
                    href= "https://github.com/GiadaGiuliaPaola/super.py" 
                        className="w-full h-full"> 
                        <img src= {process.env.PUBLIC_URL + '/pythoncode.jpg'}
                             alt="Project backend python"
                             className="w-full h-full bg-cover rounded"/> 
                    </a> 
                </div> 
                <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1 lg:max-w-35px"> 
                    <h2 className="font-bold text-3xl text-center text-gray-600 leading-relaxed"> 
                        <a className="hover:underline"
                           rel="noreferrer"
                           target="_blank"
                           href= "https://github.com/GiadaGiuliaPaola/super.py" > 
                            Superpy Backend 
                        </a> 
                    </h2> 
                    <p className="text-center lg:text-left text-gray-600 leading-relaxed"> 
                        This is a project built on Python which allow you to buy and check item from a personalize command line. 
                    </p> 
                </div> 
            </div> 


            {/* bettyshop project*/}
            <div className="p-10 bg-emerald-200 flex flex-col justify-center items-center gap-5  
                            lg:flex-row-reverse max-w-5xl mx-auto shadow transition hover:shadow-xl  
                            hover:scale-[102%] w-full"> 
                <div className="w-80 rounded"> 
                    <a 
                    rel="noreferrer"
                    target="_blank"href="https://github.com/GiadaGiuliaPaola/betsy_webshop"
                       className="w-full h-full"> 
                        <img src= {process.env.PUBLIC_URL + 'bettyshop.jpg'}
                             alt="Project api"
                             className="w-full h-full bg-cover rounded" /> 
                    </a> 
                </div> 
                <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1"> 
                    <h2 className="font-bold text-3xl text-center text-gray-600 leading-relaxed"> 
                        <a className="hover:underline" 
                        rel="noreferrer"
                        target="_blank"
                        href= "https://github.com/GiadaGiuliaPaola/betsy_webshop"> 
                           Betty Shop 
                        </a> 
                    </h2> 
                    <p className="text-center lg:text-left text-gray-600 leading-relaxed"> 
                    This is a project built on Pyhon which retrive and edit data from different API. 
                    </p> 
                </div> 
            </div>

        </section> 
    ); 
}