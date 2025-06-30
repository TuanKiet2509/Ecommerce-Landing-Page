"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function BrandStory() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-2">
          {/* Image column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-[500px] overflow-hidden md:h-auto"
          >
            <Image
              src="/images/brand-story.png"
              alt="Maison Lumière atelier"
              fill
              className="object-cover md:relative md:h-full md:w-full"
            />
          </motion.div>

          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <div className="mb-4 inline-block rounded-sm bg-gold/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-gold">
              Our Heritage
            </div>
            <h2 className="mb-6 font-serif text-3xl font-light sm:text-4xl">A Legacy of Luxury Since 1897</h2>

            <div className="space-y-4 text-zinc-300">
              <p>
                Founded in Paris at the turn of the century, Maison Lumière began as a small atelier dedicated to
                crafting exceptional jewelry for European nobility. Our founder, Henri Lumière, believed that true
                luxury lies in the perfect balance of timeless design and uncompromising quality.
              </p>
              <p>
                Today, over a century later, we continue to honor this philosophy. Each Maison Lumière creation is
                meticulously handcrafted by our master artisans, many of whom represent the third or fourth generation
                of their families to work with us.
              </p>
              <p>
                We source only the finest materials from around the world—ethically mined diamonds, responsibly
                harvested precious woods, and sustainably produced leathers—ensuring that our commitment to excellence
                extends to our environmental and social responsibilities.
              </p>
            </div>

            <Button
              className="mt-8 w-fit rounded-none border border-gold bg-transparent px-8 py-6 text-sm font-light tracking-widest text-gold transition-all hover:bg-gold/10"
              variant="outline"
            >
              DISCOVER OUR STORY
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
