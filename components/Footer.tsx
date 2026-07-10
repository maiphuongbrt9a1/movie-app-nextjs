'use client'
import { motion } from 'motion/react'
import * as variants from '@/motion/animation'
import { footerList } from '@/data/data'
import {
  RiFacebookBoxFill,
  RiLinkedinBoxFill,
  RiTwitterFill,
} from '@remixicon/react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-black-06 mt-14 pt-14">
      <motion.div
        variants={variants.staggerContainer}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: true }}
        className="divide-black-12 container divide-y"
      >
        {/* Footer top */}
        <div className="grid grid-cols-2 gap-8 pb-14 sm:grid-cols-3 lg:grid-cols-4 lg:pb-20 xl:grid-cols-6">
          {footerList.map((item) => (
            <motion.div
              variants={variants.fadeInUp}
              className="space-y-4"
              key={item.id}
            >
              <p className="font-semibold text-white">{item.title}</p>
              <ul className="space-y-2">
                {item.list.map((label, index) => (
                  <li className="" key={index}>
                    <a href="#" className="hover:underline">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
          {/* Social links */}
          <motion.div variants={variants.fadeInUp} className=" ">
            <p className="font-semibold text-white">Contact us</p>
            <div className="mt-4 flex items-center gap-2.5">
              {[RiFacebookBoxFill, RiTwitterFill, RiLinkedinBoxFill].map(
                (Icon, index) => (
                  <a
                    href="#"
                    className="bg-black-10 hover:bg-black-15 ring-black-15 flex size-11 items-center justify-center rounded-lg text-white ring-2 transition-colors"
                    key={index}
                  >
                    <Icon />
                  </a>
                ),
              )}
            </div>
          </motion.div>
        </div>
        {/* Footer bottom */}
        <div className="mt-5 flex flex-wrap items-center justify-between space-y-3 pb-5">
          <motion.p variants={variants.fadeIn} className="">
            &copy; {new Date().getFullYear()} streamvib. All Rights Reserved
          </motion.p>

          {/* Links */}
          <motion.div
            variants={variants.fadeIn}
            className="divide-black-20 space-x-2 divide-x"
          >
            {['Terms of Use', 'Privacy Policy', 'Cookie Policy'].map(
              (label, index) => (
                <Link
                  href="#"
                  className="text-grey-65 inline-block pr-2 hover:underline"
                  key={index}
                >
                  {' '}
                  {label}
                </Link>
              ),
            )}
          </motion.div>
        </div>
      </motion.div>
    </footer>
  )
}
