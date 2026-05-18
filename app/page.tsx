import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import HeroSection from "@/components/hero/HeroSection"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#F7F3EE] text-[#1F1F1F]">
      <Navbar />

      <HeroSection />

      <Footer />
    </main>
  )
}