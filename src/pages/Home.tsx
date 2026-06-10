import { motion } from "framer-motion"
import { Button } from "../components/ui/Button"
import { Card, CardImage, CardContent, CardTitle, CardDescription } from "../components/ui/Card"
import { Star } from "lucide-react"

const featuredItems = [
  {
    id: 1,
    title: "Chocolate Dream Cake",
    description: "Rich chocolate ganache with layered sponge cake",
    image: "/placeholder-cake.jpg",
  },
  {
    id: 2,
    title: "Cinnamon Swirl",
    description: "Freshly baked cinnamon rolls with glaze",
    image: "/placeholder-pastry.jpg",
  },
  {
    id: 3,
    title: "Berry Cheesecake",
    description: "Creamy cheesecake topped with fresh berries",
    image: "/placeholder-cheesecake.jpg",
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cream to-lightGray">
          <div className="absolute inset-0 bg-[url('/placeholder-hero.jpg')] bg-cover bg-center opacity-20" />
        </div>
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-gray-800 mb-6"
          >
            Sweet Horizon <span className="text-primary">Bakery</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto"
          >
            Where every bite tells a story of passion, tradition, and the finest ingredients
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button size="lg">Explore Our Treats</Button>
          </motion.div>
        </div>
      </section>

      {/* Featured Delicacies */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center text-gray-800 mb-12"
          >
            Featured Delicacies
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                    <span className="text-6xl">🍰</span>
                  </div>
                  <CardContent>
                    <CardTitle>{item.title}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-20 bg-lightGray">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center text-gray-800 mb-12"
          >
            What Our Customers Say
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="h-full flex flex-col">
                    <div className="flex mb-4">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          size={20}
                          className={i < testimonial.rating ? "fill-primary text-primary" : "text-gray-300"}
                        />
                      ))}
                    </div>
                    <p className="text-gray-600 italic mb-4 flex-grow">"{testimonial.text}"</p>
                    <p className="font-semibold text-primary">- {testimonial.name}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}