import React from "react";
import { MapPin, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative py-16 lg:py-24 bg-linear-to-b from-primary-50/40 via-secondary-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-flex items-center px-4 py-1.5 bg-primary-100/80 text-primary-700 font-medium text-xs rounded-full uppercase tracking-wider border border-primary-100">
              <MapPin className="w-3.5 h-3.5 mr-1.5 text-primary-600" />
              Online & In-Person Counseling in Santa Monica & Across CA
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-gray-900 leading-[1.15]">
              Rebuild your foundation on solid ground & begin to thrive.
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
              Specialized therapy for adults navigating anxiety, panic, trauma,
              and burnout. Compassionate, evidence-based care tailored to
              high-achieving individuals seeking clarity and deep resilience in
              Santa Monica, California.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#contact"
                className="px-8 py-4 bg-primary-600 text-white font-medium rounded-full text-center hover:bg-primary-700 transition-all shadow-md flex items-center justify-center group"
              >
                Book an Appointment
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#about"
                className="px-8 py-4 border border-primary-600 text-primary-700 font-medium rounded-full text-center hover:bg-primary-50/50 transition-all"
              >
                Learn About My Approach
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="aspect-4/5 rounded-3xl overflow-hidden shadow-2xl border-8 border-white bg-gray-100">
                <img
                  src="Dr. Maya Reynolds.png"
                  alt="Dr. Maya Reynolds, Licensed Clinical Psychologist"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-xl max-w-xs border border-secondary-100 hidden sm:block">
                <p className="font-serif italic text-sm text-gray-700 leading-snug">
                  "Therapy becomes a space to slow down, reconnect, and develop
                  more sustainable ways of living."
                </p>
                <p className="text-xs font-semibold text-primary-700 mt-2">
                  — Dr. Maya Reynolds, PsyD
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
