import { motion } from "framer-motion"
import { Button } from "../components/ui/Button"
import { Card, CardGlass, CardImage, CardContent, CardTitle, CardDescription } from "../components/ui/Card"
import { Star, Utensils, Award, Users } from "lucide-react"

const featuredItems = [
  {
    id: 1,
    title: "Chocolate Dream Cake",
    description: "Rich chocolate ganache with layered sponge cake - our signature masterpiece that melts in your mouth",
    image: "/placeholder-cake.jpg",
    price: "From $45",
    badge: "Bestseller",
  },
  {
    id: 2,
    title: "Cinnamon Swirl",
    description: "Freshly baked cinnamon rolls with cream cheese glaze - made fresh every morning",
    image: "/placeholder-pastry.jpg",
    price: "From $6",
    badge: "Fresh Daily",
  },
  {
    id: 3,
    title: "Berry Cheesecake",
    description: "Creamy cheesecake topped with fresh seasonal berries - a perfect balance of sweet and tart",
    image: "/placeholder-cheesecake.jpg",
    price: "From $9",
    badge: "Seasonal",
  },
]

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    rating: 5,
    text: "The cakes here are absolutely divine! Every bite takes me to heaven.",
  },
  {
    id: 2,
    name: "Michael Chen",
    rating: 5,
    text: "Best pastries in town. The croissants are flaky perfection!",
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    rating: 4,
    text: "Beautiful custom cake for our wedding. Will order again!",
  },
]

export function Home() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background with parallax effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary-100 via-cream to-pastry-200"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        />

        {/* Floating decorative elements */}
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-primary-300 rounded-full blur-3xl opacity-20"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-40 h-40 bg-primary-400 rounded-full blur-3xl opacity-15"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative z-10 text-center px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold text-text-primary mb-6 font-heading">
              Sweet Horizon
            </h1>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center justify-center space-x-4 mb-8"
            >
              <div className="h-px w-16 bg-primary-500" />
              <span className="text-2xl md:text-3xl text-primary-500 font-medium">Artisan Bakery</span>
              <div className="h-px w-16 bg-primary-500" />
            </motion.div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-text-secondary mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Where every bite tells a story of passion, tradition, and the finest ingredients
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" className="shadow-xl">
              Explore Our Treats
            </Button>
            <Button variant="outline" size="lg" className="shadow-lg">
              Order Custom Cake
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-8 mt-16"
          >
            <div className="flex items-center space-x-2">
              <Award className="text-primary-500" size={24} />
              <span className="text-text-secondary font-medium">15+ Years Experience</span>
            </div>
            <div className="flex items-center space-x-2">
              <Utensils className="text-primary-500" size={24} />
              <span className="text-text-secondary font-medium">Fresh Daily</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="text-primary-500" size={24} />
              <span className="text-text-secondary font-medium">5000+ Happy Customers</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Delicacies */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4 font-heading">
              Featured Delicacies
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Discover our most beloved creations, crafted with premium ingredients and passion
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <CardGlass className="h-full group">
                  <div className="aspect-video bg-gradient-to-br from-primary-200 to-primary-500/20 flex items-center justify-center relative overflow-hidden">
                    <motion.div
                      className="text-8xl"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {item.id === 1 ? "🍰" : item.id === 2 ? "🥐" : "🍮"}
                    </motion.div>
                    <span className="absolute top-4 right-4 bg-primary-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {item.badge}
                    </span>
                  </div>
                  <CardContent className="flex flex-col h-full">
                    <CardTitle>{item.title}</CardTitle>
                    <CardDescription className="flex-grow">{item.description}</CardDescription>
                    <div className="mt-4 pt-4 border-t border-pastry-200">
                      <span className="text-primary-500 font-bold text-lg">{item.price}</span>
                    </div>
                  </CardContent>
                </CardGlass>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center mt-12"
          >
            <Button variant="outline" size="lg">
              View Full Menu
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-24 bg-pastry-100/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4 font-heading">
              Sweet Words from Our Customers
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Don't just take our word - hear from those who've tasted the magic
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <CardGlass className="h-full flex flex-col">
                  <CardContent className="flex flex-col h-full">
                    <div className="flex mb-4">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          size={20}
                          className={i < testimonial.rating ? "fill-primary-500 text-primary-500" : "text-gray-300"}
                        />
                      ))}
                    </div>
                    <p className="text-text-secondary italic mb-6 flex-grow text-lg">"{testimonial.text}"</p>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary-200 rounded-full flex items-center justify-center">
                        <span className="text-primary-500 font-bold">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                      <p className="font-semibold text-text-primary">{testimonial.name}</p>
                    </div>
                  </CardContent>
                </CardGlass>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}