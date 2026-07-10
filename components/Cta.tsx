'use client'
import { motion } from 'motion/react'
import * as variants from '@/motion/animation'
import Title from './Title'
import { Button } from './ui/button'

export default function Cta() {
  return (
    <section className="section">
      <motion.div
        variants={variants.staggerContainer}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: true }}
        className="container"
      >
        <motion.div
          variants={variants.fadeInUp}
          className="ring-black-20 flex flex-col items-center gap-14 rounded-lg bg-[url(/imgs/movie-imgs/cta-bg-img.png)] bg-cover bg-center bg-no-repeat px-8 py-14 text-center ring lg:flex-row lg:gap-24 lg:px-12 lg:text-left"
        >
          {/* Content */}
          <Title
            title="Start your free trial today!"
            text="Start your free trial today and discover why millions choose StreamVibe for their entertainment."
          />
          <Button size={'lg'}>Start a Free Trial</Button>
        </motion.div>
      </motion.div>
    </section>
  )
}
