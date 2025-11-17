import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-36">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center rounded-full bg-white/70 backdrop-blur px-3 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-200">
            Agritech • Data • Africa
          </span>
          <h1 className="mt-6 text-4xl md:text-6xl font-bold tracking-tight text-gray-900">
            Turning Data into Impact – Empowering Agriculture Through Technology
          </h1>
          <p className="mt-6 text-lg text-gray-700 max-w-2xl">
            We collect, process, and analyze agricultural and research data across Burundi and Africa for NGOs, governments, and agribusinesses.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" className="inline-flex items-center rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700">
              Partner With Us
            </Link>
            <Link to="/services" className="inline-flex items-center rounded-md bg-white/80 backdrop-blur px-6 py-3 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-200 hover:bg-white">
              Explore Services
            </Link>
          </div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white" />
    </section>
  )
}
