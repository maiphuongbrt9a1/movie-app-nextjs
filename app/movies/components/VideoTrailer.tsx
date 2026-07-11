'use client'
import Title from '@/components/Title'
import { Button } from '@/components/ui/button'
import Autoplay from 'embla-carousel-autoplay'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { moviesPageImgs } from '@/data/data'
import {
  RiAddFill,
  RiArrowLeftLongLine,
  RiArrowRightLongLine,
  RiPlayFill,
  RiThumbUpLine,
  RiVolumeUpLine,
} from '@remixicon/react'
import { useEffect, useState } from 'react'
import { type CarouselApi } from '@/components/ui/carousel'
import { motion } from 'motion/react'
import * as variants from '@/motion/animation'

export default function VideoTrailer() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    setCurrent(api.selectedScrollSnap())

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  const scrollTo = (index: number) => {
    api?.scrollTo(index)
  }

  return (
    <motion.section
      variants={variants.staggerContainer}
      initial="hidden"
      whileInView={'show'}
      viewport={{ once: true }}
      className="section px-4 md:px-6"
    >
      <motion.div className="" variants={variants.fadeIn}>
        <Carousel
          opts={{ loop: true }}
          setApi={setApi}
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent>
            {moviesPageImgs.map((item) => (
              <CarouselItem key={item.id}>
                <div className="from-black-08 to-black-06/25 relative container flex h-[650px] flex-col overflow-hidden rounded-xl bg-linear-to-t">
                  {/* Bg image */}
                  <div
                    className="absolute top-0 left-0 -z-10 mb-8 block h-full w-full bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${item.img})` }}
                  ></div>

                  {/* Content */}
                  <div className="mt-auto mb-10 text-center">
                    <Title
                      title={item.title}
                      text={item.text}
                      classes={'mx-auto'}
                    ></Title>

                    {/* Buttons */}
                    <div className="mt-6">
                      {[
                        RiPlayFill,
                        RiAddFill,
                        RiThumbUpLine,
                        RiVolumeUpLine,
                      ].map((Icon, index) => (
                        <Button
                          key={index}
                          variant={index === 0 ? 'default' : 'secondary'}
                          size={'lg'}
                          className="mx-2"
                        >
                          <Icon></Icon>
                          {index === 0 && 'Play Now'}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Pagination dots */}
          <div className="absolute bottom-0 left-1/2 flex -translate-x-1/2 gap-3">
            {moviesPageImgs.map((item, index) => (
              <button
                onClick={() => scrollTo(index)}
                key={index}
                className={`h-1 rounded-full transition-all duration-300 ${current === index ? 'bg-red-45 w-8' : 'bg-black-20 w-4 hover:bg-gray-400'}`}
              />
            ))}
          </div>

          {/* Navigation arrows */}
          <CarouselPrevious className="bg-black-06! ring-black-12 hover:bg-black-10! focus:bg-black-10! absolute bottom-10 left-12 size-12 rounded-lg ring sm:left-20 lg:left-60">
            <RiArrowLeftLongLine />
          </CarouselPrevious>
          <CarouselNext className="bg-black-06! ring-black-12 hover:bg-black-10! focus:bg-black-10! absolute right-12 bottom-10 size-12 rounded-lg ring sm:right-20 lg:right-60">
            <RiArrowRightLongLine />
          </CarouselNext>
        </Carousel>
      </motion.div>
    </motion.section>
  )
}
