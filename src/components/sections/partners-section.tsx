"use client";

import Image from "next/image";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

import { useEffect, useState } from "react";

export default function PartnersSection() {
  const { ref: sectionRef, isInView } = useScrollReveal();
  const [partners, setPartners] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/partner`,
          {
            cache: "no-store",
          }
        );
        const data = await res.json();

        const images = data.map((item: { image: string }) => item.image);
        setPartners(images);
      } catch (error) {
        console.error("Failed to fetch partners:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPartners();
  }, []);

  return (
    <section className="py-16 md:py-24" ref={sectionRef}>
      <div className="container px-4 md:px-6">
        <h2
          className={`mb-10 text-center text-3xl font-bold tracking-tighter ${
            isInView ? "animate-fade-up" : "opacity-0"
          }`}
        >
          Our <span className="text-teal-500">Partners</span>.
        </h2>
        <p
          className={`mb-8 text-center text-gray-700 ${
            isInView ? "animate-fade-up" : "opacity-0"
          }`}
          style={{ animationDelay: isInView ? "100ms" : "0ms" }}
        >
          We Work with the best partners!
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8">
          {partners.map((img, i) => (
            <div
              key={i}
              className={`relative h-12 w-24 grayscale transition-all duration-500 hover:grayscale-0 hover:scale-110 ${
                isInView ? "animate-fade-up" : "opacity-0"
              }`}
              style={{
                animationDelay: isInView ? `${(i + 1) * 100 + 200}ms` : "0ms",
              }}
            >
              <Image
                src={img}
                width={96}
                height={48}
                unoptimized
                className="h-full w-full object-contain"
                alt={`Partner logo ${i + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
