'use client'
import { motion } from 'motion/react'
import * as variants from '@/motion/animation'
import Title from './Title'
import { pricingCardItem } from '@/data/data'
import { Card, CardContent, CardFooter } from './ui/card'
import { Button } from './ui/button'

export default function Pricing() {
  return (
    <section className="pt-24 md:pt-36">
      <motion.div
        variants={variants.staggerContainer}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: true }}
        className="container"
      >
        {/* title */}
        <Title
          title="Choose the plan that's right for you"
          text="Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!"
        ></Title>
        {/* Wrapper */}
        <motion.div
          variants={variants.fadeIn}
          className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3"
        >
          {pricingCardItem.map((item) => (
            <Card key={item.id} className="bg-black-10 flex flex-col">
              <CardContent key={item.id} className="">
                <h3 className="pt-3">{item.title}</h3>
                <p className="text-grey-60">{item.text}</p>
                <span className="mt-8 inline-block text-2xl font-semibold lg:text-4xl">
                  ${item.price}
                </span>
                /Month
              </CardContent>
              <CardFooter className="mt-auto flex flex-wrap gap-3">
                <Button size={'lg'} variant={'outline'}>
                  Start Free Trial
                </Button>
                <Button size={'lg'}>Choose Plan</Button>
              </CardFooter>
            </Card>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
