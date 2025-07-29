"use client"

import { useState, useEffect } from "react"
import { Star, Quote, ChevronLeft, ChevronRight, User } from "lucide-react"

export default function Feedback() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const feedbackItems = [
    {
      name: "Lakshita Sharma",
      role: "Volunteer",
      location: "",
      rating: 5,
      feedback:
        "HELPING HAND FOUNDATION transformed my daughter's education. The mobile learning lab brought computers and internet to our remote village for the first time. Now she dreams of becoming a software engineer!Being part of the NGOs social media team has been incredibly fulfilling .Sharing real stories emotions and the impact of our work online feels powerful- but nothing compares to witnessing it in person. Joining the recent drive and seeing the smiles first hand reminded me the why we do what we do.  It's more than posters and reels- it's real lives, real change.",
      date: "",
    },
    {
      name: "Jaanvi",
      role: "Volunteer",
      location: "",
      rating: 5,
      feedback:
        "I'm delighted to be a part of this revolutionary space. My fellows here are truly passionate about bringing about a change. From amicable people to various opportunities, the Helping Hand Foundation Helps in fostering a healthy environment not only for the ones in need but for us as human beings too. I feel like not only an aid to the society but a friend to those who have suffered for great causes.",
      date: "",
    },
    {
      name: "Khushi Vats",
      role: "Volunteer",
      location: "",
      rating: 5,
      feedback:
        "I just joined Helping Hand Life yesterday. I already feel welcomed and inspired. Even in this short time, I can sense the positive energy and dedication of everyone involved. I’m really excited to be part of a team that is making a real difference. I look forward to learning, growing, and contributing in any way I can!",
      date: "",
    },
    {
      name: "Mehar",
      role: "Volunteer",
      location: "",
      rating: 5,
      feedback:
        "Being a part of Helping Hand Foundation has been such a great experience. Everyone here is super kind, helpful, and always ready to support each other. The work environment is really positive and focused, which makes it fun to be involved. I also got to attend one of their offline drives, it was honestly such an overwhelming moment. It just feels really nice to be doing something meaningful for society with such an amazing team.",
      date: "",
    },
    {
      name: "Dhriti",
      role: "Volunteer",
      location: "",
      rating: 5,
      feedback:
        "Working with Helping Hand Foundation NGO has been a truly an enriching experience. It gave me the opportunity to contribute meaningfully to society while learning the value of compassion, teamwork, and responsibility. I gained hands-on experience in recruitment, onboarding, volunteer coordination, and internal communication. I got to interact with passionate volunteers, support team members, and help build a positive, welcoming environment. I learned a lot about communication, organizing stuff, and handling situations calmly. The friendly team made it easy to grow and learn. I’m really grateful for everything I learned and the memories I am creating as well as created while being part of this journey.",
      date: "",
    },
    {
      name: "Kaavya",
      role: "Volunteer",
      location: "",
      rating: 5,
      feedback:
        "Working with Helping Hand Life has been an incredible experience. It’s not just about volunteering, it’s about joining a community that genuinely cares. Every project we work on brings joy to others and helps us grow as individuals. I’ve learned the value of teamwork, empathy, and taking action. I’m so grateful to be part of such a meaningful journey.",
      date: "",
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Word From our "सहारा"</h2>
          <p className="text-lg text-egg-nog max-w-3xl mx-auto">
            Hear from the people whose lives have been touched by SEWASATHI SAHYOG FOUNDATION. These testimonials reflect
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
            <h3 className="text-2xl font-semibold text-white mb-4">Join Us</h3>
            <p className="text-egg-nog mb-6 max-w-2xl mx-auto">
                  Our mission is centered around addressing critical social issues and contributing to the betterment of communities. We are committed to empowering individuals, particularly those who are underserved or vulnerable, by providing vital support and resources to help improve their quality of life.
                  We appreciate your interest in volunteering with us.
            </p>
            <button
              onClick={() =>
                window.open(
                  "https://docs.google.com/forms/d/e/1FAIpQLScM63aZDBGmjPn1qo_rDan2QTzy792iUUUbVXrm5VTYrjgMXw/viewform",
                  "_blank",
                )
              }
              className="bg-white/30 hover:bg-white/40 text-white font-bold py-3 px-8 rounded-2Xl transition-colors duration-200 border border-white/40"
            >
               "सहारा" बनो
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
