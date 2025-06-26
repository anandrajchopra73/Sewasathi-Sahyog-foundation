import { GraduationCap, Heart, Users, DollarSign, Megaphone, FileText } from "lucide-react"

export default function Departments() {
  const departments = [
    {
      name: "Education Department",
      icon: <GraduationCap size={32} className="text-egg-nog" />,
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
      icon: <Heart size={32} className="text-egg-nog" />,
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
      icon: <Users size={32} className="text-egg-nog" />,
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
      icon: <DollarSign size={32} className="text-egg-nog" />,
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
      icon: <Megaphone size={32} className="text-egg-nog" />,
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
      icon: <FileText size={32} className="text-egg-nog" />,
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

        {/* Department Cards */}
        <div className="space-y-8">
          {departments.map((dept, index) => (
            <div
              key={index}
              className="bg-white/20 backdrop-blur-sm rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200 border border-white/20"
            >
              <div className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-8">
                  {/* Department Header */}
                  <div className="lg:w-1/3 mb-6 lg:mb-0">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="bg-white/20 p-3 rounded-full border border-white/30">{dept.icon}</div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{dept.name}</h3>
                        <p className="text-egg-nog font-medium">Head: {dept.head}</p>
                      </div>
                    </div>
                    <p className="text-egg-nog mb-4">{dept.description}</p>
                    <div className="text-sm text-egg-nog/80">
                      <strong>Contact:</strong> {dept.contact}
                    </div>
                  </div>

                  {/* Department Details */}
                  <div className="lg:w-2/3">
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Responsibilities */}
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Key Responsibilities</h4>
                        <ul className="space-y-2">
                          {dept.responsibilities.map((responsibility, idx) => (
                            <li key={idx} className="flex items-start space-x-2">
                              <div className="w-2 h-2 bg-egg-nog rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-egg-nog text-sm">{responsibility}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Programs */}
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Active Programs</h4>
                        <div className="space-y-2">
                          {dept.programs.map((program, idx) => (
                            <div
                              key={idx}
                              className="bg-white/20 text-white px-3 py-2 rounded-lg text-sm font-medium border border-white/30"
                            >
                              {program}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
