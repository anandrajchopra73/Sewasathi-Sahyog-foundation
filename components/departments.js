"use client"

import { useState } from "react"
import { GraduationCap, Heart, Users, DollarSign, Megaphone, FileText, ChevronDown, ChevronUp } from "lucide-react"

export default function Departments() {
  const [showAll, setShowAll] = useState(false)

  const departments = [
    {
      name: "Human Resources & Management Department",
      icon: <GraduationCap size={48} className="text-egg-nog" />,
      head: "Shaurya Mittal",
      description: "Nurturing potential and building a positive, purpose-driven work environment",
      responsibilities: [
        "",
      ],
      contact: "education@helpinghandfoundation.org",
    },
    {
      name: "Public Relations & Outreach",
      icon: <Heart size={48} className="text-egg-nog" />,
      head: "Gunjan Tomar",
      description: "🤝 Building bridges between our mission and the community.Spreading awareness, inspiring action.Connecting hearts to causes, voices to change.",
      responsibilities: [
        "Primary healthcare service delivery",
        "Health education and awareness campaigns",
        "Medical equipment and supply distribution",
        "Healthcare worker training",
        "Community health monitoring",
      ],
      contact: "healthcare@helpinghandfoundation.org",
    },
    {
      name: "Research & Planning",
      icon: <Users size={48} className="text-egg-nog" />,
      head: "Stephy Omana",
      description: "Driving impact with insights, strategy, and purpose.Turning data into direction, and ideas into action.Building every step on research, reflection,and results.",
      responsibilities: [
        "Community needs assessment",
        "Stakeholder engagement and partnerships",
        "Program implementation coordination",
        "Volunteer recruitment and management",
        "Community feedback collection",
      ],
      contact: "outreach@helpinghandfoundation.org",
    },
    {
      name: "Social Media & Content",
      icon: <DollarSign size={48} className="text-egg-nog" />,
      head: "Sukrati Nagar",
      description: "Amplifying voices, telling stories that inspire.Creating content that connects, engages, and empowers.Taking our mission to every corner of the digital world.",
      responsibilities: [
        "Financial planning and budgeting",
        "Donor fund management",
        "Audit and compliance oversight",
        "Administrative operations",
        "Financial reporting and transparency",
      ],
      contact: "finance@helpinghandfoundation.org",
    },
    {
      name: "Finance & Budgeting",
      icon: <Megaphone size={48} className="text-egg-nog" />,
      head: "Aditi Chauhan",
      description: "Transparent, smart budgeting for a sustainable future",
      responsibilities: [
        "Brand management and communications",
        "Social media and digital marketing",
        "Public relations and media outreach",
        "Content creation and storytelling",
        "Fundraising campaign support",
      ],
      contact: "communications@helpinghandfoundation.org",
    },
    {
      name: "Operations & Logistics",
      icon: <FileText size={48} className="text-egg-nog" />,
      head: "Khushi Joshi",
      description:
        "Ensuring timely support reaches the right place, at the right time",
      responsibilities: [
        "Program impact assessment",
        "Research and data analysis",
        "Innovation and solution development",
        "Best practices documentation",
        "Policy advocacy and recommendations",
      ],
      contact: "research@helpinghandfoundation.org",
    },
  ]

  const visibleDepartments = showAll ? departments : departments.slice(0, 3)

  return (
    <section id="departments" className="py-20 bg-white/10 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Our Departments</h2>
          <p className="text-lg text-egg-nog max-w-3xl mx-auto">
            HELPING HAND FOUNDATION operates through specialized departments, each focused on delivering excellence in
            their respective areas while working together towards our common mission.
          </p>
        </div>

        {/* Department Cards - Vertical Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {visibleDepartments.map((dept, index) => (
            <div
              key={index}
              className="bg-white/20 backdrop-blur-sm rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 border border-white/20 hover:scale-105"
            >
              {/* Department Header */}
              <div className="p-8 text-center border-b border-white/20">
                <div className="bg-white/20 p-4 rounded-full w-fit mx-auto mb-4 border border-white/30">
                  {dept.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{dept.name}</h3>
                <p className="text-egg-nog font-medium">Head: {dept.head}</p>
              </div>

              {/* Department Content */}
              <div className="p-6">
                <p className="text-egg-nog mb-6 leading-relaxed">{dept.description}</p>

                
                {/* Contact Information */}
                <div className="pt-4 border-t border-white/20">
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Read More / Show Less Button */}
        <div className="text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-white/30 hover:bg-white/40 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 border border-white/40 inline-flex items-center space-x-2 group"
          >
            <span>{showAll ? "Show Less Departments" : "Read More Departments"}</span>
            {showAll ? (
              <ChevronUp size={20} className="group-hover:-translate-y-1 transition-transform duration-200" />
            ) : (
              <ChevronDown size={20} className="group-hover:translate-y-1 transition-transform duration-200" />
            )}
          </button>
        </div>
      </div>
    </section>
  )
}
