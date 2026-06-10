import { motion } from "framer-motion"
import { Card, CardContent, CardTitle, CardDescription } from "../components/ui/Card"

const cookiesPastries = [
  // Sweet
  {
    id: 1,
    name: "Chocolate Chip Cookies",
    description: "Warm, gooey chocolate chip cookies fresh from the oven",
    price: "$3 each",
    type: "sweet",
  },
  {
    id: 2,
    name: "Butter Croissants",
    description: "Flaky, buttery layers in every bite",
    price: "$4 each",
    type: "sweet",
  },
  {
    id: 3,
    name: "Almond Biscotti",
    description: "Crunchy almond cookies perfect for dipping",
    price: "$5 each",
    type: "sweet",
  },
  {
    id: 4,
    name: "Cinnamon Rolls",
    description: "Swirled cinnamon rolls with cream cheese glaze",
    price: "$6 each",
    type: "sweet",
  },
  // Savory
  {
    id: 5,
    name: "Cheddar Scones",
    description: "Flaky scones with sharp cheddar and herbs",
    price: "$5 each",
    type: "savory",
  },
  {
    id: 6,
    name: "Olive Bread",
    description: "Artisan bread with olives and rosemary",
    price: "$7 each",
    type: "savory",
  },
  {
    id: 7,
    name: "Ham & Cheese Pastry",
    description: "Flaky pastry with ham and melted cheese",
    price: "$8 each",
    type: "savory",
  },
  {
    id: 8,
    name: "Spinach Puff",
    description: "Golden puff pastry with spinach and feta",
    price: "$6 each",
    type: "savory",
  },
]

export function CookiesPastries() {
  const sweetItems = cookiesPastries.filter((item) => item.type === "sweet")
  const savoryItems = cookiesPastries.filter((item) => item.type === "savory")

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold text-center text-gray-800 mb-4"
          >
            Cookies & <span className="text-primary">Pastries</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-center text-gray-600 mb-12"
          >
            Freshly baked daily - sweet treats and savory bites for every craving
          </motion.p>

          {/* Sweet Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Sweet Treats</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {sweetItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card>
                    <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                      <span className="text-4xl">🍪</span>
                    </div>
                    <CardContent>
                      <div className="flex justify-between items-start mb-2">
                        <CardTitle className="text-lg">{item.name}</CardTitle>
                        <span className="text-primary font-bold text-sm">{item.price}</span>
                      </div>
                      <CardDescription className="text-xs">{item.description}</CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Savory Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Savory Bites</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {savoryItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card>
                    <div className="aspect-square bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center">
                      <span className="text-4xl">🥐</span>
                    </div>
                    <CardContent>
                      <div className="flex justify-between items-start mb-2">
                        <CardTitle className="text-lg">{item.name}</CardTitle>
                        <span className="text-primary font-bold text-sm">{item.price}</span>
                      </div>
                      <CardDescription className="text-xs">{item.description}</CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}