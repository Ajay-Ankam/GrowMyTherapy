import React from "react";

export default function ContactFooter() {
  return (
    <>
      <section id="contact" className="py-20 bg-secondary-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-md border border-gray-200">
            <div className="text-center space-y-4 mb-8">
              <h2 className="text-3xl font-serif font-bold text-gray-900">
                Start Your Healing Journey Today
              </h2>
              <p className="text-gray-600 text-sm max-w-lg mx-auto">
                Fill out the form below to connect with Dr. Maya Reynolds. We
                respond within 24 hours to coordinate your initial consultation.
              </p>
            </div>

            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase text-gray-700 mb-1">
                    First Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-600 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase text-gray-700 mb-1">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-600 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-gray-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-600 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-gray-700 mb-1">
                  Preferred Format *
                </label>
                <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-600 focus:outline-none">
                  <option>In-Person (Santa Monica, CA)</option>
                  <option>Telehealth (California-wide)</option>
                  <option>Open to either</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-gray-700 mb-1">
                  What brings you to therapy? *
                </label>
                <textarea
                  rows={3}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-600 focus:outline-none"
                ></textarea>
              </div>

              <button
                type="button"
                className="w-full py-4 bg-primary-600 text-white font-medium rounded-xl hover:bg-primary-700 transition-colors shadow-md"
              >
                Send Message & Request Consultation
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-secondary-800 text-white py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className="font-serif text-xl font-bold">
            Dr. Maya Reynolds, PsyD
          </p>
          <p className="text-xs text-gray-400">
            Licensed Clinical Psychologist • 123th Street 45 W, Santa Monica, CA
            90401
          </p>
          <p className="text-xs text-gray-500 pt-2">
            © 2026 Dr. Maya Reynolds, PsyD. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
