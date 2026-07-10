'use client'
import { motion } from 'motion/react'
import * as variants from '@/motion/animation'
import Title from '@/components/Title'
import { categoryItems } from '@/data/data'
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Slider from '@/components/Slider'

export default function Categories() {
  return (
    <section className="section">
      <motion.div
        variants={variants.staggerContainer}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: true }}
        className="container space-y-10 lg:space-y-16"
      >
        {/* Title */}
        <Title
          title="Explore our wide variety of categories"
          text="Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new"
        />
        {/* Wrapper */}
        <motion.div variants={variants.fadeIn} className="">
          <Carousel className="w-full max-lg:overflow-x-hidden">
            <CarouselContent className="-ml-1">
              {categoryItems.map((item) => (
                <Slider key={item.id} {...item} />
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </motion.div>
      </motion.div>
    </section>
  )
}
