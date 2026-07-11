import { CarouselItem } from '@/components/ui/carousel'
import { Card, CardContent, CardFooter } from './ui/card'
import { cardTwoProps } from '@/types/types'
import { Timer } from 'lucide-react'
import { RiEyeFill } from '@remixicon/react'
export default function SliderTwo({ cardImg, view, duration }: cardTwoProps) {
  return (
    <CarouselItem className="pl-2 md:basis-1/3 lg:basis-1/4">
      <div className="p-1">
        <Card className="bg-black-10 border-black-15">
          <CardContent>
            {/* Images */}
            <div
              className="h-[232px] w-full rounded-md bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${cardImg})` }}
            ></div>
          </CardContent>
          <CardFooter className="relative z-10 flex items-center justify-between">
            <div className="bg-black-08 ring-black-15 flex items-center gap-0.5 rounded-4xl px-1.5 py-1.5 ring-1">
              <span className="shrink-0">
                <Timer size={16} />
              </span>
              <p className="text-xs">{duration}</p>
            </div>
            <div className="bg-black-08 ring-black-15 flex items-center gap-0.5 rounded-4xl px-1.5 py-1.5 ring-1">
              <span className="shrink-0">
                <RiEyeFill size={16} />
              </span>
              <p className="text-xs">{view}</p>
            </div>
          </CardFooter>
        </Card>
      </div>
    </CarouselItem>
  )
}
