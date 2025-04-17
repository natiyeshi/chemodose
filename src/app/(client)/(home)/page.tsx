import type { Metadata } from "next"
import Header from "@/components/header"
import HeroSection from "@/components/sections/hero-section"
import AboutSection from "@/components/sections/about-section"
import ServicesSection from "@/components/sections/services-section"
import ProductsSection from "@/components/sections/products-section"
import CtaSection from "@/components/sections/cta-section"
import PartnersSection from "@/components/sections/partners-section"
import TestimonialsSection from "@/components/sections/testimonials-section"
import SuppliersSection from "@/components/sections/suppliers-section"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Chemodose - Quality Healthcare to Every Home",
  description: "Chemodose Pharmaceuticals PLC provides high-quality affordable medicines to healthcare providers",
}

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProductsSection />
        <CtaSection />
        <PartnersSection />
        <TestimonialsSection />
        <SuppliersSection />
      </main>
      <Footer />
    </div>
  )
}
