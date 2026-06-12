import { motion } from "framer-motion"
import { CardGlass, CardContent, CardTitle, CardDescription } from "../components/ui/Card"

const cookiesPastries = [
  // Sweet
  {
    id: 1,
    name: "Chocolate Chip Cookies",
    description: "Warm, gooey chocolate chip cookies fresh from the oven - made with Belgian chocolate",
    price: "$3 each",
    type: "sweet",
  },
  {
    id: 2,
    name: "Butter Croissants",
    description: "Flaky, buttery layers in every bite - authentic French technique",
    price: "$4 each",
    type: "sweet",
  },
  {
    id: 3,
    name: "Almond Biscotti",
    description: "Crunchy almond cookies perfect for dipping in coffee - twice-baked perfection",
    price: "$5 each",
    type: "sweet",
  },
  {
    id: 4,
    name: "Cinnamon Rolls",
    description: "Swirled cinnamon rolls with cream cheese glaze - weekend special",
    price: "$6 each",
    type: "sweet",
  },
  // Savory
  {
    id: 5,
    name: "Cheddar Scones",
    description: "Flaky scones with sharp cheddar and herbs - perfect with tea",
    price: "$5 each",
    type: "savory",
  },
  {
    id: 6,
    name: "Olive Bread",
    description: "Artisan bread with olives and rosemary - mediterranean inspiration",
    price: "$7 each",
    type: "savory",
  },
  {
    id: 7,
    name: "Ham & Cheese Pastry",
    description: "Flaky pastry with ham and melted cheese - hearty and satisfying",
    price: "$8 each",
    type: "savory",
  },
  {
    id: 8,
    name: "Spinach Puff",
    description: "Golden puff pastry with spinach and feta - vegetarian delight",
    price: "$6 each",
    type: "savory",
  },
]

export function CookiesPastries() {
  const sweetItems = cookiesPastries.filter((item) => item.type === "sweet")
  const savoryItems = cookiesPastries.filter((item) => item.type === "savory")

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-6xl md:text-7xl font-bold text-text-primary mb-6 font-heading">
              Cookies & <span className="text-primary-500">Pastries</span>
            </h1>
            <p className="text-xl text-text-secondary mb-8">
              Freshly baked daily - sweet treats and savory bites for every craving
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sweet Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center space-x-4 mb-8">
              <span className="text-4xl">🍪</span>
              <h2 className="text-4xl font-bold text-text-primary font-heading">Sweet Treats</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {sweetItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <CardGlass className="h-full group">
                    <div className="aspect-square bg-gradient-to-br from-primary-200 to-primary-500/30 flex items-center justify-center relative overflow-hidden">
                      <motion.span
                        className="text-6xl"
                        whileHover={{ scale: 1.2 }}
                        transition={{ duration: 0.3 }}
                      >
                        🍪
                      </motion.span>
                    </div>
                    <CardContent className="flex flex-col">
                      <div className="flex justify-between items-start mb-2">
                        <CardTitle className="text-lg">{item.name}</CardTitle>
                        <span className="text-primary-500 font-bold text-sm">{item.price}</span>
                      </div>
                      <CardDescription className="text-xs flex-grow">
                        {item.description}
                      </CardDescription>
                    </CardContent>
                  </CardGlass>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Savory Section */}
      <section className="py-16 bg-pastry-100/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-4 mb-8">
              <span className="text-4xl">🥐</span>
              <h2 className="text-4xl font-bold text-text-primary font-heading">Savory Bites</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {savoryItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <CardGlass className="h-full group">
                    <div className="aspect-square bg-gradient-to-br from-primary-300 to-primary-500/30 flex items-center justify-center relative overflow-hidden">
                      <motion.span
                        className="text-6xl"
                        whileHover={{ scale: 1.2 }}
                        transition={{ duration: 0.3 }}
                      >
                        🥐
                      </motion.span>
                    </div>
                    <CardContent className="flex flex-col">
                      <div className="flex justify-between items-start mb-2">
                        <CardTitle className="text-lg">{item.name}</CardTitle>
                        <span className="text-primary-500 font-bold text-sm">{item.price}</span>
                      </div>
                      <CardDescription className="text-xs flex-grow">
                        {item.description}
                      </CardDescription>
                    </CardContent>
                  </CardGlass>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}