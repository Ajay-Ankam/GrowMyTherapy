import React from "react";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-secondary-50/90 backdrop-blur-md border-b border-secondary-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center text-white font-serif font-bold text-lg">
            M
          </div>
          <div>
            <span className="text-xl font-serif font-bold text-primary-700 block tracking-tight">
              Dr. Maya Reynolds, PsyD
            </span>
            <span className="text-[10px] text-gray-500 uppercase tracking-widest block font-medium">
              Licensed Clinical Psychologist • Santa Monica, CA
            </span>
          </div>
        </div>

        <nav className="hidden md:flex space-x-8 text-sm font-medium text-gray-700">
          <a href="#about" className="hover:text-primary-600 transition-colors">
            About
          </a>
          <a
            href="#who-we-help"
            className="hover:text-primary-600 transition-colors"
          >
            Who We Help
          </a>
          <a
            href="#specialties"
            className="hover:text-primary-600 transition-colors"
          >
            Specialties
          </a>
          <a
            href="#office"
            className="hover:text-primary-600 transition-colors"
          >
            Our Office
          </a>
          <a href="#faqs" className="hover:text-primary-600 transition-colors">
            FAQs
          </a>
        </nav>

        <div className="hidden md:flex items-center">
          <a
            href="#contact"
            className="px-6 py-2.5 bg-primary-600 text-white font-medium text-sm rounded-full hover:bg-primary-700 transition-all shadow-sm"
          >
            Book a Consultation
          </a>
        </div>

        <div className="md:hidden flex items-center">
          <button className="p-2 rounded-md text-gray-600 hover:text-gray-900 focus:outline-none">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
