import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FaqSection() {
  return (
    <section className="relative py-24 overflow-hidden bg-slate-50" id="faq">
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-emerald-600 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Everything you need to know about Impact Hackathon and how to get involved
          </p>
        </div>

        <div className="max-w-3xl mx-auto backdrop-blur-sm">
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border rounded-xl bg-white/50 shadow-sm">
              <AccordionTrigger className="px-6 hover:no-underline hover:bg-gray-50/50 rounded-xl">
                What is an impact hackathon?
              </AccordionTrigger>
              <AccordionContent className="px-6 text-gray-600">
                An impact hackathon is a collaborative event where participants develop innovative solutions to address concrete social and environmental challenges. Our events bring together passionate individuals to create technology-driven solutions that make a real difference.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="border rounded-xl bg-white/50 shadow-sm">
              <AccordionTrigger className="px-6 hover:no-underline hover:bg-gray-50/50 rounded-xl">
                How do you choose hackathon challenges?
              </AccordionTrigger>
              <AccordionContent className="px-6 text-gray-600">
                We use the ITN framework to select impactful challenges: Innovation potential (is there room for novel solutions?), Technical feasibility (can it be prototyped in 48 hours?), and Need validation (is there a real, urgent social need?). This ensures our hackathons create meaningful and viable solutions.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border rounded-xl bg-white/50 shadow-sm">
              <AccordionTrigger className="px-6 hover:no-underline hover:bg-gray-50/50 rounded-xl">
                Who can participate?
              </AccordionTrigger>
              <AccordionContent className="px-6 text-gray-600">
                Everyone can participate! Whether you're a developer, designer, domain expert, or simply passionate about social and environmental impact. We believe diverse perspectives lead to better solutions.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border rounded-xl bg-white/50 shadow-sm">
              <AccordionTrigger className="px-6 hover:no-underline hover:bg-gray-50/50 rounded-xl">
                How does a hackathon work?
              </AccordionTrigger>
              <AccordionContent className="px-6 text-gray-600">
                Hackathons typically last 48 hours, during which teams collaborate to create functional prototypes. Mentors are present to support the teams throughout the journey. You'll learn, network, and potentially create something that changes lives.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
} 