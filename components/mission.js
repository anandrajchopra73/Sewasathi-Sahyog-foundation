export default function Mission() {
  return (
    <section id="mission" className="py-20 bg-white/10 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="w-24 h-1 bg-egg-nog mx-auto mb-8"></div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Our Mission</h2>
          <p className="text-lg text-egg-nog max-w-3xl mx-auto leading-relaxed">
            I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click "Edit Text" or double
            click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you
            like on your page.
          </p>
        </div>

        {/* Mission Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/20 backdrop-blur-sm rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200 border border-white/20">
            <div className="h-48 bg-gradient-to-br from-egg-nog/30 to-mustard/30"></div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Quality Education</h3>
              <p className="text-egg-nog">
                Providing high-quality educational resources and opportunities for all children, regardless of their
                background or circumstances.
              </p>
            </div>
          </div>

          <div className="bg-white/20 backdrop-blur-sm rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200 border border-white/20">
            <div className="h-48 bg-gradient-to-br from-mustard/30 to-egg-nog/30"></div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Community Support</h3>
              <p className="text-egg-nog">
                Building strong communities that support educational initiatives and create lasting positive change in
                children's lives.
              </p>
            </div>
          </div>

          <div className="bg-white/20 backdrop-blur-sm rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200 border border-white/20">
            <div className="h-48 bg-gradient-to-br from-egg-nog/20 to-mustard/20"></div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Equal Access</h3>
              <p className="text-egg-nog">
                Ensuring that every child has equal access to educational opportunities, breaking down barriers and
                creating pathways to success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
