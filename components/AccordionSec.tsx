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
      className="grid w-full gap-5 md:grid-cols-2 md:space-x-10"
    >
      {faqListItems.map((item) => (
        <AccordionItem key={item.id} value={item.title}>
          <AccordionTrigger>
            <div className="flex items-center gap-4">
              <span className="bg-black-12 ring-black-15 flex size-12 shrink-0 items-center justify-center rounded-lg font-semibold ring">
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
