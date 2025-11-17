import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/sectors', label: 'Sectors' },
  { to: '/projects', label: 'Projects' },
  { to: '/insights', label: 'Insights' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur bg-white/70 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="h-9 w-9 rounded bg-gradient-to-tr from-blue-600 via-indigo-500 to-cyan-500" />
            <span className="font-bold text-lg tracking-tight">AgrivisionTech</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors hover:text-blue-600 ${
                    isActive ? 'text-blue-600' : 'text-gray-700'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Get a Demo
            </Link>
          </nav>

          <button
            className="md:hidden p-2 rounded hover:bg-gray-100"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block text-base font-medium py-1 ${
                    isActive ? 'text-blue-600' : 'text-gray-700'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="inline-flex w-full justify-center items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
