export default function Events() {
  const events = [
    {
      date: "March 15, 2024",
      title: "Annual Education Summit",
      location: "Community Center",
      time: "9:00 AM - 5:00 PM",
    },
    {
      date: "April 2, 2024",
      title: "Volunteer Training Workshop",
      location: "Online",
      time: "2:00 PM - 4:00 PM",
    },
    {
      date: "April 20, 2024",
      title: "Fundraising Gala",
      location: "Grand Hotel",
      time: "7:00 PM - 11:00 PM",
    },
  ]

  return (
    <section id="events" className="py-20 bg-white/10 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Upcoming Events</h2>
          <p className="text-lg text-egg-nog max-w-3xl mx-auto">
            Join us at our upcoming events and be part of the movement to make education accessible for all.
          </p>
        </div>

        <div className="space-y-6">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white/20 backdrop-blur-sm rounded-lg p-6 flex flex-col md:flex-row md:items-center md:justify-between hover:bg-white/30 transition-colors duration-200 border border-white/20"
            >
              <div className="mb-4 md:mb-0">
                <h3 className="text-xl font-semibold text-white mb-2">{event.title}</h3>
                <p className="text-egg-nog">
                  {event.location} • {event.time}
                </p>
              </div>
              <div className="text-egg-nog font-semibold">{event.date}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
