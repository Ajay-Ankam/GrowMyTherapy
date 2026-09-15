import React from "react";
import { CheckCircle2 } from "lucide-react";

export default function OurOffice() {
  return (
    <section
      id="office"
      className="py-20 bg-primary-50/50 border-y border-primary-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-accent-600 font-medium text-xs uppercase tracking-widest">
              Santa Monica Sanctuary
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 leading-tight">
              Our Office: A Calm Space Designed for Deep Healing
            </h2>
            <p className="text-gray-600 leading-relaxed">
              I offer both in-person therapy from my Santa Monica practice and
              secure telehealth sessions across California. The physical office
              is a quiet, private sanctuary designed with natural light and an
              uncluttered aesthetic—helping clients feel at ease from the moment
              they arrive.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-primary-600 mt-1 mr-3 shrink-0" />
                <p className="text-sm text-gray-700 font-medium">
                  Located at 123th Street 45 W, Santa Monica, CA 90401.
                </p>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-primary-600 mt-1 mr-3 shrink-0" />
                <p className="text-sm text-gray-700 font-medium">
                  Private, quiet space with abundant natural light & soft,
                  comfortable seating.
                </p>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-primary-600 mt-1 mr-3 shrink-0" />
                <p className="text-sm text-gray-700 font-medium">
                  Flexible in-person and HIPAA-compliant telehealth
                  availability.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <img
              src="office1.jpeg"
              alt="Therapy Office Space"
              className="w-full h-64 object-cover rounded-2xl shadow-md border border-white"
            />
            <img
              src="office2.jpeg"
              alt="Calm Natural Light Room"
              className="w-full h-64 object-cover rounded-2xl shadow-md border border-white mt-8"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
