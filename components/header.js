"use client"

import { useState } from "react"
import { Menu, X, UserPlus } from "lucide-react"
import Image from "next/image"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Departments", href: "#departments" },
    { name: "Projects", href: "#projects" },
    { name: "Events", href: "#events" },
    { name: "Team", href: "#team" },
    { name: "Word From our सहारा", href: "#feedback" },
  ]

  const handleNavClick = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const handleJoinUsClick = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSd4ieEVJ0cCjFxN9eHzc5ZzfjBjPScTb0mAWS3hE-opi_ioDQ/viewform",
      "_blank",
    )
  }

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <header className="bg-white shadow-sm relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo and Foundation Name - Left Side */}
          <div className="flex items-center space-x-4 cursor-pointer group" onClick={handleLogoClick}>
            <div className="flex-shrink-0">
              <Image
                src="/images/helping-hand-logo.png"
                alt="HELPING HAND FOUNDATION"
                width={120}
                height={120}
                className="w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 object-contain group-hover:scale-105 transition-transform duration-200"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 leading-tight">
                HELPING HAND FOUNDATION
              </h1>
              <p className="text-xs md:text-sm text-copper font-medium italic leading-tight">
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
                  className="text-gray-700 hover:text-copper transition-colors duration-200 cursor-pointer text-sm font-medium whitespace-nowrap"
                >
                  {item.name}
                </button>
              ))}
            </nav>

            {/* Join Us Button */}
            <button
              onClick={handleJoinUsClick}
              className="hidden md:flex items-center space-x-2 bg-copper hover:bg-garnet text-white px-4 py-2 rounded-lg transition-colors duration-200 font-medium"
            >
              <UserPlus size={18} />
              <span>Join Us</span>
            </button>

            {/* Mobile menu button */}
            <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Foundation Name - Shows on small screens */}
        <div className="sm:hidden pb-3">
          <h1 className="text-base font-bold text-gray-900 text-center">HELPING HAND FOUNDATION</h1>
          <p className="text-xs text-copper font-medium italic text-center">"TOGETHER WE CAN, TOGETHER WE WILL"</p>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t">
            <nav className="px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="block w-full text-left text-gray-700 hover:text-copper transition-colors duration-200 py-2 font-medium"
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={handleJoinUsClick}
                className="flex items-center space-x-2 bg-copper hover:bg-garnet text-white px-4 py-2 rounded-lg transition-colors duration-200 font-medium w-full justify-center"
              >
                <UserPlus size={18} />
                <span>Join Us</span>
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
