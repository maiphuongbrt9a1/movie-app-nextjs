'use client'
import Title from '@/components/Title'
import PricingTable from './PricingTable'
import { motion } from 'motion/react'
import * as variants from '@/motion/animation'

export default function Features() {
  return (
    <section className="section pt-24 md:pt-36">
      <motion.div
        variants={variants.staggerContainer}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: true }}
        className="container space-y-10 md:space-y-14"
      >
        {/* title */}
        <Title
          text="StreamVibe offers three different plans to fit your needs: Basic, Standard, and Premium. Compare the features of each plan and choose the one that's right for you."
          title="Compare our plans and find the right one for you"
        ></Title>

        {/* Table */}
        <PricingTable />
      </motion.div>
    </section>
  )
}
