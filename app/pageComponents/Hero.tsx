import Image from 'next/image'

export default function Hero() {
  return (
    <section className="text-4xl">
      <div className="container">
        {/* Image  */}
        <div className="">
          <Image
            src="/imgs/movie-imgs/play-logo.svg"
            alt="Hero Logo"
            width={200}
            height={200}
          />
        </div>

        {/* Content */}
        <div className="">
          <h1 className="">Stream Everything You Love, Instantly</h1>
          <p className="">
            Unlimited movies. Endless shows. Zero waiting. StreamVibe puts
            thousands of titles at your fingertips—new releases, classics, and
            everything in between. Create custom watchlists, stream on any
            device, and dive into your next favorite story whenever inspiration
            strikes.
          </p>
        </div>
      </div>
    </section>
  )
}
