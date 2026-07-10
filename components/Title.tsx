'use client'
import { motion } from 'motion/react'
import * as variants from '@/motion/animation'
import { titleProps } from '@/types/types'

export default function Title({ title, text }: titleProps) {
  return (
    <div className="space-y-2">
      <motion.h2 variants={variants.fadeInUp} className="title">
        {title}
      </motion.h2>
      <motion.p variants={variants.fadeInUp} className="max-w-3xl">
        {text}
      </motion.p>
    </div>
  )
}
