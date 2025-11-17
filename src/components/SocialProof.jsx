import React from 'react'

const SocialProof = () => {
  return (
    <section className="bg-white" id="social-proof">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">Trusted by performance marketers</h3>
            <p className="mt-2 text-gray-600">Placeholder testimonials and logos to build trust. Add your client logos or short quotes here.</p>
          </div>
          <div className="grid grid-cols-3 gap-4 opacity-80">
            <div className="h-12 bg-gray-100 rounded" />
            <div className="h-12 bg-gray-100 rounded" />
            <div className="h-12 bg-gray-100 rounded" />
            <div className="h-12 bg-gray-100 rounded" />
            <div className="h-12 bg-gray-100 rounded" />
            <div className="h-12 bg-gray-100 rounded" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default SocialProof
