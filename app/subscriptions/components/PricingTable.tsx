'use client'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { tableItems } from '@/data/data'
import { motion } from 'motion/react'
import * as variants from '@/motion/animation'

export default function PricingTable() {
  return (
    <motion.div variants={variants.fadeIn}>
      <Table className="border">
        <TableHeader>
          <TableRow className="bg-black-06 divide-x">
            {['Features', 'Basic', 'Standard', 'Premium'].map((item, index) => (
              <TableHead key={index} className="">
                <div className="flex items-center gap-2">
                  <p className="">{item}</p>
                  {item === 'Standard' && (
                    <span className="rounded-xs bg-red-50 p-1.5 text-sm">
                      Popular
                    </span>
                  )}
                </div>
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {tableItems.map((item) => (
            <TableRow key={item.id} className="divide-x">
              <TableCell>{item.Features}</TableCell>
              <TableCell>{item.Basic}</TableCell>
              <TableCell>{item.Standard}</TableCell>
              <TableCell>{item.Premium}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </motion.div>
  )
}
