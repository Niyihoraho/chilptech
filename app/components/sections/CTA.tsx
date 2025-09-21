'use client';

import Link from 'next/link';

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#1e40af] to-[#059669]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Ready to Transform Your Customer Support?
        </h2>
        <p className="text-xl text-blue-100 mb-8 leading-relaxed">
          Join businesses across Africa who trust CHILPTECH for exceptional customer experiences
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/book"
            className="bg-white text-[#1e40af] px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition duration-300 shadow-xl transform hover:scale-105"
          >
            Start Your 14-Day Free Trial
          </Link>
          <Link
            href="/book"
            className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-white hover:text-[#1e40af] transition duration-300 text-center transform hover:scale-105"
          >
            Book a Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
