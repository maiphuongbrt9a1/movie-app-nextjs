import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

import { faqListItems } from '@/data/data'

export default function AccordionSec() {
  return (
    <Accordion
      type="single"
      collapsible
      defaultValue={'What is StreamVibe?'}
      className="w-full grid md:grid-cols-2 gap-5 md:space-x-10"
    >
      {faqListItems.map((item) => (
        <AccordionItem key={item.id} value={item.title}>
          <AccordionTrigger>
            <div className="flex items-center gap-4">
              <span className="size-12 shrink-0 bg-black-12 flex items-center justify-center ring ring-black-15 rounded-lg font-semibold">
                {item.id}
              </span>
              <p className="">{item.title}</p>
            </div>
          </AccordionTrigger>
          <AccordionContent>{item.text}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
