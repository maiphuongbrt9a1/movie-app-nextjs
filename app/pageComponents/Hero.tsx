import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { RiPlayFill } from '@remixicon/react'

export default function Hero() {
  return (
    <section
      className="relative h-svh bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/imgs/movie-imgs/hero-bg-img.png')" }}
    >
      <div className="container flex h-full max-h-svh flex-col items-center justify-center">
        {/* Image  */}
        <div className="my-auto aspect-square">
          <Image
            src="/imgs/movie-imgs/play-logo.svg"
            alt="Hero Logo"
            width={200}
            height={200}
            className="h-auto w-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="pb-8 text-center text-white">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl">
            Stream Everything You Love, Instantly
          </h1>
          <p className="mx-auto mt-2.5 mb-10 max-w-[1140px]">
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
