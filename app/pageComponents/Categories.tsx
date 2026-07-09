import Title from '@/components/Title'
import { Card, CardContent } from '@/components/ui/card'
import { categoryItems } from '@/data/data'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Slider from '@/components/Slider'

export default function Categories() {
  return (
    <section className="section">
      <div className="container space-y-10 lg:space-y-16">
        {/* Title */}
        <Title
          title="Explore our wide variety of categories"
          text="Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new"
        />
        {/* Wrapper */}
        <div className="">
          <Carousel className="w-full max-lg:overflow-x-hidden">
            <CarouselContent className="-ml-1">
              {categoryItems.map((item) => (
                <Slider key={item.id} {...item} />
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  )
}
