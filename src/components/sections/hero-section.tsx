import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import landingPage from "@/../public/assets/images/landing.png"

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#0a3141] py-16 md:py-24">
      <div className="container grid items-center gap-8 px-4 md:grid-cols-2 md:px-6">
        <div className="space-y-6 animate-fade-right animate-once animate-duration-1000 animate-delay-100">
          <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
            Bringing Quality <br />
            Healthcare to Every Home
          </h1>
          <p className="max-w-[600px] text-gray-200 md:text-lg">
           At Chemodose Pharmaceuticals PLC, we believe that access to high-quality medicine is a right, not a privilege. As a leading pharmaceutical distributor, we are committed to delivering safe, effective, and affordable medical solutions to healthcare providers and communities across Ethiopia.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild className="bg-teal-500 hover:bg-teal-600">
              <Link href="#about">About Us</Link>
            </Button>
            <Button asChild variant="outline" className=" ">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
        <Card className="overflow-hidden rounded-xl border-0 shadow-lg animate-fade-left animate-once animate-duration-1000 animate-delay-300">
          <div className="relative aspect-square w-full overflow-hidden md:aspect-[4/3]">
            <Image
              src={landingPage}
              alt="Medical device"
              width={600}
              height={600}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </Card>
      </div>
    </section>
  )
}
