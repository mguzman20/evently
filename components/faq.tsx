import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

const Faq = () => {
    return (
        <Accordion type="single" collapsible className="max-w-2xl mx-auto">
            <AccordionItem value="item-1">
                <AccordionTrigger>What is the event about?</AccordionTrigger>
                <AccordionContent>
                    The event is about bringing together enthusiasts and professionals to discuss the latest trends in technology.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger>How can I purchase tickets?</AccordionTrigger>
                <AccordionContent>
                    Tickets can be purchased online through our official website or at the venue on the day of the event.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger>Are there any discounts available?</AccordionTrigger>
                <AccordionContent>
                    Yes, we offer early bird discounts and group discounts. Please check our website for more details.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
                <AccordionTrigger>What is the refund policy?</AccordionTrigger>
                <AccordionContent>
                    Refunds are available up to 7 days before the event. After that, no refunds will be issued.
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}

export default Faq