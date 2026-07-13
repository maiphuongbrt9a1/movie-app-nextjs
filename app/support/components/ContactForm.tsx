'use client'
import Title from '@/components/Title'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import Image from 'next/image'
import { formItems } from '@/data/data'
import InputField from '@/components/InputField'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { motion } from 'motion/react'
import * as variants from '@/motion/animation'

export default function ContactForm() {
  return (
    <section className="section pt-24 md:pt-36">
      <motion.div
        variants={variants.staggerContainer}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: true }}
        className="container grid gap-14 lg:grid-cols-[0.7fr_1fr]"
      >
        {/* content */}
        <div className="space-y-8 lg:space-y-10">
          {/* Title */}
          <Title
            title="Welcome to our support page!"
            text="We're here to help you with any problems you may be having with our product."
          ></Title>

          {/* Card */}
          <motion.div variants={variants.fadeIn} className="">
            <Card className="bg-black-06 max-w-max">
              <CardContent>
                <Image
                  src={'/imgs/movie-imgs/support-page-img.png'}
                  alt="Support"
                  width={449}
                  height={547}
                  loading="eager"
                ></Image>
              </CardContent>
            </Card>
          </motion.div>
        </div>
        {/* form */}
        <motion.form variants={variants.fadeIn} action={'#'} className="">
          <Card>
            <CardContent className="grid gap-5 md:grid-cols-2">
              {formItems.map((item) => (
                <InputField key={item.id} {...item} />
              ))}
              <div className="grid w-full gap-3 md:col-span-2">
                <Label htmlFor="message">Your Message</Label>
                <Textarea placeholder="Type your message here." id="message" />
              </div>
            </CardContent>
            <CardFooter>
              <Button size={'lg'}>Send Message</Button>
            </CardFooter>
          </Card>
        </motion.form>
      </motion.div>
    </section>
  )
}
