'use client'

import { Button } from "@/components/ui/button";
import { CountdownTimer } from "@/components/ui/countdown-timer";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-sky-100 via-white to-emerald-100" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-20 left-20 w-72 h-72 bg-sky-300 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          style={{
            animation: "float1 10s ease-in-out infinite",
          }}
        />
        <div 
          className="absolute top-40 right-20 w-72 h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          style={{
            animation: "float2 8s ease-in-out infinite",
          }}
        />
        <div 
          className="absolute -bottom-8 left-40 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          style={{
            animation: "float3 9s ease-in-out infinite", 
          }}
        />
        <div 
          className="absolute top-60 left-1/2 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          style={{
            animation: "float4 12s ease-in-out infinite",
          }}
        />
        <div 
          className="absolute bottom-40 right-40 w-80 h-80 bg-rose-300 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          style={{
            animation: "float5 11s ease-in-out infinite",
          }}
        />
        <style>
          {`
            @keyframes float1 {
              0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); }
              25% { transform: translate(30px, 30px) scale(1.1) rotate(5deg); }
              50% { transform: translate(0, 50px) scale(1.2) rotate(0deg); }
              75% { transform: translate(-30px, 30px) scale(1.1) rotate(-5deg); }
            }
            @keyframes float2 {
              0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); }
              33% { transform: translate(-40px, 20px) scale(1.2) rotate(-5deg); }
              66% { transform: translate(40px, 40px) scale(1.1) rotate(5deg); }
            }
            @keyframes float3 {
              0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); }
              25% { transform: translate(20px, -40px) scale(1.15) rotate(10deg); }
              75% { transform: translate(-20px, -20px) scale(1.05) rotate(-10deg); }
            }
            @keyframes float4 {
              0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); }
              20% { transform: translate(-30px, -30px) scale(1.1) rotate(-10deg); }
              40% { transform: translate(30px, 0) scale(1.2) rotate(5deg); }
              60% { transform: translate(0, 30px) scale(1.1) rotate(10deg); }
              80% { transform: translate(-30px, 0) scale(1.15) rotate(-5deg); }
            }
            @keyframes float5 {
              0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); }
              33% { transform: translate(40px, -30px) scale(1.2) rotate(10deg); }
              66% { transform: translate(-40px, -40px) scale(1.1) rotate(-10deg); }
            }
          `}
        </style>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center">
          <div className="inline-block">
            <span className="text-sm font-semibold px-4 py-1 rounded-full bg-white/30 backdrop-blur-sm text-gray-800 mb-6 block">
              Next Hackathon: May 15-16, 2024
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-emerald-600">
            Build Solutions for a 
            <span className="block">Better World</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto text-gray-700 leading-relaxed">
            Join innovators and changemakers building technology solutions for social and environmental impact
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-sky-600 to-sky-700 text-white hover:opacity-90 px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
            >
              Join the community
            </Button>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white hover:opacity-90 px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
            >
              Next hackathon
            </Button>
          </div>

          <div className="relative flex items-center justify-center gap-4">
            <div className="flex -space-x-3">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-12 h-12 rounded-full border-2 border-white bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden relative hover:-translate-y-1 transition-transform duration-200"
                >
                  <img
                    src={`https://i.pravatar.cc/100?img=${i + 1}`}
                    alt={`Community member ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
              <div className="w-12 h-12 rounded-full border-2 border-white bg-gradient-to-br from-sky-500 to-emerald-500 flex items-center justify-center text-white font-medium text-sm hover:-translate-y-1 transition-transform duration-200">
                +150
              </div>
            </div>
            <p className="text-gray-600 font-medium">
              Join <span className="text-sky-600">150+ builders</span> making an impact
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 