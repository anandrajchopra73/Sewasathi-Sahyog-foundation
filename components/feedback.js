"use client"

import { useState, useEffect } from "react"
import { Star, Quote, ChevronLeft, ChevronRight, User } from "lucide-react"

export default function Feedback() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const feedbackItems = [
    {
      name: "Maria Rodriguez",
      role: "Parent",
      location: "Rural Community School",
      rating: 5,
      feedback:
        "HELPING HAND FOUNDATION transformed my daughter's education. The mobile learning lab brought computers and internet to our remote village for the first time. Now she dreams of becoming a software engineer!",
      date: "March 2024",
    },
    {
      name: "James Thompson",
      role: "Teacher",
      location: "Community Education Center",
      rating: 5,
      feedback:
        "The teacher training program completely changed how I approach education. The modern teaching methods and resources they provided have made learning so much more engaging for my students.",
      date: "February 2024",
    },
    {
      name: "Dr. Sarah Kim",
      role: "Healthcare Partner",
      location: "Regional Health Clinic",
      rating: 5,
      feedback:
        "Working with HELPING HAND FOUNDATION on integrated health and education services has been incredible. Their holistic approach truly addresses the root causes of community challenges.",
      date: "January 2024",
    },
    {
      name: "Ahmed Hassan",
      role: "Adult Learner",
      location: "Digital Literacy Program",
      rating: 5,
      feedback:
        "At 45, I never thought I'd learn to use a computer. The digital literacy program was patient, supportive, and now I can help my children with their homework and even apply for jobs online.",
      date: "March 2024",
    },
    {
      name: "Lisa Chen",
      role: "Volunteer",
      location: "Education Outreach",
      rating: 5,
      feedback:
        "Volunteering with HELPING HAND FOUNDATION has been the most rewarding experience. Seeing the direct impact of our work on children's lives motivates me every day. The organization is well-managed and truly makes a difference.",
      date: "February 2024",
    },
    {
      name: "Robert Williams",
      role: "Community Leader",
      location: "Village Development Committee",
      rating: 5,
      feedback:
        "HELPING HAND FOUNDATION doesn't just provide services - they empower communities. They worked with us to identify our needs and built sustainable programs that continue to benefit our village long after their initial intervention.",
      date: "January 2024",
    },
  ]

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % feedbackItems.length)
    }, 6000) // Change slide every 6 seconds

    return () => clearInterval(interval)
  }, [isAutoPlaying, feedbackItems.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % feedbackItems.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + feedbackItems.length) % feedbackItems.length)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
  }

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star key={index} size={20} className={index < rating ? "text-egg-nog fill-current" : "text-white/30"} />
    ))
  }

  return (
    <section id="feedback" className="py-20 bg-white/10 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Community Feedback</h2>
          <p className="text-lg text-egg-nog max-w-3xl mx-auto">
            Hear from the people whose lives have been touched by HELPING HAND FOUNDATION. These testimonials reflect
            the real impact of our work in communities around the world.
          </p>
        </div>
        {/* Main Feedback Slider */}
        <div className="relative mb-16">
          <div className="relative overflow-hidden rounded-lg bg-white/20 backdrop-blur-sm border border-white/20">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {feedbackItems.map((item, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="p-8 md:p-12">
                    {/* Quote Icon */}
                    <div className="text-center mb-8">
                      <Quote className="mx-auto text-egg-nog/40" size={48} />
                    </div>

                    {/* Main Feedback Content */}
                    <div className="max-w-4xl mx-auto text-center">
                      {/* Rating Stars */}
                      <div className="flex justify-center items-center space-x-1 mb-6">{renderStars(item.rating)}</div>

                      {/* Feedback Text */}
                      <blockquote className="text-xl md:text-2xl text-egg-nog leading-relaxed mb-8 italic">
                        "{item.feedback}"
                      </blockquote>

                      {/* Author Information */}
                      <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
                        {/* Avatar */}
                        <div className="relative">
                          <div className="w-16 h-16 bg-gradient-to-br from-egg-nog/30 to-mustard/30 rounded-full flex items-center justify-center border-2 border-white/30">
                            <User size={24} className="text-white" />
                          </div>
                        </div>

                        {/* Author Details */}
                        <div className="text-center md:text-left">
                          <h4 className="text-xl font-semibold text-white mb-1">{item.name}</h4>
                          <p className="text-egg-nog font-medium">{item.role}</p>
                          <p className="text-egg-nog/80 text-sm">{item.location}</p>
                          <p className="text-egg-nog/60 text-xs mt-1">{item.date}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-colors duration-200 border border-white/30"
            aria-label="Previous feedback"
          >
            <ChevronLeft size={24} className="text-white" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-colors duration-200 border border-white/30"
            aria-label="Next feedback"
          >
            <ChevronRight size={24} className="text-white" />
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center space-x-2 mb-8">
          {feedbackItems.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                index === currentSlide ? "bg-white" : "bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Go to feedback ${index + 1}`}
            />
          ))}
        </div>

        {/* Auto-play Control */}
        <div className="text-center mb-12">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="text-egg-nog hover:text-white transition-colors duration-200 text-sm"
          >
            {isAutoPlaying ? "Pause Auto-play" : "Resume Auto-play"}
          </button>
        </div>
        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-8 border border-white/20">
            <h3 className="text-2xl font-semibold text-white mb-4">Share Your Experience</h3>
            <p className="text-egg-nog mb-6 max-w-2xl mx-auto">
              Have you been impacted by our work? We'd love to hear your story and share how HELPING HAND FOUNDATION has
              made a difference in your life or community.
            </p>
            <button
              onClick={() =>
                window.open(
                  "https://docs.google.com/forms/d/e/1FAIpQLSd4ieEVJ0cCjFxN9eHzc5ZzfjBjPScTb0mAWS3hE-opi_ioDQ/viewform",
                  "_blank",
                )
              }
              className="bg-white/30 hover:bg-white/40 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 border border-white/40"
            >
              Share Your Feedback
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
