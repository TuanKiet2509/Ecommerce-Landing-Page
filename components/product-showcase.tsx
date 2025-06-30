"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

// Product type definition
interface Product {
  id: number
  name: string
  price: string
  description: string
  image: string
}

// Sample product data
const products: Product[] = [
  {
    id: 1,
    name: "Luminous Pendant",
    price: "$1,250",
    description: "Hand-crafted 18k gold pendant with ethically sourced diamonds.",
    image: "/images/product1.png",
  },
  {
    id: 2,
    name: "Silk Cashmere Scarf",
    price: "$450",
    description: "Ultra-soft blend of silk and cashmere with hand-rolled edges.",
    image: "/images/product2.png",
  },
  {
    id: 3,
    name: "Leather Weekend Bag",
    price: "$1,890",
    description: "Full-grain calfskin leather with signature gold hardware.",
    image: "/images/product3.png",
  },
  {
    id: 4,
    name: "Crystal Tumbler Set",
    price: "$780",
    description: "Set of four hand-cut crystal tumblers with gold rim.",
    image: "/images/product4.png",
  },
  {
    id: 5,
    name: "Signature Perfume",
    price: "$320",
    description: "Notes of amber, sandalwood, and Moroccan rose in a crystal flacon.",
    image: "/images/product5.png",
  },
  {
    id: 6,
    name: "Chronograph Watch",
    price: "$4,950",
    description: "Swiss-made automatic movement with sapphire crystal face.",
    image: "/images/product6.png",
  },
]

export default function ProductShowcase() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

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
          <h2 className="font-serif text-3xl font-light tracking-tight sm:text-4xl">Curated Collection</h2>
          <div className="mx-auto mt-4 h-px w-24 bg-gold"></div>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
              onClick={() => setSelectedProduct(product)}
            >
              <div className="relative mb-4 overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={600}
                  height={600}
                  className="h-[400px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20"></div>
                <div className="absolute bottom-0 left-0 right-0 translate-y-full bg-black/70 p-4 backdrop-blur-sm transition-transform duration-300 group-hover:translate-y-0">
                  <p className="text-sm text-zinc-200">{product.description}</p>
                  <button className="mt-2 text-xs font-light tracking-wider text-gold">QUICK VIEW</button>
                </div>
              </div>
              <h3 className="text-lg font-light">{product.name}</h3>
              <p className="mt-1 font-serif text-gold">{product.price}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Quick View Modal */}
      <Dialog open={!!selectedProduct} onOpenChange={(open) => !open && setSelectedProduct(null)}>
        <DialogContent className="max-w-3xl bg-zinc-900 p-0 sm:rounded-none">
          <button
            onClick={() => setSelectedProduct(null)}
            className="absolute right-4 top-4 z-10 rounded-full bg-black/20 p-2 text-zinc-400 backdrop-blur-sm transition-colors hover:bg-black/40 hover:text-white"
          >
            <X className="h-4 w-4" />
          </button>

          {selectedProduct && (
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative h-[300px] md:h-[500px]">
                <Image
                  src={selectedProduct.image || "/placeholder.svg"}
                  alt={selectedProduct.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-center p-6 md:p-10">
                <h3 className="font-serif text-2xl font-light">{selectedProduct.name}</h3>
                <p className="mt-2 text-xl text-gold">{selectedProduct.price}</p>
                <div className="my-6 h-px w-full bg-zinc-800"></div>
                <p className="mb-8 text-zinc-400">{selectedProduct.description}</p>
                <Button className="w-full rounded-none bg-gold py-6 text-sm font-light tracking-widest text-black hover:bg-gold/90">
                  ADD TO CART
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
