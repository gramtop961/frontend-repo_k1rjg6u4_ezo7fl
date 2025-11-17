import React from 'react'

const steps = [
  { title: 'Tell us your needs', desc: 'Share spend, vertical, and timeline.' },
  { title: 'We deliver accounts', desc: 'Ready-to-run agency accounts, profiles, BMs.' },
  { title: 'Launch campaigns', desc: 'Start spending immediately with stability.' },
  { title: 'Ongoing support', desc: 'Top-ups, monitoring, and troubleshooting.' },
]

const HowItWorks = () => {
  return (
    <section className="bg-white" id="how-it-works">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">How It Works</h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((s, i) => (
            <div key={s.title} className="p-6 rounded-lg border border-gray-200 bg-white">
              <div className="h-8 w-8 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold">{i + 1}</div>
              <h3 className="mt-4 font-semibold text-gray-900">{s.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
