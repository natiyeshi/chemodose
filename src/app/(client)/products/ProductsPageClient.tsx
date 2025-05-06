"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  ShieldCheck,
  Pill,
  Stethoscope,
  Microscope,
} from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useEffect, useState } from "react";
import { IProduct } from "@/interfaces/product.interface";

// const productCategories = [
//   {
//     id: "all",
//     name: "All Products",
//   },
//   {
//     id: "antibiotics",
//     name: "Antibiotics",
//   },
//   {
//     id: "analgesics",
//     name: "Analgesics",
//   },
//   {
//     id: "cardiovascular",
//     name: "Cardiovascular",
//   },
//   {
//     id: "respiratory",
//     name: "Respiratory",
//   },
// ]

// const products = [
//   {
//     id: 1,
//     name: "Amoxicillin",
//     description: "Broad-spectrum antibiotic used to treat bacterial infections",
//     image: "/placeholder.svg?height=300&width=300",
//     category: "antibiotics",
//     featured: true,
//   },
//   {
//     id: 2,
//     name: "Paracetamol",
//     description: "Pain reliever and fever reducer for mild to moderate pain",
//     image: "/placeholder.svg?height=300&width=300",
//     category: "analgesics",
//     featured: true,
//   },
//   {
//     id: 3,
//     name: "Atenolol",
//     description: "Beta-blocker used to treat high blood pressure and heart conditions",
//     image: "/placeholder.svg?height=300&width=300",
//     category: "cardiovascular",
//     featured: false,
//   },
//   {
//     id: 4,
//     name: "Salbutamol",
//     description: "Bronchodilator that relaxes muscles in the airways and increases air flow to the lungs",
//     image: "/placeholder.svg?height=300&width=300",
//     category: "respiratory",
//     featured: false,
//   },
//   {
//     id: 5,
//     name: "Ciprofloxacin",
//     description: "Antibiotic used to treat a variety of bacterial infections",
//     image: "/placeholder.svg?height=300&width=300",
//     category: "antibiotics",
//     featured: false,
//   },
//   {
//     id: 6,
//     name: "Ibuprofen",
//     description: "Nonsteroidal anti-inflammatory drug used to reduce pain and inflammation",
//     image: "/placeholder.svg?height=300&width=300",
//     category: "analgesics",
//     featured: true,
//   },
//   {
//     id: 7,
//     name: "Lisinopril",
//     description: "ACE inhibitor used to treat high blood pressure and heart failure",
//     image: "/placeholder.svg?height=300&width=300",
//     category: "cardiovascular",
//     featured: false,
//   },
//   {
//     id: 8,
//     name: "Fluticasone",
//     description: "Corticosteroid used to treat asthma and allergic rhinitis",
//     image: "/placeholder.svg?height=300&width=300",
//     category: "respiratory",
//     featured: false,
//   },
//   {
//     id: 9,
//     name: "Azithromycin",
//     description: "Antibiotic used to treat a variety of bacterial infections",
//     image: "/placeholder.svg?height=300&width=300",
//     category: "antibiotics",
//     featured: false,
//   },
// ]

const benefits = [
  {
    title: "Quality Assurance",
    description:
      "All our products meet international quality standards and are sourced from reputable manufacturers.",
    icon: ShieldCheck,
  },
  {
    title: "Comprehensive Range",
    description:
      "We offer a wide range of pharmaceutical products to meet diverse healthcare needs.",
    icon: Pill,
  },
  {
    title: "Healthcare Support",
    description:
      "Our team provides expert guidance on product selection and usage for optimal patient outcomes.",
    icon: Stethoscope,
  },
  {
    title: "Research-Backed",
    description:
      "Our products are backed by scientific research and clinical evidence for efficacy and safety.",
    icon: Microscope,
  },
];

