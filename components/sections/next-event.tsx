import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarIcon, GlobeIcon, UsersIcon } from "lucide-react";

export function NextEventSection() {
  return (
    <section className="relative py-24 overflow-hidden" id="events">
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-[#DD403A] tracking-wider uppercase">Upcoming</span>
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#DD403A] to-[#FF7A45] mt-2 mb-4">
            Next Event
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-[#DD403A] to-[#FF7A45] mx-auto rounded-full"></div>
        </div>

        <Card className="max-w-3xl mx-auto backdrop-blur-sm bg-white/90 border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <CardHeader className="space-y-4 pb-4">
            <div className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-[#FFFCE8] to-[#FFF0E0] text-[#DD403A] text-sm font-medium">
              Featured Event
            </div>
            <CardTitle className="text-3xl">Global Change Hackathon</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-br from-[#FFFCE8] to-[#FFFCE8]/50">
                <CalendarIcon className="h-6 w-6 text-[#DD403A]" />
                <div>
                  <p className="text-sm text-[#DD403A] font-medium">Date</p>
                  <p className="text-gray-900">May 15-16, 2025</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-br from-[#FFFCE8] to-[#FFF0E0]/50">
                <GlobeIcon className="h-6 w-6 text-[#DD403A]" />
                <div>
                  <p className="text-sm text-[#DD403A] font-medium">Location</p>
                  <p className="text-gray-900">Online</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-br from-[#FFFCE8] to-[#FFFCE8]/50">
                <UsersIcon className="h-6 w-6 text-[#DD403A]" />
                <div>
                  <p className="text-sm text-[#DD403A] font-medium">Participants</p>
                  <p className="text-gray-900">150 spots</p>
                </div>
              </div>
            </div>
            
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Join us for 48 hours of creation and innovation around climate issues and biodiversity preservation. Connect with like-minded innovators and create solutions that matter.
            </p>

            <Button className="w-full bg-gradient-to-r from-[#DD403A] to-[#FF7A45] hover:opacity-90 transition-opacity text-lg py-6">
              Register Now
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
} 