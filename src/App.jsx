import React from 'react'
import Hero from './components/Hero'
import WhatWeDo from './components/WhatWeDo'
import Benefits from './components/Benefits'
import WhoFor from './components/WhoFor'
import WhyAgency from './components/WhyAgency'
import HowItWorks from './components/HowItWorks'
import DoneForYou from './components/DoneForYou'
import SocialProof from './components/SocialProof'
import FAQ from './components/FAQ'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Simple top nav */}
      <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-extrabold text-xl tracking-tight">AtlasAds</a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#what-we-do" className="hover:text-indigo-600">What we do</a>
            <a href="#benefits" className="hover:text-indigo-600">Benefits</a>
            <a href="#who-for" className="hover:text-indigo-600">Who it’s for</a>
            <a href="#how-it-works" className="hover:text-indigo-600">Process</a>
            <a href="#faq" className="hover:text-indigo-600">FAQ</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="#book-call" className="hidden sm:inline-flex items-center justify-center rounded-md border border-gray-300 px-4 py-2 font-medium">Book a Call</a>
            <a href="#get-access" className="inline-flex items-center justify-center rounded-md bg-indigo-600 text-white px-4 py-2 font-semibold shadow-sm hover:bg-indigo-700">Get Access</a>
          </div>
        </div>
      </header>

      <main>
        <Hero />
        <WhatWeDo />
        <Benefits />
        <WhoFor />
        <WhyAgency />
        <HowItWorks />
        <DoneForYou />
        <SocialProof />
        <FAQ />
        <CTA />
      </main>

      {/* Simple footer */}
      <footer className="border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-10 text-sm text-gray-600 flex flex-col sm:flex-row items-center justify-between">
          <p>© {new Date().getFullYear()} AtlasAds. All rights reserved.</p>
          <div className="flex items-center gap-4 mt-3 sm:mt-0">
            <a href="#get-access" className="hover:text-indigo-600">Get Access</a>
            <a href="#book-call" className="hover:text-indigo-600">Book a Call</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
