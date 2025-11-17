import React from 'react'

const groups = [
  'Media Buyers & Agencies',
  'E-commerce stores',
  'In-house marketing teams',
  'Growth hackers & affiliates',
]

const WhoFor = () => {
  return (
    <section className="bg-white" id="who-for">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">Who It’s For</h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {groups.map((g) => (
            <div key={g} className="p-6 rounded-lg border border-gray-200 bg-white text-center">
              <h3 className="font-semibold text-gray-900">{g}</h3>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <a href="#get-access" className="inline-flex items-center justify-center rounded-md bg-indigo-600 text-white px-6 py-3 font-semibold shadow-sm hover:bg-indigo-700">Get Agency Accounts</a>
        </div>
      </div>
    </section>
  )
}

export default WhoFor
