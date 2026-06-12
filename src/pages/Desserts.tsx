import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { CardGlass, CardContent, CardTitle, CardDescription } from "../components/ui/Card"

const dessertCategories = {
  milkBased: [
    {
      id: 1,
      name: "Tiramisu",
      description: "Classic Italian dessert with coffee-soaked ladyfingers and mascarpone cream",
      price: "$8",
    },
    {
      id: 2,
      name: "Cheesecake",
      description: "Creamy New York style cheesecake with berry compote and graham crust",
      price: "$9",
    },
    {
      id: 3,
      name: "Crème Brûlée",
      description: "Rich vanilla custard topped with caramelized sugar - crack the top!",
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
      description: "Layers of phyllo with nuts and honey syrup - sweet perfection",
      price: "$6",
    },
    {
      id: 2,
      name: "Kadayif",
      description: "Shredded phyllo with pistachios and sweet syrup - flaky goodness",
      price: "$7",
    },
    {
      id: 3,
      name: "Revani",
      description: "Semolina cake soaked in lemon syrup - light and refreshing",
      price: "$5",
    },
    {
      id: 4,
      name: "Sütlaç",
      description: "Traditional Turkish rice pudding with cinnamon - comfort in a bowl",
      price: "$4",
    },
  ],
}

export function Desserts() {
  const [activeTab, setActiveTab] = useState<"milkBased" | "syrupBased">("milkBased")

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
              Our <span className="text-primary-500">Desserts</span>
            </h1>
            <p className="text-xl text-text-secondary mb-8">
              Traditional flavors crafted with love, authentic recipes, and the finest ingredients
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tabs */}
      <section className="pb-8">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center mb-12"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-2 shadow-lg inline-flex">
              {(["milkBased", "syrupBased"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`
                    px-6 py-3 rounded-xl font-medium transition-all duration-300
                    ${activeTab === tab
                      ? "bg-primary-500 text-white shadow-lg"
                      : "text-text-secondary hover:text-primary-500 hover:bg-pastry-100"
                    }
                  `}
                >
                  {tab === "milkBased"
                    ? "Milk-based Desserts (Sütlü Tatlılar)"
                    : "Syrup-based & Pistachio (Şerbetli ve Fıstıklı)"}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tab Content */}
      <section className="pb-24">
        <div className="container mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: activeTab === "milkBased" ? -30 : 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: activeTab === "milkBased" ? 30 : -30 }}
              transition={{ duration: 0.4, type: "spring" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {dessertCategories[activeTab].map((dessert, index) => (
                <motion.div
                  key={dessert.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <CardGlass className="h-full group">
                    <div className="aspect-square bg-gradient-to-br from-primary-200 to-primary-500/30 flex items-center justify-center relative overflow-hidden">
                      <motion.span
                        className="text-6xl"
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        {activeTab === "milkBased" ? "🍮" : "🥮"}
                      </motion.span>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <CardContent className="flex flex-col">
                      <div className="flex justify-between items-start mb-2">
                        <CardTitle className="text-lg">{dessert.name}</CardTitle>
                        <span className="text-primary-500 font-bold text-sm">{dessert.price}</span>
                      </div>
                      <CardDescription className="text-xs flex-grow">
                        {dessert.description}
                      </CardDescription>
                    </CardContent>
                  </CardGlass>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  )
}