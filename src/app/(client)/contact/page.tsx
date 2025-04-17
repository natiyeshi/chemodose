import type { Metadata } from "next"
import ContactPageClient from "./ContactPageClient"

export const metadata: Metadata = {
  title: "Contact Us - Chemodose Pharmaceuticals",
  description: "Get in touch with Chemodose Pharmaceuticals for inquiries about our products and services.",
}

export default function ContactPage() {
  return <ContactPageClient />
}
