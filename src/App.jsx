import Education from "./layouts/Education";
import Hero from "./layouts/Hero";
import Navbar from "./layouts/Navbar";
import TechSkills from "./layouts/TechSkills";
import Achievements from "./layouts/Achievements";
import Projects from "./layouts/Projects";
import Footer from "./layouts/Footer";
import ConnectMe from "./layouts/ConnectMe";
function App() {


  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <div className="bg-gradient-to-b 
      from-[var(--color-baseColor)] 
      via-[var(--color-primary)]/30
      to-[var(--color-baseColor)] 
      overflow-hidden" >
        <Education />
        <Projects/>
        <Achievements />
        <TechSkills />
        <ConnectMe/>
        <Footer/>
      </div>


    </div>
  )
}

export default App
