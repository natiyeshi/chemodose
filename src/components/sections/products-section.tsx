"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { IProduct } from "@/interfaces/product.interface";

// const products = [
//   {
//     name: "Product Name 1",
//     description: "Short description goes here",
//     image: "/placeholder.svg?height=300&width=300",
//   },
//   {
//     name: "Product Name",
//     description: "Short description goes here",
//     image: "/placeholder.svg?height=300&width=300",
//   },
//   {
//     name: "Product Name",
//     description: "Short description goes here",
//     image: "/placeholder.svg?height=300&width=300",
//   },
//   {
//     name: "Product Name",
//     description: "Short description goes here",
//     image: "/placeholder.svg?height=300&width=300",
//   },
//   {
//     name: "Product Name",
//     description: "Short description goes here",
//     image: "/placeholder.svg?height=300&width=300",
//   },
// ];

export default function ProductsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const { ref: sectionRef, isInView } = useScrollReveal();
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const nextSlide = () => {
    if (currentIndex < products.length - 3) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(products.length - 3);
    }
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/product/`
        );
        const data: IProduct[] = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section id="products" className="py-16 md:py-24" ref={sectionRef}>
      <div className="container px-4 md:px-6">
        <div className={`mb-10 ${isInView ? "animate-fade-up" : "opacity-0"}`}>
          <h2 className="text-3xl font-bold tracking-tighter">
            Our <span className="text-teal-500">Products</span>
          </h2>
          <p className="mt-2 text-gray-700 md:text-lg">
            At Chemodose Pharmaceuticals, we offer a wide range of high-quality,
            safe, and affordable pharmaceutical products to meet the needs of
            healthcare providers across Ethiopia. Our selection includes:
          </p>
        </div>

        <div
          className={`relative ${isInView ? "animate-fade-up" : "opacity-0"}`}
          style={{ animationDelay: isInView ? "200ms" : "0ms" }}
        >
          <div ref={containerRef} className="flex overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}
            >
              {products && products.map((product, index) => (
                <div key={index} className="w-full flex-none px-2 md:w-1/3">
                  <Card className="h-full border-0 shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
                    <div className="relative aspect-square w-full overflow-hidden rounded-t-lg bg-gray-100">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        width={300}
                        height={300}
                        unoptimized
                        className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                        alt={product.name}
                      />
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-xl">{product.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{product.desc}</CardDescription>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white shadow-md hover:bg-teal-50 transition-all duration-300"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-5 w-5" />
            <span className="sr-only">Previous slide</span>
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white shadow-md hover:bg-teal-50 transition-all duration-300"
            onClick={nextSlide}
          >
            <ChevronRight className="h-5 w-5" />
            <span className="sr-only">Next slide</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
