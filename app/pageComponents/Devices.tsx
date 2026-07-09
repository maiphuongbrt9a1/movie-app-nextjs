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
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {devicesItems.map((item) => (
            // Card
            <div className="" key={item.id}>
              <Card className="bg-black-06 relative overflow-hidden rounded-lg">
                <CardHeader className="flex items-center gap-2.5">
                  {/* icon */}
                  <span className="bg-black-08 ring-black-12 flex size-14 shrink-0 items-center justify-center rounded-md ring">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={30}
                      height={30}
                    />
                  </span>
                  {/* title */}
                  <h3 className="gap-3 text-xl">{item.title}</h3>
                </CardHeader>
                <CardContent className="text-grey-70">
                  <p className="">{item.text}</p>
                </CardContent>

                {/* Gradient clr */}
                <div className="bg-red-55 absolute -top-9 -right-9 size-24 rounded-full blur-[100px]"></div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
