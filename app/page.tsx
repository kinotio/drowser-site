import { HeroSection } from '@/components/layout/sections/hero'
// import { TrustedSection } from '@/components/layout/sections/trusted'
import { FAQSection } from '@/components/layout/sections/faq'

import { FooterSection } from '@/components/layout/sections/footer'

export default function Home() {
  return (
    <>
      <HeroSection />
      {/* <TrustedSection /> */}
      <FAQSection />
      <FooterSection />
    </>
  )
}
