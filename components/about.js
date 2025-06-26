export default function About() {
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

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Our Story</h3>
            <p className="text-gray-600 mb-4">
              Founded with the belief that education is a fundamental right, we work tirelessly to create inclusive
              learning environments where every child can thrive.
            </p>
            <p className="text-gray-600">
              Through community partnerships, innovative programs, and dedicated volunteers, we're making education
              accessible to underserved communities worldwide.
            </p>
          </div>
          <div className="bg-gradient-to-br from-copper to-garnet rounded-lg h-64"></div>
        </div>
      </div>
    </section>
  )
}
