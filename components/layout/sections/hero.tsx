'use client'

import { ChevronRight, Github } from 'lucide-react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { tomorrowNightBright } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import AnimatedGridPattern from '@/components/magicui/animated-grid-pattern'
import { BorderBeam } from '@/components/magicui/border-beam'
import BlurFade from '@/components/magicui/blur-fade'
import AnimatedGradientText from '@/components/magicui/animated-gradient-text'

import { cn } from '@/lib/utils'

export const HeroSection = () => {
  return (
    <section className='w-full relative'>
      <div className='container relative z-10 grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-28'>
        <div className='space-y-8'>
          <BlurFade delay={0.1}>
            <AnimatedGradientText className='bg-white dark:bg-slate-950'>
              <Link href='#studio' className='flex items-center justify-center'>
                <span className='backdrop-blur-3xl'>Introducing Drowser Studio</span>
                <ChevronRight className='ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5' />
              </Link>
            </AnimatedGradientText>
          </BlurFade>

          <BlurFade delay={0.1}>
            <div className='mx-auto text-center text-7xl md:text-9xl font-bold'>
              <h1>Explore new way to write tests</h1>
            </div>
          </BlurFade>

          <div className='space-y-4 md:space-y-0 md:space-x-4'>
            <BlurFade delay={0.2}>
              <CodeBlock />
            </BlurFade>

            <BlurFade delay={0.3}>
              <div className='mt-6 gap-2 flex justify-center'>
                <Button
                  className='w-5/6 md:w-1/4 font-bold group/arrow'
                  onClick={() => window.open('/docs', '_blank')}
                >
                  Documentation
                  <ChevronRight className='size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform' />
                </Button>
                <Button
                  className='w-5/6 md:w-1/4 font-bold group/arrow'
                  variant='outline'
                  onClick={() => {
                    window.open('https://github.com/kinotio/drowser', '_blank')
                  }}
                >
                  <Github className='size-5 mr-2' />
                  Github
                  <ChevronRight className='size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform' />
                </Button>
              </div>
            </BlurFade>
          </div>
        </div>
      </div>

      <AnimatedGridPattern
        numSquares={30}
        className={cn(
          '[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]',
          'inset-x-0 inset-y-[-30%]'
        )}
      />
    </section>
  )
}

const CodeBlock = () => {
  const code = `
  import { driver } from "https://deno.land/x/drowser@${'v0.1.5'}/mod.ts";

  driver({ browser: "chrome" })
    .then(({ service }) => {
      service.cases = [
        {
          name: "Verify Title",
          fn: async ({ builder, assert }) => {
            const title = await builder.getTitle();
            assert.assertEquals(title, "Drowser");
          },
        },
      ];
    })
    .catch((error) => console.log(error));
  `

  return (
    <div className='mx-auto max-w-4xl relative p-4 bg-black rounded-lg mt-4 border border-secondary hidden md:block'>
      <SyntaxHighlighter language='typescript' style={tomorrowNightBright} wrapLongLines>
        {code}
      </SyntaxHighlighter>
      <BorderBeam colorFrom='#fff' colorTo='#fff' />
    </div>
  )
}

export default CodeBlock
