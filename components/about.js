import { Users, Globe, BookOpen, TrendingUp } from "lucide-react"

export default function About() {
  const organizationalStats = [
    { icon: <Users size={24} className="text-copper" />, number: "150+", label: "Team Members" },
    { icon: <Globe size={24} className="text-copper" />, number: "6", label: "Departments" },
    { icon: <BookOpen size={24} className="text-copper" />, number: "25+", label: "Active Programs" },
    { icon: <TrendingUp size={24} className="text-copper" />, number: "98%", label: "Efficiency Rate" },
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">About Us</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            HELPING HAND FOUNDATION is a nonprofit organization devoted to enhancing the well-being of vulnerable
            populations by facilitating access to quality education, comprehensive healthcare services, and essential
            living resources. Our mission is grounded in humanitarian values and a commitment to long-term community
            development. At the heart of HELPING HAND FOUNDATION is the belief that "Together We Can, Together We Will."
            We are driven by a deep sense of compassion and a commitment to serve. By placing the well-being of others
            before our own, we foster a spirit of unity and selflessness. This belief fuels our collaborative efforts
            and volunteer-led initiatives, allowing us to deliver education, healthcare, and essential support to
            underserved communities. We stand by the principle: Let us serve others before ourselves.
          </p>
        </div>

        {/* Organizational Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {organizationalStats.map((stat, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex justify-center mb-3">{stat.icon}</div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Additional About Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Our Impact</h3>
            <p className="text-gray-600 mb-4">
              Since our founding, HELPING HAND FOUNDATION has been at the forefront of creating meaningful change in
              communities worldwide. Our comprehensive approach addresses the interconnected challenges of education,
              healthcare, and basic living needs.
            </p>
            <p className="text-gray-600 mb-4">
              Through our dedicated team of professionals and volunteers, we have established sustainable programs that
              not only provide immediate relief but also build long-term capacity within communities.
            </p>
            <p className="text-gray-600">
              Our commitment to transparency, efficiency, and measurable impact ensures that every contribution makes a
              real difference in the lives of those we serve.
            </p>
          </div>

          <div className="bg-gradient-to-br from-copper/10 to-mustard/10 rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Our Values</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-copper rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Compassion</h4>
                  <p className="text-gray-600 text-sm">Putting the needs of others before our own</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-copper rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Unity</h4>
                  <p className="text-gray-600 text-sm">Working together to achieve common goals</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-copper rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Excellence</h4>
                  <p className="text-gray-600 text-sm">Maintaining high standards in all our work</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-copper rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Sustainability</h4>
                  <p className="text-gray-600 text-sm">Building lasting solutions for communities</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
