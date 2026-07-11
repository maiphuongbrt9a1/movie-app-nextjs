import VideoTrailer from './components/VideoTrailer'
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import {
  categoryItems,
  categoryItemsFour,
  categoryItemsThree,
  categoryItemsTwo,
} from '@/data/data'
import Slider from '@/components/Slider'
import SliderTwo from '@/components/SliderTwo'

export default function Movies() {
  return (
    <>
      <VideoTrailer />
      {/* Movies Genres */}
      <section className="section">
        <div className="container space-y-5 md:space-y-10">
          {/* Title */}
          <div className="">
            <h2 className="title">Our Genres</h2>
          </div>
          {/* Wrapper */}
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
      </section>

      {/* Top 10 Movies */}
      <section className="section">
        <div className="container space-y-5 md:space-y-10">
          {/* Title */}
          <div className="">
            <h2 className="title">Popular Top 10 In Genres</h2>
          </div>

          {/* Wrapper */}
          <Carousel className="w-full max-lg:overflow-x-hidden">
            <CarouselContent className="-ml-1">
              {categoryItemsTwo.map((item) => (
                <Slider key={item.id} {...item} />
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Trending Now */}
      <section className="section">
        <div className="container space-y-5 md:space-y-10">
          {/* Title */}
          <div className="">
            <h2 className="title">Trending Now</h2>
          </div>

          {/* Wrapper */}
          <Carousel className="w-full max-lg:overflow-x-hidden">
            <CarouselContent className="-ml-1">
              {categoryItemsThree.map((item) => (
                <SliderTwo key={item.id} {...item} />
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Must - Watch Movies */}
      <section className="section">
        <div className="container space-y-5 md:space-y-10">
          {/* Title */}
          <div className="">
            <h2 className="title">Must - Watch Movies</h2>
          </div>

          {/* Wrapper */}
          <Carousel className="w-full max-lg:overflow-x-hidden">
            <CarouselContent className="-ml-1">
              {categoryItemsFour.map((item) => (
                <SliderTwo key={item.id} {...item} />
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>
    </>
  )
}
