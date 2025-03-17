import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { PartnerHero } from "@/components/partner/hero";
import { PartnershipTypes } from "@/components/partner/partnership-types";
import { PartnerForm } from "@/components/partner/partner-form";
import { ProcessSection } from "@/components/partner/process";

export default function PartnerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Header />
      <main className="flex flex-col gap-16 md:gap-24 pb-16">
        <PartnerHero />
        <PartnershipTypes />
        <ProcessSection />
        <PartnerForm />
      </main>
    </div>
  );
} 