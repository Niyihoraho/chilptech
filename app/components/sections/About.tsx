'use client';

import Image from 'next/image';
import { FiCheckCircle as CheckCircle } from 'react-icons/fi';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About CHILPTECH</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-1">
              At CHILPTECH Customer Support Firm, we help businesses in Rwanda and beyond deliver world class
              customer experiences through reliable, scalable, and multilingual support solutions. We
              specialize in serving SMEs, startups, and enterprises with flexible and affordable outsourcing
              services covering calls, emails, live chat, social media, and technical support.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Built on Rwanda's young, multilingual workforce and modern support technologies, we go beyond
              being a service provider we are a trusted growth partner. With a customer first mindset, we
              believe loyalty, trust, and satisfaction are the keys to long-term success. Our mission is to
              empower businesses, create jobs, and position Rwanda as a leading hub for customer support in
              Africa.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <CheckCircle className="text-[#059669] text-xl" />
                <span className="text-gray-700">Rwanda-based excellence</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-[#059669] text-xl" />
                <span className="text-gray-700">International standards</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-[#059669] text-xl" />
                <span className="text-gray-700">Proven track record</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-[#059669] text-xl" />
                <span className="text-gray-700">Cultural alignment</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <Image 
              src="/chilpppp.jpg" 
              alt="CHILPTECH Team" 
              width={600}
              height={400}
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-[#1e40af] text-white p-6 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
