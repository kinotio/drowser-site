import Image from 'next/image'
import { icons } from 'lucide-react'

import { Icon } from '@/components/ui/icon'

const studioFeatures: { title: string; description: string; icon: string }[] = [
  {
    title: 'Self-Hosted',
    description:
      'Ensure your data remains private and secure by hosting the application on your own infrastructure, tailored to your specific needs.',
    icon: 'Home'
  },
  {
    title: 'Monitoring',
    description:
      'Easily monitor application performance with real-time insights, powered by Drowser’s automated testing capabilities.',
    icon: 'MonitorCheck'
  },
  {
    title: 'Friendly User Interface',
    description:
      'Access and visualize test reports through a user-friendly interface designed for clarity and ease of use.',
    icon: 'Handshake'
  },
  {
    title: 'Productivity',
    description:
      'Improve your workflow by quickly analyzing test results and making informed decisions with streamlined reporting tools.',
    icon: 'TrendingUp'
  },
  {
    title: 'Graph Visualization',
    description:
      'Easily interpret test results with dynamic graph visualizations, turning complex data into clear, actionable insights.',
    icon: 'Share'
  },
  {
    title: 'AI-Powered Insights',
    description:
      'Leverage AI support to automatically analyze test results and provide smart recommendations, helping you optimize performance and detect issues faster.',
    icon: 'Bot'
  }
]

export const StudioSection = () => {
  return (
    <section id='studio' className='w-full py-12 md:py-24 lg:py-32'>
      <div className='container px-4 md:px-6'>
        <div className='grid gap-6 lg:grid-cols-[1fr_550px] lg:gap-12 xl:grid-cols-[1fr_650px]'>
          <div className='space-y-4'>
            <div className='space-y-2'>
              <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
                Introducing Drowser Studio
              </h2>
              <p className='max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                Our Studio allows you to easily visualize reports, offering clear and interactive
                insights into your data. Simplify complex information with an intuitive interface
                designed for impactful presentations.
              </p>
            </div>
            <div className='grid grid-cols-2 gap-4'>
              {studioFeatures.map((feature) => (
                <div key={feature.title} className='rounded-lg border bg-background p-4 shadow-sm'>
                  <div className='flex h-12 w-12 items-center justify-center rounded-full bg-primary'>
                    <Icon
                      name={feature.icon as keyof typeof icons}
                      size={20}
                      className='text-primary-foreground'
                    />
                  </div>
                  <h3 className='mt-4 text-lg font-semibold'>{feature.title}</h3>
                  <p className='text-sm text-muted-foreground'>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className='grid gap-4'>
            <Image
              src='/screeshot-1.png'
              alt='Drowser Studio Application Screenshot'
              width={650}
              height={450}
              className='rounded-lg object-fill border'
              style={{ aspectRatio: '650/450', objectFit: 'fill' }}
              priority
            />
            <div className='grid grid-cols-2 gap-4'>
              <Image
                src='/screeshot-2.png'
                alt='Drowser Studio Application Screenshot'
                width={300}
                height={200}
                className='rounded-lg object-fill border'
                style={{ aspectRatio: '300/200', objectFit: 'fill' }}
                priority
              />
              <Image
                src='/screeshot-3.png'
                alt='Drowser Studio Application Screenshot'
                width={300}
                height={200}
                className='rounded-lg object-fill border'
                style={{ aspectRatio: '300/200', objectFit: 'fill' }}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
