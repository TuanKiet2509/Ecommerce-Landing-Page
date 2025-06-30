"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

// Category type
interface Category {
  id: number
  name: string
  image: string
  description: string
}

// Sample categories
const categories: Category[] = [
  {
    id: 1,
    name: "Fine Jewelry",
    image: "/images/jewelry-category.png",
    description: "Timeless pieces crafted with exceptional materials",
  },
  {
    id: 2,
    name: "Leather Goods",
    image: "/images/leather-category.png",
    description: "Handcrafted accessories for the discerning individual",
  },
  {
    id: 3,
    name: "Timepieces",
    image: "/images/watch-category.png",
    description: "Precision engineering meets exquisite design",
  },
  {
    id: 4,
    name: "Home Collection",
    image: "/images/home-category.png",
    description: "Elevate your space with curated luxury",
  },
]

export default function CategoryHighlights() {
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
          <h2 className="font-serif text-3xl font-light tracking-tight sm:text-4xl">Curated Categories</h2>
          <div className="mx-auto mt-4 h-px w-24 bg-gold"></div>
          <p className="mx-auto mt-6 max-w-2xl text-zinc-400">
            Explore our meticulously curated collections, each representing the pinnacle of craftsmanship and design.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/40"></div>

                {/* Overlay content that appears on hover */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <h3 className="mb-2 font-serif text-2xl font-light text-white">{category.name}</h3>
                  <p className="mb-4 text-center text-sm text-white/80">{category.description}</p>
                  <Link
                    href="#"
                    className="border border-white bg-black/30 px-6 py-2 text-xs font-light tracking-widest text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-black"
                  >
                    EXPLORE
                  </Link>
                </div>
              </div>

              {/* Category name visible by default */}
              <div className="mt-4 text-center">
                <h3 className="font-serif text-lg font-light">{category.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
