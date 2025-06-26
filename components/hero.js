"use client"

export default function Hero() {
  const handleDonateClick = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSd4ieEVJ0cCjFxN9eHzc5ZzfjBjPScTb0mAWS3hE-opi_ioDQ/viewform",
      "_blank",
    )
  }

  return (
    <section className="relative h-screen flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 50, 38, 0.6), rgba(30, 50, 38, 0.4)), url('/placeholder.svg?height=800&width=1200')`,
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <p className="text-lg md:text-xl mb-4 font-medium tracking-wide">FREE & ACCESSIBLE</p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-12 leading-tight">EDUCATION FOR ALL</h1>

        {/* Call to Action */}
        <div className="bg-white/90 backdrop-blur-sm rounded-lg p-8 md:p-12 max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-copper mb-6">Take action to help us grow</h2>
          <button
            onClick={handleDonateClick}
            className="bg-copper hover:bg-garnet text-white font-semibold py-4 px-8 rounded-lg text-lg transition-colors duration-200 transform hover:scale-105"
          >
            DONATE
          </button>
        </div>
      </div>
    </section>
  )
}
