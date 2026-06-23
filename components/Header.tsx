import Image from 'next/image'
import Link from 'next/link'
import { navItems } from '@/data/data'

export default function Header() {
  return (
    <header>
      <div className="container">
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
        <nav className="">
          <ul className="">
            {navItems.map((item) => {
              return (
                <li key={item.id}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              )
            })}
          </ul>
          {/* buttons */}
          <div className=""></div>
        </nav>
        {/* Desktop menu */}
        <nav className=""></nav>
        {/* Menu btn */}
      </div>
    </header>
  )
}
