'use client'
import { motion } from 'motion/react'
import * as variants from '@/motion/animation'
import Title from '@/components/Title'
import AccordionSec from '@/components/AccordionSec'
import { Button } from './ui/button'

export default function FaqSec() {
  return (
    <section className="section">
      <motion.div
        variants={variants.staggerContainer}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: true }}
        className="container"
      >
        {/* title */}
        <Title
          title="Frequently Asked Questions"
          text="Find instant answers to everything you need to know about StreamVibe—from account setup to streaming quality, billing to device compatibility. Still curious? Our support team is just a click away."
        ></Title>
        {/* Wrapper */}
        <motion.div
          variants={variants.fadeIn}
          className="mt-12 md:mt-18 lg:mt-20"
        >
          <AccordionSec />
        </motion.div>
        {/* Button */}
        <motion.div className="" variants={variants.fadeIn}>
          <Button className="mt-16 lg:mt-20" size={'lg'}>
            Ask a Question
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}
