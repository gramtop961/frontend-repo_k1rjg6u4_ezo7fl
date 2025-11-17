import React from 'react'

const CTA = () => {
  return (
    <section className="bg-white" id="final-cta">
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Ready to Scale Without Limits?</h2>
        <p className="mt-4 text-gray-700">Get stable, high-trust Agency Ad Accounts or let our team manage the campaigns for you.</p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href="#get-access" className="inline-flex items-center justify-center rounded-md bg-indigo-600 text-white px-6 py-3 font-semibold shadow-sm hover:bg-indigo-700">Get Access Today</a>
          <a href="#book-call" className="inline-flex items-center justify-center rounded-md border border-gray-300 px-6 py-3 font-semibold text-gray-800 bg-white hover:bg-gray-50">Book a Call</a>
        </div>
      </div>
    </section>
  )
}

export default CTA
