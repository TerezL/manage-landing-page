import { useState } from "react"; 
import menu from "/public/assets/icon-hamburger.svg";
import close from "/public/assets/icon-close.svg";
import logo from "/public/assets/logo.svg";


function Navbar({ links = [] }) { 

const [isOpen, setIsOpen] = useState(false);

const defaultLinks = [ { name: "Pricing", href: "#" }, 
    { name: "Product", href: "#" }, 
    { name: "About Us", href: "#" }, 
    { name: "Careers", href: "#" },
{ name: "Community", href: "#" }, ];

const navLinks = links.length ? links : defaultLinks;

return ( 
    <>
<nav className="w-full bg-transparent"> 
{isOpen && (
    <div className="fixed inset-0 bg-black/20 transition-opacity duration-300 z-40" onClick={() => setIsOpen(false)} />
)}
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> 
<div className="flex justify-between h-16 items-center"> 
<img src={logo} alt="logo" />

{/* Desktop Menu */}
      <div className="hidden md:flex space-x-6">
        {navLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="text-gray-700 hover:text-gray-400 transition"
          >
            {link.name}
          </a>
        ))}
        
      </div>
<div className="hidden md:flex">
    <button className="bg-orange-400 px-5 py-3 rounded-4xl shadow-lg shadow-orange-400/50 text-white text-sm cursor-pointer hover:bg-orange-300">Get Started</button>
</div>
      {/* Mobile Button */}
      <button
        className="md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img src={isOpen ? close : menu} alt="menu" className="w-6 h-6" />
      </button>
    </div>
  </div>

  {/* Mobile Menu */}
  <div
    className={`md:hidden fixed w-full top-16 left-0 z-50 transition-all duration-300 ease-in-out overflow-hidden ${
      isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
    }`}
  >
    <div className="bg-white w-[90%] flex flex-col items-center justify-center mx-auto p-8 space-y-3">
      {navLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          className="block font-bold text-gray-700 hover:text-black"
          onClick={() => setIsOpen(false)}
        >
          {link.name}
        </a>
      ))}
    </div>
  </div>
</nav>
</>
); }

export default Navbar

/* USAGE:

<Navbar links={[ { name: "Home", href: "/" }, { name: "Portfolio", href: "/portfolio" }, { name: "Contact", href: "/contact" }, ]} />

NOTES:

Uses Tailwind breakpoints (md = tablet/desktop)

Easily reusable via "links" prop

Mobile menu animated via max-height

Replace "Logo" with your own component/image */