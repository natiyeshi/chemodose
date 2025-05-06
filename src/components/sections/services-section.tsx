"use client";

import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowRight,
  FileText,
  HeartPulse,
  ShieldCheck,
  TruckIcon,
  ClipboardCheck,
  Droplet,
} from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

import img from "@/../public/assets/images/phar.png";
import img2 from "@/../public/assets/images/serv2.png";
import img3 from "@/../public/assets/images/serv3.png";
import img4 from "@/../public/assets/images/serv4.png";
import img5 from "@/../public/assets/images/serv5.png";
import lab from "@/../public/assets/images/lab.png";
import agri from "@/../public/assets/images/image.png";

export const services = [
  {
    title: "Supply of Human Medicines, Medical Equipments & Supplies",
    description:
      "Providing a wide range of human medicines, medical equipment, and essential supplies to healthcare providers.",
    icon: FileText,
    image: img,
  },
  {
    title: "Supply of Research and Laboratory Equipment",
    description:
      "Delivering high-quality research and laboratory equipment to support scientific advancements.",
    icon: ClipboardCheck,
    image: img2,
  },
  {
    title: "Supply of Veterinary Medicines, Equipments & Supplies",
    description:
      "Ensuring the availability of veterinary medicines and equipment to support animal healthcare.",
    icon: HeartPulse,
    image: img3,
  },
  {
    title: "Supply of Water Quality Control and Consumables Inputs",
    description:
      "Providing comprehensive water quality testing equipment and consumables to ensure safe and clean water standards.",
    icon: Droplet,
    image: lab,
  },
  {
    title: "Pharmaceutical Import & Distribution",
    description:
      "Importing and distributing high-quality medicines and delivering essential medicines across Ethiopia.",
    icon: FileText,
    image: img4,
  },
  {
    title: "Agricultural and Environmental Inputs",
    description:
      "Providing sustainable agricultural and environmental solutions to support eco-friendly practices and productivity.",
    icon: ClipboardCheck,
    image: agri,
  },
  {
    title: "Supply Chain Management",
    description:
      "Optimizing the distribution network to ensure timely delivery of pharmaceutical products across Ethiopia.",
    icon: TruckIcon,
    image: img5,
  },
  // {
  //   title: "Healthcare Consultancy",
  //   description:
  //     "Offering expert guidance on pharmaceutical practices, regulatory compliance, and market access.",
  //   icon: ShieldCheck,
  //   image: lab,
  // },
 
];

export default function ServicesSection() {
  const { ref: sectionRef, isInView } = useScrollReveal();

  return (
    <section id="services" className="py-16 md:py-24" ref={sectionRef}>
      <div className="container px-4 md:px-6">
        <div className={`mb-10 ${isInView ? "animate-fade-up" : "opacity-0"}`}>
          <h2 className="text-3xl font-bold tracking-tighter">
            Our <span className="text-teal-500">Services</span>
          </h2>
          <p className="mt-2 text-gray-700 md:text-lg">
            At Chemodose Pharmaceuticals, we provide a wide range of
            pharmaceutical solutions to support healthcare providers across
            Ethiopia.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`border-0 shadow-md transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px] ${
                isInView ? "animate-fade-up" : "opacity-0"
              }`}
              style={{
                animationDelay: isInView ? `${(index + 1) * 100}ms` : "0ms",
              }}
            >
              <CardHeader className="bg-[#0a3141] text-white">
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-teal-500/20 group-hover:bg-teal-500/30 transition-colors duration-300">
                  <service.icon className="h-6 w-6 text-teal-500" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <CardDescription className="text-gray-700">
                  {service.description}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Link
                  href="/services"
                  className="flex items-center gap-1 text-sm font-medium text-teal-600 hover:text-teal-700 group"
                >
                  Learn more{" "}
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
