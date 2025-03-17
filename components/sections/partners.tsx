import Image from "next/image";

export function PartnersSection() {
  return (
    <section className="relative py-32 overflow-hidden" id="partners">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-70"></div>
      <div className="absolute -left-32 -top-32 w-96 h-96 bg-sky-100 rounded-full opacity-20 blur-[100px]"></div>
      <div className="absolute -right-32 -bottom-32 w-96 h-96 bg-emerald-100 rounded-full opacity-20 blur-[100px]"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-emerald-600 mb-6">
            Become Our First Partner
          </h2>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto leading-relaxed">
            Join us in our mission to drive innovation and create meaningful impact. Be the first to partner with Impact Hackathon.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="group p-8 bg-white/80 rounded-2xl shadow-lg backdrop-blur-sm border border-gray-100 hover:scale-105 transition-all duration-300">
            <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-sky-400 to-sky-600 flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">For Non-Profits</h3>
            <p className="text-gray-600 mb-6">
              Access our global tech talent pool and get custom solutions for your cause through focused hackathons.
            </p>
          </div>

          <div className="group p-8 bg-white/80 rounded-2xl shadow-lg backdrop-blur-sm border border-gray-100 hover:scale-105 transition-all duration-300">
            <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">For Companies</h3>
            <p className="text-gray-600 mb-6">
              Drive innovation and discover breakthrough solutions while connecting with top tech talent globally.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <a 
            href="/partner"
            className="inline-flex items-center px-8 py-4 rounded-xl bg-gradient-to-r from-sky-500 to-emerald-500 text-white font-medium hover:opacity-90 transition-all hover:scale-105 shadow-lg hover:shadow-xl group"
          >
            Partner with Us
            <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
} 