import React from 'react'
import { ShieldCheck, Gauge, TrendingDown, Clock, User } from 'lucide-react'

const items = [
  { icon: ShieldCheck, title: 'Whitelisted stability', desc: 'Run at scale without constant bans.' },
  { icon: Gauge, title: 'Unlimited accounts', desc: 'Expand campaigns without hitting limits.' },
  { icon: TrendingDown, title: 'Lower CPM/CPA', desc: 'Benefit from better trust and delivery.' },
  { icon: Clock, title: 'Fast top-ups', desc: 'Keep momentum with rapid balance refills.' },
  { icon: User, title: 'Dedicated manager', desc: 'A real person helping you hit targets.' },
]

const Benefits = () => {
  return (
    <section className="bg-gray-50" id="benefits">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">Key Benefits</h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="p-6 rounded-lg bg-white border border-gray-200 text-center">
              <Icon className="mx-auto h-6 w-6 text-indigo-600" />
              <h3 className="mt-3 font-semibold text-gray-900">{title}</h3>
              <p className="text-sm text-gray-600 mt-1">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefits
