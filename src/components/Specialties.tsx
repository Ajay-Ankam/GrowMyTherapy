import React from "react";
import { ChevronRight } from "lucide-react";

export default function Specialties() {
  return (
    <section id="specialties" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-accent-600 font-medium text-xs uppercase tracking-widest">
            Therapeutic Modalities
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900">
            Areas of Specialized Support
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-secondary-50/60 rounded-2xl overflow-hidden border border-secondary-100 flex flex-col justify-between hover:shadow-lg transition-all group">
            <div>
              <div className="h-52 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800"
                  alt="Anxiety & Panic Therapy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-serif font-bold text-gray-900">
                  Anxiety & Panic Relief
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Develop practical tools to soothe your nervous system,
                  dismantle panic triggers, and gain control over racing
                  thoughts and chronic worry.
                </p>
              </div>
            </div>
            <div className="p-6 pt-0">
              <a
                href="#contact"
                className="inline-flex items-center text-primary-700 font-semibold text-sm hover:text-primary-800"
              >
                Learn More <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>

          <div className="bg-secondary-50/60 rounded-2xl overflow-hidden border border-secondary-100 flex flex-col justify-between hover:shadow-lg transition-all group">
            <div>
              <div className="h-52 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800"
                  alt="Trauma Recovery & EMDR"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-serif font-bold text-gray-900">
                  Trauma Recovery & EMDR
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Utilize Eye Movement Desensitization and Reprocessing (EMDR)
                  to safely reprocess painful memories, feel grounded, and
                  rebuild safety.
                </p>
              </div>
            </div>
            <div className="p-6 pt-0">
              <a
                href="#contact"
                className="inline-flex items-center text-primary-700 font-semibold text-sm hover:text-primary-800"
              >
                Learn More <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>

          <div className="bg-secondary-50/60 rounded-2xl overflow-hidden border border-secondary-100 flex flex-col justify-between hover:shadow-lg transition-all group">
            <div>
              <div className="h-52 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=800"
                  alt="Burnout & Perfectionism Support"
                  className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-serif font-bold text-gray-900">
                  Burnout & Perfectionism
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Break free from relentless high internal pressure, establish
                  healthy boundaries, and restore your energy without
                  sacrificing success.
                </p>
              </div>
            </div>
            <div className="p-6 pt-0">
              <a
                href="#contact"
                className="inline-flex items-center text-primary-700 font-semibold text-sm hover:text-primary-800"
              >
                Learn More <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
