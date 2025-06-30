"use client"

import { useEffect, useState } from "react"
import { ArrowDown, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function HeroSection() {
  const [typedText, setTypedText] = useState("")
  const fullText = "Redefining luxury for the modern connoisseur"

  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1))
      }, 100)

      return () => clearTimeout(timeout)
    }
  }, [typedText])

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video autoPlay muted loop playsInline className="h-full w-full object-cover">
          <source src="/videos/luxury-background.mp4" type="video/mp4" />
          {/* Fallback image if video fails to load */}
          <img
            src="/images/hero-background.png"
            alt="Luxury products showcase"
            className="h-full w-full object-cover"
          />
        </video>
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <motion.h1
          className="font-serif text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          MAISON LUMIÈRE
        </motion.h1>

        <motion.p
          className="mt-4 h-8 font-light tracking-wider sm:text-lg md:text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          {typedText}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          className="mt-8"
        >
          <Button
            className="group relative overflow-hidden rounded-none border border-gold bg-transparent px-8 py-6 text-gold transition-all hover:bg-gold/10"
            variant="outline"
          >
            <span className="relative z-10 text-sm font-light tracking-widest">EXPLORE COLLECTION</span>
            <span className="absolute bottom-0 left-0 h-0 w-full bg-gold/20 transition-all duration-300 group-hover:h-full"></span>
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        >
          <ArrowDown className="h-6 w-6 animate-bounce text-zinc-300" />
        </motion.div>
      </div>
    </section>
  )
}
