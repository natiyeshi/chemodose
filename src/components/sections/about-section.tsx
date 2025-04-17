"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import img from "@/../public/assets/images/images.png"

export default function AboutSection() {
  const { ref: sectionRef, isInView } = useScrollReveal()

  return (
    <section id="about" className="py-16 md:py-24" ref={sectionRef}>
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2">
          <Card
            className={`overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 ${
              isInView ? "animate-fade-right" : "opacity-0"
            }`}
          >
            <div className="relative aspect-square w-full overflow-hidden">
              <Image
                src={img}
                alt="Pharmaceutical pills"
                width={600}
                height={600}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </Card>
          <div className={`flex flex-col justify-center space-y-6 ${isInView ? "animate-fade-left" : "opacity-0"}`}>
            <h2 className="text-3xl font-bold tracking-tighter">
              Who <span className="text-teal-500">We Are</span> ?
            </h2>
            <p className="max-w-[600px] text-gray-700 md:text-lg">
            Chemodose Pharmaceuticals PLC provides high-quality, affordable medicines to healthcare providers across Ethiopia. We are committed to excellence and reliability, ensuring hospitals, clinics, and pharmacies receive the best pharmaceutical solutions.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 group">
                <Check className="h-5 w-5 text-teal-500 transition-transform duration-300 group-hover:scale-110" />
                <span className="font-medium group-hover:text-teal-600 transition-colors duration-300">
                  Trusted Quality
                </span>
              </div>
              <div className="flex items-center gap-2 group">
                <Check className="h-5 w-5 text-teal-500 transition-transform duration-300 group-hover:scale-110" />
                <span className="font-medium group-hover:text-teal-600 transition-colors duration-300">
                  Reliable Supply
                </span>
              </div>
              <div className="flex items-center gap-2 group">
                <Check className="h-5 w-5 text-teal-500 transition-transform duration-300 group-hover:scale-110" />
                <span className="font-medium group-hover:text-teal-600 transition-colors duration-300">
                  Customer Focused
                </span>
              </div>
            </div>
            <Button
              asChild
              className="mt-4 w-fit bg-teal-600 hover:bg-teal-700 transition-transform duration-300 hover:translate-y-[-2px]"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
