import Hero from './pageComponents/Hero'
import Categories from './pageComponents/Categories'
import Devices from './pageComponents/Devices'
import FaqSec from '@/components/FaqSec'
import Pricing from '@/components/Pricing'

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <Devices />
      <FaqSec />
      <Pricing />
    </>
  )
}
