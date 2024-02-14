export default function Footer() { 
    return ( 
        <section className="p-5 lg:p-10 bg-emerald-200 flex flex-col items-center lg:justify-center"> 
            <div className="flex flex-col items-center lg:flex-row lg:gap-5"> 

            <a
                rel="noreferrer"
                target="_blank"
                href="https://www.linkedin.com/in/giada-tamassia-ba3437114/">
            <img
            src={process.env.PUBLIC_URL + '/Linkedin-logo.png'}
            alt="Linkedin logo"
            className="block mx-auto max-w-24"
            />
            </a>

            <a
                rel="noreferrer"
                target="_blank"
                href="https://github.com/GiadaGiuliaPaola">
            <img
            src={process.env.PUBLIC_URL + '/github.png'}
            alt="Github logo"
            className="block mx-auto max-w-24"
            />
            </a> 
        </div>  
        </section> 
    ); 
}