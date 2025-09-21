'use client';

import Link from 'next/link';
import { 
  FiArrowRight as ArrowRight, 
  FiCheckCircle as CheckCircle, 
  FiHeadphones as Headset, 
  FiGlobe as Globe, 
  FiZap as Zap, 
  FiShield as Shield, 
  FiBarChart2 as BarChart, 
  FiMapPin as MapPin, 
  FiShoppingCart as ShoppingCart, 
  FiPhone as Phone, 
  FiHome as Building, 
  FiHome as Hotel, 
  FiTrendingUp as Rocket
} from 'react-icons/fi';
import { About, Services, HowItWorks, CTA, FoundersMessage } from './components/sections';
import LiveChat from './components/LiveChat';

// Define types for our components
interface IndustryItemProps {
  icon: React.ComponentType<{ className?: string }>;
  name: string;
}

// Reusable Component for Industry Item
const IndustryItem = ({ icon: Icon, name }: IndustryItemProps) => (
  <div className="flex items-center gap-2">
    <Icon className="text-[#1e40af]" />
    <span className="font-medium">{name}</span>
  </div>
);

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section id="home" className="pt-16 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Empowering Businesses through{' '}
                <span className="text-[#1e40af] font-extrabold">Seamless Customer Support</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Multilingual, tech-driven support that boosts satisfaction, loyalty, and growth across Africa
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="/book"
                  className="bg-[#1e40af] text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-blue-700 transition duration-300 shadow-xl text-center transform hover:scale-105"
                >
                  Start Your 14-Day Free Trial
                </Link>
                <Link
                  href="/book"
                  className="border-2 border-[#1e40af] text-[#1e40af] px-8 py-4 rounded-lg text-lg font-bold hover:bg-[#1e40af] hover:text-white transition duration-300 text-center transform hover:scale-105"
                >
                  Book a Consultation
                </Link>
              </div>
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Shield className="text-[#1e40af]" />
                  <span>GDPR-aware processes</span>
                </div>
                <div className="flex items-center gap-2">
                  <BarChart className="text-[#1e40af]" />
                  <span>SLA-backed performance</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="text-[#1e40af]" />
                  <span>Kigali Tech Hub</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition duration-500">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-[#1e40af] rounded-full flex items-center justify-center shadow-lg">
                      <Headset className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">24/7 Support</h3>
                      <p className="text-gray-600 text-sm">Always available for your customers</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-[#059669] rounded-full flex items-center justify-center shadow-lg">
                      <Globe className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">Multilingual</h3>
                      <p className="text-gray-600 text-sm">English • Kinyarwanda • French</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-[#dc2626] rounded-full flex items-center justify-center shadow-lg">
                      <Zap className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">AI-Enabled</h3>
                      <p className="text-gray-600 text-sm">Smart automation with human touch</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Industries */}
      <section className="bg-white py-12 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-600 mb-8 text-lg">Trusted by teams in:</p>
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-700">
            <IndustryItem icon={ShoppingCart} name="E-commerce" />
            <IndustryItem icon={Phone} name="Telecom" />
            <IndustryItem icon={Building} name="Banking & Microfinance" />
            <IndustryItem icon={Hotel} name="Hospitality" />
            <IndustryItem icon={Rocket} name="Tech & Startups" />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose CHILPTECH?
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver world-class customer support that drives satisfaction, loyalty, and business growth
            </p>
          </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition duration-300 border-t-4 border-[#1e40af]">
              <div className="w-16 h-16 bg-[#1e40af] rounded-full flex items-center justify-center mb-6">
                <Globe className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Multilingual by Default</h3>
              <p className="text-gray-600 leading-relaxed">
                English • Kinyarwanda • French—culturally aligned support your customers understand
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition duration-300 border-t-4 border-[#059669]">
              <div className="w-16 h-16 bg-[#059669] rounded-full flex items-center justify-center mb-6">
                <Zap className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">AI-Enabled & Human-Led</h3>
              <p className="text-gray-600 leading-relaxed">
                We blend trained agents with CRM, VoIP, and help-desk tools for fast, precise resolutions
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition duration-300 border-t-4 border-[#dc2626]">
              <div className="w-16 h-16 bg-[#dc2626] rounded-full flex items-center justify-center mb-6">
                <ArrowRight className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Scalable & Cost-Effective</h3>
              <p className="text-gray-600 leading-relaxed">
                Flexible packages and add-ons that grow with you—without the overhead of in-house teams
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition duration-300 border-t-4 border-purple-500">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Insight-Driven</h3>
              <p className="text-gray-600 leading-relaxed">
                Quality monitoring, SLA tracking, and monthly reports to improve satisfaction and retention
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <About />

      {/* Services Section */}
      <Services />

      {/* How It Works Section */}
      <HowItWorks />

      {/* CTA Section */}
      <CTA />

      {/* Founder's Message Section */}
      <FoundersMessage />

      {/* Live Chat */}
      <LiveChat />
    </>
  );
}
