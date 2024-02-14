import React, { useState, useEffect } from "react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isNavbarVisible, setIsNavbarVisible] = useState(true);

    const handleToggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleScroll = () => {
        const scrollPosition = window.scrollY;

        // Adjust the value (e.g., 100) to control when the navbar disappears on scroll
        setIsNavbarVisible(scrollPosition < 100);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav className={`w-full px-5 sm:px-10 py-3 sm:py-5 shadow-xl backdrop-blur-lg fixed top-0 z-10 bg-emerald-200 ${isNavbarVisible ? "visible" : "invisible"}`}>
            <div className="container flex justify-between items-center max-w-5xl mx-auto">
                <div className="lg:hidden cursor-pointer" onClick={handleToggleMenu}>
                    {/* Hamburger icon for mobile */}
                    <div className="w-6 h-1 bg-emerald-700 mb-1"></div>
                    <div className="w-6 h-1 bg-emerald-700 mb-1"></div>
                    <div className="w-6 h-1 bg-emerald-700"></div>
                </div>
                <ul className={`lg:flex gap-3 items-center p-1 flex-wrap ${isMenuOpen ? "flex" : "hidden"}`}>
                    <li>
                        <a
                            className="text-sm sm:text-base px-2 lg:px-5 py-2 transition rounded hover:text-white hover:bg-emerald-500"
                            href="#about"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            className="text-sm sm:text-base px-2 lg:px-5 py-2 transition rounded hover:text-white hover:bg-emerald-500"
                            href="#skills"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Skills
                        </a>
                    </li>
                    <li>
                        <a
                            className="text-sm sm:text-base px-2 lg:px-5 py-2 transition rounded hover:text-white hover:bg-emerald-500"
                            href="#projects"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Projects
                        </a>
                    </li>
                    <li>
                        <a
                            className="text-sm sm:text-base px-2 lg:px-5 py-2 transition rounded hover:text-white hover:bg-emerald-500"
                            href="#contact"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}


// export default function Navbar() { 
//     return ( 
//         <nav className="w-full px-5 sm:px-10 py-5 shadow-xl  
//                         backdrop-blur-lg fixed top-0 z-10"> 
//             <div className="container flex flex-col lg:flex-row 
//                             gap-5 justify-between w-full  
//                             items-center max-w-5xl mx-auto"> 
//                 <ul className="flex gap-3 align-center p-1 flex-wrap"> 
//                     <li> 
//                         <a className="text-sm sm:text-base px-2 lg:px-5  
//                                       py-2 transition rounded hover:text-white  
//                                       hover:bg-emerald-600"
//                            href="#about"> 
//                         About 
//                         </a> 
//                     </li> 
//                     <li> 
//                         <a className="text-sm sm:text-base px-2 lg:px-5 py-2  
//                                       transition rounded hover:text-white  
//                                       hover:bg-emerald-600"
//                             href="#skills"> 
//                             Skills 
//                         </a> 
//                     </li> 
//                     <li> 
//                         <a className="text-sm sm:text-base px-2 lg:px-5 py-2  
//                                       transition rounded hover:text-white  
//                                       hover:bg-emerald-600"
//                             href="#projects"> 
//                             Projects 
//                         </a> 
//                     </li> 
//                     <li> 
//                         <a className="text-sm sm:text-base px-2 lg:px-5 py-2  
//                                       transition rounded hover:text-white  
//                                       hover:bg-emerald-600"
//                             href="#contact"> 
//                             Contact 
//                         </a> 
//                     </li> 
//                 </ul> 
//             </div> 
//         </nav> 
//     ); 
// }
