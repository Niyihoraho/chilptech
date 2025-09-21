import Link from 'next/link';
import { 
  FaFacebook as Facebook, 
  FaTwitter as Twitter, 
  FaInstagram as Instagram, 
  FaLinkedin as Linkedin, 
  FaEnvelope as Mail, 
  FaPhone as Phone, 
  FaMapMarkerAlt as MapPin 
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="text-2xl font-bold">CHILPTECH</div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Customer Support Firm based in Kigali, Rwanda. Providing seamless, efficient,
              and human-centric support that strengthens loyalty and accelerates growth.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="#services" className="text-gray-300 hover:text-white transition duration-300">Services & Pricing</Link></li>
              <li><Link href="#contact" className="text-gray-300 hover:text-white transition duration-300">Contact</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition duration-300">Privacy Policy</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition duration-300">Terms of Service</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="text-[#1e40af]" />
                <span className="text-gray-300">chilptechfirm@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-[#1e40af]" />
                <span className="text-gray-300">+250 780658582</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-[#1e40af]" />
                <span className="text-gray-300">WhatsApp Available</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-primary" />
                <span className="text-gray-300">Kigali Tech Hub, Rwanda</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} CHILPTECH. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
