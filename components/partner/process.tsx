export function ProcessSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center mx-auto mb-4">1</div>
              <h3 className="font-semibold mb-2">Initial Consultation</h3>
              <p className="text-gray-600">We discuss your goals and challenges to design the perfect hackathon format</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center mx-auto mb-4">2</div>
              <h3 className="font-semibold mb-2">Event Planning</h3>
              <p className="text-gray-600">We handle logistics, participant recruitment, and technical setup</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center mx-auto mb-4">3</div>
              <h3 className="font-semibold mb-2">Execution & Follow-up</h3>
              <p className="text-gray-600">We ensure successful delivery and support implementation of solutions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 