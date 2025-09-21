'use client';

import { useState } from 'react';
import { 
  FiPhone as Phone, 
  FiMail as Mail, 
  FiMessageCircle as MessageCircle, 
  FiShare2 as Share2, 
  FiFileText as Ticket, 
  FiClock as Clock,
  FiCheckCircle as CheckCircle,
  FiUsers as Users,
  FiClipboard as Clipboard,
  FiZap as Zap,
  FiShield as Shield,
  FiTrendingUp as TrendingUp,
  FiHome as Building,
  FiBarChart2 as ChartLine,
  FiBriefcase as Industry
} from 'react-icons/fi';

export default function Services() {
  const [showDetailedServices, setShowDetailedServices] = useState(false);

  return (
    <>
      {/* Core Services */}
      <section id="services" className="py-20 bg-gradient-to-br from-[#1e40af] to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Core Services</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive customer support solutions tailored to your business needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition duration-300">
              <Phone className="text-3xl mb-4 text-blue-200" />
              <h3 className="text-xl font-bold mb-3">Phone Support</h3>
              <p className="text-blue-100">Inbound and outbound call handling with professional agents</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition duration-300">
              <Mail className="text-3xl mb-4 text-blue-200" />
              <h3 className="text-xl font-bold mb-3">Email Support</h3>
              <p className="text-blue-100">Timely and professional email response management</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition duration-300">
              <MessageCircle className="text-3xl mb-4 text-blue-200" />
              <h3 className="text-xl font-bold mb-3">Live Chat Support</h3>
              <p className="text-blue-100">Real-time chat assistance for immediate customer needs</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition duration-300">
              <Share2 className="text-3xl mb-4 text-blue-200" />
              <h3 className="text-xl font-bold mb-3">Social Media Management</h3>
              <p className="text-blue-100">Professional social media customer service and engagement</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition duration-300">
              <Ticket className="text-3xl mb-4 text-blue-200" />
              <h3 className="text-xl font-bold mb-3">Help Desk & Ticketing</h3>
              <p className="text-blue-100">Organized ticket management and resolution tracking</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition duration-300">
              <Clock className="text-3xl mb-4 text-blue-200" />
              <h3 className="text-xl font-bold mb-3">24/7 Coverage</h3>
              <p className="text-blue-100">Round-the-clock support for global business operations</p>
            </div>
          </div>
          <div className="text-center">
            <button 
              onClick={() => setShowDetailedServices(!showDetailedServices)}
              className="bg-white text-[#1e40af] px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition duration-300 shadow-xl transform hover:scale-105"
            >
              {showDetailedServices ? 'Hide Detailed Services' : 'Detailed Services'}
            </button>
          </div>
        </div>
      </section>

      {/* Detailed Services Section */}
      {showDetailedServices && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Complete Service Packages</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Full spectrum of customer support solutions for startups, SMEs, and large enterprises
              </p>
            </div>

            {/* Service Packages */}
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {/* Basic Package */}
              <div className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-200 hover:border-[#1e40af] transition duration-300">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Basic Support</h3>
                  <p className="text-[#1e40af] font-semibold">Ideal for SMEs & Startups</p>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-[#059669] text-lg mt-1" />
                    <span className="text-gray-700">Inbound & Outbound Call Support (business hours)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-[#059669] text-lg mt-1" />
                    <span className="text-gray-700">Email Support (responses within 24h)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-[#059669] text-lg mt-1" />
                    <span className="text-gray-700">Live Chat Support (business hours)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-[#059669] text-lg mt-1" />
                    <span className="text-gray-700">Basic Reporting & Analytics (monthly reports)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-[#059669] text-lg mt-1" />
                    <span className="text-gray-700">Knowledge Base & FAQ Setup</span>
                  </li>
                </ul>
              </div>

              {/* Standard Package */}
              <div className="bg-[#1e40af]/5 rounded-2xl p-8 border-2 border-[#1e40af] relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[#1e40af] text-white px-4 py-2 rounded-full text-sm font-semibold">Most Popular</span>
                </div>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Standard Support</h3>
                  <p className="text-[#1e40af] font-semibold">For Growing Businesses</p>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-[#059669] text-lg mt-1" />
                    <span className="text-gray-700">24/7 Multichannel Support (calls, emails, chat, SMS)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-[#059669] text-lg mt-1" />
                    <span className="text-gray-700">Social Media Support & Monitoring</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-[#059669] text-lg mt-1" />
                    <span className="text-gray-700">Complaint Resolution Desk (escalations, root cause analysis)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-[#059669] text-lg mt-1" />
                    <span className="text-gray-700">CRM Integration & Customer Tracking</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-[#059669] text-lg mt-1" />
                    <span className="text-gray-700">Quality Assurance Monitoring</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-[#059669] text-lg mt-1" />
                    <span className="text-gray-700">Multilingual Support (English, French, Kinyarwanda)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-[#059669] text-lg mt-1" />
                    <span className="text-gray-700">Proactive Outbound Communication</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-[#059669] text-lg mt-1" />
                    <span className="text-gray-700">Weekly Performance Reports</span>
                  </li>
                </ul>
              </div>

              {/* Premium Package */}
              <div className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-200 hover:border-[#059669] transition duration-300">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Premium / Enterprise</h3>
                  <p className="text-[#059669] font-semibold">For Large Organizations</p>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-[#059669] text-lg mt-1" />
                    <span className="text-gray-700">Omnichannel Support (calls, chat, email, SMS, WhatsApp, AI chatbots)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-[#059669] text-lg mt-1" />
                    <span className="text-gray-700">Dedicated Complaint Resolution Unit</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-[#059669] text-lg mt-1" />
                    <span className="text-gray-700">Advanced CRM & Data Analytics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-[#059669] text-lg mt-1" />
                    <span className="text-gray-700">Custom SLAs & Guaranteed Response Times</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-[#059669] text-lg mt-1" />
                    <span className="text-gray-700">Customer Experience Consulting & Training</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-[#059669] text-lg mt-1" />
                    <span className="text-gray-700">Continuous Improvement Programs (NPS/CSAT tracking)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-[#059669] text-lg mt-1" />
                    <span className="text-gray-700">Multilingual Support (global languages)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-[#059669] text-lg mt-1" />
                    <span className="text-gray-700">Dedicated Account Manager</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-[#059669] text-lg mt-1" />
                    <span className="text-gray-700">Custom Dashboards & Daily Reports</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Additional Value-Added Services */}
            <div className="bg-gradient-to-r from-[#1e40af]/5 to-[#059669]/5 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Additional Value-Added Services</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="flex items-start gap-3">
                  <Users className="text-[#1e40af] text-lg mt-1" />
                  <span className="text-gray-700">Workforce Outsourcing (temporary staff placement)</span>
                </div>
                <div className="flex items-start gap-3">
                  <Clipboard className="text-[#1e40af] text-lg mt-1" />
                  <span className="text-gray-700">Back-office Support (data entry, order processing, billing)</span>
                </div>
                <div className="flex items-start gap-3">
                  <Zap className="text-[#1e40af] text-lg mt-1" />
                  <span className="text-gray-700">AI-enabled Self-Service Solutions (chatbots, IVR automation)</span>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="text-[#1e40af] text-lg mt-1" />
                  <span className="text-gray-700">Disaster Recovery & Business Continuity Planning</span>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="text-[#1e40af] text-lg mt-1" />
                  <span className="text-gray-700">After-Hours Support & 24/7 Coverage (including weekends & holidays)</span>
                </div>
                <div className="flex items-start gap-3">
                  <Building className="text-[#1e40af] text-lg mt-1" />
                  <span className="text-gray-700">On-Site Support Agents for client offices</span>
                </div>
                <div className="flex items-start gap-3">
                  <ChartLine className="text-[#1e40af] text-lg mt-1" />
                  <span className="text-gray-700">Customer Feedback Analytics & SLA Tracking</span>
                </div>
                <div className="flex items-start gap-3">
                  <Industry className="text-[#1e40af] text-lg mt-1" />
                  <span className="text-gray-700">Industry-Specific Customized Support Plans</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
