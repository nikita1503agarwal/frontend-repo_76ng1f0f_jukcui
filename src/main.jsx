import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'

import Layout from './components/Layout'
import Home from './App'
import { AboutPage, ServicesPage, SectorsPage, ProjectsPage, InsightsPage, ContactPage } from './components/Pages'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}> 
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/sectors" element={<SectorsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/insights" element={<InsightsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
