import { motion, AnimatePresence } from "framer-motion"
import { CardGlass, CardContent, CardTitle, CardDescription } from "../components/ui/Card"
import { Button } from "../components/ui/Button"

const cakeCategories = [
  {
    id: 1,
    category: "Birthday Cakes",
    icon: "🎂",
    items: [
      {
        id: 1,
        name: "Chocolate Celebration",
        description: "Rich chocolate cake with vanilla buttercream and festive decorations - perfect for any celebration",
        price: "$45",
        image: "/cake-chocolate.jpg",
      },
      {
        id: 2,
        name: "Strawberry Dream",
        description: "Light strawberry cake with fresh cream and strawberry topping - a fruity delight",
        price: "$50",
        image: "/cake-strawberry.jpg",
      },
      {
        id: 3,
        name: "Rainbow Vanilla",
        description: "Colorful vanilla layers with buttercream frosting - vibrant and delicious",
        price: "$40",
        image: "/cake-rainbow.jpg",
      },
    ],
  },
  {
    id: 2,
    category: "Wedding Cakes",
    icon: "💒",
    items: [
      {
        id: 1,
        name: "Elegant Ivory",
        description: "Multi-tier ivory cake with delicate floral details - timeless sophistication",
        price: "From $150",
        image: "/cake-ivory.jpg",
      },
      {
        id: 2,
        name: "Rustic Berry",
        description: "Semi-naked cake with fresh berries and eucalyptus - natural beauty",
        price: "From $120",
        image: "/cake-rustic.jpg",
      },
      {
        id: 3,
        name: "Classic Red Velvet",
        description: "Traditional red velvet with cream cheese frosting - a crowd favorite",
        price: "From $180",
        image: "/cake-redvelvet.jpg",
      },
    ],
  },
  {
    id: 3,
    category: "Custom Designed",
    icon: "🎨",
    items: [
      {
        id: 1,
        name: "Personalized Photo Cake",
        description: "Custom edible image printed on your favorite flavor cake - unique memories",
        price: "From $60",
        image: "/cake-photo.jpg",
      },
      {
        id: 2,
        name: "Theme Celebration Cake",
        description: "Custom design matching your party theme perfectly - tell us your vision!",
        price: "From $80",
        image: "/cake-theme.jpg",
      },
      {
        id: 3,
        name: "Corporate Event Cake",
        description: "Professional custom cakes for business celebrations - branded with elegance",
        price: "From $100",
        image: "/cake-corporate.jpg",
      },
    ],
  },
]

export function Cakes() {
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
              Our <span className="text-primary-500">Cakes</span>
            </h1>
            <p className="text-xl text-text-secondary mb-8">
              From intimate birthdays to grand weddings, we create unforgettable cakes
              that become the centerpiece of your special moments
            </p>
            <Button variant="outline" size="lg">
              Book a Consultation
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Cake Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {cakeCategories.map((category, catIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
              className="mb-20"
            >
              <div className="flex items-center space-x-4 mb-8">
                <span className="text-4xl">{category.icon}</span>
                <h2 className="text-4xl font-bold text-text-primary font-heading">
                  {category.category}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: itemIndex * 0.1 }}
                    className="group"
                  >
                    <CardGlass className="h-full transition-all duration-300">
                      <div className="aspect-video bg-gradient-to-br from-primary-200 to-primary-500/30 flex items-center justify-center relative overflow-hidden">
                        <motion.span
                          className="text-7xl"
                          whileHover={{ scale: 1.2, rotate: 10 }}
                          transition={{ duration: 0.3 }}
                        >
                          {category.icon}
                        </motion.span>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      <CardContent className="flex flex-col">
                        <CardTitle>{item.name}</CardTitle>
                        <CardDescription className="flex-grow mb-4">
                          {item.description}
                        </CardDescription>
                        <div className="mt-auto pt-4 border-t border-pastry-200">
                          <span className="text-primary-500 font-bold text-xl">
                            {item.price}
                          </span>
                        </div>
                      </CardContent>
                    </CardGlass>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}