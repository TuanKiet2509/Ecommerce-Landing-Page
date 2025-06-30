"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Star } from "lucide-react"

// Testimonial type
interface Testimonial {
  id: number
  name: string
  location: string
  text: string
  rating: number
  image: string
}

// Sample testimonials
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sophia Laurent",
    location: "Paris, France",
    text: "The craftsmanship of my Lumière pendant is extraordinary. Each detail speaks of the brand's commitment to excellence. It's become my signature piece for both special occasions and everyday elegance.",
    rating: 5,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    name: "Alexander Chen",
    location: "Hong Kong",
    text: "The chronograph watch I purchased exceeds all expectations. The attention to detail, from the face to the band, is impeccable. It's not just a timepiece, but a work of art that I'm proud to wear.",
    rating: 5,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    name: "Isabella Rossi",
    location: "Milan, Italy",
    text: "Maison Lumière's leather goods are unparalleled. The weekend bag I purchased has accompanied me across the globe, aging beautifully with each journey. The quality speaks for itself.",
    rating: 4,
    image: "/placeholder.svg?height=100&width=100",
  },
]

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  // Auto-advance slides
  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        nextSlide()
      }, 6000)
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isPaused, currentSlide])

  return (
    <section className="bg-zinc-950 py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="font-serif text-3xl font-light tracking-tight sm:text-4xl">Client Experiences</h2>
          <div className="mx-auto mt-4 h-px w-24 bg-gold"></div>
        </motion.div>

        <div
          className="relative mx-auto max-w-3xl overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative h-[300px] sm:h-[250px]">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, x: 100 }}
                animate={{
                  opacity: index === currentSlide ? 1 : 0,
                  x: index === currentSlide ? 0 : 100,
                }}
                transition={{ duration: 0.6 }}
                className={`absolute inset-0 ${index === currentSlide ? "block" : "hidden"}`}
              >
                <div className="flex flex-col items-center rounded-lg bg-zinc-900/50 p-8 text-center backdrop-blur-sm">
                  <div className="mb-4 flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < testimonial.rating ? "fill-gold text-gold" : "text-zinc-700"}`}
                      />
                    ))}
                  </div>

                  <p className="mb-6 text-zinc-300">"{testimonial.text}"</p>

                  <div className="flex items-center">
                    <div className="mr-4 h-12 w-12 overflow-hidden rounded-full">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="text-left">
                      <p className="font-serif text-sm font-medium">{testimonial.name}</p>
                      <p className="text-xs text-zinc-400">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Indicators */}
          <div className="mt-8 flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-1.5 w-8 transition-all ${index === currentSlide ? "bg-gold" : "bg-zinc-700"}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
