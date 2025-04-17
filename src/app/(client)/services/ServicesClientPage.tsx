"use client"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, FileText, HeartPulse, ShieldCheck, TruckIcon, ClipboardCheck, Users, Globe } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import img from "@/../public/assets/images/phar.png"
import img2 from "@/../public/assets/images/serv2.png"
import img3 from "@/../public/assets/images/serv3.png"
import img4 from "@/../public/assets/images/serv4.png"
import img5 from "@/../public/assets/images/serv5.png"
import lab from "@/../public/assets/images/lab.png"


const services = [
  {
    title: "Pharmaceutical Import & Distribution",
    description:
      "We import and distribute high-quality medicines, medical devices, and consumables from trusted international manufacturers. Our extensive distribution network ensures timely delivery to healthcare facilities across Ethiopia.",
    icon: FileText,
    image: img,
  },
  {
    title: "Regulatory Compliance Support",
    description:
      "Our team of regulatory experts helps healthcare providers navigate the complex regulatory landscape. We ensure all products meet national healthcare standards and comply with local and international regulations.",
    icon: ClipboardCheck,
    image: img2,
  },
  {
    title: "Healthcare Partnerships",
    description:
      "We build strategic partnerships with hospitals, clinics, and pharmacies to provide reliable supply chains and expert guidance. Our collaborative approach ensures healthcare providers have access to the medicines they need.",
    icon: HeartPulse,
    image: img3,
  },
  {
    title: "Supply Chain Management",
    description:
      "Our advanced supply chain management system optimizes the distribution network to ensure timely delivery of pharmaceutical products. We maintain strict quality control throughout the entire supply chain.",
    icon: TruckIcon,
    image: img4,
  },
  {
    title: "Healthcare Consultancy",
    description:
      "Our experienced consultants provide expert guidance on pharmaceutical practices, regulatory compliance, and market access. We help healthcare providers optimize their pharmaceutical operations.",
    icon: ShieldCheck,
    image: img5,
  },
]

const additionalServices = [
  {
    title: "Training & Education",
    description:
      "We provide comprehensive training programs for healthcare professionals on pharmaceutical best practices, product usage, and regulatory compliance.",
    icon: Users,
  },
  {
    title: "Market Access Support",
    description:
      "Our team helps international pharmaceutical companies navigate the Ethiopian market, providing insights on regulatory requirements, distribution channels, and market dynamics.",
    icon: Globe,
  },
  {
    title: "Quality Assurance",
    description:
      "We implement rigorous quality control measures to ensure all products meet international standards and maintain their efficacy throughout the supply chain.",
    icon: ShieldCheck,
  },
]

