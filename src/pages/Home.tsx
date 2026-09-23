
import Hero from "../components/Hero"
import { HorizontalCard } from "../components/Card"
import projectData from "../data/projectData.json"
import { NavbarDefault } from "../components/NavbarDefault"
import Footer from "../components/Footer"
import AboutSection from "../components/AboutSection"

import { hotjar } from 'react-hotjar'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function Home() {
  const { hash } = useLocation()

  useEffect(() => {
    hotjar.initialize({
      id: 3780129,
      sv: 6
    })
  }, [])
  // When the address ends in #about, scroll down to the About section.
  // Otherwise (clicking "Home"), go back to the top.
  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: "smooth" })
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }, [hash])

  return (
    <>
    <NavbarDefault/>
    <div className="flex justify-center">
      <div className="w-3/5">
        <Hero/>
        {projectData.map((project) => (
          <HorizontalCard key={project.id} project={project} />
        ))}
      </div>
    </div>
    <AboutSection/>
    <Footer/>
    </>
  )
}

export default Home
