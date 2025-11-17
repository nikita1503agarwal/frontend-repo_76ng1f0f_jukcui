import Hero from './components/Hero'
import { CompanyOverview, ServicesSection, SectorsSection, ProjectsSection } from './components/Sections'

export default function App() {
  return (
    <div>
      <Hero />
      <CompanyOverview />
      <ServicesSection />
      <SectorsSection />
      <ProjectsSection />
    </div>
  )
}
