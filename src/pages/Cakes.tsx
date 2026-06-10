import { motion } from "framer-motion"
import { Card, CardContent, CardTitle, CardDescription } from "../components/ui/Card"

const cakeCategories = [
  {
    id: 1,
    category: "Birthday Cakes",
    items: [
      {
        id: 1,
        name: "Chocolate Celebration",
        description: "Rich chocolate cake with vanilla buttercream and festive decorations",
        price: "$45",
      },
      {
        id: 2,
        name: "Strawberry Dream",
        description: "Light strawberry cake with fresh cream and strawberry topping",
        price: "$50",
      },
      {
        id: 3,
        name: "Rainbow Vanilla",
        description: "Colorful vanilla layers with buttercream frosting",
        price: "$40",
      },
    ],
  },
  {
    id: 2,
    category: "Wedding Cakes",
    items: [
      {
        id: 1,
        name: "Elegant Ivory",
        description: "Multi-tier ivory cake with delicate floral details",
        price: "From $150",
      },
      {
        id: 2,
        name: "Rustic Berry",
        description: "Semi-naked cake with fresh berries and eucalyptus",
        price: "From $120",
      },
      {
        id: 3,
        name: "Classic Red Velvet",
        description: "Traditional red velvet with cream cheese frosting",
        price: "From $180",
      },
    ],
  },
  {
    id: 3,
    category: "Custom Designed",
    items: [
      {
        id: 1,
        name: "Personalized Photo Cake",
        description: "Custom edible image printed on your favorite flavor cake",
        price: "From $60",
      },
      {
        id: 2,
        name: "Theme Celebration Cake",
        description: "Custom design matching your party theme perfectly",
        price: "From $80",
      },
      {
        id: 3,
        name: "Corporate Event Cake",
        description: "Professional custom cakes for business celebrations",
        price: "From $100",
      },
    ],
  },
]

export function Cakes() {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold text-center text-gray-800 mb-4"
          >
            Our <span className="text-primary">Cakes</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-center text-gray-600 mb-12"
          >
            From intimate birthdays to grand weddings, we create unforgettable cakes
          </motion.p>

          {cakeCategories.map((category) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-8">{category.category}</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {category.items.map((item) => (
                  <Card key={item.id}>
                    <div className="aspect-video bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center">
                      <span className="text-5xl">🎂</span>
                    </div>
                    <CardContent>
                      <div className="flex justify-between items-start mb-2">
                        <CardTitle>{item.name}</CardTitle>
                        <span className="text-primary font-bold">{item.price}</span>
                      </div>
                      <CardDescription>{item.description}</CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}