export default function ServicesPageClient() {
  const { ref: headerRef, isInView: headerInView } = useScrollReveal()
  const { ref: coreRef, isInView: coreInView } = useScrollReveal()
  const { ref: additionalRef, isInView: additionalInView } = useScrollReveal()
  const { ref: processRef, isInView: processInView } = useScrollReveal()
  const { ref: ctaRef, isInView: ctaInView } = useScrollReveal()

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative overflow-hidden bg-[#0a3141] py-16 md:py-24" ref={headerRef}>
          {/* Decorative elements - Service themed */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Flowing lines representing service connections */}
            <div className="absolute left-0 top-1/4 h-[2px] w-40 bg-gradient-to-r from-teal-400/40 to-transparent opacity-60 animate-[pulse_8s_ease-in-out_infinite]"></div>
            <div className="absolute right-0 top-1/3 h-[2px] w-60 bg-gradient-to-l from-teal-400/30 to-transparent opacity-50 animate-[pulse_10s_ease-in-out_infinite_reverse]"></div>
            <div className="absolute bottom-1/4 left-10 h-[2px] w-32 bg-gradient-to-r from-teal-400/40 to-transparent opacity-40 animate-[pulse_7s_ease-in-out_infinite]"></div>

            {/* Network nodes */}
            <div className="absolute left-40 top-1/4 h-4 w-4 rounded-full bg-teal-400/30 opacity-60 animate-[pulse_4s_ease-in-out_infinite]"></div>
            <div className="absolute right-60 top-1/3 h-3 w-3 rounded-full bg-teal-400/40 opacity-50 animate-[pulse_5s_ease-in-out_infinite_reverse]"></div>
            <div className="absolute bottom-1/4 left-40 h-5 w-5 rounded-full bg-teal-400/20 opacity-40 animate-[pulse_6s_ease-in-out_infinite]"></div>

            {/* Gear shapes representing service operations */}
            <div className="absolute right-20 top-20 h-16 w-16 opacity-20 animate-[spin_20s_linear_infinite]">
              <div className="h-full w-full rounded-full border-2 border-teal-400/30 relative">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div
                    key={i}
                    className="absolute h-3 w-3 bg-teal-400/30"
                    style={{
                      transform: `rotate(${i * 45}deg) translateY(-12px)`,
                      transformOrigin: "center center",
                      left: "calc(50% - 6px)",
                      top: "calc(50% - 6px)",
                    }}
                  ></div>
                ))}
              </div>
            </div>

            <div className="absolute left-10 bottom-10 h-12 w-12 opacity-15 animate-[spin_15s_linear_infinite_reverse]">
              <div className="h-full w-full rounded-full border border-teal-400/20 relative">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div
                    key={i}
                    className="absolute h-2 w-2 bg-teal-400/20"
                    style={{
                      transform: `rotate(${i * 60}deg) translateY(-9px)`,
                      transformOrigin: "center center",
                      left: "calc(50% - 4px)",
                      top: "calc(50% - 4px)",
                    }}
                  ></div>
                ))}
              </div>
            </div>

            {/* Floating squares representing service packages */}
            <div className="absolute right-1/4 bottom-20 h-10 w-10 rotate-12 transform border border-teal-400/20 opacity-30 animate-[bounce_8s_ease-in-out_infinite]"></div>
            <div className="absolute left-1/3 top-10 h-8 w-8 rotate-45 transform border border-teal-400/30 opacity-25 animate-[bounce_6s_ease-in-out_infinite_reverse]"></div>

            {/* Floating dots grid */}
            <div className="absolute right-0 top-0 grid grid-cols-4 grid-rows-4 gap-4 opacity-20">
              {Array.from({ length: 16 }).map((_, i) => (
                <div key={i} className="h-2 w-2 rounded-full bg-teal-400"></div>
              ))}
            </div>
          </div>

          <div className="container relative px-4 md:px-6">
            <div className="text-center">
              <h1
                className={`text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl ${headerInView ? "animate-fade-up" : "opacity-0"}`}
              >
                Our Services
              </h1>
              <p
                className={`mt-4 text-gray-300 md:text-lg max-w-3xl mx-auto ${headerInView ? "animate-fade-up" : "opacity-0"}`}
                style={{ animationDelay: headerInView ? "200ms" : "0ms" }}
              >
                Comprehensive pharmaceutical solutions to support healthcare providers across Ethiopia
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24" ref={coreRef}>
          <div className="container px-4 md:px-6">
            <div className={`mb-12 text-center ${coreInView ? "animate-fade-up" : "opacity-0"}`}>
              <h2 className="text-3xl font-bold">Core Services</h2>
              <p className="mt-4 text-gray-700 md:text-lg max-w-3xl mx-auto">
                At Chemodose Pharmaceuticals, we provide a wide range of pharmaceutical services to support healthcare
                providers across Ethiopia
              </p>
            </div>

            <div className="space-y-16">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`grid gap-8 items-center ${
                    index % 2 === 0 ? "md:grid-cols-[3fr_2fr]" : "md:grid-cols-[2fr_3fr] md:flex-row-reverse"
                  } ${coreInView ? (index % 2 === 0 ? "animate-fade-right" : "animate-fade-left") : "opacity-0"}`}
                  style={{ animationDelay: coreInView ? `${index * 200}ms` : "0ms" }}
                >
                  <div className="space-y-4">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-teal-100">
                      <service.icon className="h-6 w-6 text-teal-600" />
                    </div>
                    <h3 className="text-2xl font-bold">{service.title}</h3>
                    <p className="text-gray-700">{service.description}</p>
                    <Button asChild variant="outline" className="mt-2">
                      <Link href="/contact" className="flex items-center gap-2">
                        Learn more <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                  <div className="relative h-64 overflow-hidden rounded-xl bg-gray-100 shadow-md md:h-80">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      width={600}
                      height={400}
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-gray-50" ref={additionalRef}>
          <div className="container px-4 md:px-6">
            <div className={`mb-12 text-center ${additionalInView ? "animate-fade-up" : "opacity-0"}`}>
              <h2 className="text-3xl font-bold">Additional Services</h2>
              <p className="mt-4 text-gray-700 md:text-lg max-w-3xl mx-auto">
                We offer a range of complementary services to support your healthcare operations
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {additionalServices.map((service, index) => (
                <Card
                  key={index}
                  className={`border-0 shadow-md h-full hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px] ${additionalInView ? "animate-fade-up" : "opacity-0"}`}
                  style={{ animationDelay: additionalInView ? `${index * 100 + 200}ms` : "0ms" }}
                >
                  <CardHeader className="pb-2">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-teal-100">
                      <service.icon className="h-6 w-6 text-teal-600" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">{service.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="link" className="px-0">
                      <Link href="/contact" className="flex items-center gap-2 text-teal-600 hover:text-teal-700 group">
                        Learn more{" "}
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24" ref={processRef}>
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-2 items-center bg-white rounded-xl shadow-lg overflow-hidden">
              <div
                className={`relative h-full min-h-[400px] w-full overflow-hidden bg-teal-50 ${processInView ? "animate-fade-right" : "opacity-0"}`}
              >
                <Image
                  src={lab}
                  alt="Service process"
                  width={600}
                  height={600}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-transparent"></div>
              </div>
              <div
                className={`flex flex-col justify-center space-y-6 p-8 ${processInView ? "animate-fade-left" : "opacity-0"}`}
              >
                <h3 className="text-2xl font-bold tracking-tighter">Our Service Process</h3>
                <p className="text-gray-700">
                  We follow a structured approach to ensure we deliver the highest quality services to our clients:
                </p>
                <ol className="space-y-6">
                  {[
                    {
                      title: "Initial Consultation",
                      desc: "We meet with you to understand your specific needs and requirements.",
                    },
                    {
                      title: "Customized Solution",
                      desc: "We develop a tailored service package based on your specific requirements.",
                    },
                    {
                      title: "Implementation",
                      desc: "We implement the solution with minimal disruption to your operations.",
                    },
                    {
                      title: "Ongoing Support",
                      desc: "We provide continuous support and regular follow-ups to ensure your satisfaction.",
                    },
                  ].map((step, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-teal-100">
                        <span className="text-teal-600 font-bold">{index + 1}</span>
                      </div>
                      <div>
                        <h4 className="font-semibold">{step.title}</h4>
                        <p className="text-gray-700 mt-1">{step.desc}</p>
                      </div>
                    </li>
                  ))}
                </ol>
                <div className="pt-4">
                  <Button asChild className="mt-4 bg-teal-600 hover:bg-teal-700">
                    <Link href="/contact">Get Started</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-teal-50" ref={ctaRef}>
          <div className="container px-4 md:px-6">
            <div className={`mx-auto max-w-3xl text-center ${ctaInView ? "animate-fade-up" : "opacity-0"}`}>
              <h2 className="text-3xl font-bold mb-6">Ready to Work Together?</h2>
              <p className="mb-8 text-gray-700 md:text-lg">
                Contact us today to learn more about our services and how we can support your healthcare operations.
              </p>
              <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700">
                <Link href="/contact" className="flex items-center gap-2">
                  Contact Us <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
