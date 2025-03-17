import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero";
import { NextEventSection } from "@/components/sections/next-event";
import { ImpactSection } from "@/components/sections/impact";
import { FaqSection } from "@/components/sections/faq";
import { NewsletterSection } from "@/components/sections/newsletter";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <HeroSection />
        <NextEventSection />
        {/*<ImpactSection />*/}
        <FaqSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
}
