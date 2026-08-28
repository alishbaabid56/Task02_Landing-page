import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#08090D] text-white">
      <Navbar />
      <Hero />
      <Services/>
      
    </main>
  );
}