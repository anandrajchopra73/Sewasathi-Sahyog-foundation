export default function News() {
  const newsItems = [
    {
      date: "February 28, 2024",
      title: "New Partnership Brings Technology to Rural Schools",
      excerpt:
        "We're excited to announce our partnership with TechForGood to provide tablets and internet access to 50 rural schools.",
    },
    {
      date: "February 15, 2024",
      title: "1000th Student Graduates from Our Literacy Program",
      excerpt:
        "Celebrating a major milestone as our 1000th student completes our adult literacy program with flying colors.",
    },
    {
      date: "January 30, 2024",
      title: "Volunteer Appreciation Month",
      excerpt:
        "Recognizing the incredible dedication of our volunteers who make our mission possible every single day.",
    },
  ]

  return (
    <section id="news" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Latest News</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Stay updated with our latest achievements, partnerships, and community impact stories.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <article key={index} className="bg-gray-50 rounded-lg p-6 hover:bg-egg-nog transition-colors duration-200">
              <div className="text-sm text-copper font-medium mb-2">{item.date}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.excerpt}</p>
              <button className="mt-4 text-copper hover:text-garnet font-medium">Read More →</button>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
