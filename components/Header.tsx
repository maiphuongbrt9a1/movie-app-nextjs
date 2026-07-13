'use client'
import Image from 'next/image'
import Link from 'next/link'
import { navItems } from '@/data/data'
import { Button } from '@/components/ui/button'
import { Bell, Menu, Search, X } from 'lucide-react'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const handleClick = () => {
    return setIsOpen(!isOpen)
  }
  const pathname = usePathname()

  return (
    <header className="from-black-08 fixed top-0 z-40 w-full bg-linear-to-b to-black/10 py-4">
      <div className="relative container flex items-center justify-between">
        {/* Logo */}
        <Link href={'/'}>
          <Image
            src="/imgs/movie-imgs/logo.svg"
            alt="Logo"
            width={166}
            height={50}
            loading="eager"
          />
        </Link>
        {/* Mobile menu */}
        <nav
          className={`bg-black-06 ring-black-12 invisible absolute top-full right-4 divide-y rounded-[10px] p-2 opacity-0 ring-1 lg:hidden ${isOpen ? 'visible opacity-100' : ''}`}
        >
          <ul className="mx-auto grid items-center gap-1 pb-2">
            {navItems.map((item) => {
              return (
                <li key={item.id}>
                  <Link
                    onClick={handleClick}
                    href={item.href}
                    className={`hover:bg-black-12 block rounded-lg px-6 py-3 pr-10 text-white transition-colors ${pathname === item.href ? 'bg-black-10' : 'hover:bg-black-12 transition-colors'}`}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            })}
          </ul>
          {/* buttons */}
          <div className="space-x-2 pt-2">
            <Button className="" size={`icon-lg`} variant={'ghost'}>
              <Search />
            </Button>
            <Button className="" size={`icon-lg`} variant={'ghost'}>
              <Bell />
            </Button>
          </div>
        </nav>
        {/* Desktop menu */}
        <nav className="hidden flex-1 items-center lg:flex">
          <ul className="bg-black-06 ring-black-12 mx-auto flex items-center justify-center gap-1 rounded-[10px] p-2 ring-1">
            {navItems.map((item) => {
              return (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className={`hover:bg-black-12 focus:bg-black-12 block rounded-lg px-5 py-3 text-white transition-colors ${pathname === item.href ? 'bg-black-10' : 'hover:bg-black-12 transition-colors'}`}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            })}
          </ul>
          {/* buttons */}
          <div className="space-x-2">
            <Button className="" size={`icon-lg`} variant={'ghost'}>
              <Search />
            </Button>
            <Button className="" size={`icon-lg`} variant={'ghost'}>
              <Bell />
            </Button>
          </div>
        </nav>
        {/* Menu btn */}
        <Button
          className="lg:hidden"
          size={`icon-lg`}
          variant={'secondary'}
          onClick={handleClick}
        >
          {isOpen ? <X /> : <Menu />}
        </Button>
      </div>
    </header>
  )
}
