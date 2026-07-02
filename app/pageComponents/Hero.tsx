import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { RiPlayFill } from '@remixicon/react'

export default function Hero() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat h-svh"
      style={{ backgroundImage: "url('/imgs/movie-imgs/hero-bg-img.png')" }}
    >
      <div className="container flex flex-col justify-center h-full items-center max-h-svh">
        {/* Image  */}
        <div className="aspect-square my-auto">
          <Image
            src="/imgs/movie-imgs/play-logo.svg"
            alt="Hero Logo"
            width={200}
            height={200}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Content */}
        <div className="text-center text-white pb-8 ">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl">
            Stream Everything You Love, Instantly
          </h1>
          <p className="max-w-[1140px] mx-auto mt-2.5 mb-10">
            Unlimited movies. Endless shows. Zero waiting. StreamVibe puts
            thousands of titles at your fingertips—new releases, classics, and
            everything in between. Create custom watchlists, stream on any
            device, and dive into your next favorite story whenever inspiration
            strikes.
          </p>
          <Button size={'lg'}>
            <span className="">
              <RiPlayFill />
            </span>
            Start Watching Now
          </Button>
        </div>
      </div>
    </section>
  )
}
