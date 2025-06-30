"use client"

import { motion } from "framer-motion"
import Image from "next/image"

// Press mention type
interface PressMention {
  id: number
  name: string
  logo: string
  quote?: string
}

// Sample press mentions
const pressMentions: PressMention[] = [
  {
    id: 1,
    name: "Vogue",
    logo: "/logos/vogue.png",
    quote: "Setting new standards in luxury retail",
  },
  {
    id: 2,
    name: "Forbes",
    logo: "/logos/forbes.png",
    quote: "The epitome of craftsmanship and innovation",
  },
  {
    id: 3,
    name: "Elle",
    logo: "/logos/elle.png",
    quote: "Redefining luxury for the modern era",
  },
  {
    id: 4,
    name: "Robb Report",
    logo: "/logos/robb-report.png",
    quote: "Unparalleled attention to detail",
  },
  {
    id: 5,
    name: "Wallpaper",
    logo: "/logos/wallpaper.png",
    quote: "A masterclass in luxury branding",
  },
  {
    id: 6,
    name: "Architectural Digest",
    logo: "/logos/architectural-digest.png",
    quote: "Elevating the art of luxury retail",
  },
]

export default function SocialProof() {
  return (
    <section className="border-y border-zinc-800 bg-zinc-950 py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="font-serif text-3xl font-light tracking-tight sm:text-4xl">As Featured In</h2>
          <div className="mx-auto mt-4 h-px w-24 bg-gold"></div>
        </motion.div>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
          {pressMentions.map((mention, index) => (
            <motion.div
              key={mention.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group flex flex-col items-center"
            >
              <div className="relative mb-4 h-12 w-full">
                <Image
                  src={mention.logo || "/placeholder.svg"}
                  alt={mention.name}
                  fill
                  className="object-contain opacity-70 transition-opacity duration-300 group-hover:opacity-100"
                />
              </div>
              {mention.quote && (
                <p className="text-center text-xs text-zinc-500 transition-colors duration-300 group-hover:text-gold">
                  "{mention.quote}"
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
