import Hero from "@/components/hero"
import AdditionalServices from "@/components/services"
import OurServices from "@/components/our-services"
import Updates from "@/components/updates"
import Testimonials from "@/components/testimonials"
import AboutUs from "@/components/about"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <div className="h-1.5 bg-gradient-to-r from-violet-500 via-purple-500 to-violet-500 animate-shine" />
      <OurServices />
      <AdditionalServices />
      <Updates />
      <AboutUs />
      <Testimonials />
    </main>
  )
} 