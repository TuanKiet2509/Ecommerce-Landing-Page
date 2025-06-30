"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

// Featured product type
interface FeaturedProduct {
  id: number
  name: string
  price: string
  tagline: string
  image: string
}

// Sample featured products
const featuredProducts: FeaturedProduct[] = [
  {
    id: 1,
    name: "The Lumière Diamond Collection",
    price: "From $5,800",
    tagline: "Ethically sourced diamonds set in 18k recycled gold",
    image: "/images/featured1.png",
  },
  {
    id: 2,
    name: "Signature Leather Goods",
    price: "From $890",
    tagline: "Handcrafted by master artisans in our Parisian atelier",
    image: "/images/featured2.png",
  },
  {
    id: 3,
    name: "Limited Edition Timepieces",
    price: "From $12,500",
    tagline: "Swiss precision with unparalleled craftsmanship",
    image: "/images/featured3.png",
  },
]

export default function FeaturedProducts() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === featuredProducts.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? featuredProducts.length - 1 : prev - 1))
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  // Handle auto-play
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        nextSlide()
      }, 5000)
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    }
  }, [isAutoPlaying, currentSlide])

  // Pause auto-play on hover
  const handleMouseEnter = () => setIsAutoPlaying(false)
  const handleMouseLeave = () => setIsAutoPlaying(true)

  return (
    <section
      className="relative overflow-hidden bg-zinc-950 py-24"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="font-serif text-3xl font-light tracking-tight sm:text-4xl">Featured Collections</h2>
          <div className="mx-auto mt-4 h-px w-24 bg-gold"></div>
        </motion.div>

        <div className="relative">
          {/* Carousel */}
          <div className="relative h-[500px] overflow-hidden sm:h-[600px]">
            {featuredProducts.map((product, index) => (
              <div
                key={product.id}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
              >
                <div className="relative h-full w-full">
                  <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
                  <div className="absolute inset-0 bg-black/30"></div>

                  <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-16">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={index === currentSlide ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="max-w-lg"
                    >
                      <h3 className="font-serif text-2xl font-light sm:text-3xl md:text-4xl">{product.name}</h3>
                      <p className="mt-2 text-sm text-zinc-300">{product.tagline}</p>
                      <p className="mt-4 text-xl text-gold">{product.price}</p>
                      <Button
                        className="mt-6 rounded-none border border-white bg-transparent px-8 py-6 text-sm font-light tracking-widest text-white transition-colors hover:bg-white/10"
                        variant="outline"
                      >
                        DISCOVER NOW
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/20 p-3 text-white backdrop-blur-sm transition-all hover:bg-black/40"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/20 p-3 text-white backdrop-blur-sm transition-all hover:bg-black/40"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Indicators */}
          <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 space-x-2">
            {featuredProducts.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-1.5 w-8 transition-all ${index === currentSlide ? "bg-gold" : "bg-white/30"}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
