'use client'

import Link from 'next/link'
import { icons } from 'lucide-react'

import { Icon } from '@/components/ui/icon'
import { KinotioLogo } from '@/components/logos/kinotio-logo'

import { getCurrentYear } from '@/lib/utils'

import { DATA } from '@/data'

export const FooterSection = () => {
  return (
    <footer id="footer" className="bg-card border-t border-secondary w-full">
      <div className="container py-24 sm:py-32 p-10 w-full place-items-stretch">
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 xl:grid-cols-5 gap-x-12 gap-y-8 z-50">
          <div className="col-span-full xl:col-span-2">
            <Link href="/" className="flex font-bold items-center">
              <KinotioLogo width={100} height={50} />
            </Link>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Contact</h3>
            {DATA.footer.contact.map((contact, idx) => (
              <Link
                key={idx}
                href={contact.href}
                className="flex gap-2 items-center opacity-60 hover:opacity-100"
              >
                <Icon name={contact.icon as keyof typeof icons} size={18} />
                {contact.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Help</h3>
            {DATA.footer.help.map((help, idx) => (
              <Link
                key={idx}
                href={help.href}
                className="opacity-60 hover:opacity-100"
              >
                {help.name}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Socials</h3>
            {DATA.footer.socials.map((social, idx) => (
              <Link
                key={idx}
                href={social.href}
                className="opacity-60 hover:opacity-100"
              >
                {social.label}
              </Link>
            ))}
          </div>
        </div>

        <section>
          <h3>
            Copyright
            {` © ${getCurrentYear()} `}
            <Link
              target="_blank"
              href={DATA.social_url.github}
              className="text-primary transition-all border-primary hover:border-b-2 ml-1"
            >
              Developed by Kinotio. All rights reserved.
            </Link>
          </h3>
        </section>
      </div>
    </footer>
  )
}
