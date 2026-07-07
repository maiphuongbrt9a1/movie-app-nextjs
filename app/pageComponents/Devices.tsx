import Title from '@/components/Title'
import { devicesItems } from '@/data/data'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import Image from 'next/image'

export default function Devices() {
  return (
    <section className="section">
      <div className="container">
        {/* Title */}
        <Title
          title="Your Entertainment, Every Screen"
          text="Stream seamlessly across all your devices smartphone, tablet, laptop, smart TV, and more. StreamVibe moves with you, delivering flawless playback whether you're commuting, relaxing at home, or on the go. Never miss a scene, no matter where life takes you."
        />
        {/* Wrapper */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 mt-10 lg:mt-16">
          {devicesItems.map((item) => (
            // Card
            <div className="" key={item.id}>
              <Card className="rounded-lg relative overflow-hidden bg-black-06 ">
                <CardHeader className="flex items-center gap-2.5">
                  {/* icon */}
                  <span
                    className="shrink-0 size-14 bg-black-08 flex items-center justify-center
                  ring ring-black-12 rounded-md"
                  >
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={30}
                      height={30}
                    />
                  </span>
                  {/* title */}
                  <h3 className="text-xl gap-3">{item.title}</h3>
                </CardHeader>
                <CardContent className="text-grey-70 ">
                  <p className="">{item.text}</p>
                </CardContent>

                {/* Gradient clr */}
                <div className="size-24 bg-red-55 rounded-full blur-[100px] absolute -top-9 -right-9"></div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
