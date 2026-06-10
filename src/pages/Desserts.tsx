import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardTitle, CardDescription } from "../components/ui/Card"

const dessertCategories = {
  milkBased: [
    {
      id: 1,
      name: "Tiramisu",
      description: "Classic Italian dessert with coffee-soaked ladyfingers and mascarpone",
      price: "$8",
    },
    {
      id: 2,
      name: "Cheesecake",
      description: "Creamy New York style cheesecake with berry compote",
      price: "$9",
    },
    {
      id: 3,
      name: "Crème Brûlée",
      description: "Rich custard topped with caramelized sugar",
      price: "$7",
    },
    {
      id: 4,
      name: "Panna Cotta",
      description: "Silky vanilla panna cotta with seasonal fruit sauce",
      price: "$6",
    },
  ],
  syrupBased: [
    {
      id: 1,
      name: "Baklava",
      description: "Layers of phyllo with nuts and honey syrup",
      price: "$6",
    },
    {
      id: 2,
      name: "Kadayif",
      description: "Shredded phyllo with pistachios and sweet syrup",
      price: "$7",
    },
    {
      id: 3,
      name: "Revani",
      description: "Semolina cake soaked in lemon syrup",
      price: "$5",
    },
    {
      id: 4,
      name: "Sütlaç",
      description: "Traditional Turkish rice pudding with cinnamon",
      price: "$4",
    },
  ],
}

export function Desserts() {
  const [activeTab, setActiveTab] = useState<"milkBased" | "syrupBased">("milkBased")

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold text-center text-gray-800 mb-4"
          >
            Our <span className="text-primary">Desserts</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-center text-gray-600 mb-12"
          >
            Traditional flavors crafted with love and authentic recipes
          </motion.p>

          {/* Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center mb-12"
          >
            <div className="bg-white rounded-lg p-2 shadow-md inline-flex">
              <button
                onClick={() => setActiveTab("milkBased")}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === "milkBased"
                    ? "bg-primary text-white"
                    : "text-gray-600 hover:text-primary"
                }`}
              >
                Milk-based Desserts (Sütlü Tatlılar)
              </button>
              <button
                onClick={() => setActiveTab("syrupBased")}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === "syrupBased"
                    ? "bg-primary text-white"
                    : "text-gray-600 hover:text-primary"
                }`}
              >
                Syrup-based & Pistachio (Şerbetli ve Fıstıklı)
              </button>
            </div>
          </motion.div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: activeTab === "milkBased" ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: activeTab === "milkBased" ? 20 : -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {dessertCategories[activeTab].map((dessert) => (
                <Card key={dessert.id}>
                  <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                    <span className="text-4xl">🍮</span>
                  </div>
                  <CardContent>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-lg">{dessert.name}</CardTitle>
                      <span className="text-primary font-bold text-sm">{dessert.price}</span>
                    </div>
                    <CardDescription className="text-xs">{dessert.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  )
}