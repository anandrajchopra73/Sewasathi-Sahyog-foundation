export default function Team() {
  const teamMembers = [
    // Board of Trustees
    {
      name: "Aditi Chauhan",
      role: "Board of Trustees",
      category: "trustee",
      bio: "Distinguished educator and philanthropist with over 20 years of experience in nonprofit governance and educational policy development.",
    },
    {
      name: "Vaibhav Thakur",
      role: "Board of Trustees",
      category: "trustee",
      bio: "Vaibhav Thakur, the founder of Helping Hand Foundation, comes from a family with a strong background in construction and finance, with their own loan business running for the past 6 years. However, Vaibhav chose a different path—one rooted in creativity and purpose. Starting as a freelancer, he went on to establish his own creative agency, using design to amplify meaningful causes. His passion for helping others turned small gestures—like birthday donations—into a larger mission.With 3+ years of experience working with NGOs across India, he learned the value of ground-level impact and real stories. Under his leadership, Helping Hand Foundation is working towards education, food, healthcare, and essential support for those in need.The journey continues, but the vision remains clear: to reach more people, bring hope, and create lasting change. “Helping Hand is not just a foundation—it’s a promise.” – Vaibhav Thakur",
    },
    {
      name: "Manipal Thakur",
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
    <section id="team" className="py-20 bg-white/10 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Our Leadership</h2>
          <p className="text-lg text-egg-nog max-w-3xl mx-auto">
            Meet our dedicated Board of Trustees and Board of Directors who guide our mission and ensure we make the
            greatest impact in the communities we serve.
          </p>
        </div>

        <div className="space-y-16">
          {/* Board of Trustees */}
          <div>
            <h3 className="text-2xl font-semibold text-center text-egg-nog mb-8">Board of Trustees</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers
                .filter((member) => member.category === "trustee")
                .map((member, index) => (
                  <div
                    key={index}
                    className="bg-white/20 backdrop-blur-sm rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200 border border-white/20"
                  >
                    <div
                      className={`h-48 ${
                        index === 0
                          ? "bg-gradient-to-br from-egg-nog/30 to-mustard/30"
                          : index === 1
                            ? "bg-gradient-to-br from-mustard/30 to-egg-nog/30"
                            : "bg-gradient-to-br from-egg-nog/20 to-mustard/20"
                      }`}
                    ></div>
                    <div className="p-6">
                      <h4 className="text-xl font-semibold text-white mb-2">{member.name}</h4>
                      <p className="text-egg-nog font-medium mb-3">{member.role}</p>
                      <p className="text-egg-nog/80">{member.bio}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Board of Directors */}
          <div>
            <h3 className="text-2xl font-semibold text-center text-egg-nog mb-8">Board of Directors</h3>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {teamMembers
                .filter((member) => member.category === "director")
                .map((member, index) => (
                  <div
                    key={index}
                    className="bg-white/20 backdrop-blur-sm rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200 border border-white/20"
                  >
                    <div
                      className={`h-48 ${
                        index === 0
                          ? "bg-gradient-to-br from-mustard/20 to-egg-nog/20"
                          : "bg-gradient-to-br from-egg-nog/30 to-mustard/30"
                      }`}
                    ></div>
                    <div className="p-6">
                      <h4 className="text-xl font-semibold text-white mb-2">{member.name}</h4>
                      <p className="text-egg-nog font-medium mb-3">{member.role}</p>
                      <p className="text-egg-nog/80">{member.bio}</p>
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
