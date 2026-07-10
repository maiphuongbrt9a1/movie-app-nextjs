import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import './globals.css'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Cta from '@/components/Cta'
import NextTopLoader from 'nextjs-toploader'

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'StreamVibe - Watch Movies & TV Shows Online | Unlimited Streaming',
  description:
    'Stream thousands of movies, TV shows, and documentaries instantly on StreamVibe. Watch the latest blockbusters, classic films, and binge-worthy series on any device. Start your free trial today!',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={manrope.className}>
        <NextTopLoader color="#ffffff" />
        <Header />
        <main className="min-h-svh">{children}</main>
        <Cta />
        <Footer />
      </body>
    </html>
  )
}
