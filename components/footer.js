import { Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  // Simple LinkedIn icon as SVG since it's not available in lucide-react
  const LinkedInIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )

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
              <a
                href="https://www.linkedin.com/company/helping-hand-foundation-2025/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-copper transition-colors"
                aria-label="Visit our LinkedIn page"
              >
                <LinkedInIcon />
              </a>
              <a
                href="https://www.instagram.com/helpinghand.foundation_?igsh=aW53MzFyMHk0ejBl"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-copper transition-colors"
                aria-label="Visit our Instagram page"
              >
                <Instagram size={20} />
              </a>
              <a
                href="mailto:teamhelpinghandfoundation@gmail.com"
                className="text-gray-400 hover:text-copper transition-colors"
                aria-label="Send us an email"
              >
                <Mail size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-copper transition-colors"
                aria-label="Visit our Twitter page"
              >
                <Twitter size={20} />
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
                <a href="#mission" className="text-gray-300 hover:text-copper transition-colors">
                  Mission
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
                <span className="text-gray-300">teamhelpinghandfoundation@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-mustard" />
                <span className="text-gray-300">+91 9199664444</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-mustard" />
                <span className="text-gray-300">Pan India</span>
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
