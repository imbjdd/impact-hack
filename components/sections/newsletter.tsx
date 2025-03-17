import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function NewsletterSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-sky-200 to-emerald-200 text-black">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Informed</h2>
          <p className="mb-8">
            Receive the latest news about our hackathons and community.
          </p>
          <form className="flex gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Your email"
              className="bg-black border-none text-white"
            />
            <Button variant="default">Subscribe</Button>
          </form>
        </div>
      </div>
    </section>
  );
} 