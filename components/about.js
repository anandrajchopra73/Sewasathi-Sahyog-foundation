import { Users, Globe, BookOpen, TrendingUp } from "lucide-react"

export default function About() {
  const organizationalStats = [
    { icon: <Users size={24} className="text-egg-nog" />, number: "50+", label: "Team Members" },
    { icon: <Globe size={24} className="text-egg-nog" />, number: "6", label: "Departments" },
    { icon: <BookOpen size={24} className="text-egg-nog" />, number: "7+", label: "Active Programs" },
    { icon: <TrendingUp size={24} className="text-egg-nog" />, number: "98%", label: "Efficiency Rate" },
  ]

  return (
    <>
      {/* About Us Section */}
      <section id="about" className="py-20 bg-white/10 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">About Us</h2>
            <p className="text-lg text-egg-nog max-w-3xl mx-auto leading-relaxed">
              HELPING HAND FOUNDATION is a nonprofit organization devoted to enhancing the well-being of vulnerable
              populations by facilitating access to quality education, comprehensive healthcare services, and essential
              living resources. Our mission is grounded in humanitarian values and a commitment to long-term community
              development. At the heart of HELPING HAND FOUNDATION is the belief that "Together We Can, Together We
              Will." We are driven by a deep sense of compassion and a commitment to serve. By placing the well-being of
              others before our own, we foster a spirit of unity and selflessness. This belief fuels our collaborative
              efforts and volunteer-led initiatives, allowing us to deliver education, healthcare, and essential support
              to underserved communities. We stand by the principle: Let us serve others before ourselves.
            </p>
          </div>

          {/* Organizational Stats */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {organizationalStats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/20 backdrop-blur-sm rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-200 border border-white/20"
              >
                <div className="flex justify-center mb-3">{stat.icon}</div>
                <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-egg-nog">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Additional About Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Our Impact</h3>
              <p className="text-egg-nog mb-4">
                Since our founding, HELPING HAND FOUNDATION has been at the forefront of creating meaningful change in
                communities worldwide. Our comprehensive approach addresses the interconnected challenges of education,
                healthcare, and basic living needs.
              </p>
              <p className="text-egg-nog mb-4">
                Through our dedicated team of professionals and volunteers, we have established sustainable programs
                that not only provide immediate relief but also build long-term capacity within communities.
              </p>
              <p className="text-egg-nog">
                Our commitment to transparency, efficiency, and measurable impact ensures that every contribution makes
                a real difference in the lives of those we serve.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
              <h3 className="text-2xl font-semibold text-white mb-6">Our Vision</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-egg-nog rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-egg-nog text-lg font-semibold">Equal access to education for every individual.</h4>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-egg-nog rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-egg-nog text-lg font-semibold">Universal access to healthcare, menstrual hygiene, and nutritious food.</h4>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-egg-nog rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-egg-nog text-lg font-semibold">Promotion of overall well-being as a fundamental right.</h4>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-egg-nog rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-egg-nog text-lg font-semibold">A future where no one is held back by basic needs and everyone thrives with dignity and purpose.</h4>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-20 bg-white/10 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-24 h-1 bg-egg-nog mx-auto mb-8"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Our Mission</h2>
            <p className="text-lg text-egg-nog max-w-3xl mx-auto leading-relaxed">
              Our mission is to create sustainable change by empowering communities through education, healthcare, and
              essential resources. We believe in building bridges that connect hope with opportunity, ensuring that
              every individual has the chance to thrive and contribute to their community's growth.
            </p>
          </div>

          {/* Mission Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200 border border-white/20">
            <img src= "/placeholder.svg"/>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Quality Education</h3>
                <p className="text-egg-nog">
                  Inspire minds through access to quality education, ensuring every individual has the opportunity to
                  learn and grow.
                </p>
              </div>
            </div>

            <div className="bg-white/20 backdrop-blur-sm rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200 border border-white/20">
              <div className="h-48 bg-gradient-to-br from-mustard/30 to-egg-nog/30"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Healthcare Access</h3>
                <p className="text-egg-nog">
                  Promote well-being through accessible healthcare services, bringing medical support to underserved
                  communities.
                </p>
              </div>
            </div>

            <div className="bg-white/20 backdrop-blur-sm rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200 border border-white/20">
              <div className="h-48 bg-gradient-to-br from-egg-nog/20 to-mustard/20"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Food & Nutrition</h3>
                <p className="text-egg-nog">
                  Ensure dignity through food and nutrition support, addressing hunger and malnutrition in vulnerable
                  populations.
                </p>
              </div>
            </div>

            <div className="bg-white/20 backdrop-blur-sm rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200 border border-white/20">
              <div className="h-48 bg-gradient-to-br from-mustard/20 to-egg-nog/20"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Women Empowerment</h3>
                <p className="text-egg-nog">
                  Empower women by advancing menstrual hygiene awareness and promoting gender equality in all our
                  initiatives.
                </p>
              </div>
            </div>

            <div className="bg-white/20 backdrop-blur-sm rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200 border border-white/20">
              <div className="h-48 bg-gradient-to-br from-egg-nog/30 to-mustard/30"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Animal Care</h3>
                <p className="text-egg-nog">
                  Spread kindness through animal care and protection, extending our compassion to all living beings in
                  need.
                </p>
              </div>
            </div>

            <div className="bg-white/20 backdrop-blur-sm rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200 border border-white/20">
              <div className="h-48 bg-gradient-to-br from-mustard/30 to-egg-nog/30"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Environmental Protection</h3>
                <p className="text-egg-nog">
                  Safeguard the planet through sustainable environmental practices, ensuring a healthier future for
                  generations to come.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
