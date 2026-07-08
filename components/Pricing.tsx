import Title from './Title'
import { pricingCardItem } from '@/data/data'
import { Card, CardContent, CardFooter } from './ui/card'
import { Car } from 'lucide-react'
import { Button } from './ui/button'

export default function Pricing() {
  return (
    <section className="pt-24 md:pt-36">
      <div className="container">
        {/* title */}
        <Title
          title="Choose the plan that's right for you"
          text="Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!"
        ></Title>
        {/* Wrapper */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 mt-10 lg:mt-14">
          {pricingCardItem.map((item) => (
            <Card key={item.id} className="flex flex-col bg-black-10 ">
              <CardContent key={item.id} className="">
                <h3 className="pt-3">{item.title}</h3>
                <p className="text-grey-60">{item.text}</p>
                <span className="text-2xl lg:text-4xl mt-8 inline-block font-semibold">
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
        </div>
      </div>
    </section>
  )
}
