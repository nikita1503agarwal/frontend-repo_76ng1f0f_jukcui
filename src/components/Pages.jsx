import { motion } from 'framer-motion'

export function AboutPage() {
  return (
    <div>
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight">About Us</h1>
          <p className="mt-4 text-gray-600 max-w-3xl">Founded by Jodick Ndayisenga, AgrivisionTech exists to turn data into impact. We believe technology, when built for local realities, can transform agriculture, empower farmers, and guide better policy in Burundi and across Africa.</p>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              { label: 'Mission', text: 'Unlock data for better decisions and outcomes in food systems.' },
              { label: 'Vision', text: 'A resilient, data-informed African agriculture powered by inclusive tech.' },
              { label: 'Values', text: 'Impact, integrity, collaboration, and innovation.' },
            ].map((b) => (
              <div key={b.label} className="rounded-xl border p-6">
                <h3 className="font-semibold">{b.label}</h3>
                <p className="mt-2 text-sm text-gray-600">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-1">
            <div className="h-48 w-48 rounded-full bg-gradient-to-tr from-blue-200 to-green-200" />
          </div>
          <div className="md:col-span-2">
            <h2 className="text-2xl font-semibold">Founder story</h2>
            <p className="mt-3 text-gray-600 text-sm">Jodick Ndayisenga, CEO & Founder, started AgrivisionTech to bridge the gap between research, technology, and the realities of farmers and policy makers. With years leading data initiatives, he built a team focused on practical innovation and measurable outcomes.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export function ServicesPage() {
  const items = [
    { title: 'Data Collection & Surveying', content: 'Design of instruments, enumerator training, mobile data pipelines, and quality control.' },
    { title: 'Data Analysis & Reporting', content: 'Cleaning, statistical analysis, visualization, dashboards, and executive reporting.' },
    { title: 'GIS & Mapping', content: 'Spatial data processing, mapping, satellite imagery, and field mapping.' },
    { title: 'AI & Predictive Modeling', content: 'Machine learning for yield forecasting, price prediction, and risk assessment.' },
    { title: 'Monitoring & Evaluation', content: 'Endline/baseline surveys, impact evaluations, and real-time monitoring.' },
    { title: 'Mobile Solutions for Farmers', content: 'USSD/SMS tools and smartphone apps for advisory, feedback, and behavior change.' },
  ]
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight">Our Services</h1>
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {items.map((s) => (
            <motion.div key={s.title} whileHover={{ y: -4 }} className="rounded-xl border p-6">
              <h3 className="font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{s.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function SectorsPage() {
  const sectors = [
    { title: 'Agriculture', content: 'Farmer groups, cooperatives, and extension services.' },
    { title: 'Government & Policy', content: 'Ministries, agencies, and public programs.' },
    { title: 'NGOs & Research Institutions', content: 'International NGOs, think tanks, universities.' },
    { title: 'Agribusinesses', content: 'Input suppliers, processors, and distributors.' },
  ]
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight">Sectors We Serve</h1>
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {sectors.map((s) => (
            <div key={s.title} className="rounded-xl border p-6">
              <h3 className="font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{s.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ProjectsPage() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight">Projects & Partners</h1>
        <p className="mt-4 text-gray-600 max-w-3xl">We collaborate with mission-aligned organizations to deliver real value on the ground. Here are selected projects and partners.</p>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {[1,2,3,4,5,6].map((i) => (
            <div key={i} className="rounded-xl border p-6">
              <div className="h-20 rounded bg-gradient-to-tr from-blue-50 to-green-50" />
              <h3 className="mt-4 font-semibold">Project {i}</h3>
              <p className="mt-2 text-sm text-gray-600">Outcome-driven engagement with measurable impact.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function InsightsPage() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight">Insights</h1>
        <p className="mt-4 text-gray-600 max-w-3xl">Data-driven articles and research summaries. This is a simple static feed you can later connect to a CMS or your backend.</p>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {[1,2,3].map((i) => (
            <div key={i} className="rounded-xl border p-6">
              <h3 className="font-semibold">How data improves yields #{i}</h3>
              <p className="mt-2 text-sm text-gray-600">Short teaser for a research insight or case study.</p>
              <a href="#" className="mt-3 inline-block text-sm text-blue-600">Read more</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ContactPage() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight">Contact Us</h1>
        <p className="mt-3 text-gray-600">We'd love to learn about your work. Reach us in Bujumbura, Burundi — or send a message using the form.</p>
        <div className="mt-10 grid md:grid-cols-2 gap-8">
          <form className="space-y-4" onSubmit={(e)=>e.preventDefault()}>
            <input className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500" placeholder="Full name" required />
            <input type="email" className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500" placeholder="Email" required />
            <input className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500" placeholder="Organization" />
            <textarea rows="5" className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500" placeholder="How can we help?" />
            <button className="rounded-md bg-blue-600 px-5 py-2 text-sm font-semibold text-white hover:bg-blue-700">Send</button>
          </form>
          <div className="space-y-3 text-sm text-gray-700">
            <p><span className="font-semibold">Email:</span> hello@agrivisiontech.africa</p>
            <p><span className="font-semibold">Location:</span> Bujumbura, Burundi</p>
            <div className="space-x-3">
              <a href="#" className="text-blue-600">Twitter</a>
              <a href="#" className="text-blue-600">LinkedIn</a>
              <a href="#" className="text-blue-600">Facebook</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
