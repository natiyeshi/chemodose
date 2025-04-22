"use client";

import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { ITestimonial } from "@/interfaces/testimoial.interface";

const testimonials = [
  {
    content:
      "We believe that the knowledge limit skills gained through your training and workshops significantly improved our pharmaceutical practices and the protection of our asset, we look forward to continuing our partnership with timely safety measures and quality assurance, ensuring to your excellent support and guidance, leading to your satisfied clients and emergency pharmaceutical efforts.",
    author: "Alemayehu getachew",
    position: "Pharmacist",
  },
  {
    content:
      "We believe that the knowledge limit skills gained through your training and workshops significantly improved our pharmaceutical practices and the protection of our asset, we look forward to continuing our partnership with timely safety measures and quality assurance, ensuring to your excellent support and guidance, leading to your satisfied clients and emergency pharmaceutical efforts.",
    author: "Alemayehu getachew",
    position: "Pharmacist",
  },
  {
    content:
      "We believe that the knowledge limit skills gained through your training and workshops significantly improved our pharmaceutical practices and the protection of our asset, we look forward to continuing our partnership with timely safety measures and quality assurance, ensuring to your excellent support and guidance, leading to your satisfied clients and emergency pharmaceutical efforts.",
    author: "Alemayehu getachew",
    position: "Pharmacist",
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { ref: sectionRef, isInView } = useScrollReveal();

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const [testimonials, setTestimonials] = useState<ITestimonial[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchs = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/testimonial/`
        );
        const data: ITestimonial[] = await response.json();
        setTestimonials(data);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchs();
  }, []);

  return (
    <section className="py-16 md:py-24" ref={sectionRef}>
      <div className="container px-4 md:px-6">
        <h2
          className={`mb-10 text-center text-3xl font-bold tracking-tighter ${
            isInView ? "animate-fade-up" : "opacity-0"
          }`}
        >
          Our <span className="text-teal-500">Testimonials</span>.
        </h2>
        <p
          className={`mb-8 text-center text-gray-700 ${
            isInView ? "animate-fade-up" : "opacity-0"
          }`}
          style={{ animationDelay: isInView ? "100ms" : "0ms" }}
        >
          See What Our Clients Say About Us
        </p>

        <div
          className={`relative mx-auto max-w-4xl ${
            isInView ? "animate-fade-up" : "opacity-0"
          }`}
          style={{ animationDelay: isInView ? "200ms" : "0ms" }}
        >
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-none px-4">
                  <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300">
                    <CardHeader className="pb-2">
                      <Quote className="h-10 w-10 text-teal-500 opacity-50" />
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">{testimonial.message}</p>
                    </CardContent>
                    <CardFooter className="flex flex-col items-start">
                      <p className="font-semibold">{testimonial.name}</p>
                      {/* <p className="text-sm text-gray-500">
                        {testimonial.position}
                      </p> */}
                    </CardFooter>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex justify-center gap-2">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full hover:bg-teal-50 transition-all duration-300"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Previous testimonial</span>
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="rounded-full hover:bg-teal-50 transition-all duration-300"
              onClick={nextSlide}
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Next testimonial</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
