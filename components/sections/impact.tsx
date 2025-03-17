export function ImpactSection() {
  return (
    <section className="relative py-32 overflow-hidden bg-slate-50" id="impact">
      <div className="container mx-auto px-4 relative">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-emerald-600">
          Future Impact
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="group hover:scale-105 transition-transform duration-300 text-center p-8 bg-white/80 rounded-2xl shadow-lg backdrop-blur-sm border border-gray-100">
            <div className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-sky-400 to-sky-600 mb-3 animate-pulse">---</div>
            <div className="text-gray-600 font-medium">Participants</div>
          </div>
          
          <div className="group hover:scale-105 transition-transform duration-300 text-center p-8 bg-white/80 rounded-2xl shadow-lg backdrop-blur-sm border border-gray-100">
            <div className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-emerald-400 to-emerald-600 mb-3 animate-pulse">---</div>
            <div className="text-gray-600 font-medium">Projects Launched</div>
          </div>

          <div className="group hover:scale-105 transition-transform duration-300 text-center p-8 bg-white/80 rounded-2xl shadow-lg backdrop-blur-sm border border-gray-100">
            <div className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-sky-400 to-sky-600 mb-3 animate-pulse">---</div>
            <div className="text-gray-600 font-medium">Beneficiaries</div>
          </div>

          <div className="group hover:scale-105 transition-transform duration-300 text-center p-8 bg-white/80 rounded-2xl shadow-lg backdrop-blur-sm border border-gray-100">
            <div className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-emerald-400 to-emerald-600 mb-3 animate-pulse">---</div>
            <div className="text-gray-600 font-medium">Partners</div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto mt-24 relative pt-32">
          <div className="relative">
            <h3 className="text-4xl md:text-5xl font-bold mb-16 bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-emerald-600 text-center leading-tight">
              Shape the Future of Social Innovation
            </h3>
            
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div className="space-y-6">
                <h4 className="text-2xl font-bold text-gray-900">Join Our Mission</h4>
                <p className="text-gray-600 leading-relaxed">
                  Be part of our pioneering community of innovators, developers, and changemakers. Together, we'll tackle pressing social challenges through technology.
                </p>
              </div>
              
              <div className="space-y-6">
                <h4 className="text-2xl font-bold text-gray-900">Create Real Impact</h4>
                <p className="text-gray-600 leading-relaxed">
                  Your skills and creativity can drive meaningful change. Our inaugural hackathon is your opportunity to build solutions that matter.
                </p>
              </div>
            </div>

            <div className="flex justify-center">
              <a 
                href="#" 
                className="flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-sky-600 to-emerald-600 text-white font-semibold hover:opacity-90 transition-all duration-300"
              >
                Join as Participant
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}