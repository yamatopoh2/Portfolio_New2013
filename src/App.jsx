import React from "react"
import Header from "./components/header/Header"
import Nav from "./components/nav/Nav"
import About from "./components/about/About"
import Educations from "./components/educations/Educations"
import Experience from "./components/experience/Experience"
//import Services from "./components/services/Services"
// import Portfolio from "./components/portfolio/Portfolio"
import Port from "./components/portfolio/Port"
//import Testimonials from "./components/testimonials/Testimonials"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"

import WorkExperience from "./components/workExperience/WorkExperience"
const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Educations />
      <Experience />
      <WorkExperience />
      {/* <Services /> */}
      {/* <Portfolio /> */}
      <Port />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </>
  )
}

export default App
