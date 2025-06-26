export default function Team() {
  const teamMembers = [
    // Board of Trustees
    {
      name: "Dr. Sarah Johnson",
      role: "Board of Trustees",
      category: "trustee",
      bio: "Distinguished educator and philanthropist with over 20 years of experience in nonprofit governance and educational policy development.",
    },
    {
      name: "Michael Chen",
      role: "Board of Trustees",
      category: "trustee",
      bio: "Former CEO of educational technology company, dedicated to leveraging innovation for social impact and community development.",
    },
    {
      name: "Prof. Emily Rodriguez",
      role: "Board of Trustees",
      category: "trustee",
      bio: "Academic leader and researcher specializing in community development and sustainable education programs for underserved populations.",
    },
    // Board of Directors
    {
      name: "James Wilson",
      role: "Board of Directors",
      category: "director",
      bio: "Experienced nonprofit executive with expertise in strategic planning, fundraising, and organizational development.",
    },
    {
      name: "Dr. Priya Patel",
      role: "Board of Directors",
      category: "director",
      bio: "Healthcare professional and community advocate focused on integrating health and education services for vulnerable communities.",
    },
  ]

  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Our Leadership</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Meet our dedicated Board of Trustees and Board of Directors who guide our mission and ensure we make the
            greatest impact in the communities we serve.
          </p>
        </div>

        <div className="space-y-16">
          {/* Board of Trustees */}
          <div>
            <h3 className="text-2xl font-semibold text-center text-copper mb-8">Board of Trustees</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers
                .filter((member) => member.category === "trustee")
                .map((member, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200"
                  >
                    <div
                      className={`h-48 ${
                        index === 0
                          ? "bg-gradient-to-br from-copper to-garnet"
                          : index === 1
                            ? "bg-gradient-to-br from-mustard to-copper"
                            : "bg-gradient-to-br from-velvet-forest to-copper"
                      }`}
                    ></div>
                    <div className="p-6">
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h4>
                      <p className="text-copper font-medium mb-3">{member.role}</p>
                      <p className="text-gray-600">{member.bio}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Board of Directors */}
          <div>
            <h3 className="text-2xl font-semibold text-center text-copper mb-8">Board of Directors</h3>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {teamMembers
                .filter((member) => member.category === "director")
                .map((member, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200"
                  >
                    <div
                      className={`h-48 ${
                        index === 0
                          ? "bg-gradient-to-br from-garnet to-velvet-forest"
                          : "bg-gradient-to-br from-copper to-mustard"
                      }`}
                    ></div>
                    <div className="p-6">
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h4>
                      <p className="text-copper font-medium mb-3">{member.role}</p>
                      <p className="text-gray-600">{member.bio}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
