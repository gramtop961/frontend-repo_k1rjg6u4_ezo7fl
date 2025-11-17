import React from 'react'
import Spline from '@splinetool/react-spline'

const Hero = () => {
  return (
    <section className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden bg-white">
      {/* Spline Background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Subtle overlay to improve text contrast */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-[1px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-24 text-center">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-sm font-medium mb-6">
          AtlasAds • Trusted Facebook Agency Accounts
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900">
          Scale Your Facebook Ads Without Constant Bans
        </h1>
        <p className="mt-5 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
          Get instant access to stable, high-trust Facebook Agency Ad Accounts, profiles, and Business Managers so you can run ads without limits and with lower CPMs.
        </p>

        <ul className="mt-8 grid gap-3 text-left max-w-xl mx-auto text-gray-800">
          <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-indigo-600" />Unlimited Agency Ad Accounts</li>
          <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-indigo-600" />Whitelisted for stable performance</li>
          <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-indigo-600" />Lower CPM & CPA potential</li>
          <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-indigo-600" />Fast top-ups and dedicated account manager</li>
        </ul>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href="#get-access" className="inline-flex items-center justify-center rounded-md bg-indigo-600 text-white px-6 py-3 font-semibold shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            Get Access Today
          </a>
          <a href="#book-call" className="inline-flex items-center justify-center rounded-md border border-gray-300 px-6 py-3 font-semibold text-gray-800 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            Book a Call
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
