"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Instagram, Facebook, Twitter } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Footer() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would handle the newsletter signup here
    setIsSubmitted(true)
    setEmail("")
  }

  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 py-16">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div>
            <h3 className="font-serif text-xl font-light">MAISON LUMIÈRE</h3>
            <p className="mt-4 text-sm text-zinc-400">
              Crafting exceptional luxury goods since 1897. Each piece tells a story of heritage, craftsmanship, and
              timeless elegance.
            </p>
            <div className="mt-6 flex space-x-4">
              <a
                href="#"
                className="rounded-full border border-zinc-700 p-2 text-zinc-400 transition-colors hover:border-gold hover:text-gold"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="rounded-full border border-zinc-700 p-2 text-zinc-400 transition-colors hover:border-gold hover:text-gold"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="rounded-full border border-zinc-700 p-2 text-zinc-400 transition-colors hover:border-gold hover:text-gold"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="mb-4 text-sm font-medium uppercase tracking-wider text-zinc-300">Explore</h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li>
                <a href="#" className="transition-colors hover:text-gold">
                  New Arrivals
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-gold">
                  Collections
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-gold">
                  Limited Editions
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-gold">
                  Bespoke Services
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-gold">
                  Gift Guide
                </a>
              </li>
            </ul>
          </div>

          {/* Customer service */}
          <div>
            <h4 className="mb-4 text-sm font-medium uppercase tracking-wider text-zinc-300">Customer Care</h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li>
                <a href="#" className="transition-colors hover:text-gold">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-gold">
                  Shipping & Returns
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-gold">
                  Care Guide
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-gold">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-gold">
                  Store Locator
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="mb-4 text-sm font-medium uppercase tracking-wider text-zinc-300">Newsletter</h4>
            <p className="mb-4 text-sm text-zinc-400">
              Subscribe to receive updates on new collections, exclusive events, and luxury insights.
            </p>

            {isSubmitted ? (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm text-gold">
                Thank you for subscribing.
              </motion.p>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
                <Input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="rounded-none border-zinc-700 bg-zinc-900 text-sm placeholder:text-zinc-500 focus:border-gold focus:ring-gold"
                />
                <Button
                  type="submit"
                  className="rounded-none bg-transparent text-sm font-light tracking-wider text-gold hover:bg-gold/10"
                  variant="outline"
                >
                  SUBSCRIBE
                </Button>
                <p className="text-xs text-zinc-500">
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
              </form>
            )}
          </div>
        </div>

        <div className="mt-16 border-t border-zinc-800 pt-8 text-center text-xs text-zinc-500">
          <p>&copy; {new Date().getFullYear()} Maison Lumière. All rights reserved.</p>
          <div className="mt-2 flex justify-center space-x-4">
            <a href="#" className="hover:text-gold">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gold">
              Terms of Service
            </a>
            <a href="#" className="hover:text-gold">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
