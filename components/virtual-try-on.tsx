"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Camera, Upload, X } from "lucide-react"

export default function VirtualTryOn() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null)

  // Sample products for virtual try-on
  const tryOnProducts = [
    { id: 1, name: "Diamond Pendant", image: "/images/diamond-pendant.png" },
    { id: 2, name: "Emerald Earrings", image: "/images/emerald-earrings.png" },
    { id: 3, name: "Sapphire Ring", image: "/images/sapphire-ring.png" },
  ]

  const openTryOn = (productId: number) => {
    setSelectedProduct(productId)
    setIsModalOpen(true)
  }

  return (
    <section className="bg-zinc-950 py-24">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-2">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <div className="mb-2 inline-block rounded-sm bg-gold/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-gold">
              Interactive Experience
            </div>
            <h2 className="mb-4 font-serif text-3xl font-light sm:text-4xl">Virtual Try-On Experience</h2>
            <p className="mb-6 text-zinc-300">
              Experience our jewelry collection as if you were in our boutique. Our virtual try-on technology allows you
              to see how our pieces look on you before making a purchase, ensuring you find the perfect match for your
              style.
            </p>
            <p className="mb-8 text-zinc-400">
              Simply select a piece from our collection, upload a photo or use your camera, and see how it looks on you
              in real-time.
            </p>
            <Button
              onClick={() => openTryOn(1)}
              className="w-fit rounded-none border border-gold bg-transparent px-8 py-6 text-sm font-light tracking-widest text-gold transition-all hover:bg-gold/10"
              variant="outline"
            >
              TRY ON NOW
            </Button>
          </motion.div>

          {/* Image grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <div className="group relative aspect-square cursor-pointer overflow-hidden" onClick={() => openTryOn(1)}>
                <Image
                  src={tryOnProducts[0].image || "/placeholder.svg"}
                  alt={tryOnProducts[0].name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/40 group-hover:opacity-100">
                  <span className="rounded-sm bg-gold px-4 py-2 text-xs font-medium uppercase text-black">Try On</span>
                </div>
              </div>
              <div className="group relative aspect-square cursor-pointer overflow-hidden" onClick={() => openTryOn(2)}>
                <Image
                  src={tryOnProducts[1].image || "/placeholder.svg"}
                  alt={tryOnProducts[1].name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/40 group-hover:opacity-100">
                  <span className="rounded-sm bg-gold px-4 py-2 text-xs font-medium uppercase text-black">Try On</span>
                </div>
              </div>
            </div>
            <div className="relative aspect-[1/2] overflow-hidden">
              <div className="group relative h-full w-full cursor-pointer" onClick={() => openTryOn(3)}>
                <Image
                  src={tryOnProducts[2].image || "/placeholder.svg"}
                  alt={tryOnProducts[2].name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/40 group-hover:opacity-100">
                  <span className="rounded-sm bg-gold px-4 py-2 text-xs font-medium uppercase text-black">Try On</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Virtual Try-On Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-4xl bg-zinc-900 p-0 sm:rounded-none">
          <button
            onClick={() => setIsModalOpen(false)}
            className="absolute right-4 top-4 z-10 rounded-full bg-black/20 p-2 text-zinc-400 backdrop-blur-sm transition-colors hover:bg-black/40 hover:text-white"
          >
            <X className="h-4 w-4" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Virtual try-on preview */}
            <div className="relative flex h-[400px] flex-col items-center justify-center bg-zinc-950 p-6 md:h-[600px]">
              <div className="relative mb-4 h-full w-full overflow-hidden bg-zinc-900">
                <div className="flex h-full w-full items-center justify-center">
                  <Image
                    src="/images/hero-background.png"
                    alt="Virtual try-on preview"
                    width={400}
                    height={500}
                    className="h-auto max-h-full w-auto max-w-full object-contain"
                  />

                  {/* Overlay the selected product */}
                  {selectedProduct && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Image
                        src={tryOnProducts.find((p) => p.id === selectedProduct)?.image || ""}
                        alt="Product overlay"
                        width={200}
                        height={200}
                        className="h-auto w-auto max-w-[50%] object-contain opacity-80"
                      />
                    </div>
                  )}
                </div>
              </div>

              <p className="text-center text-sm text-zinc-500">
                This is a simulation. Actual results may vary based on lighting and camera quality.
              </p>
            </div>

            {/* Controls */}
            <div className="flex flex-col p-6 md:p-10">
              <h3 className="mb-6 font-serif text-2xl font-light">Virtual Try-On</h3>

              <div className="mb-8">
                <h4 className="mb-4 text-sm font-medium uppercase tracking-wider text-zinc-300">Select a Method</h4>
                <div className="grid grid-cols-2 gap-4">
                  <Button
                    variant="outline"
                    className="flex h-auto flex-col items-center justify-center gap-2 rounded-none border-zinc-700 p-6 hover:bg-zinc-800"
                  >
                    <Camera className="h-6 w-6 text-gold" />
                    <span className="text-xs">Use Camera</span>
                  </Button>
                  <Button
                    variant="outline"
                    className="flex h-auto flex-col items-center justify-center gap-2 rounded-none border-zinc-700 p-6 hover:bg-zinc-800"
                  >
                    <Upload className="h-6 w-6 text-gold" />
                    <span className="text-xs">Upload Photo</span>
                  </Button>
                </div>
              </div>

              <div className="mb-8">
                <h4 className="mb-4 text-sm font-medium uppercase tracking-wider text-zinc-300">Select a Product</h4>
                <div className="grid grid-cols-3 gap-4">
                  {tryOnProducts.map((product) => (
                    <div
                      key={product.id}
                      onClick={() => setSelectedProduct(product.id)}
                      className={`cursor-pointer border p-2 transition-all hover:border-gold ${
                        selectedProduct === product.id ? "border-gold" : "border-zinc-700"
                      }`}
                    >
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        width={100}
                        height={100}
                        className="h-auto w-full object-cover"
                      />
                      <p className="mt-2 text-center text-xs">{product.name}</p>
                    </div>
                  ))}
                </div>
              </div>

              <Button className="mt-auto w-full rounded-none bg-gold py-6 text-sm font-medium uppercase tracking-wider text-black hover:bg-gold/90">
                Shop This Item
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}
