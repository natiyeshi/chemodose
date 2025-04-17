import type { Metadata } from "next"
import ProductsClientPage from "./ProductsPageClient"

export const metadata: Metadata = {
  title: "Products - Chemodose Pharmaceuticals",
  description: "Explore our range of high-quality pharmaceutical products for healthcare providers across Ethiopia.",
}

export default function ProductsPage() {
  return <ProductsClientPage />
}
