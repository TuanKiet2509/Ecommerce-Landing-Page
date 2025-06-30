"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would handle the newsletter signup here
    setIsSubmitted(true)
    setEmail("")
  }

  return (
    <section className="relative overflow-hidden py-24">
      {/* Background with blur effect */}
      <div className="absolute inset-0 z-0">
        <Image src="/images/hero-background.png" alt="Luxury background" fill className="object-cover opacity-20" />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="font-serif text-3xl font-light tracking-tight sm:text-4xl">Join Our Inner Circle</h2>
          <div className="mx-auto mt-4 h-px w-24 bg-gold"></div>
          <p className="mx-auto mt-6 max-w-xl text-zinc-300">
            Subscribe to receive exclusive updates on new collections, private events, and limited edition releases
            before they're announced to the public.
          </p>

          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 rounded-sm border border-gold/30 bg-gold/10 p-6 text-gold"
            >
              <p className="text-lg font-light">Thank you for subscribing.</p>
              <p className="mt-2 text-sm">
                Welcome to the Maison Lumière family. Your first exclusive update will arrive shortly.
              </p>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="mt-8"
            >
              <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <Input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-12 flex-1 rounded-none border-zinc-700 bg-zinc-900/50 text-sm placeholder:text-zinc-500 focus:border-gold focus:ring-gold"
                />
                <Button
                  type="submit"
                  className="h-12 rounded-none bg-gold px-8 text-sm font-light tracking-widest text-black hover:bg-gold/90"
                >
                  SUBSCRIBE
                </Button>
              </div>
              <p className="mt-4 text-xs text-zinc-500">
                By subscribing, you agree to our{" "}
                <a href="#" className="underline hover:text-gold">
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a href="#" className="underline hover:text-gold">
                  Terms & Conditions
                </a>
                .
              </p>
            </motion.form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
