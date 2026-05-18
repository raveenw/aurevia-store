import Navbar from "@/components/layout/Navbar"
import HeroSection from "@/components/hero/HeroSection"
import Footer from "@/components/layout/Footer"

export default function HomePage() {
  return (
    <main className="bg-[#F7F3EE] text-[#1F1F1F] min-h-screen">
      <Navbar />
      <HeroSection />
      <Footer />
    </main>
  )
}