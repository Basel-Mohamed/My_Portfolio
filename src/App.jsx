import About from "./Components/About";
import Contact from "./Components/Contact";
import Experience from "./Components/Experience";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Technologies from './Components/Technologies';

export default function App() {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:text-cyan-900 selection:bg-cyan-300 bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <div className="flex top-0 -z-10 h-full w-full">
          <div className="container mx-auto px-8 ">
            <Navbar />
            <Hero />
            <About />
            <Technologies/>
            <Experience/>
            <Projects/>
            <Contact/>
          </div>
        </div>
      </div>
  );
}
