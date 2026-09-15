import React from "react";

export default function Faqs() {
  return (
    <section id="faqs" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 space-y-3">
          <span className="text-accent-600 font-medium text-xs uppercase tracking-widest">
            Questions & Answers
          </span>
          <h2 className="text-3xl font-serif font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-6">
          <div className="bg-secondary-50 p-6 rounded-2xl border border-secondary-100">
            <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">
              Where is your office located?
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              My office is located at 123th Street 45 W, Santa Monica, CA 90401.
              I also provide secure, HIPAA-compliant online therapy for clients
              residing anywhere in California.
            </p>
          </div>

          <div className="bg-secondary-50 p-6 rounded-2xl border border-secondary-100">
            <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">
              What therapeutic methods do you use?
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              I integrate evidence-based approaches including Cognitive
              Behavioral Therapy (CBT), EMDR, somatic/body-oriented practices,
              and mindfulness to treat both mental and physical stress symptoms.
            </p>
          </div>

          <div className="bg-secondary-50 p-6 rounded-2xl border border-secondary-100">
            <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">
              How do I know if therapy with you is the right fit?
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              If you are a high-achieving adult struggling with anxiety,
              overthinking, trauma, or burnout and want a grounded,
              non-judgmental space, we will likely work well together. We can
              explore fit during an initial consultation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
