import Title from '@/components/Title'
import AccordionSec from '@/components/AccordionSec'
import { Button } from './ui/button'

export default function FaqSec() {
  return (
    <section className="section">
      {/* title */}
      <Title
        title="Frequently Asked Questions"
        text="Find instant answers to everything you need to know about StreamVibe—from account setup to streaming quality, billing to device compatibility. Still curious? Our support team is just a click away."
      ></Title>
      {/* Wrapper */}
      <div className="">
        <AccordionSec />
      </div>
      {/* Button */}
      <Button>Ask a Question</Button>
    </section>
  )
}
