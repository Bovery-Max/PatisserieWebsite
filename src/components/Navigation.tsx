import { useState, useEffect } from "react"
import { Link, NavLink } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, CakeSlice } from "lucide-react"

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Cakes", path: "/cakes" },
  { name: "Desserts", path: "/desserts" },
  { name: "Cookies & Pastries", path: "/cookies-pastries" },
  { name: "Contact", path: "/contact" },
  { name: "Location", path: "/location" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`
        fixed top-4 left-4 right-4 z-50
        transition-all duration-500 rounded-2xl
        ${scrolled
          ? "bg-white/90 backdrop-blur-lg shadow-xl py-3"
          : "bg-white/70 backdrop-blur-md shadow-lg py-4"
        }
      `}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 group">
          <motion.div
            whileHover={{ rotate: 10 }}
            transition={{ duration: 0.3 }}
            className="p-2 bg-primary-100 rounded-xl"
          >
            <CakeSlice size={24} className="text-primary-500" />
          </motion.div>
          <span className="text-2xl font-bold text-text-primary font-heading">
            Sweet Horizon
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `relative text-lg font-medium transition-all duration-300 cursor-pointer
                ${isActive ? "text-primary-500" : "text-text-secondary hover:text-primary-500"}`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-500"
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-text-primary hover:text-primary-500 transition-colors cursor-pointer"
          aria-label="Toggle menu"
        >
          <motion.div
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.1 }}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.div>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, type: "spring" }}
            className="md:hidden bg-white/95 backdrop-blur-lg shadow-xl"
          >
            <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `text-lg font-medium transition-all duration-300 py-2 px-3 rounded-lg cursor-pointer
                    ${isActive
                      ? "bg-primary-500 text-white"
                      : "text-text-secondary hover:bg-pastry-100 hover:text-primary-500"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}