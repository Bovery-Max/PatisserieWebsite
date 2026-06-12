import { motion } from "framer-motion"
import { Instagram, Facebook, Youtube, Mail, Phone, MapPin, CakeSlice } from "lucide-react"

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Youtube, href: "#", label: "YouTube" },
]

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "Cakes", path: "/cakes" },
  { name: "Desserts", path: "/desserts" },
  { name: "Cookies & Pastries", path: "/cookies-pastries" },
  { name: "Contact", path: "/contact" },
  { name: "Location", path: "/location" },
]

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About Us */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-primary-500/20 rounded-xl">
                <CakeSlice size={24} className="text-primary-500" />
              </div>
              <h3 className="text-2xl font-bold text-white font-heading">
                Sweet Horizon Bakery
              </h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Crafting sweet moments since 2010. Our artisanal pastries and custom cakes are made with love,
              using only the finest ingredients sourced from local farmers.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                  className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-gray-300 hover:text-primary-500 hover:bg-white/20 transition-colors cursor-pointer"
                  aria-label={social.label}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <a
                    href={link.path}
                    className="text-gray-300 hover:text-primary-500 transition-colors duration-300 inline-block cursor-pointer"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-primary-500/10 rounded-lg">
                  <MapPin size={18} className="text-primary-500" />
                </div>
                <span className="text-gray-300">123 Bakery Lane, Sweet City, SC 12345</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-primary-500/10 rounded-lg">
                  <Phone size={18} className="text-primary-500" />
                </div>
                <span className="text-gray-300">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-primary-500/10 rounded-lg">
                  <Mail size={18} className="text-primary-500" />
                </div>
                <span className="text-gray-300">hello@sweethorizon.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Sweet Horizon Bakery. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-gray-400 text-sm">
              <a href="#" className="hover:text-primary-500 transition-colors cursor-pointer">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary-500 transition-colors cursor-pointer">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}