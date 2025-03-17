import Image from "next/image";

export function FounderSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-sky-50 to-emerald-50 opacity-70"></div>
      <div className="container mx-auto px-4 relative">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative aspect-square w-full max-w-xs mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-sky-200 to-emerald-200 rounded-2xl transform rotate-6"></div>
            <div className="absolute inset-0 bg-white rounded-2xl transform -rotate-3 shadow-lg"></div>
            <div className="relative aspect-square w-full rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/founder.png"
                alt="Founder"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
          <div className="relative">
            <div className="absolute -left-6 -top-6 w-20 h-20 bg-sky-100 rounded-full opacity-20"></div>
            <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-emerald-100 rounded-full opacity-20"></div>
            <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-emerald-600">
              Meet Our Founder
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              After winning four major hackathons, I saw the incredible potential
              of bringing talented people together to solve real problems. That&apos;s why I founded
              Impact Hackathon - to create a platform where innovation drives meaningful
              environmental and social change.
            </p>
            <div className="mt-8 flex gap-4">
              <a href="#" className="text-sky-600 hover:text-sky-700 font-medium flex items-center gap-2">
                LinkedIn
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </a>
              <a href="#" className="text-emerald-600 hover:text-emerald-700 font-medium flex items-center gap-2">
                Twitter
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 