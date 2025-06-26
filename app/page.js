import Header from "@/components/header"
import Hero from "@/components/hero"
import Mission from "@/components/mission"
import About from "@/components/about"
import Departments from "@/components/departments"
import Projects from "@/components/projects"
import Events from "@/components/events"
import Team from "@/components/team"
import Feedback from "@/components/feedback"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Departments />
      <Mission />
      <Projects />
      <Events />
      <Team />
      <Feedback />
      <Contact />
      <Footer />
    </main>
  )
}
