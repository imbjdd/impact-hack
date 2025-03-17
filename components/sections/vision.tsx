import { Target, Users, Lightbulb } from "lucide-react";

export function VisionSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-white to-gray-50" id="vision">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-emerald-600">Our Vision</h2>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
            <div className="mb-6 bg-sky-100 w-16 h-16 rounded-xl flex items-center justify-center">
              <Target className="w-8 h-8 text-sky-600" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Measurable Impact</h3>
            <p className="text-gray-600 leading-relaxed">
              We create concrete solutions with measurable social and environmental impact, driving real change in communities.
            </p>
          </div>
          <div className="p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
            <div className="mb-6 bg-emerald-100 w-16 h-16 rounded-xl flex items-center justify-center">
              <Users className="w-8 h-8 text-emerald-600" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Collaboration</h3>
            <p className="text-gray-600 leading-relaxed">
              A diverse community of developers, designers, and domain experts working together to create lasting solutions.
            </p>
          </div>
          <div className="p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
            <div className="mb-6 bg-purple-100 w-16 h-16 rounded-xl flex items-center justify-center">
              <Lightbulb className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Innovation</h3>
            <p className="text-gray-600 leading-relaxed">
              Pioneering innovative solutions to address current and future societal challenges through technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 