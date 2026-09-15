import React from "react";

export default function About() {
  return (
    <>
      {/* About Section */}
      <section
        id="about"
        className="py-20 bg-white border-y border-secondary-100"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-accent-600 font-medium text-xs uppercase tracking-widest">
            Grounded & Tailored Therapy
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 leading-tight">
            You are holding onto hope that life can feel calmer than it is right
            now.
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Many of the adults I work with are high-achieving, thoughtful, and
            self-aware—but internally feel exhausted, stuck in overthinking, or
            emotionally on edge. You may look "functional" on the outside while
            quietly struggling with constant worry, bodily tension, or
            difficulty sleeping.
          </p>
          <p className="text-base text-gray-600 leading-relaxed">
            I take a warm, collaborative, and structured approach. Integrating
            evidence-based tools such as Cognitive Behavioral Therapy (CBT),
            EMDR, mindfulness, and body-oriented techniques, we address both the
            emotional and physiological sides of your experience.
          </p>
        </div>
      </section>

      {/* Who We Help Section */}
      <section id="who-we-help" className="py-20 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-accent-600 font-medium text-xs uppercase tracking-widest">
              Client Focus
            </span>
            <h2 className="text-3xl font-serif font-bold text-gray-900">
              Who I Work Best With
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-secondary-100 space-y-4">
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 font-bold">
                01
              </div>
              <h3 className="text-xl font-serif font-bold text-gray-900">
                High-Achieving Professionals
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Entrepreneurs, creatives, and professionals managing heavy
                internal pressure, perfectionism, and chronic workplace stress.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-secondary-100 space-y-4">
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 font-bold">
                02
              </div>
              <h3 className="text-xl font-serif font-bold text-gray-900">
                Adults Navigating Trauma
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Individuals seeking relief from single-incident trauma or
                long-standing childhood and relational patterns affecting
                safety.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-secondary-100 space-y-4">
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 font-bold">
                03
              </div>
              <h3 className="text-xl font-serif font-bold text-gray-900">
                Overwhelmed & Anxious Adults
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Those feeling stuck in racing thoughts, physical anxiety, panic
                symptoms, or a constant sense of bracing for bad news.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
