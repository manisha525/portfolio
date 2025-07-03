"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);


  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#qualification", label: "Qualification" },
    { href: "#services", label: "Services" },
    { href: "#contact", label: "Contact" },
    
  ];

  // Update `isMobile` state based on window width
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) setIsOpen(false); // close dropdown on desktop
    };

    checkScreenSize(); // initial check
    window.addEventListener("resize", checkScreenSize);
    setHasMounted(true); /* mark as mounted */
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);
  
  if (!hasMounted) return null;

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md fixed top-0 w-full z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-600 whitespace-nowrap">
          Manisha Shah
        </Link>

        {/* Desktop Nav */}
        {!isMobile && (
          <div className="flex gap-6 text-lg font-medium text-gray-800 dark:text-gray-200">
            {navItems.map(({ href, label }) => (
              <a key={href} href={href} className="hover:text-blue-600 transition">
                {label}
              </a>
            ))}
            
          </div>
        )}

        {/* Hamburger Icon */}
        {isMobile && (
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <FiX size={30} /> : <FiMenu size={30} />}
          </button>
        )}
      </div>

      {/* Mobile Dropdown */}
      {isMobile && isOpen && (
        <div className="text-lg bg-white dark:bg-gray-900 shadow-md px-6 pt-2 pb-4 space-y-2 text-gray-800 dark:text-gray-200">
          {navItems.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="block border-b border-gray-100 py-2 hover:text-blue-600 transition"
              onClick={() => setIsOpen(false)}
            >
              {label}
            </a>
          ))}
          
        </div>
      )}
    </nav>
  );          
}

