import type { Metadata } from "next"
import AboutPageClient from "./AboutPageClient"

export const metadata: Metadata = {
  title: "About Us - Chemodose Pharmaceuticals",
  description:
    "Learn about Chemodose Pharmaceuticals PLC, a leading Ethiopian pharmaceutical importer and distributor.",
}

export default function AboutPage() {
  return <AboutPageClient />
}
