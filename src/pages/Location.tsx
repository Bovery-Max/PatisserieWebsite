import { motion } from "framer-motion"
import { MapPin, Clock, ParkingCircle, ShoppingCart, Navigation2, Store } from "lucide-react"

export function Location() {
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
              Find <span className="text-primary-500">Us</span>
            </h1>
            <p className="text-xl text-text-secondary mb-8">
              Visit our bakery and experience the aroma of fresh baked goods
            </p>
          </motion.div>
        </div>
      </section>

      {/* Location Content */}
      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden h-[500px] relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-primary-500/20 flex flex-col items-center justify-center">
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <MapPin size={64} className="text-primary-500 mb-4" />
                  </motion.div>
                  <p className="text-text-primary font-medium text-xl mb-2">Interactive Map Would Go Here</p>
                  <p className="text-text-secondary">123 Bakery Lane, Sweet City, SC 12345</p>
                </div>
                {/* Map controls mockup */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-xl shadow-md flex space-x-2">
                  {["+", "-"].map((op) => (
                    <button
                      key={op}
                      className="w-10 h-10 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors flex items-center justify-center font-bold"
                    >
                      {op}
                    </button>
                  ))}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-6 bg-primary-100/50 p-4 rounded-xl"
              >
                <div className="flex items-center space-x-3">
                  <Navigation2 size={20} className="text-primary-500" />
                  <p className="text-text-secondary">
                    <span className="font-medium">Tip:</span> We're located in the heart of Sweet City,
                    just off Main Street. Look for our golden sign!
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Location Details */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-white/20">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="p-3 bg-primary-100 rounded-xl">
                    <MapPin size={24} className="text-primary-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-text-primary mb-1 text-lg">Address</h3>
                    <p className="text-text-secondary">
                      123 Bakery Lane<br />
                      Sweet City, SC 12345
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 mb-6">
                  <div className="p-3 bg-primary-100 rounded-xl">
                    <Store size={24} className="text-primary-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-text-primary mb-1 text-lg">Hours</h3>
                    <ul className="text-text-secondary text-sm space-y-1">
                      <li>Mon-Fri: 7:00 AM - 7:00 PM</li>
                      <li>Saturday: 8:00 AM - 8:00 PM</li>
                      <li>Sunday: 8:00 AM - 6:00 PM</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start space-x-4 mb-6">
                  <div className="p-3 bg-primary-100 rounded-xl">
                    <ParkingCircle size={24} className="text-primary-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-text-primary mb-1 text-lg">Parking</h3>
                    <p className="text-text-secondary">Street parking available. Free lot behind the bakery.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary-100 rounded-xl">
                    <ShoppingCart size={24} className="text-primary-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-text-primary mb-1 text-lg">Delivery</h3>
                    <p className="text-text-secondary">Available within 10 miles. Order by phone or online.</p>
                  </div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-gradient-to-br from-primary-500 to-primary-600 p-6 rounded-2xl shadow-xl"
              >
                <h3 className="font-bold text-white mb-3 text-lg">Special Instructions</h3>
                <p className="text-white/90 text-sm">
                  We recommend arriving early for the freshest selection! Our popular items
                  sell out quickly, especially on weekends.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}