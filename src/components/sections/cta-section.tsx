"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

export default function CtaSection() {
  const { ref: sectionRef, isInView } = useScrollReveal()

  return (
    <section className="relative overflow-hidden bg-[#0a3141] py-16 md:py-24" ref={sectionRef}>
      <div className="absolute right-0 top-0 h-full w-1/3">
        <div className="grid h-full grid-cols-6 grid-rows-6 gap-2 opacity-20">
          {Array.from({ length: 36 }).map((_, i) => (
            <div key={i} className="rounded-full bg-teal-500" />
          ))}
        </div>
      </div>
      <div className="container relative px-4 md:px-6">
        <div className={`mx-auto max-w-3xl text-center ${isInView ? "animate-fade-up" : "opacity-0"}`}>
          <h2 className="mb-4 text-3xl font-bold tracking-tighter text-white sm:text-4xl">
            Let Us <span className="text-teal-400">Work</span> Together!!
          </h2>
          <p className="mb-8 text-gray-200 md:text-lg">
            Partner with Chemodose Pharmaceuticals to bring high-quality, affordable medicines to healthcare providers
            across Ethiopia. Whether you&apos;re a hospital, clinic, pharmacy, or distributor, we&apos;re here to support you with
            reliable supply, expert guidance, and top-tier pharmaceutical solutions.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="bg-teal-500 hover:bg-teal-600">
              <Link href="/contact">GET IN TOUCH</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              <Link href="tel:+251914314158" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                Call +251914314158
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
