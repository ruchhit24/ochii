import About from "./components/About.jsx"
import Cards from "./components/Cards.jsx"
import Eyes from "./components/Eyes.jsx"
import Featured from "./components/Featured.jsx"
import Footer from "./components/Footer.jsx"
import Landing from "./components/Landing.jsx"
import Marquee from "./components/Marquee.jsx"
import Navbar from "./components/Navbar.jsx"

 

function App() { 

  return ( 
   <>
      <div className="w-full min-h-screen bg-zinc-900">
      <Navbar/>
      <Landing/>
      <Marquee/>
      <About/>
      <Eyes/>
      <Featured/>
      <Cards/>
      <Footer/>
    </div>
   </>
  )
}

export default App
