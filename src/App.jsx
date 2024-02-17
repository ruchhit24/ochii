import About from "./components/About.jsx"
import Eyes from "./components/Eyes.jsx"
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
    </div>
   </>
  )
}

export default App
