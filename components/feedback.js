"use client"

import { Star, Quote } from "lucide-react"

export default function Feedback() {
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

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star key={index} size={16} className={index < rating ? "text-mustard fill-current" : "text-gray-300"} />
    ))
  }

  return (
    <section id="feedback" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Community Feedback</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hear from the people whose lives have been touched by HELPING HAND FOUNDATION. These testimonials reflect
            the real impact of our work in communities around the world.
          </p>
        </div>

        {/* Feedback Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-copper mb-2">500+</div>
            <div className="text-gray-600">Families Served</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-copper mb-2">98%</div>
            <div className="text-gray-600">Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-copper mb-2">50+</div>
            <div className="text-gray-600">Communities Reached</div>
          </div>
        </div>

        {/* Feedback Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {feedbackItems.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-6 hover:bg-egg-nog/50 transition-colors duration-200 relative"
            >
              <Quote className="absolute top-4 right-4 text-copper/20" size={32} />

              <div className="mb-4">
                <div className="flex items-center space-x-1 mb-2">{renderStars(item.rating)}</div>
                <p className="text-gray-700 leading-relaxed mb-4">"{item.feedback}"</p>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold text-gray-900">{item.name}</h4>
                    <p className="text-sm text-copper font-medium">{item.role}</p>
                    <p className="text-sm text-gray-500">{item.location}</p>
                  </div>
                  <div className="text-xs text-gray-400">{item.date}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-copper/10 to-mustard/10 rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Share Your Experience</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
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
              className="bg-copper hover:bg-garnet text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Share Your Feedback
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
