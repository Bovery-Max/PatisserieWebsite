import { Routes, Route } from "react-router-dom"
import { Navigation } from "./components/Navigation"
import { Footer } from "./components/Footer"
import { Home } from "./pages/Home"
import { Cakes } from "./pages/Cakes"
import { Desserts } from "./pages/Desserts"
import { CookiesPastries } from "./pages/CookiesPastries"
import { Contact } from "./pages/Contact"
import { Location } from "./pages/Location"

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cakes" element={<Cakes />} />
          <Route path="/desserts" element={<Desserts />} />
          <Route path="/cookies-pastries" element={<CookiesPastries />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/location" element={<Location />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App