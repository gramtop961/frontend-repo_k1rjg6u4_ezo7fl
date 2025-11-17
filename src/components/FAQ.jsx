import React from 'react'

const faqs = [
  { q: 'What are Facebook Agency Ad Accounts?', a: 'High-trust accounts managed via agency relationships, designed for scale and stability.' },
  { q: 'What do you provide?', a: 'Ready-to-use accounts, profiles, and Business Managers with support and fast top-ups.' },
  { q: 'Who can use them?', a: 'Media buyers, agencies, e-commerce brands, in-house teams, and affiliates.' },
  { q: 'How fast is onboarding?', a: 'Typically within 24-72 hours depending on requirements.' },
  { q: 'Do you offer campaign management?', a: 'Yes, a done-for-you ads service is available on request.' },
  { q: 'Are contracts required?', a: 'Flexible terms; no long lock-ins required for most packages.' },
]

const FAQ = () => {
  return (
    <section className="bg-gray-50" id="faq">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">FAQ</h2>
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {faqs.map((item) => (
            <div key={item.q} className="p-6 rounded-lg border border-gray-200 bg-white">
              <h3 className="font-semibold text-gray-900">{item.q}</h3>
              <p className="text-sm text-gray-600 mt-2">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
