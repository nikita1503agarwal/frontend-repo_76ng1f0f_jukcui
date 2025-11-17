export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 rounded bg-gradient-to-tr from-blue-600 via-indigo-500 to-cyan-500" />
              <span className="font-bold">AgrivisionTech</span>
            </div>
            <p className="text-sm text-gray-600 max-w-xs">
              Turning data into impact across Africa. We build technology that empowers agriculture and policy.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="/about" className="hover:text-blue-600">About Us</a></li>
              <li><a href="/projects" className="hover:text-blue-600">Projects</a></li>
              <li><a href="/insights" className="hover:text-blue-600">Insights</a></li>
              <li><a href="/contact" className="hover:text-blue-600">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Services</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Data Collection & Surveying</li>
              <li>Data Analysis & Reporting</li>
              <li>GIS & Mapping</li>
              <li>AI & Predictive Modeling</li>
              <li>Monitoring & Evaluation</li>
              <li>Mobile Solutions for Farmers</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Newsletter</h4>
            <p className="text-sm text-gray-600 mb-3">Get product updates and insights straight to your inbox.</p>
            <form className="flex gap-2" onSubmit={(e)=>e.preventDefault()}>
              <input type="email" required placeholder="Your email" className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <button className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-500">
          <p>© {new Date().getFullYear()} AgrivisionTech. All rights reserved.</p>
          <div className="space-x-4">
            <a href="#" className="hover:text-blue-600">Privacy Policy</a>
            <a href="#" className="hover:text-blue-600">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
