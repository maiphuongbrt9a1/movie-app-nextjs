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
    <header className="fixed top-0 py-4 w-full bg-linear-to-b from-black-08 to-black/10">
      <div className="container flex items-center justify-between relative">
        {/* Logo */}
        <Link href={'/'}>
          <Image
            src="/imgs/movie-imgs/logo.svg"
            alt="Logo"
            width={166}
            height={50}
          />
        </Link>
        {/* Mobile menu */}
        <nav
          className={`lg:hidden absolute top-full 
            right-4 bg-black-06 ring-1 ring-black-12 p-2 rounded-[10px] 
            divide-y opacity-0 invisible ${isOpen ? 'opacity-100 visible' : ''}`}
        >
          <ul className="grid items-center gap-1 mx-auto pb-2">
            {navItems.map((item) => {
              return (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className={`px-6 pr-10 py-3 block text-white hover:bg-black-12 transition-colors rounded-lg ${pathname === item.href ? 'bg-black-10' : 'hover:bg-black-12 transition-colors'}`}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            })}
          </ul>
          {/* buttons */}
          <div className="pt-2 space-x-2">
            <Button className="" size={`icon-lg`} variant={'ghost'}>
              <Search />
            </Button>
            <Button className="" size={`icon-lg`} variant={'ghost'}>
              <Bell />
            </Button>
          </div>
        </nav>
        {/* Desktop menu */}
        <nav className="hidden lg:flex items-center flex-1">
          <ul className="flex items-center justify-center gap-1 mx-auto bg-black-06 ring-1 ring-black-12 p-2 rounded-[10px] ">
            {navItems.map((item) => {
              return (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className={`px-5 py-3 block rounded-lg text-white hover:bg-black-12 focus:bg-black-12 transition-colors ${pathname === item.href ? 'bg-black-10' : 'hover:bg-black-12 transition-colors'}`}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            })}
          </ul>
          {/* buttons */}
          <div className="space-x-2 ">
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
          className="lg:hidden "
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
