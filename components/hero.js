"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const slides = [
    {
      image: "/images/community-outreach-hero.jpg",
      title: "SEWASATHI SAHYOG FOUNDATION",
      subtitle: "Empowering Communities Through Direct Action",
      description:
        "Witness our volunteers in action as we bring education and healthcare directly to the communities that need it most.",
    },
    {
      image: "/bg silde.jpg",
      title: "SEWASATHI SAHYOG FOUNDATION",
      subtitle: "Together We Can, Together We Will",
      description:
        "Join us in our mission to create lasting change through education, healthcare, and community support.",
    },
    {
      image: "/bg4.jpg?height=800&width=1200",
      title: "SEWASATHI SAHYOG FOUNDATION",
      subtitle: "Building Bridges to Better Futures",
      description:
        "Every contribution makes a difference in transforming lives and strengthening communities across India.",
    },
  ]

  // Auto-play functionality - runs continuously
  useEffect(() => {
    const interval = setInterval(() => {
      if (isAutoPlaying) {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
      }
    }, 4000) // Change slide every 4 seconds

    return () => clearInterval(interval)
  }, [isAutoPlaying, slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    // Temporarily pause auto-play when user manually navigates
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 8000) // Resume after 8 seconds
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    // Temporarily pause auto-play when user manually navigates
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 8000) // Resume after 8 seconds
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
    // Temporarily pause auto-play when user manually navigates
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 8000) // Resume after 8 seconds
  }

  const handleDonateClick = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSd4ieEVJ0cCjFxN9eHzc5ZzfjBjPScTb0mAWS3hE-opi_ioDQ/viewform",
      "_blank",
    )
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Slider Container */}
      <div className="absolute inset-0">
        <div
          className="flex h-full transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="w-full h-full flex-shrink-0 relative">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `linear-gradient(rgba(30, 50, 38, 0.7), rgba(30, 50, 38, 0.5)), url('${slide.image}')`,
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-4 transition-all duration-200 border border-white/30 z-20 group"
        aria-label="Previous slide"
      >
        <ChevronLeft size={28} className="text-white group-hover:scale-110 transition-transform duration-200" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-4 transition-all duration-200 border border-white/30 z-20 group"
        aria-label="Next slide"
      >
        <ChevronRight size={28} className="text-white group-hover:scale-110 transition-transform duration-200" />
      </button>

      {/* Content Overlay */}
      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
        <div className="transition-all duration-700 ease-in-out">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {slides[currentSlide].title}
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-6 text-egg-nog">
            {slides[currentSlide].subtitle}
          </h2>
          <p className="text-lg md:text-xl mb-12 text-egg-nog/90 max-w-3xl mx-auto leading-relaxed">
            {slides[currentSlide].description}
          </p>
        </div>

        {/* Call to Action */}
        <div className="bg-white/90 backdrop-blur-sm rounded-lg p-8 md:p-12 max-w-2xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-semibold text-copper mb-6">Take action to help society grow</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={handleDonateClick}
              className="bg-copper hover:bg-garnet text-white font-semibold py-4 px-8 rounded-lg text-lg transition-colors duration-200 transform hover:scale-105"
            >
              DONATE NOW
            </button>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-white scale-110" : "bg-white/50 hover:bg-white/70 hover:scale-105"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Auto-play Control */}
      <div className="absolute bottom-8 right-8 z-20">
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm transition-colors duration-200 border border-white/30"
        >
          {isAutoPlaying ? "⏸️ Pause" : "▶️ Play"}
        </button>
      </div>

      {/* Slide Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-20">
        <div
          className="h-full bg-white transition-all duration-300"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>

      {/* Auto-play Status Indicator */}
      {isAutoPlaying && (
        <div className="absolute top-8 right-8 z-20">
          <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-white text-xs border border-white/30">
            Auto-playing
          </div>
        </div>
      )}
    </section>
  )
}
