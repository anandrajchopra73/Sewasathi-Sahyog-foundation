import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-velvet-forest text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <Image
                src="/images/helping-hand-logo.png"
                alt="HELPING HAND FOUNDATION"
                width={80}
                height={80}
                className="w-16 h-16 object-contain"
              />
              <div>
                <h3 className="text-xl font-bold text-mustard">HELPING HAND FOUNDATION</h3>
                <p className="text-sm text-gray-400 italic">"Together we can, Together we will"</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Dedicated to providing free and accessible education for all children, creating opportunities and building
              brighter futures through learning.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-copper transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-copper transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-copper transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-300 hover:text-copper transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#departments" className="text-gray-300 hover:text-copper transition-colors">
                  Departments
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-300 hover:text-copper transition-colors">
                  Our Projects
                </a>
              </li>
              <li>
                <a href="#events" className="text-gray-300 hover:text-copper transition-colors">
                  Events
                </a>
              </li>
              <li>
                <a href="#team" className="text-gray-300 hover:text-copper transition-colors">
                  Our Team
                </a>
              </li>
              <li>
                <a href="#feedback" className="text-gray-300 hover:text-copper transition-colors">
                  Feedback
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-mustard" />
                <span className="text-gray-300">info@choosequality.org</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-mustard" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-mustard" />
                <span className="text-gray-300">123 Education St, Learning City</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 HELPING HAND FOUNDATION. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  )
}
