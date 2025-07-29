"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: "About Us", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Leads", href: "#team" },
    { name: "Departments", href: "#departments" },
    { name: "Word From our 'सहारा'", href: "#feedback" },
    { name: "Join Us", href: "#join" },
  ]

  const handleNavClick = (href) => {
    if (href === "#join") {
      window.open(
        "https://docs.google.com/forms/d/e/1FAIpQLSd4ieEVJ0cCjFxN9eHzc5ZzfjBjPScTb0mAWS3hE-opi_ioDQ/viewform",
        "_blank",
      )
    } else {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
    setIsMenuOpen(false)
  }

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <header className="bg-white/10 backdrop-blur-sm shadow-sm relative z-50 border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo and Foundation Name - Left Side */}
          <div className="flex items-center space-x-4 cursor-pointer group" onClick={handleLogoClick}>
            <div className="flex-shrink-0">
              <Image
                src="/ssf logo.png"
                alt="HELPING HAND FOUNDATION"
                width={140}
                height={140}
                className="w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 object-contain group-hover:scale-105 transition-transform duration-200"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg md:text-xl lg:text-2xl font-bold text-white leading-tight">
                SEWASATHI SAHYOG FOUNDATION
              </h1>
              <p className="text-xs md:text-sm text-egg-nog font-medium italic leading-tight">
                "TOGETHER WE CAN, TOGETHER WE WILL"
              </p>
            </div>
          </div>

          {/* Desktop Navigation - Right Side */}
          <div className="flex items-center space-x-6">
            <nav className="hidden lg:flex items-center space-x-6">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="text-egg-nog hover:text-white transition-colors duration-200 cursor-pointer text-sm font-medium whitespace-nowrap"
                >
                  {item.name}
                </button>
              ))}
            </nav>

            {/* Mobile menu button */}
            <button className="lg:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Foundation Name - Shows on small screens */}
        <div className="sm:hidden pb-3">
          <h1 className="text-base font-bold text-white text-center">SEWASATHI SAHYOG FOUNDATION</h1>
          <p className="text-xs text-egg-nog font-medium italic text-center">"TOGETHER WE CAN, TOGETHER WE WILL"</p>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white/20 backdrop-blur-sm shadow-lg border-t border-white/20">
            <nav className="px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="block w-full text-left text-egg-nog hover:text-white transition-colors duration-200 py-2 font-medium"
                >
                  {item.name}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
