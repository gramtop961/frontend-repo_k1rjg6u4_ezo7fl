import React from 'react'

const WhyAgency = () => {
  return (
    <section className="bg-gray-50" id="why-agency">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">Why Agency Accounts</h2>
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-lg border border-gray-200 bg-white">
            <h3 className="font-semibold text-gray-900">Common Problems</h3>
            <ul className="mt-3 space-y-2 text-gray-700 list-disc list-inside">
              <li>Bans and constant restrictions</li>
              <li>Unstable delivery and learning resets</li>
              <li>Warm-up issues slow scaling</li>
            </ul>
          </div>
          <div className="p-6 rounded-lg border border-gray-200 bg-white">
            <h3 className="font-semibold text-gray-900">How We Solve Them</h3>
            <ul className="mt-3 space-y-2 text-gray-700 list-disc list-inside">
              <li>High trust accounts reduce bans</li>
              <li>Stable delivery for consistent results</li>
              <li>Faster scale without long warm-ups</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyAgency
