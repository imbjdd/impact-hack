'use client'

import { Button } from "@/components/ui/button";
import { CountdownTimer } from "@/components/ui/countdown-timer";
import { MousePointer2 } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Images flottantes - maintenant en premier et avec z-index négatif */}
      <div className="absolute w-full h-full top-0 left-0 pointer-events-none -z-10">
        <img
          src="/images/event-1.jpg"
          alt=""
          className="absolute w-32 h-32 object-cover rounded-lg shadow-lg transform rotate-6 top-[15%] left-[20%]"
        />
        <img
          src="/images/event-2.jpeg"
          alt=""
          className="absolute w-32 h-32 object-cover rounded-lg shadow-lg transform -rotate-12 top-[20%] right-[20%]"
        />
        <img
          src="/images/event-1.jpg"
          alt=""
          className="absolute w-32 h-32 object-cover rounded-lg shadow-lg transform rotate-3 bottom-[20%] left-[25%]"
        />
        <img
          src="/images/event-1.jpg"
          alt=""
          className="absolute w-32 h-32 object-cover rounded-lg shadow-lg transform -rotate-6 bottom-[15%] right-[25%]"
        />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-semibold mb-4">
            Join Impact-Driven Hackathons
          </h1>
          <p className="text-lg md:text-5xl mb-8 z-10">
            <span className="text-gray-400">—</span>
            <span className="text-gray-400">Hackathons</span>,
            <span className="text-gray-400"> Impact</span>,
            <span className="bg-gradient-to-r from-sky-600 to-emerald-600 bg-clip-text text-transparent font-bold  relative inline-flex items-center">&nbsp;Innovation 
              <MousePointer2 
                className="absolute -bottom-8 -right-0 w-12 h-12 animate-pulse text-black"
              />
            </span>, and more.
          </p>
          <p className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto">
            Join forces with developers and organizations to create innovative solutions for global challenges through collaborative hackathons.
          </p>
          <div className="flex flex-row gap-4 justify-center items-center mb-12">
            <Button 
              variant="default"
              size="lg" 
              className="bg-gray-900 text-white hover:bg-gray-800"
            >
              Get Started
            </Button>
            <Button 
              variant="default"
              size="lg" 
              className="bg-gradient-to-r from-sky-600 to-emerald-600 text-white hover:opacity-90"
            >
              Explore Events
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
} 