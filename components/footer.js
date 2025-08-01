import { Instagram, Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  // Simple LinkedIn icon as SVG since it's not available in lucide-react
  const LinkedInIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )

  // Custom WhatsApp icon as SVG since Whatsapp is not available in lucide-react
  const WhatsAppIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
    </svg>
  )

  // Custom YouTube icon as SVG since YouTube is not available in lucide-react
  const YouTubeIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
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
                src="/logo_for_helping_hand-removebg-preview.png"
                alt="HELPING HAND FOUNDATION"
                width={100}
                height={100}
                className="w-16 h-16 object-contain"
              />
              <div>
                <h3 className="text-xl font-bold text-mustard">SEWASATHI SAHYOG FOUNDATION</h3>
                <p className="text-sm text-gray-400 italic">"Together we can, Together we will"</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              SEWASATHI SAHYOG FOUNDATION is a nonprofit organization devoted to enhancing the well-being of vulnerable
              populations by facilitating access to quality education, comprehensive healthcare services, and essential
              living resources
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/sewasathi-sahyog-foundation"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-copper transition-colors"
                aria-label="Visit our LinkedIn page"
              >
                <LinkedInIcon />
              </a>
              <a
                href="https://www.instagram.com/sewasathisahyogfoundation?igsh=MW1sMmNieHBwdzNvYw%3D%3D&utm_source=qr"
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
                href="https://whatsapp.com/channel/0029Vb5f6OjGehEFTe6Xf61p"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-copper transition-colors"
                aria-label="Visit our WhatsApp channel"
              >
                <WhatsAppIcon />
              </a>
              <a
                href="https://youtube.com/@sewasathisahyogngo?si=i1G6qHS23wiRqkob"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-copper transition-colors"
                aria-label="Visit our YouTube channel"
              >
                <YouTubeIcon />
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
                  Word From our "सहारा"
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <a
                  href="mailto:teamhelpinghandfoundation@gmail.com"
                  className="text-gray-400 hover:text-copper transition-colors"
                  aria-label="Send us an email"
                >
                  <Mail size={20} className="text-mustard" />
                </a>
                <span className="text-gray-300">sewasathisahyogfoundation@gmail.com</span>
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
            © 2025 SEWASATHI SAHYOG FOUNDATION. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  )
}
