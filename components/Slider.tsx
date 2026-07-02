import { CarouselItem } from '@/components/ui/carousel'
import { Card, CardContent, CardFooter } from './ui/card'
import { cardProps } from '@/types/types'

export default function Slider({ title, imgs }: cardProps) {
  return (
    <CarouselItem>
      <div className="">
        <Card>
          <CardContent>
            <div className="">
              {imgs.map((img, index) => (
                <div
                  className="w-full h-32 bg-cover bg-no-repeat rounded-md"
                  key={index}
                  style={{ backgroundImage: `url(${img})` }}
                />
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <h3>{title}</h3>
          </CardFooter>
        </Card>
      </div>
    </CarouselItem>
  )
}
