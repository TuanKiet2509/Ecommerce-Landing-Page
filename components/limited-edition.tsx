"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"

// Countdown timer type
interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function LimitedEdition() {
  // Set the end date for the limited edition (e.g., 7 days from now)
  const calculateEndDate = () => {
    const endDate = new Date()
    endDate.setDate(endDate.getDate() + 7)
    return endDate
  }

  const [endDate] = useState(calculateEndDate())
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  // Calculate time left
  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = endDate.getTime() - new Date().getTime()

      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        }
      } else {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 }
      }
    }

    // Update countdown every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    // Initial calculation
    setTimeLeft(calculateTimeLeft())

    // Cleanup
    return () => clearInterval(timer)
  }, [endDate])

  return (
    <section className="relative overflow-hidden py-24">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <Image src="/images/hero-background.png" alt="Limited edition background" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          {/* Product image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative mx-auto max-w-md"
          >
            <div className="relative aspect-square overflow-hidden rounded-full border-8 border-gold/20 bg-black/30 backdrop-blur-sm">
              <Image
                src="/images/limited-edition-watch.png"
                alt="Limited Edition Celestial Watch"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 transform rounded-sm bg-gold px-6 py-2 text-xs font-medium uppercase tracking-wider text-black">
              Limited to 50 pieces
            </div>
          </motion.div>

          {/* Product details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <div className="mb-2 inline-block rounded-sm bg-gold/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-gold">
              Limited Edition
            </div>
            <h2 className="mb-4 font-serif text-3xl font-light sm:text-4xl">The Celestial Chronograph</h2>
            <p className="mb-6 text-zinc-300">
              Inspired by the cosmos and crafted with meteorite dials, each piece contains authentic space material that
              traveled billions of miles before reaching Earth. The hand-finished movement features our signature
              constellation pattern visible through the sapphire case back.
            </p>

            {/* Price */}
            <div className="mb-8">
              <span className="text-2xl font-light text-gold">$12,500</span>
            </div>

            {/* Countdown timer */}
            <div className="mb-8">
              <p className="mb-3 text-sm text-zinc-400">Exclusive release ends in:</p>
              <div className="flex space-x-4">
                <div className="flex flex-col items-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-sm border border-zinc-800 bg-black/50 text-2xl font-light backdrop-blur-sm">
                    {timeLeft.days}
                  </div>
                  <span className="mt-1 text-xs text-zinc-500">Days</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-sm border border-zinc-800 bg-black/50 text-2xl font-light backdrop-blur-sm">
                    {timeLeft.hours}
                  </div>
                  <span className="mt-1 text-xs text-zinc-500">Hours</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-sm border border-zinc-800 bg-black/50 text-2xl font-light backdrop-blur-sm">
                    {timeLeft.minutes}
                  </div>
                  <span className="mt-1 text-xs text-zinc-500">Minutes</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-sm border border-zinc-800 bg-black/50 text-2xl font-light backdrop-blur-sm">
                    {timeLeft.seconds}
                  </div>
                  <span className="mt-1 text-xs text-zinc-500">Seconds</span>
                </div>
              </div>
            </div>

            {/* CTA button */}
            <Button className="group relative w-full overflow-hidden rounded-none bg-gold py-6 text-sm font-medium uppercase tracking-widest text-black transition-all hover:bg-gold/90">
              <span className="relative z-10">Reserve Yours Now</span>
              <span className="absolute bottom-0 left-0 h-0 w-full bg-white/20 transition-all duration-300 group-hover:h-full"></span>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
