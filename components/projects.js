export default function Projects() {
  const projects = [
    {
      title: "Mobile Learning Labs",
      description:
        "Bringing education directly to remote communities through mobile classrooms equipped with modern technology.",
      status: "Active",
    },
    {
      title: "Teacher Training Program",
      description:
        "Empowering local educators with modern teaching methods and resources to improve learning outcomes.",
      status: "Ongoing",
    },
    {
      title: "Digital Literacy Initiative",
      description: "Teaching essential computer skills to children and adults in underserved communities.",
      status: "Expanding",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Our Projects</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover the impactful initiatives we're leading to transform education and create lasting change in
            communities worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                <span className="bg-mustard/20 text-garnet text-xs font-medium px-2 py-1 rounded-full">
                  {project.status}
                </span>
              </div>
              <p className="text-gray-600">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
