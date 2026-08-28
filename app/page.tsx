import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Work from "@/components/Work";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#08090D] text-white">
      <Navbar />
      <Hero />
      <About/>
      <Services/>
      <Work/>
      <Footer/>
      
    </main>
  );
}