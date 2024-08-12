import { Card, CardHeader, CardTitle } from '@/components/ui/card'

import { DATA } from '@/data'

export const TrustedSection = () => {
  return (
    <section id="benefits" className="container py-24 sm:py-32 text-center">
      <div className="place-items-center lg:gap-24">
        <h2 className="text-4xl text-primary text-center mb-2 tracking-wider font-bold">
          Trusted by
        </h2>

        <div className="grid lg:grid-cols-4 gap-4 w-full mt-6">
          {DATA.trustedBy.map(({ name }, idx) => (
            <Card
              key={idx}
              className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number"
            >
              <CardHeader>
                <CardTitle>{name}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
