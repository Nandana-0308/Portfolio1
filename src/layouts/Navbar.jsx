import React, { useState,useEffect } from 'react'
import Button from '../components/Button'
import { Menu, X } from 'lucide-react';


const navLinks = [
    { ref: "#about", label: "about" },
    { ref: "#skills", label: "skills" },
    { ref: "#projects", label: "projects" },
    { ref: "#achivments", label: "achivments" },
]

const Navbar = () => {

    
 // Add scroll logic
const [showNavbar, setShowNavbar] = useState(true);
const [lastScrollY, setLastScrollY] = useState(0);
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY) {
                // scrolling down
                setShowNavbar(false);
            } else {
                // scrolling up
                setShowNavbar(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);
   

    // for mobile width -- the menus will be intoa div 
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    return (
        <header
            className={`
                fixed top-0 left-0 right-0 z-50
                transition-all duration-500
                ${showNavbar ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}
            `}
        >
            <nav className="max-w-6xl mx-auto flex items-center justify-between py-4 px-4">

                {/* Logo */}
                <a href="#" className="text-white text-lg font-semibold tracking-wide">
                    Logo
                </a>

                {/* Nav Links */}
                <div className=" hidden sm:flex
          flex items-center gap-2 
          rounded-full px-3 py-2
          bg-white/5 backdrop-blur-md
          border border-white/10
        ">
                    {navLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.ref}
                            className="
                px-4 py-2 text-sm text-white rounded-full
                transition-all duration-300
                hover:bg-white/10
                hover:text-[var(--color-primary)]
                focus:outline-none
                focus:ring-2
                focus:ring-[var(--color-primary)]
                
                transition-all duration-300 ease-in-out

                hover:scale-105
                hover:shadow-[0_0_10px_#00C2FF]
              "
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* Button - contact me*/}
                <div className='hidden sm:block '>
                    <Button buttonName="Contact Me" size='sm' />
                </div>


                <button
                    className="sm:hidden p-2 text-color6 relative w-8 h-8 cursor-pointer"
                    onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                >
                    {/* Menu Icon */}
                    <span
                        className={`
                    absolute inset-0 flex items-center justify-center
                    transition-all duration-300
                    ${isMobileMenuOpen ? "opacity-0 rotate-90 scale-100" : "opacity-100 rotate-0 scale-100"}
                    `}
                    >
                        <Menu size="25" />
                    </span>

                    {/* Close Icon */}
                    <span
                        className={`
                    absolute inset-0 flex items-center justify-center
                    transition-all duration-300
                    ${isMobileMenuOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-75"}
                    `}
                    >
                        <X size="25" />
                    </span>
                </button>
            </nav>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (<div className='sm:hidden glass animate-fade-in'>
                <div className='container mx-auto px-5 py-5 flex flex-col gap-2 
                
                '>
                    {navLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.ref}
                            className="
                px-4 py-2 text-sm text-white rounded-full
                transition-all duration-300
                hover:bg-white/10
                hover:text-[var(--color-primary)]
                
                focus:ring-1
                focus:ring-[var(--color-primary)]
                
                transition-all duration-300 ease-in-out

                hover:scale-105
                hover:shadow-[0_0_10px_#00C2FF]
              ">
                            {link.label}
                        </a>

                    ))}
                </div>

                {/* Button - contact me*/}
                <div className='px-5 py-2 '>
                    <Button buttonName="Contact Me" size='sm' />
                </div>


            </div>)}

        </header>
    )
}

export default Navbar