import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Twitter,
} from "lucide-react";
import Logo from "@/components/logo";
import logo from "@/../public/assets/logo/logo.svg";
import Image from "next/image";

const pages = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "#about" },
  { name: "Products", href: "#products" },
  { name: "Services", href: "#services" },
  { name: "Contact Us", href: "#contact" },
];

const services = [
  { name: "Pharmaceutical Distribution", href: "#" },
  { name: "Importation of Pharmaceuticals", href: "#" },
  { name: "Healthcare Consultancy and Support", href: "#" },
  { name: "Supply Chain Management", href: "#" },
  { name: "Regulatory Compliance", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a3141] text-white">
      <div className="container px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            {/* <Logo /> */}
            <Image className="w-[200px] mb-8" src={logo} alt="Logo" />
            <p className="max-w-xs text-gray-300">
              Bringing quality healthcare solutions to every corner of Ethiopia.
            </p>
            <p className="text-sm text-gray-300">
              Connect with us on Social Media.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-300 hover:text-teal-400">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-teal-400">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-teal-400">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-teal-400">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Explore</h3>
            <ul className="space-y-2">
              {pages.map((page) => (
                <li key={page.name}>
                  <Link
                    href={page.href}
                    className="text-gray-300 hover:text-teal-400"
                  >
                    {page.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-gray-300 hover:text-teal-400"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Address</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail className="mt-1 h-5 w-5 flex-shrink-0 text-teal-400" />
                <div>
                  <a
                    href="mailto:info@chemodose.com"
                    className="text-gray-300 hover:text-teal-400"
                  >
                    info@chemodose.com
                  </a>
                  <br />
                  <a
                    href="mailto:chemodospharma@gmail.com"
                    className="text-gray-300 hover:text-teal-400"
                  >
                    chemodospharma@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="mt-1 h-5 w-5 flex-shrink-0 text-teal-400" />
                <div>
                  <a
                    href="tel:+251914314158"
                    className="text-gray-300 hover:text-teal-400"
                  >
                    +251 914 314 158
                  </a>
                  <br />
                  <a
                    href="tel:+251945794450"
                    className="text-gray-300 hover:text-teal-400"
                  >
                    +251 945 794 450
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-6">
          <p className="text-center text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Chemodose Pharmaceuticals. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
