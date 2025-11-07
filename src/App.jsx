import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Publications from "./components/Publications";
import Educations from "./components/Educations";
import Contact from "./components/Contact";


export default function App() {
  return (
    <div className="overflow-x-hidden text-stone-300 antialiased">
      <div className="fixed inset-0 -z-10">
        <div class="absolute top-0 -z-10 h-full w-full bg-white">
          <div class="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div>
        </div>
      </div>
      <div className="container mx-auto px-6">
        <Navbar/> 
        <Hero /> 
        <Technologies />
        <br />
        <br />
        <br />
        <Publications/>
        <Projects />  
        <Educations />   
        <Contact /> 
      </div>
    </div>
  );
}
