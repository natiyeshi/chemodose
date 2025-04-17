"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Award, Users, Lightbulb } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import img from "@/../public/assets/images/m.png"

const coreValues = [
  {
    title: "INTEGRITY",
    description:
      "The company adheres to the highest ethical standards in all aspects of its operations, ensuring transparency, accountability, and honesty.",
    icon: Shield,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    title: "QUALITY",
    description:
      "Chemodose Pharmaceuticals is committed to providing only the highest quality products, ensuring that all pharmaceuticals meet or exceed international standards.",
    icon: Award,
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    title: "CUSTOMER FOCUS",
    description:
      "The company places the needs of its customers at the forefront of its operations, ensuring that it delivers products and services that meet the expectations of healthcare providers and patients.",
    icon: Users,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    title: "INNOVATION",
    description:
      "Chemodose Pharmaceuticals is dedicated to adopting innovative approaches to its business, exploring new technologies, and seeking opportunities to improve healthcare delivery.",
    icon: Lightbulb,
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
  },
]

const specializations = [
  "Pharmaceutical Import & Distribution - Delivering essential medicines across Ethiopia.",
  "Regulatory Compliance - Ensuring all products meet national healthcare standards.",
  "Healthcare Partnerships - Supporting hospitals, clinics, and pharmacies with reliable supply chains.",
]

export default function AboutPageClient() {
  const { ref: headerRef, isInView: headerInView } = useScrollReveal()
  const { ref: introRef, isInView: introInView } = useScrollReveal()
  const { ref: valuesRef, isInView: valuesInView } = useScrollReveal()
  const { ref: whatWeDoRef, isInView: whatWeDoInView } = useScrollReveal()
  const { ref: statsRef, isInView: statsInView } = useScrollReveal()

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative overflow-hidden bg-[#0a3141] py-16 md:py-24" ref={headerRef}>
          {/* Decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Floating circles */}
            <div className="absolute -left-10 top-1/4 h-20 w-20 rounded-full border border-teal-400/20 opacity-50 animate-[spin_15s_linear_infinite]"></div>
            <div className="absolute right-10 top-1/3 h-16 w-16 rounded-full border border-teal-400/30 opacity-40 animate-[spin_12s_linear_infinite_reverse]"></div>
            <div className="absolute bottom-10 left-1/4 h-24 w-24 rounded-full border-2 border-teal-400/20 opacity-30 animate-[spin_20s_linear_infinite]"></div>

            {/* Floating dots grid */}
            <div className="absolute -left-10 bottom-0 grid grid-cols-6 grid-rows-6 gap-4 opacity-20">
              {Array.from({ length: 36 }).map((_, i) => (
                <div key={i} className="h-2 w-2 rounded-full bg-teal-400"></div>
              ))}
            </div>

            {/* Floating triangles */}
            <div className="absolute right-10 top-10 h-10 w-10 rotate-45 transform border border-teal-400/30 opacity-40 animate-[bounce_8s_ease-in-out_infinite]"></div>
            <div className="absolute right-1/4 bottom-10 h-12 w-12 rotate-12 transform border-2 border-teal-400/20 opacity-30 animate-[bounce_6s_ease-in-out_infinite_reverse]"></div>

            {/* Floating pill shapes */}
            <div className="absolute left-1/3 top-10 h-6 w-16 rounded-full bg-teal-400/10 opacity-50 animate-[pulse_4s_ease-in-out_infinite]"></div>
            <div className="absolute right-1/3 bottom-20 h-4 w-12 rounded-full bg-teal-400/10 opacity-40 animate-[pulse_5s_ease-in-out_infinite_reverse]"></div>
          </div>

          <div className="container relative px-4 md:px-6">
            <div className="text-center">
              <h1
                className={`text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl ${headerInView ? "animate-fade-up" : "opacity-0"}`}
              >
                About US
              </h1>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24" ref={introRef}>
          <div className="container px-4 md:px-6">
            <div className={`mx-auto max-w-3xl text-center ${introInView ? "animate-fade-up" : "opacity-0"}`}>
              <p className="text-gray-700 md:text-lg">
                Chemodose Pharmaceuticals PLC is a leading Ethiopian pharmaceutical importer and distributor,
                established in 2013 to improve public health by providing high-quality, reliable medicines to healthcare
                providers across the country.
              </p>
              <Button
                asChild
                className={`mt-8 bg-teal-600 hover:bg-teal-700 ${introInView ? "animate-fade-up" : "opacity-0"}`}
                style={{ animationDelay: introInView ? "200ms" : "0ms" }}
              >
                <Link href="#contact">Learn More</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-gray-50" ref={valuesRef}>
          <div className="container px-4 md:px-6">
            <div className="mb-12">
              <h2 className={`mb-6 text-center text-3xl font-bold ${valuesInView ? "animate-fade-up" : "opacity-0"}`}>
                Our Core Values.
              </h2>
              <p
                className={`mb-12 text-center text-gray-700 max-w-3xl mx-auto ${valuesInView ? "animate-fade-up" : "opacity-0"}`}
                style={{ animationDelay: valuesInView ? "100ms" : "0ms" }}
              >
                Chemodose Pharmaceuticals PLC operates with a set of core values that guide its business practices.
                These values include:
              </p>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {coreValues.map((value, index) => (
                  <Card
                    key={index}
                    className={`border-0 shadow-md h-full hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px] ${valuesInView ? "animate-fade-up" : "opacity-0"}`}
                    style={{ animationDelay: valuesInView ? `${(index + 1) * 100 + 200}ms` : "0ms" }}
                  >
                    <CardHeader className="pb-2 flex flex-col items-center text-center">
                      <div className={`mb-4 flex h-16 w-16 items-center justify-center rounded-full ${value.iconBg}`}>
                        <value.icon className={`h-8 w-8 ${value.iconColor}`} />
                      </div>
                      <CardTitle className="text-xl font-bold">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-gray-700">{value.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24" ref={whatWeDoRef}>
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-2 items-center bg-white rounded-xl shadow-lg overflow-hidden">
              <div
                className={`relative h-full min-h-[400px] w-full overflow-hidden bg-teal-50 ${whatWeDoInView ? "animate-fade-right" : "opacity-0"}`}
              >
                <Image
                  src={img}
                  alt="Pharmaceutical pills"
                  width={600}
                  height={600}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-transparent"></div>
              </div>
              <div
                className={`flex flex-col justify-center space-y-6 p-8 ${whatWeDoInView ? "animate-fade-left" : "opacity-0"}`}
              >
                <h3 className="text-2xl font-bold tracking-tighter">What We Do?</h3>
                <p className="text-gray-700 font-medium">We specialize in:</p>
                <ul className="space-y-6">
                  {specializations.map((item, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-teal-100">
                        <span className="text-teal-600 font-bold">{index + 1}</span>
                      </div>
                      <span className="text-gray-700 mt-1">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-4">
                  <Button asChild className="mt-4 bg-teal-600 hover:bg-teal-700">
                    <Link href="#contact">Contact Us</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-gray-50" ref={statsRef}>
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: "500+", label: "Products" },
                { value: "10+", label: "Years Experience" },
                { value: "50+", label: "Partners" },
                { value: "100%", label: "Customer Satisfaction" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className={`flex flex-col items-center ${statsInView ? "animate-fade-up" : "opacity-0"}`}
                  style={{ animationDelay: statsInView ? `${index * 100}ms` : "0ms" }}
                >
                  <div className="text-4xl font-bold text-teal-600 mb-2">{stat.value}</div>
                  <p className="text-gray-700">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
