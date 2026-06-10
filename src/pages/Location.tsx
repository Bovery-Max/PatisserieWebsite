import { motion } from "framer-motion"
import { MapPin, Clock, ParkingCircle, ShoppingCart } from "lucide-react"

export function Location() {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold text-center text-gray-800 mb-4"
          >
            Find <span className="text-primary">Us</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-center text-gray-600 mb-12"
          >
            Visit our bakery and experience the aroma of fresh baked goods
          </motion.p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-xl shadow-md overflow-hidden h-[400px] relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 flex flex-col items-center justify-center">
                  <MapPin size={64} className="text-primary mb-4" />
                  <p className="text-gray-700 font-medium">Interactive Map Would Go Here</p>
                  <p className="text-gray-500 text-sm">123 Bakery Lane, Sweet City</p>
                </div>
                {/* Map controls mockup */}
                <div className="absolute top-4 right-4 bg-white p-2 rounded-lg shadow-md flex space-x-2">
                  <button className="px-3 py-1 bg-primary text-white rounded text-sm">+</button>
                  <button className="px-3 py-1 bg-gray-100 rounded text-sm">-</button>
                </div>
              </div>
            </motion.div>

            {/* Location Details */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <MapPin size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Address</h3>
                    <p className="text-gray-600">
                      123 Bakery Lane<br />
                      Sweet City, SC 12345
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Clock size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Hours</h3>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>Mon-Fri: 7:00 AM - 7:00 PM</li>
                      <li>Saturday: 8:00 AM - 8:00 PM</li>
                      <li>Sunday: 8:00 AM - 6:00 PM</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start space-x-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <ParkingCircle size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Parking</h3>
                    <p className="text-gray-600">Street parking available. Free lot behind the bakery.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <ShoppingCart size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Delivery</h3>
                    <p className="text-gray-600">Available within 10 miles. Order by phone or online.</p>
                  </div>
                </div>
              </div>

              <div className="bg-primary/10 p-6 rounded-xl">
                <h3 className="font-bold text-gray-800 mb-3">Special Instructions</h3>
                <p className="text-gray-600 text-sm">
                  We recommend arriving early for the freshest selection! Our popular items
                  sell out quickly, especially on weekends.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}