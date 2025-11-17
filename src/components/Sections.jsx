import { motion } from 'framer-motion'
import { CheckCircle2, BarChart2, Map, Brain, Smartphone, ClipboardList } from 'lucide-react'

export function CompanyOverview() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Data-driven solutions for African agriculture</h2>
          <p className="mt-4 text-gray-600">AgrivisionTech partners with NGOs, governments, research institutions, and agribusinesses to collect, process, and analyze data that powers real-world impact in Burundi and across Africa.</p>
          <ul className="mt-6 space-y-3 text-gray-700">
            <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5" /> High-quality data collection at scale</li>
            <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5" /> Advanced analytics, dashboards, and reporting</li>
            <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5" /> Sustainable, farmer-first mobile solutions</li>
          </ul>
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="grid grid-cols-2 gap-4">
          <div className="rounded-xl border p-6 bg-gradient-to-br from-blue-50 to-white">
            <p className="text-3xl font-bold">+200k</p>
            <p className="text-sm text-gray-600">Data points processed</p>
          </div>
          <div className="rounded-xl border p-6 bg-gradient-to-br from-green-50 to-white">
            <p className="text-3xl font-bold">+50</p>
            <p className="text-sm text-gray-600">Projects delivered</p>
          </div>
          <div className="rounded-xl border p-6 bg-gradient-to-br from-indigo-50 to-white">
            <p className="text-3xl font-bold">+10</p>
            <p className="text-sm text-gray-600">African countries</p>
          </div>
          <div className="rounded-xl border p-6 bg-gradient-to-br from-cyan-50 to-white">
            <p className="text-3xl font-bold">24/7</p>
            <p className="text-sm text-gray-600">Support & monitoring</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

const services = [
  { title: 'Data Collection & Surveying', icon: ClipboardList, desc: 'Design, deploy, and manage large-scale field data collection using mobile tools and enumerator networks.' },
  { title: 'Data Analysis & Reporting', icon: BarChart2, desc: 'From cleaning to advanced analytics and clear reporting for decision makers.' },
  { title: 'GIS & Mapping', icon: Map, desc: 'Spatial analysis, land use mapping, and geospatial dashboards.' },
  { title: 'AI & Predictive Modeling', icon: Brain, desc: 'Forecasting yields, prices, and risks using machine learning.' },
  { title: 'Monitoring & Evaluation', icon: CheckCircle2, desc: 'Impact assessments and continuous program monitoring.' },
  { title: 'Mobile Solutions for Farmers', icon: Smartphone, desc: 'USSD/SMS and smartphone apps that deliver advisory and collect feedback.' },
]

export function ServicesSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center">Services</h2>
        <p className="mt-3 text-gray-600 text-center max-w-2xl mx-auto">End-to-end data capabilities for programs and products in agriculture and public sector.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ title, icon: Icon, desc }) => (
            <motion.div key={title} whileHover={{ y: -4 }} className="rounded-xl border bg-white p-6 shadow-sm">
              <Icon className="h-6 w-6 text-blue-600" />
              <h3 className="mt-4 font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const sectors = [
  { title: 'Agriculture', desc: 'Farmer groups, cooperatives, and extension services' },
  { title: 'Government & Policy', desc: 'Ministries, agencies, and public programs' },
  { title: 'NGOs & Research Institutions', desc: 'International NGOs, think tanks, universities' },
  { title: 'Agribusinesses', desc: 'Input suppliers, processors, distributors' },
]

export function SectorsSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center">Sectors We Serve</h2>
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {sectors.map((s) => (
            <div key={s.title} className="rounded-xl border p-6">
              <h3 className="font-semibold">{s.title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ProjectsSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Projects & Partners</h2>
          <a href="/contact" className="text-sm text-blue-600 hover:underline">Become a partner</a>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {[1,2,3].map((i)=> (
            <div key={i} className="rounded-xl border bg-white p-6 shadow-sm">
              <div className="h-24 rounded bg-gradient-to-tr from-blue-50 to-green-50" />
              <h3 className="mt-4 font-semibold">Impact Project {i}</h3>
              <p className="mt-2 text-sm text-gray-600">Data-driven intervention improving productivity and resilience.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
