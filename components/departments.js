"use client"

import { useState } from "react"
import { GraduationCap, Heart, Users, DollarSign, Megaphone, FileText, ChevronDown, ChevronUp } from "lucide-react"

export default function Departments() {
  const [showAll, setShowAll] = useState(false)

  const departments = [
    {
      name: "Education Department",
      icon: <GraduationCap size={48} className="text-egg-nog" />,
      head: "Dr. Sarah Johnson",
      description: "Leading educational initiatives and programs to ensure quality learning opportunities for all.",
      responsibilities: [
        "Curriculum development and implementation",
        "Teacher training and capacity building",
        "Educational resource distribution",
        "Learning outcome assessment",
        "Digital literacy programs",
      ],
      programs: ["Mobile Learning Labs", "Adult Literacy", "Digital Skills Training"],
      contact: "education@helpinghandfoundation.org",
    },
    {
      name: "Healthcare Department",
      icon: <Heart size={48} className="text-egg-nog" />,
      head: "Dr. Priya Patel",
      description: "Providing comprehensive healthcare services and promoting community health and wellness.",
      responsibilities: [
        "Primary healthcare service delivery",
        "Health education and awareness campaigns",
        "Medical equipment and supply distribution",
        "Healthcare worker training",
        "Community health monitoring",
      ],
      programs: ["Mobile Health Clinics", "Maternal Health", "Vaccination Drives"],
      contact: "healthcare@helpinghandfoundation.org",
    },
    {
      name: "Community Outreach",
      icon: <Users size={48} className="text-egg-nog" />,
      head: "Michael Chen",
      description: "Building strong community partnerships and ensuring our programs reach those who need them most.",
      responsibilities: [
        "Community needs assessment",
        "Stakeholder engagement and partnerships",
        "Program implementation coordination",
        "Volunteer recruitment and management",
        "Community feedback collection",
      ],
      programs: ["Community Mobilization", "Volunteer Programs", "Local Partnerships"],
      contact: "outreach@helpinghandfoundation.org",
    },
    {
      name: "Finance & Administration",
      icon: <DollarSign size={48} className="text-egg-nog" />,
      head: "James Wilson",
      description: "Ensuring transparent financial management and efficient organizational operations.",
      responsibilities: [
        "Financial planning and budgeting",
        "Donor fund management",
        "Audit and compliance oversight",
        "Administrative operations",
        "Financial reporting and transparency",
      ],
      programs: ["Financial Transparency", "Donor Relations", "Operational Excellence"],
      contact: "finance@helpinghandfoundation.org",
    },
    {
      name: "Communications & Marketing",
      icon: <Megaphone size={48} className="text-egg-nog" />,
      head: "Emily Rodriguez",
      description: "Sharing our story, raising awareness, and building support for our mission.",
      responsibilities: [
        "Brand management and communications",
        "Social media and digital marketing",
        "Public relations and media outreach",
        "Content creation and storytelling",
        "Fundraising campaign support",
      ],
      programs: ["Digital Campaigns", "Media Relations", "Awareness Programs"],
      contact: "communications@helpinghandfoundation.org",
    },
    {
      name: "Research & Development",
      icon: <FileText size={48} className="text-egg-nog" />,
      head: "Dr. Ahmed Hassan",
      description:
        "Conducting research to improve our programs and develop innovative solutions for community challenges.",
      responsibilities: [
        "Program impact assessment",
        "Research and data analysis",
        "Innovation and solution development",
        "Best practices documentation",
        "Policy advocacy and recommendations",
      ],
      programs: ["Impact Studies", "Innovation Labs", "Policy Research"],
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

                {/* Key Responsibilities */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Responsibilities</h4>
                  <ul className="space-y-2">
                    {dept.responsibilities.slice(0, 3).map((responsibility, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-egg-nog rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-egg-nog text-sm">{responsibility}</span>
                      </li>
                    ))}
                    {dept.responsibilities.length > 3 && (
                      <li className="text-egg-nog/60 text-sm italic">
                        +{dept.responsibilities.length - 3} more responsibilities
                      </li>
                    )}
                  </ul>
                </div>

                {/* Active Programs */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Active Programs</h4>
                  <div className="flex flex-wrap gap-2">
                    {dept.programs.map((program, idx) => (
                      <span
                        key={idx}
                        className="bg-white/20 text-white px-3 py-1 rounded-full text-xs font-medium border border-white/30"
                      >
                        {program}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Contact Information */}
                <div className="pt-4 border-t border-white/20">
                  <div className="text-sm text-egg-nog/80">
                    <strong className="text-white">Contact:</strong>
                    <br />
                    <a
                      href={`mailto:${dept.contact}`}
                      className="text-egg-nog hover:text-white transition-colors duration-200 underline"
                    >
                      {dept.contact}
                    </a>
                  </div>
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
