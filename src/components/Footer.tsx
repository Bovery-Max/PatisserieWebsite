import { motion } from "framer-motion"
import { Instagram, Facebook, Youtube, Mail, Phone, MapPin } from "lucide-react"

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
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Us */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">Sweet Horizon Bakery</h3>
            <p className="text-gray-300 mb-4">
              Crafting sweet moments since 2010. Our artisanal pastries and custom cakes are made with love,
              using only the finest ingredients sourced from local farmers.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.2, color: "#F69D39" }}
                  transition={{ duration: 0.2 }}
                  className="text-gray-300 hover:text-primary"
                  aria-label={social.label}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <a
                    href={link.path}
                    className="text-gray-300 hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin size={18} className="text-primary" />
                <span className="text-gray-300">123 Bakery Lane, Sweet City, SC 12345</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-primary" />
                <span className="text-gray-300">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-primary" />
                <span className="text-gray-300">hello@sweethorizon.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Sweet Horizon Bakery. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}