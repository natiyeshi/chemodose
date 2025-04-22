import type { Metadata } from "next";
import "./globals.css";
import ClientSessionProvider from "@/providers/ClientSessionProvider";
import { Montserrat } from "next/font/google";
import NextTopLoader from "nextjs-toploader";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Chemodose",
    template: "%s - Trusted Healthcare Partner in Ethiopia",
  },
  description:
    "Chemodose Pharmaceuticals PLC imports and distributes high-quality medicines, medical equipment, laboratory tools, veterinary supplies, and agricultural inputs across Ethiopia.",
  keywords: [
    "Chemodose",
    "Pharmaceuticals Ethiopia",
    "Medical Supply Ethiopia",
    "Biochemistry Analyzer",
    "Hematology Analyzer",
    "Latex Examination Gloves",
    "Surgical Gloves",
    "Chromatographies",
    "Animal Husbandry Equipments",
    "Autoclaves",
    "Gas Generators",
    "Chromatography Reference Materials",
    "Synchronization Hormones",
    "HPLC Grade Gases",
    "Hospital Waste Treatment Equipments",
    "Clinical Reagents",
    "Hospital Furnitures",
    "Human Medicines",
    "Veterinary Medicines",
    "Water Quality Test Kits and Reagents",
    "Glasswares",
    "Veternary Supplies Ethiopia",
    "Agricultural Inputs Ethiopia",
    "Healthcare Ethiopia",
    "Chemodose Pharmaceuticals",
  ],
  authors: [
    { name: "Chemodose Pharmaceuticals PLC", url: "https://www.chemodose.net" },
  ],
  openGraph: {
    title: "Chemodose Pharmaceuticals PLC",
    description:
      "Trusted pharmaceutical importer and distributor in Ethiopia. Providing reliable access to medical, veterinary, and lab solutions.",
    url: "https://www.chemodose.net",
    siteName: "Chemodose Pharmaceuticals PLC",
    locale: "en_ET",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClientSessionProvider>
        <body className={`antialiased bg-white ${montserrat.className}`}>
          <span id="top"></span>
          <NextTopLoader />
          {children}
        </body>
      </ClientSessionProvider>
    </html>
  );
}
