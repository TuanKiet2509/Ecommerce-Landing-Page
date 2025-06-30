"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tag } from "lucide-react"

// Style category type
interface StyleCategory {
  id: string
  name: string
}

// Style item type
interface StyleItem {
  id: number
  title: string
  image: string
  category: string
  products: {
    id: number
    name: string
    price: string
    position: { x: string; y: string }
  }[]
}

// Sample style categories
const styleCategories: StyleCategory[] = [
  { id: "all", name: "All Styles" },
  { id: "evening", name: "Evening" },
  { id: "casual", name: "Casual Luxury" },
  { id: "seasonal", name: "Seasonal" },
]

// Sample style items
const styleItems: StyleItem[] = [
  {
    id: 1,
    title: "Evening Elegance",
    image: "/images/evening-style.png",
    category: "evening",
    products: [
      { id: 101, name: "Diamond Pendant", price: "$2,450", position: { x: "20%", y: "30%" } },
      { id: 102, name: "Gold Bracelet", price: "$1,890", position: { x: "70%", y: "60%" } },
    ],
  },
  {
    id: 2,
    title: "Weekend Luxury",
    image: "/images/casual-style.png",
    category: "casual",
    products: [
      { id: 201, name: "Leather Watch", price: "$3,250", position: { x: "30%", y: "40%" } },
      { id: 202, name: "Silver Cufflinks", price: "$780", position: { x: "60%", y: "70%" } },
    ],
  },
  {
    id: 3,
    title: "Summer Soirée",
    image: "/images/summer-style.png",
    category: "seasonal",
    products: [
      { id: 301, name: "Pearl Earrings", price: "$1,350", position: { x: "40%", y: "30%" } },
      { id: 302, name: "Gold Anklet", price: "$950", position: { x: "50%", y: "80%" } },
    ],
  },
  {
    id: 4,
    title: "Winter Glamour",
    image: "/images/winter-style.png",
    category: "seasonal",
    products: [
      { id: 401, name: "Ruby Earrings", price: "$4,200", position: { x: "25%", y: "35%" } },
      { id: 402, name: "Platinum Ring", price: "$3,750", position: { x: "65%", y: "55%" } },
    ],
  },
]

export default function StyleGuide() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null)

  // Filter items based on active category
  const filteredItems =
    activeCategory === "all" ? styleItems : styleItems.filter((item) => item.category === activeCategory)

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="font-serif text-3xl font-light tracking-tight sm:text-4xl">Style Guide</h2>
          <div className="mx-auto mt-4 h-px w-24 bg-gold"></div>
          <p className="mx-auto mt-6 max-w-2xl text-zinc-400">
            Discover curated looks featuring our signature pieces, styled for various occasions and seasons.
          </p>
        </motion.div>

        {/* Category tabs */}
        <Tabs defaultValue="all" className="mb-12">
          <TabsList className="mx-auto grid w-full max-w-md grid-cols-4 bg-zinc-900">
            {styleCategories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                onClick={() => setActiveCategory(category.id)}
                className="data-[state=active]:bg-gold data-[state=active]:text-black"
              >
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        {/* Style items grid */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative mb-4 aspect-[3/4] overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Product tags */}
                {item.products.map((product) => (
                  <div
                    key={product.id}
                    className="absolute z-10"
                    style={{ left: product.position.x, top: product.position.y }}
                    onMouseEnter={() => setHoveredProduct(product.id)}
                    onMouseLeave={() => setHoveredProduct(null)}
                  >
                    <div className="relative">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/50 bg-black/50 backdrop-blur-sm transition-all hover:bg-gold/20">
                        <Tag className="h-4 w-4 text-gold" />
                      </div>

                      {/* Product info tooltip */}
                      <div
                        className={`absolute left-1/2 top-full z-20 mt-2 w-40 -translate-x-1/2 transform rounded-sm border border-gold/30 bg-black/80 p-3 text-center backdrop-blur-sm transition-opacity ${
                          hoveredProduct === product.id ? "opacity-100" : "opacity-0 pointer-events-none"
                        }`}
                      >
                        <p className="text-sm font-light">{product.name}</p>
                        <p className="mt-1 text-xs text-gold">{product.price}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="mb-2 font-serif text-xl font-light">{item.title}</h3>
              <Button variant="link" className="p-0 text-sm font-light text-gold hover:text-gold/80">
                Shop this look
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
