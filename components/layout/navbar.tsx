'use client'

import { useState, SetStateAction, Dispatch } from 'react'
import { Github, Menu } from 'lucide-react'
import Link from 'next/link'

import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Separator } from '@/components/ui/separator'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'
import { Button } from '@/components/ui/button'
import { DrowserLogo } from '@/components/logos/drowser-logo'

import { ToggleTheme } from '@/components/layout/toogle-theme'

import { DATA } from '@/data'

interface RouteProps {
  href: string
  label: string
}

const routeList: RouteProps[] = [
  {
    href: 'docs',
    label: 'Docs',
  },
]

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="w-full top-0 mx-auto sticky z-40 p-4 flex justify-center items-center bg-card border-b border-secondary">
      <div className="w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-screen-xl flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <DrowserLogo width={100} height={50} />
        </Link>
        {/* <!-- Mobile --> */}
        <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />

        {/* <!-- Desktop --> */}
        <div className="hidden lg:flex justify-center items-center">
          <NavigationMenu className="hidden lg:block mx-auto">
            <NavigationMenuList>
              <NavigationMenuItem>
                {routeList.map(({ href, label }) => (
                  <NavigationMenuLink key={href} asChild>
                    <Link href={href} className="text-base px-2">
                      {label}
                    </Link>
                  </NavigationMenuLink>
                ))}
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <ToggleTheme />

          <Button asChild size="sm" variant="ghost" aria-label="View on GitHub">
            <Link aria-label="View on GitHub" href={DATA.repo} target="_blank">
              <Github className="size-5" />
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

const MobileMenu = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}) => {
  return (
    <div className="flex items-center lg:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Menu
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer lg:hidden"
          />
        </SheetTrigger>

        <SheetContent
          side="left"
          className="flex flex-col justify-between bg-card border-secondary"
        >
          <div>
            <SheetHeader className="mb-4 ml-4">
              <SheetTitle className="flex items-center">
                <Link href="/" className="flex items-center">
                  <DrowserLogo width={100} height={50} />
                </Link>
              </SheetTitle>
            </SheetHeader>

            <div className="flex flex-col gap-2">
              {routeList.map(({ href, label }) => (
                <Button
                  key={href}
                  onClick={() => setIsOpen(false)}
                  asChild
                  variant="ghost"
                  className="justify-start text-base"
                >
                  <Link href={href}>{label}</Link>
                </Button>
              ))}
            </div>
          </div>

          <SheetFooter className="flex-col sm:flex-col justify-start items-start">
            <Separator className="mb-2" />
            <ToggleTheme />
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  )
}
