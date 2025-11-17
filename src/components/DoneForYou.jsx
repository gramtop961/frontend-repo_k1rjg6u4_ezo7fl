import React from 'react'

const DoneForYou = () => {
  return (
    <section className="bg-gray-50" id="done-for-you">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Don’t Want to Run the Ads Yourself?</h2>
          <p className="mt-4 text-gray-700">We offer full Facebook ads management: strategy, campaigns, optimization, and creative production.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 gap-4">
          <div className="p-6 rounded-lg border border-gray-200 bg-white">
            <h3 className="font-semibold text-gray-900">Campaign Management</h3>
            <p className="text-sm text-gray-600 mt-1">From structure to scaling, handled for you.</p>
          </div>
          <div className="p-6 rounded-lg border border-gray-200 bg-white">
            <h3 className="font-semibold text-gray-900">Creatives That Convert</h3>
            <p className="text-sm text-gray-600 mt-1">UGC, iterations, and testing built in.</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <a href="#apply-dfy" className="inline-flex items-center justify-center rounded-md bg-indigo-600 text-white px-6 py-3 font-semibold shadow-sm hover:bg-indigo-700">Apply for Done-For-You Ads</a>
        </div>
      </div>
    </section>
  )
}

export default DoneForYou