export default function ProductsClientPage() {
  const { ref: headerRef, isInView: headerInView } = useScrollReveal();
  const { ref: featuredRef, isInView: featuredInView } = useScrollReveal();
  const { ref: categoriesRef, isInView: categoriesInView } = useScrollReveal();
  const { ref: benefitsRef, isInView: benefitsInView } = useScrollReveal();
  const { ref: ctaRef, isInView: ctaInView } = useScrollReveal();

  const [products, setProducts] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data: IProduct[] = await response.json();
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/product/`
        );
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
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section
          className="relative overflow-hidden bg-[#0a3141] py-16 md:py-24"
          ref={headerRef}
        >
          {/* Decorative elements - Product themed */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Floating pill shapes */}
            <div className="absolute left-10 top-1/4 h-8 w-20 rounded-full bg-teal-400/10 opacity-60 animate-[pulse_4s_ease-in-out_infinite]"></div>
            <div className="absolute right-20 top-1/3 h-6 w-16 rounded-full bg-teal-400/15 opacity-50 animate-[pulse_5s_ease-in-out_infinite_reverse]"></div>
            <div className="absolute bottom-10 left-1/3 h-10 w-24 rounded-full bg-teal-400/10 opacity-40 animate-[pulse_6s_ease-in-out_infinite]"></div>
            <div className="absolute right-1/4 bottom-1/4 h-8 w-20 rounded-full bg-teal-400/15 opacity-30 animate-[pulse_7s_ease-in-out_infinite_reverse]"></div>

            {/* Circular elements representing medicine tablets */}
            <div className="absolute left-1/4 top-10 h-12 w-12 rounded-full border-2 border-teal-400/20 opacity-40 animate-[spin_15s_linear_infinite]"></div>
            <div className="absolute right-1/3 top-1/4 h-16 w-16 rounded-full border border-teal-400/15 opacity-30 animate-[spin_20s_linear_infinite_reverse]"></div>
            <div className="absolute bottom-20 left-20 h-10 w-10 rounded-full border-2 border-teal-400/20 opacity-50 animate-[spin_12s_linear_infinite]"></div>

            {/* Hexagonal shapes representing chemical structures */}
            <div className="absolute right-10 top-20 h-16 w-14 rotate-[30deg] transform opacity-20">
              <div
                className="h-full w-full border-2 border-teal-400/30"
                style={{
                  clipPath:
                    "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                }}
              ></div>
            </div>
            <div className="absolute left-1/3 bottom-10 h-12 w-10 rotate-[15deg] transform opacity-15 animate-[bounce_10s_ease-in-out_infinite]">
              <div
                className="h-full w-full border border-teal-400/20"
                style={{
                  clipPath:
                    "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                }}
              ></div>
            </div>

            {/* Floating dots grid - representing molecule structure */}
            <div className="absolute right-0 bottom-0 grid grid-cols-5 grid-rows-5 gap-3 opacity-20">
              {Array.from({ length: 25 }).map((_, i) => (
                <div key={i} className="h-2 w-2 rounded-full bg-teal-400"></div>
              ))}
            </div>
          </div>

          <div className="container relative px-4 md:px-6">
            <div className="text-center">
              <h1
                className={`text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl ${
                  headerInView ? "animate-fade-up" : "opacity-0"
                }`}
              >
                Our Products
              </h1>
              <p
                className={`mt-4 text-gray-300 md:text-lg max-w-3xl mx-auto ${
                  headerInView ? "animate-fade-up" : "opacity-0"
                }`}
                style={{ animationDelay: headerInView ? "200ms" : "0ms" }}
              >
                Delivering high-quality, affordable pharmaceutical products to
                healthcare providers across Ethiopia
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24" ref={featuredRef}>
          <div className="container px-4 md:px-6">
            <div
              className={`mb-12 text-center ${
                featuredInView ? "animate-fade-up" : "opacity-0"
              }`}
            >
              <h2 className="text-3xl font-bold">Featured Products</h2>
              <p className="mt-4 text-gray-700 md:text-lg max-w-3xl mx-auto">
                Explore our selection of high-quality pharmaceutical products
                that meet international standards
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {products
                .filter((product) => product.isFeatured)
                .map((product, index) => (
                  <Card
                    key={product._id}
                    className={`overflow-hidden border-0 shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px] ${
                      featuredInView ? "animate-fade-up" : "opacity-0"
                    }`}
                    style={{
                      animationDelay: featuredInView
                        ? `${index * 100 + 200}ms`
                        : "0ms",
                    }}
                  >
                    <div className="relative aspect-square w-full h-[300px] overflow-hidden bg-gray-100">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        width={300}
                        height={300}
                        unoptimized
                        className="h-full w-full object-cover transition-transform hover:scale-105 duration-500"
                        alt={product.name}
                      />
                      <Badge className="absolute right-2 top-2 bg-teal-500 hover:bg-teal-600">
                        Featured
                      </Badge>
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-xl">{product.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">{product.desc}</p>
                    </CardContent>
                    <CardFooter>
                      <Button asChild variant="outline" className="w-full">
                        <Link href="/contact">Request Information</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-gray-50" ref={categoriesRef}>
          <div className="container px-4 md:px-6">
            <div
              className={`mb-12 text-center ${
                categoriesInView ? "animate-fade-up" : "opacity-0"
              }`}
            >
              <h2 className="text-3xl font-bold">Product Categories</h2>
              <p className="mt-4 text-gray-700 md:text-lg max-w-3xl mx-auto">
                Browse our comprehensive range of pharmaceutical products by
                category
              </p>
            </div>

            <Tabs
              defaultValue="all"
              className={`w-full grid gap-6 sm:grid-cols-2 lg:grid-cols-3 ${
                categoriesInView ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: categoriesInView ? "200ms" : "0ms" }}
            >
              {/* <div className="mb-8 flex justify-center">
                <TabsList className="grid w-full max-w-2xl grid-cols-2 md:grid-cols-5">
                  {productCategories.map((category) => (
                    <TabsTrigger key={category.id} value={category.id} className="text-sm md:text-base">
                      {category.name}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div> */}

              {/* {productCategories.map((category) => (
                <TabsContent key={category.id} value={category.id} className="mt-0">
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"> */}
              {products
                // .filter((product) => category.id === "all" || product.category === category.id)
                .map((product, index) => (
                  <Card
                    key={product._id}
                    className="overflow-hidden  border-0 shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]"
                  >
                    <div className="relative aspect-square w-full h-[300px] overflow-hidden ">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        width={300}
                        height={300}
                        unoptimized
                        className="h-full w-full object-cover transition-transform hover:scale-105 duration-500"
                        alt={product.name}
                      />
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-xl">{product.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">{product.desc}</p>
                    </CardContent>
                    <CardFooter>
                      <Button asChild variant="outline" className="w-full">
                        <Link href="/contact">Request Information</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              {/* </div>
                </TabsContent>
              ))} */}
            </Tabs>
          </div>
        </section>

        <section className="py-16 md:py-24" ref={benefitsRef}>
          <div className="container px-4 md:px-6">
            <div
              className={`mb-12 text-center ${
                benefitsInView ? "animate-fade-up" : "opacity-0"
              }`}
            >
              <h2 className="text-3xl font-bold">Why Choose Our Products?</h2>
              <p className="mt-4 text-gray-700 md:text-lg max-w-3xl mx-auto">
                At Chemodose Pharmaceuticals, we are committed to providing the
                highest quality pharmaceutical products
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {benefits.map((benefit, index) => (
                <Card
                  key={index}
                  className={`border-0 shadow-md h-full hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px] ${
                    benefitsInView ? "animate-fade-up" : "opacity-0"
                  }`}
                  style={{
                    animationDelay: benefitsInView
                      ? `${index * 100 + 200}ms`
                      : "0ms",
                  }}
                >
                  <CardHeader className="pb-2 flex flex-col items-center text-center">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-teal-100">
                      <benefit.icon className="h-8 w-8 text-teal-600" />
                    </div>
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-700">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-teal-50" ref={ctaRef}>
          <div className="container px-4 md:px-6">
            <div
              className={`mx-auto max-w-3xl text-center ${
                ctaInView ? "animate-fade-up" : "opacity-0"
              }`}
            >
              <h2 className="text-3xl font-bold mb-6">
                Need More Information?
              </h2>
              <p className="mb-8 text-gray-700 md:text-lg">
                Our team is ready to assist you with product information,
                pricing, and availability. Contact us today to learn more about
                our pharmaceutical products.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-teal-600 hover:bg-teal-700"
              >
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
  );
}
