import { FeatureContainer } from '@/components/feature-container'
import { FeatureSection } from '@/components/feature-section'
import { Hero } from '@/components/hero'
import { PricingSection } from '@/components/pricing-section'

export default function Home() {
  return (
    <main>
      <Hero />
      <FeatureSection />
      <FeatureContainer />
      <PricingSection />
    </main>
  )
}
