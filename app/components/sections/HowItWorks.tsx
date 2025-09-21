'use client';

export default function HowItWorks() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Simple, streamlined process to get your customer support up and running
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center relative">
            <div className="w-20 h-20 bg-[#1e40af] rounded-full flex items-center justify-center mx-auto mb-6 relative z-10 shadow-xl">
              <span className="text-2xl font-bold text-white">1</span>
            </div>
            <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-gray-300 -z-10"></div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Map Your Needs</h3>
            <p className="text-gray-600 leading-relaxed">
              We assess your channels, hours, and KPIs to understand your unique requirements
            </p>
          </div>
          <div className="text-center relative">
            <div className="w-20 h-20 bg-[#059669] rounded-full flex items-center justify-center mx-auto mb-6 relative z-10 shadow-xl">
              <span className="text-2xl font-bold text-white">2</span>
            </div>
            <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-gray-300 -z-10"></div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Launch & Train</h3>
            <p className="text-gray-600 leading-relaxed">
              We deploy agents, tools, and workflows tailored specifically to your business
            </p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-[#dc2626] rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
              <span className="text-2xl font-bold text-white">3</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Optimize</h3>
            <p className="text-gray-600 leading-relaxed">
              Ongoing QA, SLA tracking, and insights to continuously improve customer experience
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
