"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useState } from "react";

export default function ContactPageClient() {
  const { ref: headerRef, isInView: headerInView } = useScrollReveal();
  const { ref: formRef, isInView: formInView } = useScrollReveal();
  const { ref: mapRef, isInView: mapInView } = useScrollReveal();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/message`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ formData }),
        }
      );

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Something went wrong.");

      setSuccess("Message sent successfully!");
      setFormData({ name: "", email: "", phoneNumber: "", message: "" });
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section
          className="relative overflow-hidden bg-[#0a3141] py-16 md:py-24"
          ref={headerRef}
        >
          {/* Decorative elements - Contact themed */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Message bubbles */}
            <div className="absolute left-10 top-1/4 h-16 w-16 rounded-tl-2xl rounded-tr-2xl rounded-br-2xl border-2 border-teal-400/20 opacity-40 animate-[bounce_6s_ease-in-out_infinite]"></div>
            <div className="absolute right-20 top-1/3 h-12 w-12 rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl border border-teal-400/30 opacity-30 animate-[bounce_8s_ease-in-out_infinite_reverse]"></div>
            <div className="absolute bottom-10 left-1/3 h-10 w-10 rounded-tl-xl rounded-tr-xl rounded-br-xl border-2 border-teal-400/20 opacity-50 animate-[bounce_7s_ease-in-out_infinite]"></div>

            {/* Email icons */}
            <div className="absolute right-1/4 top-20 h-12 w-16 opacity-30 animate-[pulse_5s_ease-in-out_infinite]">
              <div
                className="h-full w-full border border-teal-400/30"
                style={{
                  clipPath:
                    "polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 50% 100%, 50% 75%, 0% 75%)",
                }}
              ></div>
            </div>

            {/* Phone icons */}
            <div className="absolute left-20 bottom-20 h-14 w-8 rounded-full border border-teal-400/20 opacity-40 animate-[pulse_4s_ease-in-out_infinite_reverse]"></div>

            {/* Connection dots */}
            <div className="absolute right-10 bottom-1/4 flex space-x-1 opacity-40">
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className="h-2 w-2 rounded-full bg-teal-400/60 animate-[pulse_3s_ease-in-out_infinite]"
                  style={{ animationDelay: `${i * 0.2}s` }}
                ></div>
              ))}
            </div>

            {/* Map pin */}
            <div className="absolute left-1/4 top-10 opacity-30 animate-[bounce_5s_ease-in-out_infinite]">
              <div className="h-6 w-6 rounded-full bg-teal-400/30"></div>
              <div
                className="mx-auto -mt-1 h-8 w-2 bg-teal-400/30"
                style={{ clipPath: "polygon(0% 0%, 100% 0%, 50% 100%)" }}
              ></div>
            </div>

            {/* Floating circles */}
            <div className="absolute right-1/3 bottom-10 h-20 w-20 rounded-full border border-teal-400/20 opacity-20 animate-[spin_15s_linear_infinite]"></div>

            {/* Floating dots grid */}
            <div className="absolute left-0 top-0 grid grid-cols-5 grid-rows-5 gap-3 opacity-15">
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
                Contact Us
              </h1>
              <p
                className={`mt-4 text-gray-300 md:text-lg max-w-3xl mx-auto ${
                  headerInView ? "animate-fade-up" : "opacity-0"
                }`}
                style={{ animationDelay: headerInView ? "200ms" : "0ms" }}
              >
                We&apos;re here to help. Reach out to us for any inquiries about
                our products and services.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24" ref={formRef}>
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-2">
              <div className={formInView ? "animate-fade-right" : "opacity-0"}>
                <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
                <p className="text-gray-700 mb-8">
                  Have questions about our products or services? Fill out the
                  form below and our team will get back to you as soon as
                  possible.
                </p>

                {/* <form className="space-y-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First name</Label>
                      <Input
                        id="first-name"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last name</Label>
                      <Input
                        id="last-name"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      placeholder="Enter the subject of your message"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Enter your message"
                      className="min-h-[120px] resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-teal-600 hover:bg-teal-700"
                  >
                    <Send className="mr-2 h-4 w-4" /> Send Message
                  </Button>
                </form> */}
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phoneNumber">Phone</Label>
                    <Input
                      id="phoneNumber"
                      type="tel"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Enter your message"
                      className="min-h-[120px] resize-none"
                      required
                    />
                  </div>
                  {error && <p className="text-red-500 text-sm">{error}</p>}
                  {success && (
                    <p className="text-green-600 text-sm">{success}</p>
                  )}
                  <Button
                    type="submit"
                    className="w-full bg-teal-600 hover:bg-teal-700"
                    disabled={loading}
                  >
                    <Send className="mr-2 h-4 w-4" />
                    {loading ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>

              <div
                className={`space-y-8 ${
                  formInView ? "animate-fade-left" : "opacity-0"
                }`}
                style={{ animationDelay: formInView ? "300ms" : "0ms" }}
              >
                <div>
                  <h2 className="text-3xl font-bold mb-6">
                    Contact Information
                  </h2>
                  <p className="text-gray-700 mb-8">
                    You can also reach us directly using the contact information
                    below.
                  </p>
                </div>

                <div className="grid gap-6">
                  <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-teal-100">
                          <MapPin className="h-5 w-5 text-teal-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold">Our Location</h3>
                          <p className="text-gray-700 mt-1">
                            Addis Ababa, Ethiopia
                          </p>
                          <p className="text-gray-700">
                            Nifas silk lafto wereda 12
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-teal-100">
                          <Phone className="h-5 w-5 text-teal-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold">Phone Numbers</h3>
                          <p className="text-gray-700 mt-1">+251 914 314 158</p>
                          <p className="text-gray-700 mt-1">+251 945 794 450</p>
                        
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-teal-100">
                          <Mail className="h-5 w-5 text-teal-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold">Email Addresses</h3>
                          <p className="text-gray-700 mt-1">
                            info@chemodose.com
                          </p>
                          <p className="text-gray-700">chemodose@gmail.com</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-teal-100">
                          <Clock className="h-5 w-5 text-teal-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold">Business Hours</h3>
                          <p className="text-gray-700 mt-1">
                            Monday - Friday: 8:30 AM - 5:30 PM
                          </p>
                          <p className="text-gray-700">
                            Saturday: 9:00 AM - 1:00 PM
                          </p>
                          <p className="text-gray-700">Sunday: Closed</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-gray-50" ref={mapRef}>
          <div className="container px-4 md:px-6">
            <div
              className={`mb-12 text-center ${
                mapInView ? "animate-fade-up" : "opacity-0"
              }`}
            >
              <h2 className="text-3xl font-bold">Our Location</h2>
              <p className="mt-4 text-gray-700 md:text-lg max-w-3xl mx-auto">
                Visit our office in Addis Ababa, Ethiopia
              </p>
            </div>

            <div
              className={`overflow-hidden rounded-xl shadow-lg ${
                mapInView ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: mapInView ? "200ms" : "0ms" }}
            >
              <div className="aspect-video w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3114.9499672603374!2d38.72498367375173!3d8.957787190102216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b814c7e5f69d9%3A0xa174bb5a3ae8827b!2sChemodose%20Pharmaceuticals!5e1!3m2!1sen!2sus!4v1745407851573!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full w-full"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
