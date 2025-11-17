import React from 'react'

const WhatWeDo = () => {
  return (
    <section className="bg-white" id="what-we-do">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What AtlasAds Does</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              We provide ready-to-use, high-trust Facebook Agency Ad Accounts. We also include profiles and Business Managers, giving clients everything they need to launch and scale their campaigns instantly without fighting bans or warm-ups.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="p-5 rounded-lg border border-gray-200 bg-white">
              <h3 className="font-semibold text-gray-900">Agency Ad Accounts</h3>
              <p className="text-sm text-gray-600 mt-1">Pre-approved and ready to scale.</p>
            </div>
            <div className="p-5 rounded-lg border border-gray-200 bg-white">
              <h3 className="font-semibold text-gray-900">Profiles & Business Managers</h3>
              <p className="text-sm text-gray-600 mt-1">Everything needed to launch instantly.</p>
            </div>
            <div className="p-5 rounded-lg border border-gray-200 bg-white">
              <h3 className="font-semibold text-gray-900">Dedicated Support</h3>
              <p className="text-sm text-gray-600 mt-1">Fast responses, proactive guidance.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatWeDo
