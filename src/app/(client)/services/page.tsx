import type { Metadata } from "next"
import ServicesPageClient from "./ServicesClientPage"

export const metadata: Metadata = {
  title: "Services - Chemodose Pharmaceuticals",
  description: "Explore our comprehensive range of pharmaceutical services for healthcare providers across Ethiopia.",
}

export default function ServicesPage() {
  return <ServicesPageClient />
}
