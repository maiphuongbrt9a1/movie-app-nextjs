import { CarouselItem } from '@/components/ui/carousel'
import { Card, CardContent, CardFooter } from './ui/card'
import { cardProps } from '@/types/types'
import { Button } from './ui/button'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function Slider({ title, imgs }: cardProps) {
  return (
    <CarouselItem className="pl-2 md:basis-1/3 lg:basis-1/4 ">
      <div className="p-1">
        <Card className="bg-black-10 border-black-15 hover:border-red-45 focus:border-red-45 transition-colors">
          <CardContent>
            <div
              className="grid grid-cols-2 gap-1.5
            "
            >
              {imgs.map((img, index) => (
                <div
                  className="w-full h-32 bg-cover bg-no-repeat rounded-md"
                  key={index}
                  style={{ backgroundImage: `url(${img})` }}
                />
              ))}
            </div>
          </CardContent>
          <CardFooter className="flex justify-between items-center relative z-10">
            <h3>{title}</h3>
            <Button size={'icon-lg'} variant={'ghost'}>
              <Link href={'#'}>
                <ArrowRight />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </CarouselItem>
  )
}
