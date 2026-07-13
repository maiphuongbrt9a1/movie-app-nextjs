'use client'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { RiPlayFill } from '@remixicon/react'
import { motion } from 'motion/react'
import * as variants from '@/motion/animation'

export default function Hero() {
  const title = 'Stream Everything You Love, Instantly'
  const words = title.split(' ')

  return (
    <section
      className="relative h-svh bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/imgs/movie-imgs/hero-bg-img.png')" }}
    >
      <motion.div
        variants={variants.staggerContainer}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: true }}
        className="container flex h-full max-h-svh flex-col items-center justify-center"
      >
        {/* Image  */}
        <motion.div
          variants={variants.fadeIn}
          className="my-auto aspect-square"
        >
          <Image
            src="/imgs/movie-imgs/play-logo.svg"
            alt="Hero Logo"
            width={200}
            height={200}
            className="h-auto w-full object-cover"
            loading="eager"
          />
        </motion.div>

        {/* Content */}
        <div className="pb-8 text-center text-white">
          <motion.h1
            variants={variants.splitTextContainer}
            className="text-3xl sm:text-4xl lg:text-5xl"
          >
            {words.map((word, index) => (
              <motion.span
                variants={variants.splitTextWord}
                className="mr-2 inline-block origin-bottom"
                key={index}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>
          <motion.p
            variants={variants.fadeInUp}
            className="mx-auto mt-2.5 mb-10 max-w-[1140px]"
          >
            Unlimited movies. Endless shows. Zero waiting. StreamVibe puts
            thousands of titles at your fingertips—new releases, classics, and
            everything in between. Create custom watchlists, stream on any
            device, and dive into your next favorite story whenever inspiration
            strikes.
          </motion.p>
          <motion.div variants={variants.fadeInUp} className="">
            <Button size={'lg'}>
              <span className="">
                <RiPlayFill />
              </span>
              Start Watching Now
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
