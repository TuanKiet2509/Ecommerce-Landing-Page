import HeroSection from "@/components/hero-section"
import CategoryHighlights from "@/components/category-highlights"
import ProductShowcase from "@/components/product-showcase"
import FeaturedProducts from "@/components/featured-products"
import BrandStory from "@/components/brand-story"
import Testimonials from "@/components/testimonials"
import NewsletterSignup from "@/components/newsletter-signup"
import SocialProof from "@/components/social-proof"
import LimitedEdition from "@/components/limited-edition"
import VirtualTryOn from "@/components/virtual-try-on"
import StyleGuide from "@/components/style-guide"
import EventSpotlight from "@/components/event-spotlight"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-950 to-zinc-900 text-zinc-50">
      <HeroSection />
      <CategoryHighlights />
      <ProductShowcase />
      <FeaturedProducts />
      <BrandStory />
      <LimitedEdition />
      <VirtualTryOn />
      <StyleGuide />
      <Testimonials />
      <SocialProof />
      <EventSpotlight />
      <NewsletterSignup />
      <Footer />
    </main>
  )
}
