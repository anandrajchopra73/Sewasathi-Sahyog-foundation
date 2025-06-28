export default function Projects() {
  const projects = [
    {
      title: "उड़ान",
      description:
        "Building a foundation for success through education and skill development, empowering individuals for a brighter future.",
      status: "Active",
    },
    {
      title: "आरोग्य",
      description:
        "Empowering local educators with modern teaching methods and resources to improve learning outcomes.",
      status: "Ongoing",
    },
    {
      title: "आशा की किरण",
      description: "Teaching essential computer skills to children and adults in underserved communities.",
      status: "Expanding",
    },
    {
      title: "आशा की किरण",
      description: "Teaching essential computer skills to children and adults in underserved communities.",
      status: "Expanding",
    },
    {
      title: "आशा की किरण",
      description: "Teaching essential computer skills to children and adults in underserved communities.",
      status: "Expanding",
    },
    {
      title: "आशा की किरण",
      description: "Teaching essential computer skills to children and adults in underserved communities.",
      status: "Expanding",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-white/10 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Our Projects</h2>
          <p className="text-lg text-egg-nog max-w-3xl mx-auto">
            Discover the impactful initiatives we're leading to transform education and create lasting change in
            communities worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/20 backdrop-blur-sm rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200 border border-white/20"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <span className="bg-egg-nog/30 text-white text-xs font-medium px-2 py-1 rounded-full border border-egg-nog/50">
                  {project.status}
                </span>
              </div>
              <p className="text-egg-nog">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
