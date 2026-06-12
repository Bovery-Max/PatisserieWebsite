import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "../components/ui/Button"
import { CardGlass, CardContent } from "../components/ui/Card"
import { Send, Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    alert("Thank you for your message! We'll get back to you soon.")
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-6xl md:text-7xl font-bold text-text-primary mb-6 font-heading">
              Contact <span className="text-primary-500">Us</span>
            </h1>
            <p className="text-xl text-text-secondary mb-8">
              Have questions or want to place a custom order? We'd love to hear from you!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Info - takes 2 columns */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2 space-y-6"
            >
              <h2 className="text-3xl font-bold text-text-primary mb-8 font-heading">Get in Touch</h2>

              <div className="space-y-6">
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-start space-x-4"
                >
                  <div className="p-3 bg-primary-100 rounded-xl">
                    <MapPin size={24} className="text-primary-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary mb-1">Address</h3>
                    <p className="text-text-secondary">123 Bakery Lane, Sweet City, SC 12345</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-start space-x-4"
                >
                  <div className="p-3 bg-primary-100 rounded-xl">
                    <Phone size={24} className="text-primary-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary mb-1">Phone</h3>
                    <p className="text-text-secondary">(555) 123-4567</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-start space-x-4"
                >
                  <div className="p-3 bg-primary-100 rounded-xl">
                    <Mail size={24} className="text-primary-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary mb-1">Email</h3>
                    <p className="text-text-secondary">hello@sweethorizon.com</p>
                  </div>
                </motion.div>
              </div>

              <CardGlass className="p-6">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="p-2 bg-primary-100 rounded-lg">
                    <Clock size={20} className="text-primary-500" />
                  </div>
                  <h3 className="font-bold text-text-primary">Business Hours</h3>
                </div>
                <ul className="space-y-2 text-text-secondary">
                  <li>Monday - Friday: 7:00 AM - 7:00 PM</li>
                  <li>Saturday: 8:00 AM - 8:00 PM</li>
                  <li>Sunday: 8:00 AM - 6:00 PM</li>
                </ul>
              </CardGlass>
            </motion.div>

            {/* Contact Form - takes 3 columns */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-3"
            >
              <form onSubmit={handleSubmit} className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-text-primary font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-pastry-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all bg-white/50"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-text-primary font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-pastry-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all bg-white/50"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="phone" className="block text-text-primary font-medium mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-pastry-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all bg-white/50"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="subject" className="block text-text-primary font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-pastry-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all bg-white/50"
                    placeholder="What's this about?"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-text-primary font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-pastry-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all resize-none bg-white/50"
                    placeholder="Tell us more..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full flex items-center justify-center gap-2 shadow-lg"
                >
                  <Send size={20} />
                  Send Message
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}