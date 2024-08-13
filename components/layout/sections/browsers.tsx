import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import { ChromeIcon } from '@/components/icons/chrome-icon'
import { FirefoxIcon } from '@/components/icons/firefox-icon'
import { SafariIcon } from '@/components/icons/safari-icon'
import { EdgeIcon } from '@/components/icons/edge-icon'

import { BrowserKey } from '@/lib/definitions'

import { DATA } from '@/data'

const iconByBrowser: Record<BrowserKey, React.ComponentType<any>> = {
  chrome: ChromeIcon,
  firefox: FirefoxIcon,
  safari: SafariIcon,
  edge: EdgeIcon,
}

export const BrowsersSection = () => {
  return (
    <section id="feature" className="container md:w-[700px] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-5xl text-center font-bold">
          Supported browsers
        </h2>
      </div>

      <div className="grid grid-cols-4 gap-4 w-full mt-6">
        {DATA.supportedBrowsers.map((browser: string, idx: number) => {
          const BrowserIcon = iconByBrowser[browser as BrowserKey]
          return (
            <Card
              key={idx}
              className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number"
            >
              <CardHeader>
                <CardTitle>
                  <BrowserIcon />
                </CardTitle>
              </CardHeader>
            </Card>
          )
        })}
      </div>

      <div className="text-center mt-8">
        <p className="text-lg text-gray-600">
          Our Deno-based testing library, powered by Selenium WebDriver,
          supports Google Chrome, Mozilla Firefox, Microsoft Edge, and Apple
          Safari.
        </p>
      </div>
    </section>
  )
}
