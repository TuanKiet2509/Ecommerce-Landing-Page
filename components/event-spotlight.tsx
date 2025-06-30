"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"

// Event type
interface Event {
  id: number
  title: string
  date: string
  location: string
  image: string
  description: string
}

// Sample upcoming event
const upcomingEvent: Event = {
  id: 1,
  title: "Celestial Collection Launch",
  date: "May 15, 2025",
  location: "Maison Lumière Flagship, Paris",
  image: "/images/event-spotlight.png",
  description:
    "Join us for an exclusive evening celebrating the launch of our Celestial Collection. Experience the unveiling of these extraordinary pieces inspired by the cosmos, accompanied by champagne and a special musical performance.",
}

export default function EventSpotlight() {
  return (
    <section className="border-t border-zinc-800 bg-zinc-950 py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="font-serif text-3xl font-light tracking-tight sm:text-4xl">Upcoming Events</h2>
          <div className="mx-auto mt-4 h-px w-24 bg-gold"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-sm border border-zinc-800"
        >
          <div className="grid md:grid-cols-2">
            {/* Event image */}
            <div className="relative h-[300px] md:h-auto">
              <Image
                src={upcomingEvent.image || "/placeholder.svg"}
                alt={upcomingEvent.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent md:bg-gradient-to-r"></div>
            </div>

            {/* Event details */}
            <div className="relative flex flex-col justify-center bg-zinc-900 p-8 md:p-12">
              <div className="mb-2 inline-block rounded-sm bg-gold/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-gold">
                Featured Event
              </div>
              <h3 className="mb-4 font-serif text-2xl font-light sm:text-3xl">{upcomingEvent.title}</h3>

              <div className="mb-6 flex flex-col space-y-2">
                <div className="flex items-center">
                  <Calendar className="mr-2 h-4 w-4 text-gold" />
                  <span className="text-sm text-zinc-300">{upcomingEvent.date}</span>
                </div>
                <div className="flex items-center">
                  <span className="text-sm text-zinc-300">{upcomingEvent.location}</span>
                </div>
              </div>

              <p className="mb-8 text-zinc-400">{upcomingEvent.description}</p>

              <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <Button className="rounded-none bg-gold py-6 text-sm font-medium uppercase tracking-wider text-black hover:bg-gold/90">
                  RSVP Now
                </Button>
                <Button
                  variant="outline"
                  className="rounded-none border-zinc-700 py-6 text-sm font-medium uppercase tracking-wider text-zinc-300 hover:bg-zinc-800 hover:text-white"
                >
                  Add to Calendar
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
