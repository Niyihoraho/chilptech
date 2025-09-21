'use client';

import Image from 'next/image';
import { 
  FiMessageSquare as QuoteLeft, 
  FiUser as User, 
  FiZap as Rocket, 
  FiUsers as Handshake, 
  FiHeart as Heart 
} from 'react-icons/fi';

export default function FoundersMessage() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-[#1e40af] rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-[#059669] rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-[#1e40af] rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">From Our Founder</h2>
          <div className="w-24 h-1 bg-[#1e40af] mx-auto rounded-full"></div>
        </div>

        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100">
          <div className="flex flex-col lg:flex-row items-start gap-8">
            {/* Quote Icon */}
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-[#1e40af]/10 rounded-full flex items-center justify-center">
                <QuoteLeft className="text-3xl text-[#1e40af]" />
              </div>
            </div>

            {/* Message Content */}
            <div className="flex-1">
              <blockquote className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-8 italic font-medium">
                "At CHILPTECH, we are more than an outsourcing firm, we are a team united by a vision: to
                transform customer support into a driver of business growth and national development.
                Together, we empower businesses with world-class, multilingual solutions while creating jobs
                and opportunities for Rwanda's young talent. By combining innovation, integrity, and a
                customer-first mindset, we are building a future where businesses thrive and Rwanda stands
                as a hub for excellence in Africa."
              </blockquote>

              {/* Founder Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                  <Image 
                    src="/seth.jpg" 
                    alt="NKURUNZIZA Seth - Founder of CHILPTECH" 
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900">NKURUNZIZA Seth</h4>
                  <p className="text-[#1e40af] font-medium">Founder, CHILPTECH</p>
                </div>
              </div>
            </div>
          </div>

          {/* Vision Points */}
          <div className="mt-12 pt-8 border-t border-gray-100 grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-[#1e40af]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="text-[#1e40af] text-xl" />
              </div>
              <h5 className="text-gray-900 font-semibold mb-2">Innovation</h5>
              <p className="text-gray-600 text-sm">Cutting-edge solutions for modern businesses</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#059669]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Handshake className="text-[#059669] text-xl" />
              </div>
              <h5 className="text-gray-900 font-semibold mb-2">Integrity</h5>
              <p className="text-gray-600 text-sm">Trust and transparency in every interaction</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#dc2626]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-[#dc2626] text-xl" />
              </div>
              <h5 className="text-gray-900 font-semibold mb-2">Customer-First</h5>
              <p className="text-gray-600 text-sm">Your success is our primary mission</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
